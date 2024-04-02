import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Experience = () => {
  const internships = [
    {
      id: 1,
      title: "UpGrad Campus",
      subtitle: "Full Stack Development Intern",
      date: "01/2024 - Present",
      data: "UpGrad Campus is an affiliate of upGrad, India's largest online higher education company, Campus's goal is to make every graduate job-ready, with professional skills and practical know-how for sought-after fields of work.",
    },
    {
      id: 2,
      title: "HealthPlix",
      subtitle: "Product Management Intern",
      date: "05/2022 - 07/2022",
      data: "HealthPlix is India’s largest EMR platform used by 10K doctors, generating 100,000 prescriptions daily. HealthPlix has pioneered the digitization of healthcare through its future-ready AI-powered EMR platform for doctors in India.",
    },
    {
      id: 3,
      title: "Slamdunk.ai",
      subtitle: "Web Development Intern",
      date: "12/2021 - 02/2022",
      data: "SlamDunk.ai is a next-generation AI coach platform to learn a new sport. Slamdunk.ai is powered by a custom, next-generation AI coach that runs on any device with a camera.",
    },
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black text-white md:h-screen py-10 md:py-1"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">Check out some of my internships right here!</p>
        </div>

        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0 gap-8'> */}
        <Slider {...settings}>
          {internships.map(({ id, title, subtitle, date, data }) => (
            <a
              href="https://www.linkedin.com/in/harish-sarika/#experience"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <div
                key={id}
                className="h-[320px] shadow-md shadow-gray-600 rounded-lg p-6 duration-200 hover:scale-105 cursor-pointer"
              >
                <p className="text-2xl font-bold">{title}</p>
                <p className="font-semibold py-2">{subtitle}</p>
                <p className="text-gray-400">{date}</p>
                <p className="text-gray-400 py-2">{data}</p>
              </div>
            </a>
          ))}

          {/* </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
