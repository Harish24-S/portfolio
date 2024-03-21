import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iste
          vitae praesentium. Magni ipsam illum voluptate et temporibus
          necessitatibus consectetur delectus saepe praesentium sapiente ex
          dolorem natus repellendus reprehenderit officiis error, nostrum vel
          corrupti tempora eaque, neque facilis ducimus! Exercitationem laborum
          quae ipsam soluta facilis eum fugit cupiditate repellendus voluptas.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis
          quis neque aliquam, atque doloremque suscipit repellendus. Est nisi,
          facere hic aliquam consectetur minus rerum sed asperiores perferendis
          inventore, perspiciatis distinctio delectus sunt praesentium vitae
          illum labore aperiam magni at in nihil nostrum aut. Harum eaque ullam
          maxime natus nobis!
        </p>
      </div>
    </div>
  );
};

export default About;
