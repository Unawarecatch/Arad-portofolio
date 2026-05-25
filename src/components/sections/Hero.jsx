import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection
} from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { TbBrandAdobePremier, TbBrandAdobeIndesign, TbBrandAdobeAfterEffect } from "react-icons/tb";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black ">
      <RadialGradientBackground variant="hero" />
      
      {/* Content Container */}
      <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left Column - Content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-[10px] md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-3xl text-center font-black lg:text-left md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Graphic Desiger Portfolio
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-sm xs:text-[12px] md:text-lg text-center items-center mx-auto lg:mx-0 lg:text-left text-white/70 max-w-[550px] mb-8">
                Designing modern, engaing designs with Photoshop, Adobe Illustrator, and cutting-edge technologies. Transforming ideas into exceptional digital experience.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-0 mb-12 group">
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-sm md:text-base font-medium border border-white hover:bg-white/80 active:scale-95 transition-all duration-300 ">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div key={index} className="lg:text-left border-r border-white/50 pr-10 last:border-r-0">
                    <div className="text-2xl font-normal text-primary mb-2 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Right Column -Designer Image */}
          <div className="">
            <FadeIn delay={200}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-full md:rounded-2xl aspect-5/5 md:aspect-4/5 max-w-[200px] md:max-w-[350px] lg:max-w-120  mx-auto lg:ml-40 lg:mr-0 group">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-[-2px] bg-linear-to-r from-#21221 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                  </div>
                  {/* Image Container */}
                  <div className="relative rounded-full md:rounded-2xl overflow-hidden m-[1px] h-full">
                    <img src="/designer-portrait.png" alt="Designer protait"
                    className="w-full h-full object-cover rounded-full md:rounded-2xl"/>
                  </div>

                  {/* for Big screen Technology logos */}
                  <div className="hidden md:flex md:absolute md:bottom-6 md:left-5 lg:left-1/7 z-0">
                    <FadeIn delay={500}>
                      <div className="flex items-center gap-1 md:gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <DiPhotoshop className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <DiIllustrator className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <TbBrandAdobePremier className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <TbBrandAdobeIndesign className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <TbBrandAdobeAfterEffect className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <FaFigma className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <SiCanva className="w-full h-full text-primary" />
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
              {/* for small screen Technology logos */}
                  <div className="flex justify-center m-auto md:hidden mt-6">
                    <FadeIn delay={500}>
                      <div className="flex items-center gap-5 md:gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 justify-between">
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <DiPhotoshop className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <DiIllustrator className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <TbBrandAdobePremier className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <TbBrandAdobeIndesign className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <TbBrandAdobeAfterEffect className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <FaFigma className="w-full h-full text-primary" />
                        </div>

                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <SiCanva className="w-full h-full text-primary" />
                        </div>
                      </div>
                    </FadeIn>
                  </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicato */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
    </section>
  )
}

export default Hero