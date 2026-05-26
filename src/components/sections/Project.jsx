import React from 'react'
import {  VectorSquare, Sparkles } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Project = () => {
    return (
    
        <section id="projects" className='relative py-20  md:pt-24 bg-black overflow-hidden'>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <FadeIn delay={60}>
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                        <VectorSquare className='w-4 h-4 text-primary' />
                        <span className='text-sm text-primary font-medium'>
                        Brand Design
                        </span>
                        <Sparkles className='w-4 h-4 text-primary' />
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <h2 className='sub-heading mt-7'>
                    Some Designs 
                    </h2>
                </FadeIn>
                
                <div className="flex justify-center mt-16 mx-auto items-center flex-col gap-12">
                    <div className="">
                          <img src='./images/folabakery.jpg'/>
                    </div>
                    <div className="">
                        <img src="./images/house_estate.png" alt="" className=''/>
                    </div>
                </div>
            </div>
            
    </section>
    
    )
}

export default Project