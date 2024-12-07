import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <section className="about py-20">
      <div className="container mx-auto">
        <div className="flex items-start gap-20">
          <div className="w-1/2 relative">
            <img
              src={aboutImg}
              alt="About Image"
              className="w-[400px] h-[400px] object-cover rounded-xl justify-self-end z-50"
            />
            <div className="w-[400px] h-[400px] bg-orange-400 absolute top-14 right-14 rounded-xl z-10"></div>
          </div>
          <div className="w-1/2 space-y-4">
            <h2 className="text-orange-500 text-3xl font-medium border-l-4 border-orange-500 pl-3">
              About Us
            </h2>
            <h5 className="text-2xl">Welcome to Software Solution!</h5>
            <p className="text-gray-700">
              We are a dynamic team of tech enthusiasts dedicated to delivering
              innovative, scalable, and reliable software solutions. With a
              focus on combining cutting-edge technologies and industry
              expertise, we empower businesses to thrive in an ever-evolving
              digital landscape. Our mission is to create software that drives
              your success, tailored to meet your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
