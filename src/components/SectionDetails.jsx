const SectionDetails = ({ header, title, description, buttonText }) => {
  return (
    <div className=" w-[400px]">
      <h4 className="rounded-full border-2 border-black w-fit py-2 px-4">
        {header}
      </h4>
      <h2 className="text-4xl mt-4 leading-[54px] font-semibold">{title}</h2>
      <p className="my-10">{description}</p>
      <button className="btn bg-second">{buttonText}</button>
    </div>
  );
};

export default SectionDetails;
