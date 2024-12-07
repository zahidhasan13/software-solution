import {
  FaDribbble,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer border-t-2 py-3">
      <div className="flex flex-col items-center justify-center gap-3 md:gap-5 py-5 container mx-auto px-5 xl:px-0">
        <div>
          <a href="#" className="text-2xl md:text-3xl font-semibold uppercase">
            software solution
          </a>
        </div>
        <div className="flex items-center gap-3 text-lg md:text-xl">
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
        <p className="text-xs font-medium">
          &copy; {new Date().getFullYear()} All right reserved by{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Software Solution
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
