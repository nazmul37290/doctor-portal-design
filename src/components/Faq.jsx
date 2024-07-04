const Faq = () => {
  return (
    <div className="mt-32">
      <div className="mb-10 text-main">
        <h4 className="rounded-full border-2 border-black w-fit py-2 px-4">
          Faq
        </h4>
        <h2 className="text-4xl mt-4 leading-[54px] font-semibold">
          Frequently Asked Questions
        </h2>
      </div>
      <div>
        <div className="collapse collapse-plus text-main my-4 px-5 bg-[#fffff5]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl  font-medium">
            What are your office hours?
          </div>
          <div className="collapse-content">
            <p>
              Our Office Hours Vary By Location, But Typically We Are Open
              Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May
              Offer Extended Hours Or Weekend Appointments. Please Contact Your
              Nearest Clinic For Specific Hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus text-main my-4 px-5 bg-[#fffff5]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How Can I Schedule An Appointment?
          </div>
          <div className="collapse-content">
            <p>
              Our Office Hours Vary By Location, But Typically We Are Open
              Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May
              Offer Extended Hours Or Weekend Appointments. Please Contact Your
              Nearest Clinic For Specific Hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus text-main my-4 px-5 bg-[#fffff5]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do You Accept Insurance?
          </div>
          <div className="collapse-content">
            <p>
              Our Office Hours Vary By Location, But Typically We Are Open
              Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May
              Offer Extended Hours Or Weekend Appointments. Please Contact Your
              Nearest Clinic For Specific Hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus text-main my-4 px-5 bg-[#fffff5]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What Should I Bring To My Appointment?
          </div>
          <div className="collapse-content">
            <p>
              Our Office Hours Vary By Location, But Typically We Are Open
              Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May
              Offer Extended Hours Or Weekend Appointments. Please Contact Your
              Nearest Clinic For Specific Hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus text-main my-4 px-5 bg-[#fffff5]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do You Offer Telemedicine Appointments?
          </div>
          <div className="collapse-content">
            <p>
              Our Office Hours Vary By Location, But Typically We Are Open
              Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May
              Offer Extended Hours Or Weekend Appointments. Please Contact Your
              Nearest Clinic For Specific Hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
