import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import videoHome from "../Images/videoHome.mp4";
import CaptureMemories from "./CaptureMemories";
import CustomPrints from "./CustomPrints";
import EventCompleted from "./EventCompleted";
import ExploreOurBooths from "./ExploreOurBooths";
import Faq from "./Faq";
import OurBomb from "./OurBomb";
import OurService from "./OurService";
import Testimonials from "./Testimonials";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 800, 
      easing: 'ease-out-cubic',  // More dynamic easing
      once: false,               // Animation repeats on scroll up/down
      mirror: true,              // Elements animate out when scrolled out of view
      anchorPlacement: 'top-bottom', // Animate when top of element hits bottom of viewport
      disable: 'mobile',         // Disable on mobile for better performance (optional)
      offset: 120                // Offset (in px) from the original trigger point
    });
    
    // Refresh AOS when window is resized
    window.addEventListener('resize', AOS.refresh);
    
    return () => {
      window.removeEventListener('resize', AOS.refresh);
    };
  }, []);

  return (
    <section className="flex flex-col">
      {/* Hero Video - Dramatic fade in */}
      <div 
        className="home mt-10 -mx-3 md:-mx-7 w-screen relative" 
        data-aos="fade-in" 
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="w-full">
          <video 
            ref={videoRef}
            src={videoHome} 
            className="w-screen h-auto object-cover m-0 p-0"
            autoPlay 
            loop 
            muted
            playsInline
            loading="lazy"
            aria-label="Promotional video"
          />
        </div>
      </div>
      
      {/* Our Service - Fade up with fast entry */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="150"
        data-aos-duration="700"
        data-aos-offset="200"
      >
        <OurService />
      </div>
      
      {/* Our Bomb - Fade right for visual variety */}
      <div 
        data-aos="fade-right" 
        data-aos-delay="400"
        data-aos-duration="900"
        data-aos-offset="300"
      >
        <OurBomb />
      </div>
      
      {/* Event Completed - Zoom in to highlight completed events */}
      <div 
        data-aos="zoom-in" 
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-anchor-placement="center-bottom"
      >
        <EventCompleted />
      </div>
      
      {/* Capture Memories - Fade left for visual variety */}
      <div 
        data-aos="fade-left" 
        data-aos-delay="200"
        data-aos-duration="850"
        data-aos-offset="250"
      >
        <CaptureMemories />
      </div>
      
      {/* Explore Our Booths - Fade up with bounce effect */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="150"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
      >
        <ExploreOurBooths />
      </div>
      
      {/* Custom Prints - Flip effect for dramatic reveal */}
      <div 
        data-aos="flip-up" 
        data-aos-delay="200"
        data-aos-duration="1100"
      >
        <CustomPrints />
      </div>
      
      {/* Testimonials - Fade in with longer duration for emphasis */}
      <div 
        data-aos="fade-in" 
        data-aos-delay="250"
        data-aos-duration="1200"
        data-aos-anchor-placement="top-center"
      >
        <Testimonials />
      </div>
      
      {/* FAQ - Subtle fade up with fast entry */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="150"
        data-aos-duration="700"
        data-aos-offset="150"
      >
        <Faq />
      </div>
    </section>
  );
};

export default Home;