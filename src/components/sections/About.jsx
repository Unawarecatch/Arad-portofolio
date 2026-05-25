import React, { useState } from 'react';
import { Download, VectorSquare, Code2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants";
import { scrollToSection
} from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { TbBrandAdobePremier, TbBrandAdobeIndesign, TbBrandAdobeAfterEffect } from "react-icons/tb";
import { FaFigma } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';



const About = () => {

  //skills
  const skills = [
    { name: 'Logo' },
    { name: 'Branding' },
    { name: 'Social Media' },
    { name: 'Packaging' },
    { name: 'Print Media' },
    { name: 'Motion Design' },
    { name: 'UI/UX' },
  ]

  return <section id='about' className='relative py-20 md:pt-24 bg-black overflow-hidden'>
      <RadialGradientBackground variant='hero' />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column --Content */}
          <div className="flex flex-col gap-12 text-center lg:text-left">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                  <VectorSquare className='w-4 h-4 text-primary' />
                  <span className='text-sm text-primary font-medium'>
                    Ui/Ux Designer
                  </span>
                  <Sparkles className='w-4 h-4 text-primary' />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className='sub-heading'>
                  Crafting seamless digital experiences
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p key={index} className='text-sm text-white/70 leading-relaxed xs:text-[12px] md:text-lg text-center items-center mx-auto lg:mx-0 lg:text-left max-w-[550px]'>
                    {paragraph}
                  </p>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 rounded-full"></div>
                    <div className="text-xl font-normal text-white font-mono">
                      {stat.value}
                    </div>
                    <p className='text-sm text-white/60 leading-snug mb-2'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <button
                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')} className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-6 md:px-8 py-4 text-[12px] md:text-base font-medium transition-all duration-300 active:scale-90'>
                  <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                  Download Resume
                </button>
            </FadeIn>
          </div>

          {/* Right Column - Info Content */}
          <FadeIn delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 relative group">
                    <div className="skill-main-box"></div>
                    <div className="skill-box">
                      <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                            <VectorSquare className='w-4 h-4 md:w-5 md:h-5 text-primary' />
                          </div>
                          <div className="">
                            <h3 className="text-xs md:text-lg font-semibold text-white mb-2">Expertise</h3>
                            <p className="text-xs font-thin lg:font-light md:text-[16px] text-white/70 leading-relaxed">
                              Specailized in designing eye-catching vectors and graphics
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="skill-main-box"></div>
                    <div className="skill-box min-h-56">
                        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                          <Sparkles className='w-4 h-4 md:w-5 md:h-5 text-primary' />
                        </div>
                          <h3 className="text-xs md:text-lg font-semibold text-white mb-2">Brand Identity Design</h3>
                          <p className="text-xs font-thin lg:font-light md:text-[16px] text-white/70 leading-relaxed">
                        Created logo, color palette, and full brand system for a business
                          </p>
                      </div>
                  </div>

                  <div className="relative group">
                    <div className="skill-main-box"></div>
                    <div className="skill-box min-h-56">
                        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                          <Download className='w-4 h-4 md:w-5 md:h-5 text-primary' />
                        </div>
                        <h3 className="text-xs md:text-lg font-semibold text-white mb-2">Performance</h3>
                        <p className='text-xs font-thin lg:font-light md:text-[16px] text-white/70 leading-relaxed'>
                          Applied branding consistently across social media and print materials
                        </p>
                    </div>
                  </div>
                  
                  

                  <div className="col-span-2 relative group">
                    <div className="skill-main-box"></div>
                    <div className="skill-box">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-xs md:text-xl font-black font-decor text-primary mb-2">100%</div>
                          <div className="text-xs text-white-60">Client Satisfaction</div>
                        </div>
                        <div>
                          <div className="text-xs md:text-xl font-black text-primary mb-2 font-decor">24/7</div>
                          <div className="text-xs text-white-60">Check Avialble</div>
                        </div>
                        <div>
                          <div className="text-xs md:text-xl font-decor font-black text-primary mb-2">Fast</div>
                          <div className="text-xs text-white-60">Delivery Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </FadeIn>
        </div>
      </div>
  </section>
};


export default About