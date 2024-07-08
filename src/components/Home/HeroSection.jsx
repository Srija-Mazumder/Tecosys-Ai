import ActiveButton from "../common/ActiveButton";
import { FaArrowRight } from "react-icons/fa6";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { words } from "../../data/Constant";
import "../../App.css";
import Lottie from "lottie-react";
import animationData from "../../data/RobortAnimation.json";
import { Link, useNavigate } from "react-router-dom";
import HoverButton from "../common/hoverButton";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-10/12 mt-2 mx-auto ">
        {/* <video
      src="/blackhole.webm" type="video/webm" 
      className="w-full h-[100vh] object-cover rotate-180"
      >
      </video> */}
        <div>
          <TextGenerateEffect
            words={words}
            className="w-[80%] mx-auto text-center text-richblack-25 text-6xl leading-tight "
          />
        </div>

        <div className="w-full flex items-center flex-col mt-10  content-container ">
          <Lottie
            animationData={animationData}
            loop={true}
            className="h-[70vh] pb-4 mb-4 "
          />

          <div className="relative z-10 flex gap-5 items-center">
            <a href="/Tecosys.pdf" target="_blank">
              <ActiveButton
                text={"Read Whitepaper"}
                customClasses="bg-[#5a10c4] hover:scale-90 transition-all duration-300 shadow-sm shadow-white"
                className="flex items-center cursor-pointer"
              >
                <FaArrowRight />
              </ActiveButton>
            </a>
            <Link to="/invest">
              <HoverButton text={"Invest Now"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
