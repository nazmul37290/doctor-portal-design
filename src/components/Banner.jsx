import bannerImg from "../assets/images/Rectangle5.png";
import Pie from "../assets/images/PIE.png";
import People from "../assets/images/people.jpg";
import certificate from "../assets/images/certificate.jpg";
import coin from "../assets/images/coin.png";
import video from "../assets/images/video.jpg";
import "../index.css";
import { FaStar } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="pb-24">
      <div className="w-full relative object-cover">
        <img className="w-full h-full object-cover" src={bannerImg} alt="" />
        <div className="h-full w-full opacity-50 rounded-[48px] overlay absolute top-0"></div>
      </div>
      <div className="relative">
        <h1 className="text-5xl text-center absolute top-24 left-1/2 -translate-x-1/2 font-bold text-main">
          Comprehensive Care <br /> for Every Patient
        </h1>
        <div className="grid grid-cols-5 grid-rows-12 gap-5">
          <div className="w-full row-start-3 row-span-10 p-4 border-main border rounded-3xl text-main bg-[#fbfbfb]">
            <h3 className="text-5xl font-bold">90%</h3>
            <p className="my-2">
              Patient satisfaction rate, reflecting our commitment.
            </p>
            <div>
              <img src={Pie} alt="" />
            </div>
          </div>
          <div className="w-full row-start-7 p-4 row-span-6 border-main border rounded-3xl  text-main bg-[#fbfbfb]">
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="my-2">Board Certified Doctors</p>
            <div>
              <img className="w-20 h-12" src={certificate} alt="" />
            </div>
          </div>
          <div className="w-full row-start-8 p-4 row-span-5 border-main border rounded-3xl  text-main bg-[#fbfbfb]">
            <h3 className="text-5xl font-bold flex items-center">
              4.8{" "}
              <span className="text-5xl text-second">
                <FaStar />
              </span>
            </h3>
            <p className="my-2">Over 20,000 patients</p>
            <div>
              <img className="w-20 h-16" src={People} alt="" />
            </div>
          </div>

          <div className="w-full row-start-7 p-4 row-span-6 border-main border rounded-3xl  text-main bg-[#fbfbfb]">
            <h3 className="text-5xl font-bold">$5000</h3>
            <p className="my-2">Spend for poor patients</p>
            <div>
              <img className="w-20 h-12" src={coin} alt="" />
            </div>
          </div>
          <div className="w-full row-start-3 row-span-10 p-4  border-main border rounded-3xl  text-main bg-[#fbfbfb]">
            <h3 className="text-5xl font-bold">50+</h3>
            <p className="my-2">Free lession video for patient</p>
            <div>
              <img src={video} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
