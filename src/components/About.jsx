import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-l mt-20">
        My name is Harish Sarika, and I am a recent graduate with a Bachelor's degree in Computer Science from Lovely Professional University.
        Over the past four years, my passion for Web and Product development has grown, leading me to bring to life various projects. Notably, I crafted the "HMovies" website, a platform enabling users to seamlessly explore the latest movie and TV show trailers at one place. Additionally, I have also created a versatile password generator tool that empowers users to generate secure, randomized passwords based on specific criteria. 
        </p>

        <br />

        <p className="text-l">
        In addition to my project portfolio, I've had the privilege of collaborating with dynamic startups during my internships. I had the opportunity to contribute to the Healthplix team, spearheading the product feature of a refer & earn program and collaborating on its successful scaling to reach a wider audience and increased user engagement. My experience extended to SlamDunk, an US-based product, where I crafted their website utilizing no-code tools. Furthermore, I engaged with product marketing & consultancy startups such as TPCS & HighRadius, leveraging social media and partnerships to amplify their outreach to a wider audience fostering better brand recognition and market expansion.
        </p>

        <br />

        <p className="text-l">
        These projects and internships have helped me garner experience across multiple platforms giving an exposure to front-end development, product management, UI design, along with using new-age technologies for effective product development.
        </p>
      </div>
    </div>
  );
};

export default About;
