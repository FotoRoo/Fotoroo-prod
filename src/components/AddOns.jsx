import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AudioGB from "../Images/addOns/package_AudioGuestBook.png";

export default function AddOns() {
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

  const addOns = [
    {
      title: "Audio Guest Book",
      description: "Because Voices Hold More Than Words",
      content: `Some moments are too special to be left on paper. FotoRoo's Audio Guest Book captures the raw emotions, laughter, and heartfelt messages of your guests—preserved in sound, not just ink.

At weddings, milestone celebrations, and corporate galas, this elegant, vintage-inspired phone lets guests leave timeless audio keepsakes that you can relive forever. From tearful toasts to inside jokes, their voices become an unforgettable part of your story.

No apps. No awkward typing. Just pure nostalgia, bottled in sound.
Ditch the pen. Dial in the magic.
\nHow Does It Work?
\nStep 1 – Pick up the phone.\nStep 2 – Leave your message after the beep.\nStep 3 – Hang up to save your recording.`,
      image: AudioGB,
    },
  ];

  return (
    <section
      className="w-full pb-12 bg-muted/30"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="container mx-auto max-w-[1600px]">
        <div className="mx-auto">
          {addOns.map((booth, index) => (
            <div
              key={booth.title}
              className={`flex my-5 flex-col-reverse sm:px-24 md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="200"
            >
              {/* Text content section with right-to-left animation */}
              <div
                className="md:w-2/5 mx-auto text-center md:text-start my-9 md:my-0"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                <h2
                  className="text-[45px] my-4 md:text-[50px] lg:text-[60px] xl:text-[70px] font-dhaks"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="400"
                >
                  {booth.title}
                </h2>
                <p
                  className="font-rische font-semibold text-lg lg:text-xl xl:text-2xl leading-5 text-textCol md:w-4/5 lg:w-3/5 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="500"
                >
                  {booth.description}
                </p>
                {/* <p 
                  className="font-rische font-medium text-lg lg:text-xl xl:text-2xl leading-5 text-textCol md:w-4/5 whitespace-pre-line"
                  data-aos="fade-up" 
                  data-aos-duration="700"
                  data-aos-delay="600"
                >
                  {booth.content}
                </p> */}
                <p
                  className="font-rische font-medium text-lg lg:text-xl xl:text-2xl leading-5 text-textCol md:w-4/5 whitespace-pre-line text-center md:text-center"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="600"
                >
                  {booth.content.split("\nHow Does It Work?")[0]}
                </p>

                <p
                  className="font-rische font-medium text-lg lg:text-xl xl:text-2xl leading-5 text-textCol md:w-4/5 whitespace-pre-line text-left md:text-center mt-4"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="700"
                >
                  {"How Does It Work?\nStep 1 – Pick up the phone.\nStep 2 – Leave your message after the beep.\nStep 3 – Hang up to save your recording."}
                </p>
              </div>

              {/* Image section with left-to-right animation */}
              <div
                className="md:w-2/4"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                <img
                  src={booth.image}
                  alt={booth.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}