import SectionDetails from "./SectionDetails";
import image from "../assets/images/Rectangle24.png";

const WhoAreWe = () => {
  return (
    <div className="flex justify-between mt-24">
      <SectionDetails
        header="who we are"
        title="We help to get Solutions"
        description="We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve."
        buttonText="Learn more"
      ></SectionDetails>

      <div className="relative">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={image}
          alt=""
        />
        <div className="bg-[#343268] text-[#ffff] w-[350px] py-10 px-5 rounded-3xl -bottom-8 -left-24 absolute">
          <h3 className="text-xl mb-2 font-bold">Our mission is simple</h3>
          <p className="text-sm">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
