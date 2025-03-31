import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Three60 from "../Images/three60.jpg";
import DSLR from "../Images/DSLR Booth/DSLR.png";
import MirrorBooth1 from "../Images/Mirror Booth/MirrorBooth1.png";
import MagazineBooth1 from "../Images/Magazine Booth/MagazineBooth1.jpg";
// import { disableInstantTransitions } from "framer-motion";

const ExploreOurBooths = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize AOS if it hasn't been initialized yet
    if (!window.AOS) {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: false,
        mirror: true,
      });
    } else {
      // Refresh AOS to recognize newly added elements
      AOS.refresh();
    }
  }, []);

  return (
    <section className="my-10 lg:px-20">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl text-center mb-10">
          Explore our Booths
        </h1>
      </div>
      <div className=" font-rische max-w-[1200px] mx-auto w-full">
        {/* Mirror Booth Section */}
        <div 
          className="flex flex-col lg:flex-row my-10 lg:justify-center lg:items-center lg:mt-10"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            <img 
              src={MirrorBooth1} 
              alt="Mirror Booth" 
              className="md:w-[456px]" 
              loading="lazy"
            />
          </div>
          <div 
            className="lg:w-[26rem] w-full md:ml-10 lg:ml-20"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h2 
              className="lg:pb-7 py-5 text-3xl lg:text-4xl xl:text-5xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
            >
              Mirror Booth
            </h2>
            <p 
              className="text-lg lg:text-xl xl:text-2xl"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="500"
            >
              Your Reflection, Redefined! A statement piece, a conversation starter, and a photo booth like no other.
              Snap, sign, and shine with custom overlays and instant prints. Step up, strike a pose, and watch the magic unfold!
            </p>
            <button 
              className="btn block" 
              onClick={() => navigate("/packages/2")}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* DSLR Booth Section */}
        <div 
          className="flex lg:flex-row my-10 flex-col-reverse lg:justify-center lg:items-center lg:mt-10"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
        >
          <div 
            className="lg:w-[26rem] w-full mr-10 lg:mr-20"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h2 
              className="lg:pb-7 py-5 text-3xl lg:text-4xl xl:text-5xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
            >
              DSLR Booth
            </h2>
            <p 
              className="text-lg lg:text-xl xl:text-2xl"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="500"
            >
              Timeless, Frame by Frame! Crisp, clear, and classic. Our DSLR Booth delivers studio-quality snapshots with a touch of fun. Strike a pose, choose your backdrop, and let the pro-grade camera do the rest—because every detail deserves to shine.
            </p>
            <button 
              className="btn block" 
              onClick={() => navigate("/packages/1")}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              Book Now
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            <img 
              src={DSLR} 
              alt="DSLR Booth" 
              className="md:w-[456px]" 
              loading="lazy"
            />
          </div>
        </div>

        {/* 360 Booth Section */}
        <div 
          className="flex flex-col lg:flex-row my-10 lg:justify-center lg:items-center lg:mt-10"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
        >
          <div 
            className="md:h-[600px] object-contain overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            {/* <video
              ref={videoRef}
              src={Three60}
              className="md:w-[456px]"
              autoPlay
              muted
              loop
              loading="lazy"
              aria-label="360 Booth demonstration video"
            >
              Your browser does not support the video tag.
            </video> */}
            <img 
              src={Three60} 
              alt="DSLR Booth" 
              className="md:w-[456px]" 
              loading="lazy"
            />
          </div>

          <div 
            className="lg:w-[26rem] w-full md:ml-10 lg:ml-20"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h2 
              className="lg:pb-7 py-5 text-3xl lg:text-4xl xl:text-5xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
            >
              360 Booth
            </h2>
            <p 
              className="text-lg lg:text-xl xl:text-2xl"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="500"
            >
              Every Angle, Every Moment! Why take one shot when you can have them all? Step onto the platform, let the camera spin, and capture the magic in motion. Slow-mo, boomerang, or a full cinematic spin—your moment, your way.
            </p>
            <button 
              className="btn block" 
              onClick={() => navigate("/packages/3")}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Magazine Booth Section */}
        <div 
          className="flex lg:flex-row my-10 flex-col-reverse lg:justify-center lg:items-center lg:mt-10"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
        >
          <div 
            className="lg:w-[26rem] w-full mr-10 lg:mr-20"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h2 
              className="lg:pb-7 py-5 text-3xl lg:text-4xl xl:text-5xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
            >
              Magazine Booth
            </h2>
            <p 
              className="text-lg lg:text-xl xl:text-2xl"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="500"
            >
              Every Frame, Cover-Worthy! Step into the spotlight and onto the cover. With flawless lighting and editorial-style flair, FotoRoo's Magazine Booth transforms every shot into an editorial masterpiece. Instant. Iconic. Unforgettable.
            </p>
            <button 
              className="btn block" 
              onClick={() => navigate("/packages/4")}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              Book Now
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            <img 
              src={MagazineBooth1} 
              alt="Magazine Booth" 
              className="md:w-[456px]" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurBooths;