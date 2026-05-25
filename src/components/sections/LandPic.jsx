import React from 'react'
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const LandPic = () => {
    return (
        <section>
        <FadeIn delay={400}>
            <div className="relative max-w-100vh mt-5 overflow-hidden">
            <img src="/hero-pic.png" alt="Landing Image" className='w-full h-full' />
            
            {/* Top & Bottom black fade */}
            <div className="absolute -inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            
            
                <FadeIn delay={500} duration={4000}>
                    <div className="absolute text-[10px] text-primary font-decor bottom-[43%] right-[16%] md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl ">Jesufemi Adeniyi</div>
                </FadeIn>
            
            </div>
        </FadeIn>
    </section>
   
  )
}

export default LandPic