import { useParams } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeImage from "../../Images/HomeImage.png";
import heroImage1 from "../../Images/packageDetails/heroImages/1.png";
import heroImage2 from "../../Images/packageDetails/heroImages/2.png";
import heroImage3 from "../../Images/packageDetails/heroImages/3.png";
import heroImage4 from "../../Images/packageDetails/heroImages/4.png";
import packagedetail1 from "../../Images/packagedetail1.png";
import packagedetail2 from "../../Images/packagedetail2.png";
import packagedetail3 from "../../Images/packagedetail3.png";
import props from "../../Images/packageDetails/props.png";
import gifimg from "../../Images/packageDetails/gifimg.png";
import qrcodeimg from "../../Images/packageDetails/qr.png";
import airdrop from "../../Images/packageDetails/airdrop.png";
import redcarpet from "../../Images/packageDetails/red-carpet.png";
import delivery from "../../Images/packageDetails/delivery.png";
import gallery from "../../Images/packageDetails/secure_online_gallery.png";
import backdrop from "../../Images/packageDetails/customizable_backdrop.png";
import lighting from "../../Images/packageDetails/studio_grade_lighting.png";
import led from "../../Images/packageDetails/led.png";
import overlays from "../../Images/packageDetails/overlays.png";
import personalizePrints from "../../Images/packageDetails/personalize_prints.png";
import bgm from "../../Images/packageDetails/bgm.png";
import AddOns from "../AddOns";

const items = [
  {
    id: 1,
    name: "DSLR",
    price: "$200",
    heroImg: heroImage1,
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Unlimited 2x Photo Strips",
        paragraph: "Classic and fun photo strips printed instantly, letting guests take home unlimited keepsakes.",
        imageURL: packagedetail2
      },
      {
        title: "High-Quality DSLR Camera",
        paragraph: "Capturing every moment in stunning high resolution for crisp, vibrant photos.",
        imageURL: packagedetail3
      },
      {
        title: "Trendy Props",
        paragraph: "A curated selection of stylish and playful props to add personality and creativity to every shot.",
        imageURL: props
      },
      {
        title: "GIF",
        paragraph: "Turn still moments into fun, shareable animations that bring your memories to life.",
        imageURL: gifimg
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: lighting
      },
      {
        title: "Customizable Backdrops",
        paragraph: "A variety of elegant and themed backgrounds tailored to match your event's aesthetic.",
        imageURL: backdrop
      },
      {
        title: "Personalized Print Designs",
        paragraph: "Custom overlays and templates to match your event theme, branding, or personal style.",
        imageURL: personalizePrints
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: gallery
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Airdrop",
        paragraph: "Instant, wireless photo sharing for Apple users, making it easy to save and share moments.",
        imageURL: airdrop
      },
      {
        title: "QR Code",
        paragraph: "Quick and convenient access to event photos, allowing guests to download their pictures instantly.",
        imageURL: qrcodeimg
      }
    ]
  },
  {
    id: 2,
    name: "Mirror",
    price: "$200",
    heroImg: heroImage2,
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Unlimited 2x Photo Strips",
        paragraph: "Classic and fun photo strips printed instantly, letting guests take home unlimited keepsakes.",
        imageURL: packagedetail2
      },
      {
        title: "High-Quality DSLR Camera",
        paragraph: "Capturing every moment in stunning high resolution for crisp, vibrant photos.",
        imageURL: packagedetail3
      },
      {
        title: "Trendy Props",
        paragraph: "A curated selection of stylish and playful props to add personality and creativity to every shot.",
        imageURL: props
      },
      {
        title: "GIF",
        paragraph: "Turn still moments into fun, shareable animations that bring your memories to life.",
        imageURL: gifimg
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: lighting
      },
      {
        title: "Customizable Backdrops",
        paragraph: "A variety of elegant and themed backgrounds tailored to match your event's aesthetic.",
        imageURL: backdrop
      },
      {
        title: "Personalized Print Designs",
        paragraph: "Custom overlays and templates to match your event theme, branding, or personal style.",
        imageURL: personalizePrints
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: gallery
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Airdrop",
        paragraph: "Instant, wireless photo sharing for Apple users, making it easy to save and share moments.",
        imageURL: airdrop
      },
      {
        title: "QR Code",
        paragraph: "Quick and convenient access to event photos, allowing guests to download their pictures instantly.",
        imageURL: qrcodeimg
      }
    ]
  },
  {
    id: 4,
    name: "Magazine",
    price: "$250",
    heroImg: heroImage4,
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Trendy Props",
        paragraph: "A curated selection of stylish and playful props to add personality and creativity to every shot.",
        imageURL: props
      },
      {
        title: "Studio-Grade Lighting",
        paragraph: "Flawless, well-lit photos with professional lighting that makes every guest look their best.",
        imageURL: lighting
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can view, download, and share their photos easily.",
        imageURL: gallery
      }
    ]
  },
  {
    id: 3,
    name: "360",
    price: "$300",
    heroImg: heroImage3,
    details: [
      {
        title: "Photo Booth Attendant",
        paragraph: "A dedicated professional to guide guests, operate the booth, and ensure a smooth and fun experience.",
        imageURL: packagedetail1
      },
      {
        title: "Unlimited 360 Video Sessions",
        paragraph: "Guests can step onto the platform and record unlimited dynamic slow-motion videos, capturing every angle.",
        imageURL: packagedetail2
      },
      {
        title: "Custom Overlays",
        paragraph: "Personalized video overlays to match your event's theme, branding, or unique style for a premium touch.",
        imageURL: overlays
      },
      {
        title: "Colorful LED Tubes",
        paragraph: "Vibrant LED lighting adds an exciting visual effect, creating a dynamic and immersive video experience.",
        imageURL: led
      },
      {
        title: "Custom Background Music",
        paragraph: "Enhance your 360 videos with personalized background music that matches the vibe of your event.",
        imageURL: bgm
      },
      {
        title: "Red Carpet and Bollards",
        paragraph: "Elevate the experience with a VIP entrance, creating a glamorous touch for your event.",
        imageURL: redcarpet
      },
      {
        title: "Trendy Party Props",
        paragraph: "Fun and stylish props to bring personality and creativity to every video.",
        imageURL: props
      },
      {
        title: "Secure Online Gallery",
        paragraph: "A private digital album where guests can access, download, and share their videos instantly.",
        imageURL: gallery
      },
      {
        title: "Hassle-Free Delivery & Setup",
        paragraph: "We handle everything from transport to assembly, ensuring a hassle-free, seamless experience for you.",
        imageURL: delivery
      }
    ]
  }
];

