import { useState } from "react";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <header className="header shadow-md">
      <nav className="nav flex items-center justify-between py-5 container mx-auto px-5 xl:px-0">
        <div className="md:flex md:items-center md:gap-3 text-xl hidden">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaPinterest />
          </a>
          <a href="#">
            <FaDribbble />
          </a>
        </div>
        <div className="self-center">
          <a href="#" className="text-xl md:text-2xl font-semibold uppercase">
            Software Solution
          </a>
        </div>
        <div className="text-2xl">
          <button onClick={handleMenu}>
            <FaBars />
          </button>
        </div>
      </nav>
      <div className={menuToggle ? "block" : "hidden"}>
        <ul className="links flex flex-col gap-5 absolute right-0 top-0 w-full md:w-[500px] bg-[#fff/70] backdrop-blur h-screen shadow z-10 py-5 px-10">
          <li className="text-right">
            <button onClick={handleMenu} className="text-3xl">
              <FaX />
            </button>
          </li>
          {["home", "services", "products", "about us", "contact us"].map(
            (link, index) => (
              <li key={index}>
                <a href="#" className="text-3xl uppercase">
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
