import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Package from "../Images/Package.png";
// import packageImage from "../Images/packageImage.png";
import three60 from "../Images/packages/three60.jpg";
import mirror from "../Images/packages/mirror.jpg";
import dslr from "../Images/packages/dslr.jpg";
import magazine from "../Images/packages/magazine.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const booths = [
  {
    id: 1,
    name: "DSLR Booth",
    price: "$200",
    description:
      "Perfect for capturing high-quality, professional-grade photos.",
    content: `Experience the best in DSLR technology, ensuring your moments are captured with stunning clarity. This booth is equipped with advanced lenses and lighting to give your photos a studio-quality feel. Ideal for weddings, corporate events, and parties that demand perfection.`,
    image: dslr,
  },
  {
    id: 2,
    name: "Mirror Booth",
    price: "$250",
    description: "Interactive and fun, perfect for all types of events.",
    content: `The Mirror Booth combines the latest tech with interactive fun. Your guests can strike a pose, add their signatures, and even use fun animations. A hit for weddings and events, this booth guarantees engagement and laughter.`,
    image: mirror,
  },
  {
    id: 3,
    name: "360 Booths",
    price: "$300",
    description: "Capture every angle with our 360-degree video booth.",
    content: `Step into the future with our 360 Booth, which captures dynamic and immersive videos from every angle. Perfect for creating unforgettable content that your guests will love to share on social media.`,
    image: three60,
  },
  {
    id: 4,
    name: "Magazine Booth",
    price: "$300",
    description: "Feel like a cover star with this glamorous booth.",
    content: `Turn your guests into stars with the Magazine Booth. This setup creates stunning, magazine-worthy shots that make every attendee feel like a celebrity. A glamorous addition to any event.`,
    image: magazine,
    inclusions: [
      "A Photo Booth Attendant",
      "Trendy Props",
      "LED Lighting",
      "Bollards and Red Carpet",
      "Delivery and Setup",
      "Online Gallery",
    ],
  },
];

const Packages = () => {
  const navigate = useNavigate();
  const [selectedBooth, setSelectedBooth] = useState(null);

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

  const handleLearnMore = (id) => {
    navigate(`/packages/${id}`);
  };

  return (
    <section className="mx-auto w-full">
      {/* Header with banner image */}
      <div
        className="relative"
        data-aos="zoom-out-up"
        data-aos-duration="1200"
      >
        <img
          src={Package}
          className="w-full rounded-lg my-5 h-auto max-h-[400px] flex justify-center overflow-hidden z-0"
          alt="Home Image"
        />
        <p className="absolute inset-0 flex items-center md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl justify-center text-white">
          Our{" "}
          <span className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl md:pl-3 pl-1">
            Packages
          </span>
        </p>
      </div>

      {/* Description section */}
      {/* <div
        className="flex md:w-[90%] gap-10 mx-auto"
        data-aos="slide-up"
        data-aos-delay="200"
        data-aos-duration="900"
      >
        <img
          src={packageImage}
          alt=""
          className="hidden md:block md:w-auto w-10"
        />
        <div className="flex-col px-7 md:w-auto py-5 rounded-xl text-lg lg:text-xl xl:text-2xl text-white font-rische bg-bgSecond">
          <p>
            Capture timeless moments with FotoRoo's premium photo booth
            packages, including our unique Magazine Booth. Enjoy unlimited
            photos and videos, seamless setup, and customizable booths (DSLR,
            Mirror, 360, and Magazine) tailored to your event theme.
          </p>
          <p className="mt-2">
            Serving Sydney, Blue Mountains, and Wollongong.
          </p>
          <p className="mt-2">
            Free travel within Sydney; additional charges apply outside.
          </p>
        </div>
      </div> */}

      {/* Package cards grid */}
      <div
        className="container mx-auto"
        data-aos="fade-up-left"
        data-aos-delay="300"
        data-aos-duration="850"
      >
        <div className="mx-auto my-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {booths.map((booth, index) => (
            <Card
              key={booth.id}
              className="flex flex-col overflow-hidden border-2"
              data-aos="zoom-in"
              data-aos-delay={150 + (index * 100)}
              data-aos-duration="900"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={booth.image || "/placeholder.svg"}
                  alt={booth.name}
                  className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="flex flex-col items-start">
                <CardTitle className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2">
                  {booth.name}
                </CardTitle>
                <p className="text-sm lg:text-lg xl:text-xl text-muted-foreground italic mb-2">
                  {booth.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="prose max-w-none text-sm mb-4">
                </div>
                <button
                  className="btn block w-full mt-auto"
                  onClick={() => handleLearnMore(booth.id)}
                >
                  Learn More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;