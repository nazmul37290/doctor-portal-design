import { Swiper, SwiperSlide } from "swiper/react";
import person from "../assets/images/person.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "../Shared/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="">
      <div className="text-main">
        <h4 className="rounded-full border-2 border-black w-fit py-2 px-4">
          Testimonial
        </h4>
        <h2 className="text-4xl mt-4 leading-[54px] font-semibold">
          What they say about us
        </h2>
      </div>
      <div className="mt-10 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <TestimonialCard
              description="I cant thank enough for their exceptional care. The doctors and staff
        showed incredible expertise and compassion throughout my treatment
        journey. I felt truly cared for every step of the way."
              name="Sarah D"
              profession="IT Professional"
              image={person}
              title="Expertise and Compassion Combined"
            ></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              description="My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life."
              name="Michel R"
              profession="Business Executive"
              image={person}
              title="Life-Saving Care, Life-Changing Experience"
            ></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              description="As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and"
              name="David S"
              profession="Lawyer"
              image={person}
              title="A Partner in Health and
Wellness"
            ></TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              description="I cant thank enough for their exceptional care. The doctors and staff
        showed incredible expertise and compassion throughout my treatment
        journey. I felt truly cared for every step of the way."
              name="Sarah D"
              profession="IT Professional"
              image={person}
              title="Expertise and Compassion Combined"
            ></TestimonialCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
