const SectionDetails = ({ header, title, description, buttonText }) => {
  return (
    <div className=" w-[400px]">
      <h4 className="rounded-full text-main border-2 border-black w-fit py-2 px-4">
        {header}
      </h4>
      <h2 className="text-4xl mt-4 leading-[54px] font-semibold text-main">
        {title}
      </h2>
      <p className="my-10 text-main">{description}</p>
      <button className="btn bg-second">{buttonText}</button>
    </div>
  );
};

export default SectionDetails;
