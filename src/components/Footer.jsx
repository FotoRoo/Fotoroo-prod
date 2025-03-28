import { NavLink } from "react-router";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-textCol">
      <h1 className="lg:text-[180px] pl-3 pr-10 md:text-9xl text-5xl pt-5 font-rig-solid text-white lg:text-center md:text-center tracking-widest">
        FOTOROO
      </h1>
      <div className="flex justify-between lg:px-64 md:px-36 pl-5 flex-col md:flex-row text-white text-lg font-baskerville">
        <div className="font-rische py-5 md:py-0">
          <p>info@fotoroo.com.au</p>
          <p>0435 254 055</p>
          <p>Marsden Park, Sydney</p>
        </div>
        <div className="font-rische flex flex-col uppercase py-5 md:py-0">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/packages">Packages</NavLink>
          <NavLink to="/backdrop">Backdrop</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
        </div>
        <div>
          <h2 className="font-rische">FOLLOW ALONG</h2>
          <div className="flex gap-3 md:mt-4 py-5 md:py-0">
            <a
              href="https://www.instagram.com/foto.roo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558145031701"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-400"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <p className="font-rische text-white text-lg font-baskerville text-center py-5">
        All Rights Reserved By @Fotoroo
      </p>
    </footer>
  );
};

export default Footer;