const PackageDetails = () => {
  const { id } = useParams();
  const filterValue = items.filter(item => item.id === Number(id));

  useEffect(() => {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
    
    // Initialize AOS if it hasn't been initialized yet
    if (!window.AOS) {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 100
      });
    } else {
      // Refresh AOS to recognize newly added elements
      AOS.refresh();
    }
  }, []);

  return (
    <section className="PackageDetails">
      {filterValue.map((packItem) => (
        <div key={packItem.id}>
          {/* Hero section with fade-in animation */}
          <div 
            className="relative"
            data-aos="fade-in"
            data-aos-duration="1200"
          > 
            <img
              src={packItem.heroImg}
              className="w-full rounded-lg my-5 h-auto max-h-[400px]ßß flex justify-center overflow-hidden z-0"
              alt={`${packItem.name} Booth Hero Image`}
              loading="lazy"
            />
            <p 
              className="absolute inset-0 flex items-center md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl justify-center text-white"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {packItem.name} <span className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl md:pl-3 pl-1">Booth</span>
            </p>
          </div>

          {/* Package details section with alternating animations */}
          <div>
            {packItem.details.map((item, index) => (
              <div 
                key={`${item.title}-${index}`} 
                className={`flex flex-col justify-center sm:px-24 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse md:items-center flex-col-reverse" : "md:flex-row md:items-center flex-col-reverse" 
                }`}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-anchor-placement="top-bottom"
              >
                {/* Text content with side animations */}
                <div 
                  className="md:w-2/5 mx-auto text-center md:text-start my-9 md:my-0"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="700"
                  data-aos-delay="200"
                >
                  <h2 
                    className="text-4xl md:my-4 my-2 md:text-5xl lg:text-6xl xl:text-7xl font-dhaks"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    {item.title}
                  </h2>
                  {/* <p 
                    className="font-rische text-lg lg:text-xl xl:text-2xl leading-5 text-textCol md:w-4/5 lg:w-3/5"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="400"
                  >
                    {item.paragraph}
                  </p> */}
                </div>

                {/* Image with side animations */}
                <div 
                  className="md:w-2/4"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-duration="700"
                  data-aos-delay="200"
                >
                  <img 
                    src={item.imageURL} 
                    alt={item.title} 
                    className="w-full object-cover" 
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Add Ons section with fade-up animation */}
      <h2 
        className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-[50px] text-center mt-16"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        Add Ons
      </h2>
      <div 
        className="grid"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="150"
      >
        <AddOns />
      </div>
    </section>
  );
};

export default PackageDetails;