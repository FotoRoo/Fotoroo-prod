import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutUsGif from "../Images/aboutUs.mp4";

const AboutUs = () => {
  const videoRef = useRef(null);

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

  return (
    <section>
      <h1 
        className="text-textCol md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl  text-center my-10"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        About <span className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-[50px]">US</span>
      </h1>
      <div className="flex md:flex-row flex-col-reverse  gap-4 mx-auto max-w-[1600px]">
        <div 
          className="flex-col px-7 md:w-full text-bgSecond rounded-xl lg:text-lg"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <h2 
            className="text-4xl md:text-xl lg:text-2xl xl:text-[50px] font-dhaks"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            At FotoRoo, Every Event Deserves a Touch of Magic and Lasting
            Memories.
          </h2>
          <p 
            className="md:mt-7 my-3 lg:my-5 text-lg md:text-sm lg:text-sm xl:text-2xl font-rische"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            With our passion for creating unforgettable experiences, we ensure
            your celebration stands out. Whether it's a wedding, birthday,
            corporate event, or any special occasion, our photo booths bring
            joy, laughter, and unique keepsakes for you and your guests.<br />We
            proudly serve Sydney, Blue Mountains, and Wollongong, offering
            modern photo booth technology, personalized overlays, and a variety
            of backdrops to complement your theme. Our dedicated team makes the
            process seamless and stress-free, so you can focus on enjoying your
            big day.<br />Reach out to us today to start planning your
            picture-perfect event—we can't wait to be part of your special
            moments! 
          </p>
        </div>

        <video 
          ref={videoRef}
          src={aboutUsGif} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full max-w-3xl aspect-video object-contain md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1100"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutUs;