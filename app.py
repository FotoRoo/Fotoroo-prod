import json
import time
import traceback
from quart import Quart, jsonify, send_from_directory, request, make_response
# from google.oauth2 import service_account
# from googleapiclient.discovery import build
# from googleapiclient.errors import HttpError
import os
import requests
import uvicorn
import smtplib
from dotenv import load_dotenv

load_dotenv()

app = Quart(__name__)
app.secret_key = os.getenv("APP_KEY")

# Serve Static React Files
@app.route("/")
@app.route("/<path:path>")
async def serve_react(path="index.html"):
    build_dir = os.path.join(os.path.dirname(__file__), "dist")
    # return await send_from_directory(build_dir, path)
    # Check if requested file exists
    file_path = os.path.join(build_dir, path)
    if os.path.exists(file_path):
        return await send_from_directory(build_dir, path)
    else:
        return await send_from_directory(build_dir, "index.html")

# API Route
@app.route("/api/send_mail", methods=["POST"])
async def send_mail():
    form_data = await request.get_json()
    print(form_data)
    
    # creates SMTP session
    s = smtplib.SMTP('smtp.gmail.com', 587)
    # start TLS for security
    s.starttls()
    # Authentication
    s.login(os.getenv("SENDER_EMAIL"), os.getenv("PASSWORD"))
    # message to be sent
    message = f"Subject: Enquiry for {form_data['booth']}\n\n" + "Enquiry from: " + form_data["name"] + "\n" + "Email ID: " + form_data["email"] + "\n" + "Contanct Number: " + form_data["phone"] + "\n" + "Event Date: " + form_data["eventDate"] + "\n" + "Event Location: " + form_data["eventLocation"] + "\n" + "Message: " + form_data["message"] + "\n" + "Booth: " + form_data["booth"]
    # sending the mail
    s.sendmail(os.getenv("SENDER_EMAIL"), os.getenv("RECEIVER_EMAIL") , message)
    # terminating the session
    s.quit()
    return jsonify({"message": "Email sent successfully!"})

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
PLACE_ID = os.getenv("LOCATION_ID")
CACHE_FILE = "reviews_cache.json"
CACHE_EXPIRY = os.getenv("CACHE_EXPIRY", 2592000)

def fetch_google_reviews():
    print("Fetching Google Reviews")
    url = f"https://places.googleapis.com/v1/places/{PLACE_ID}?fields=reviews&key={GOOGLE_API_KEY}"
    response = requests.get(url)
    data = response.json()
    print(f"Data: {data}")
    
    if "error_message" in data:
        return jsonify({"error": data["error_message"]}), 400
    
    if "reviews" not in data:
        return jsonify({"error": "Place not found"}), 404

    filtered_reviews = [
        {
            "displayName": review["authorAttribution"]["displayName"],
            "photoUri": review["authorAttribution"]["photoUri"],
            "text": review["text"]["text"],
            "rating": review["rating"]
        }
        for review in data.get("reviews", [])
    ]
    print(f"Filtered Reviews: {filtered_reviews}")
    return {"reviews": filtered_reviews}
    # return {
    #     # "reviews": place["reviews"]
    #     "reviews": f"{data}"
    # }


def get_cached_reviews():
    try:
        print("Reading cache")
        with open(CACHE_FILE, "r") as file:
            cache_data = json.load(file)
            if time.time() - cache_data["timestamp"] < int(CACHE_EXPIRY):
                return cache_data["reviews"]
            else:
                print("Cache expired")
    except (FileNotFoundError, json.JSONDecodeError):
        print("Cache file not found or invalid")
        return None
    return None

def save_reviews_to_cache(reviews):
    print("Saving reviews to cache")
    with open(CACHE_FILE, "w") as file:
        json.dump({"reviews": reviews, "timestamp": time.time()}, file)

@app.route("/api/get_reviews", methods=["GET"])
async def get_reviews():
    try:
        cached_reviews = get_cached_reviews()
        if cached_reviews:
            return jsonify(cached_reviews)

        reviews = fetch_google_reviews()
        print(f"Reviews: {reviews}")
        if reviews is not None:
            save_reviews_to_cache(reviews)
            return jsonify(reviews)
        return jsonify({"error": "Could not fetch reviews"}), 500
    except Exception as e:
        print("Error fetching reviews")
        print(str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500


# Load your credentials JSON file
# credentials = service_account.Credentials.from_service_account_file(
#     './credentials.json',
#     scopes=['https://www.googleapis.com/auth/business.manage']
# )

# Initialize the API client
# service = build('mybusiness', 'v4', credentials=credentials)

# async def fetch_reviews(location_id):
#     try:
#         reviews = service.accounts().locations().reviews().list(
#             parent=f'accounts/{location_id}'
#         ).execute()
#         return reviews
#     except HttpError as error:
#         # Handle API errors
#         return {'error': error.resp.status, 'message': error._get_reason()}
#     except Exception as error:
#         # Handle other exceptions
#         return {'error': 'internal_error', 'message': str(error)}

# @app.route('/api/get_reviews')
# async def get_reviews():
#     location_id = os.getenv("LOCATION_ID")
#     reviews = await fetch_reviews(location_id)
#     if 'error' in reviews:
#         response = make_response(jsonify(reviews), 500)
#     else:
#         response = make_response(jsonify(reviews), 200)
#     return response

if __name__ == "__main__":
    # app.run()
    uvicorn.run("app:app", host="0.0.0.0", port=os.getenv("PORT", 8000))
