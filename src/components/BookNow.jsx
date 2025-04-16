import { useState, useEffect } from 'react';
import BookImage from "../Images/BookImage.webp";
import { useLocation, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";

const booths = ["Mirror Booth", "360 Booth", "DSLR Booth", "Magazine Booth"];

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS if it hasn't been initialized yet
    if (!window.AOS) {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
      });
    } else {
      // Refresh AOS to recognize newly added elements
      AOS.refresh();
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    booth: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send_mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventLocation: '',
          booth: '',
          message: '',
        });
        setTimeout(() => navigate("/"), 1500); 
      } else {
        console.error('Error:', response.status);
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while sending the message.');
    }
  };

  return (
    <section className="flex lg:flex-row px-5 md:gap-10 flex-col my-10 md:mx-auto md:w-[95%] md:px-10">
      {/* Toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Image section with left-to-right animation */}
      <div 
        className="md:w-[50%]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img 
          src={BookImage} 
          alt="Book Now" 
          className="md:block hidden"
          loading="lazy"
        />
      </div>

      {/* Form section with right-to-left animation */}
      <div 
        className="md:w-[50%]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h1 
          className={`md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl text-center md:text-start ${location.pathname === "/enquire" ? "mt-5" : ""}`}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          {location.pathname === "/enquire" ? "Please Fill This Form" : "Book Now"}
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Name and Email fields */}
          <div 
            className="flex md:flex-row flex-col gap-3 my-1"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            />
          </div>

          {/* Phone and Event Date fields */}
          <div 
            className="flex md:flex-row flex-col gap-3 my-3"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <input
              required
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            />
            <input
              required
              type="date"
              name="eventDate"
              placeholder="Event Date"
              value={formData.eventDate}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            />
          </div>

          {/* Event Location and Booth Selection fields */}
          <div 
            className="flex md:flex-row flex-col gap-3 my-3"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="700"
          >
            <input
              required
              type="text"
              name="eventLocation"
              placeholder="Event Location"
              value={formData.eventLocation}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500"
            />

            <select
              required
              name="booth"
              value={formData.booth}
              onChange={handleChange}
              className="px-5 w-full py-3 border rounded-md border-gray-500 my-3"
            >
              <option value="">Select Booth</option>
              {booths.map((booth) => (
                <option key={booth} value={booth}>{booth}</option>
              ))}
            </select>
          </div>

          {/* Message textarea */}
          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            className="px-5 my-3 w-full py-5 md:h-40 border rounded-md border-gray-500"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
          ></textarea>

          {/* Submit button with attention-grabbing animation */}
          <button 
            className="text-white rounded-md bg-textCol text-center px-5 w-full py-3"
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="800"
          >
            Get a Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookNow;