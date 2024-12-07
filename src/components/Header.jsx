// import { useState } from "react";

const Header = () => {
  // const [menuToggle, setMenuToggle] = useState(false);

  // const handleMenu = () => {
  //   setMenuToggle(!menuToggle);
  // };

  return (
    <header className="header absolute top-0 right-0 left-0 z-50">
      <div className="container mx-auto">
        <nav className="nav flex items-center justify-between py-3 xl:px-0 sm:px-5 px-3">
          <a
            href="#"
            className="xl:text-3xl lg:text-2xl font-semibold uppercase"
          >
            software solution
          </a>
          <ul className="links lg:flex items-center gap-14 hidden">
            {["home", "about us", "services", "products"].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="capitalize text-lg hover:text-orange-700"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="capitalize text-lg text-white bg-orange-500 py-1 px-3 rounded-md hover:bg-orange-600"
              >
                contact us
              </a>
            </li>
          </ul>
          <div className="mobile-menu space-y-1 lg:hidden">
            <div className="w-5 h-[2px] bg-black"></div>
            <div className="w-3 h-[2px] bg-black"></div>
            <div className="w-5 h-[2px] bg-black"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
