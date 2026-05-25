import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import FadeIn  from '../animations/FadeIn';

const Footer = () => {

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaXTwitter
  };


  return (
    <footer className='relative bg-black overflow-hidden border-t border-white/10'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <FadeIn delay={0}>
            <div>
              <h3 className="text-xl md:text-2xl font-bold bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent mb-4">
                {PERSONAL_INFO.name.split(' ')[0]}
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>

              <div className="space-y-3">
                <a href={`mailto:${PERSONAL_INFO.email}`} className='group flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 active:border-primary/30 transition-all duration-300'>
                  <div className="p-2 md:p-3 bg-primary/10 rounded-lg">
                    <Mail className='w-4 h-4 md:w-6 md:h-6 text-primary' />
                  </div>
                  <span className='text-white/70 text-sm group-hover:text-white transition-colors'>
                    {PERSONAL_INFO.email}
                  </span>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0}>
            <div className='md:text-right'>
              <h4 className="text-white font-semibold mb-6 text-sm md:text-lg">Connect with me</h4>
              <div className="flex gap-4 md:justify-end">
                  {SOCIAL_LINKS.map((social) => {
                      const Icon =
                        socialIcons[social.platform];

                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group rounded-xl border border-white/10 bg-white/5 p-3 md:p-4 transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-white/10 active:bg-white/10 active:border-primary/50 " 
                        >
                          <Icon className="text-2xl text-white transition-colors group-hover:text-primary" />
                        </a>
                      );
                    })}

              </div>
              
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0}>
          <div className="pt-4 md:pt-8 border-t border-white/10">
            <div className="flex flex-col items-center justify-between gap-4">
              <p className="text-white/50 text-xs md:text-sm">
                &copy;{new Date().getFullYear()} {PERSONAL_INFO.name}. All right reserved.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer