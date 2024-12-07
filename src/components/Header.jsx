import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
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
        <div className="text-xl">
          <button>
            <FaBars />
          </button>
        </div>
        <div className="hidden">
          <ul className="links flex items-center gap-5">
            {["home", "services", "products", "about us", "contact us"].map(
              (link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
