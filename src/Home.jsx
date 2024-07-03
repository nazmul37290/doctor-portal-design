import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
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
        </div>
    );
};

export default Home;