import { useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../Images/Vector.png";
import FotorooLogo from "../Images/FotorooLogo.png";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "PACKAGES", path: "/packages" },
    { name: "BACKDROP", path: "/backdrop" },

    { name: "ABOUT US", path: "/aboutus" },
  ];

  return (
    <div className="pt-5 mx-auto flex items-center justify-between">

      <div>
        <Link to="/">
          <h2 className="w-52 h-11 lg:text-4xl xl:text-5xl text-3xl flex items-center font-rig-solid">
            FOTOROO
          </h2>
          {/* <img
            src={FotorooLogo} 
            alt="FOTOROO Logo"
            className="h-14 lg:h-18 xl:h-26 w-auto max-w-none"
          /> */}
        </Link>
      </div>


      <div>

        <div className="hidden md:flex items-center list-none gap-7 cursor-pointer text-sm lg:text-lg xl:text-xl text-[#694223]">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          <li className="bg-[#694223] text-bgPrimary px-8 py-2">
            <Link to="/enquire">ENQUIRE</Link>
          </li>
        </div>


        <button
          onClick={toggleMenu}
          className="md:hidden md:bg-[#694223] text-bgPrimary p-2 rounded"
        >
          <img
            src={menuVisible ? Vector : Vector}
            alt={menuVisible ? "Close Menu" : "Open Menu"}
            className="w-6 h-6"
          />
        </button>
      </div>


      {menuVisible && (
        <div className="absolute z-10 top-16 right-5 bg-white shadow-md p-4 rounded-md md:hidden">
          <ul className="flex flex-col gap-4 list-none text-sm lg:text-xl xl:text-2xl text-[#694223]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} onClick={() => setMenuVisible(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="bg-[#694223] text-bgPrimary px-4 py-2 rounded text-center">
              <Link to="/enquire" onClick={() => setMenuVisible(false)}>
                ENQUIRE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
