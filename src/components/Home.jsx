import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 py-10 md:py-1"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm an aspiring Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          As a graduating Computer Science student, my enthusiasm for software & product development fuels my eagerness to create products that leave a significant mark in the industry.

          </p>

          <div>
            <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="pl-0.5 group-hover:rotate-90 duration-300">
                <MdKeyboardDoubleArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
