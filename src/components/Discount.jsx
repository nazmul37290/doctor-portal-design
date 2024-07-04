import img from "../assets/images/Rectangle 32.png";
import logo from "../assets/images/logo-light.png";
const Discount = () => {
  return (
    <div className="py-32">
      <div className="relative rounded-3xl">
        <img src={img} className="w-full  rounded-3xl h-full" alt="" />
        <div className="overlay2  absolute h-full  rounded-3xl w-full top-0"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-20 w-full">
          <div className="w-[300px] ">
            <h2 className="capitalize text-4xl leading-[60px] font-semibold text-[#ffff]">
              Get your first appointment at 50% off!
            </h2>
            <div className="flex gap-5 mt-10">
              <button className="btn bg-second">Appointment</button>
              <button className="btn btn-outline border border-[#ffff] text-[#ffff]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img src={logo} className=" absolute top-10 right-10 " alt="" />
      </div>
    </div>
  );
};

export default Discount;
