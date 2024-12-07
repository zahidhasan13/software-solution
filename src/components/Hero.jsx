// import heroIcon2 from "../assets/css.png";
// import heroIcon6 from "../assets/database.png";
// import heroIcon7 from "../assets/flutter.png";
// import heroIcon1 from "../assets/html.png";
// import heroIcon3 from "../assets/js.png";
// import heroIcon5 from "../assets/node.png";
// import heroIcon4 from "../assets/react.png";
const Hero = () => {
  return (
    <section className="hero relative bg-cover bg-center h-screen py-10 bg-white z-10">
      {/* <!-- Overlay --> */}
      <div className="absolute inset-0 bg-sky-100/50 backdrop-blur"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 container mx-auto">
        {/* <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 grid-rows-8">
          <img
            src={heroIcon1}
            alt=""
            className="w-[30px] col-start-2 row-start-3 md:col-start-3 md:row-start-2"
          />
          <img
            src={heroIcon2}
            alt=""
            className="w-[30px] col-start-1 row-start-4 justify-self-end md:col-start-2 md:row-start-4"
          />
          <img
            src={heroIcon3}
            alt=""
            className="w-[30px] col-start-1 row-start-6 justify-self-end md:col-start-3 md:row-start-7"
          />
          <img
            src={heroIcon4}
            alt=""
            className="w-[30px] self-end col-start-6 row-start-7 md:col-start-5 md:row-start-8"
          />
          <img
            src={heroIcon5}
            alt=""
            className="w-[30px] self-end col-start-3 row-start-7 md:col-start-6 md:row-start-6"
          />
          <img
            src={heroIcon6}
            alt=""
            className="w-[30px] col-start-8 row-start-6 md:col-start-6 md:row-start-2"
          />
          <img
            src={heroIcon7}
            alt=""
            className="w-[30px] col-start-7 row-start-3 md:col-start-7 md:row-start-4"
          />
        </div> */}
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-center">
          Create Your <br /> Perfect Software
        </h1>
        <p className="text-sm w-[90%] md:w-3/4 xl:w-1/2 text-center">
          We combine the latest technologies, technical skills and industry
          expertise to build the most powerful software solutions that help you
          to scale up your business.
        </p>
        <div className="flex items-center gap-3 z-50">
          <button className="capitalize text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 py-1 px-3 rounded-md">
            Our Product
          </button>
          <button className="capitalize text-lg font-medium text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white border py-1 px-3 rounded-md">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
