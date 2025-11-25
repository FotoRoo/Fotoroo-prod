import json
import time
import traceback
from quart import Quart, jsonify, send_from_directory, request, make_response
import os
import requests
import uvicorn
import smtplib
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Quart(__name__)
app.secret_key = os.getenv("APP_KEY")

# --- Web Service (Serve Static React Files) ---

@app.route("/")
@app.route("/<path:path>")
async def serve_react(path="index.html"):
    """Serves the static files from the 'dist' directory, falling back to index.html for client-side routing."""
    build_dir = os.path.join(os.path.dirname(__file__), "dist")
    
    # Check if the requested file exists
    file_path = os.path.join(build_dir, path)
    if os.path.exists(file_path):
        return await send_from_directory(build_dir, path)
    else:
        # Fallback to index.html for single-page application routing
        return await send_from_directory(build_dir, "index.html")

# --- API Route: Send Mail ---

@app.route("/api/send_mail", methods=["POST"])
async def send_mail():
    """Handles contact form submissions by sending an email via SMTP."""
    try:
        form_data = await request.get_json()
        print(f"Received form data: {form_data}")
        
        # creates SMTP session
        s = smtplib.SMTP('smtp.gmail.com', 587)
        # start TLS for security
        s.starttls()
        # Authentication
        # Ensure SENDER_EMAIL and PASSWORD are set as environment variables
        s.login(os.getenv("SENDER_EMAIL"), os.getenv("PASSWORD"))
        
        # Construct the email message
        message = (
            f"Subject: Enquiry for {form_data['booth']}\n\n"
            + f"Enquiry from: {form_data['name']}\n"
            + f"Email ID: {form_data['email']}\n"
            + f"Contact Number: {form_data['phone']}\n"
            + f"Event Date: {form_data['eventDate']}\n"
            + f"Event Location: {form_data['eventLocation']}\n"
            + f"Message: {form_data['message']}\n"
            + f"Booth: {form_data['booth']}"
        )
        
        # sending the mail
        s.sendmail(os.getenv("SENDER_EMAIL"), os.getenv("RECEIVER_EMAIL") , message)
        # terminating the session
        s.quit()
        
        return jsonify({"message": "Email sent successfully!"}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        print(traceback.format_exc())
        return jsonify({"error": "Failed to send email."}), 500

# --- Review API and Related Functions Removed ---

# All GOOGLE_API_KEY, PLACE_ID, CACHE_FILE, CACHE_EXPIRY constants,
# fetch_google_reviews, get_cached_reviews, save_reviews_to_cache functions,
# and the /api/get_reviews route have been removed.


if __name__ == "__main__":
    # Use uvicorn to run the Quart application
    uvicorn.run("app:app", host="0.0.0.0", port=int(os.getenv("PORT", 8000)), log_level="info")
