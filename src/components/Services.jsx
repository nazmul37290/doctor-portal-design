import ServiceCard from "../Shared/ServiceCard";
import SectionDetails from "./SectionDetails";
import cardImage1 from "../assets/images/Rectangle 27-1.png";
import cardImage2 from "../assets/images/Rectangle 27-2.png";
import cardImage3 from "../assets/images/Rectangle 27.png";

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-5 bg-[#fffff5] p-10 rounded-3xl ">
      <div>
        <SectionDetails
          title={"Empowering Health, Enriching Lives"}
          header="Services"
          description={
            "We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness."
          }
          buttonText="Appointment"
        ></SectionDetails>
      </div>
      <div>
        <ServiceCard
          image={cardImage2}
          title={"Advanced Technology"}
          description={
            "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
          }
        ></ServiceCard>
      </div>
      <div>
        <ServiceCard
          image={cardImage1}
          title={"Online Doctor Meet"}
          description={
            "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision "
          }
        ></ServiceCard>
      </div>
      <div>
        <ServiceCard
          image={cardImage3}
          title={"Consultancy your health"}
          description={
            "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
          }
        ></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
