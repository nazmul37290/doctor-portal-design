const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="relative mb-5">
      <img src={image} className="rounded-3xl w-full h-full" alt="" />
      <div className="bg-[#343268af] text-[#ffff] w-[350px] py-10 px-5 rounded-3xl bottom-4 left-4 absolute">
        <h3 className="text-xl mb-2 font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="rounded-full h-12 w-12 bg-second absolute bottom-2 right-4"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
