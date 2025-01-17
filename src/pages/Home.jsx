/* eslint-disable no-unused-vars */

import HeroSection from "../components/Home/HeroSection";
import ServicesAnimation from "../components/ServicesAnimation";
import GeminiSection from "../components/GeminiSection";
import ParticlesComponent from "../components/common/ParticleBacground";
import SparklesCore from "../components/ui/sparkles";
import Collaborators from "../components/Collaborators";
import ContactUs from "../components/Home/ContactUs";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div className="text-richblack-5">
      <ParticlesComponent id="particles"  />
    
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      
      <HeroSection />
      <AboutUs/>
      <ServicesAnimation/>
      <Collaborators/>
      <ContactUs />
      <GeminiSection />
    </div>
  );
}

export default Home;
