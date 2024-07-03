import bannerImg from "../assets/images/Rectangle5.png";
import "../index.css";
const Banner = () => {
    return (
        <div>
            <div className="w-full relative object-cover">

            <img className="w-full h-full object-cover"  src={bannerImg} alt="" />
            <div className="h-full w-full opacity-50 rounded-[48px] overlay absolute top-0"></div>
            </div>
        </div>
    );
};

export default Banner;