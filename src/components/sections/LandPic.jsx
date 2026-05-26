import React from 'react'
import FadeIn from "../animations/FadeIn";
import { ChevronDown } from "lucide-react";
import { scrollToSection
} from "../../hooks/useScrollSpy";

const LandPic = () => {
    return (
        <section className='relative'>
        <FadeIn delay={400}>
            <div className="relative max-w-100vh mt-5 overflow-hidden">
            <img src="/hero-pic.png" alt="Landing Image" className='w-full h-full' />
            
            {/* Top & Bottom black fade */}
            <div className="absolute -inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            
            
                <FadeIn delay={500} duration={4000}>
                    <div className="absolute text-[10px] text-primary font-decor bottom-[43%] right-[16%] md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl ">Jesufemi Adeniyi</div>
                </FadeIn>
            
            </div>
                
             {/* Scroll Indicato */}
            <button
                onClick={() => scrollToSection('hero')}
                className="hidden lg:flex absolute bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2 animate-bounce"
                >
                <ChevronDown className="w-8 h-8 text-primary" />
            </button>
        </FadeIn>
    </section>
   
  )
}

export default LandPic