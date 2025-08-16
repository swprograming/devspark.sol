import React from "react";
import me from "../assets/me.jpg"
const Story = () => {
  return (
    <section className="w-full py-20 px-8 bg-white">
      <div className="max-w-[1197px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image  */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img
              src={me}
              alt="Solomon Wondwesen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text  */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-6">My Story</h2>
          <p className="text-lg leading-8 text-gray-700">
            My name is <span className="font-semibold">Solomon Wondwesen</span>,
            a highly motivated and passionate creative developer based in Addis
            Ababa. I started my journey in tech at a young age, building small
            websites and experimenting with different tools. Over time my
            curiosity grew into a strong passion for <span className="text-[#A2D729] font-semibold">design</span> and{" "}
            <span className="text-[#A2D729] font-semibold">full-stack
            development</span>.
          </p>
          <p className="text-lg leading-8 text-gray-700 mt-4">
            Aside from coding, I also enjoy working on{" "}
            <span className="text-[#A2D729] font-semibold">video and photo
            editing</span>, where I get to explore my creative side. My goal is
            to build products that are not only functional, but also meaningful
            and visually engaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
