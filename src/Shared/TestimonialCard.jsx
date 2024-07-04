const TestimonialCard = ({ title, description, image, name, profession }) => {
  return (
    <div className="bg-[#fffff5] rounded-3xl text-main p-10">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="my-4">{description}</p>
      <div className="flex items-center gap-4">
        <img src={image} className="h-12 w-12 rounded-full" alt="" />
        <div>
          <p className="space-x-2">
            <span className="font-semibold">{name}</span>
            <span>{profession}</span>
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-second"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-second"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-second"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-second"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-second"
              defaultChecked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
