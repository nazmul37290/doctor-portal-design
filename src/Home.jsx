import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhoAreWe from "./components/WhoAreWe";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/*Navbar  */}
      <Navbar></Navbar>
      {/* banner section here  */}
      <Banner></Banner>
      {/* who we are section */}
      <WhoAreWe></WhoAreWe>
      {/* service */}
      <div className="mt-32">
        <Services></Services>
      </div>
      {/* testimonial */}
      <div className="mt-32">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
