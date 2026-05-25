import { useState } from 'react'
import { Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: "error", message: "Please fill in all the fields" });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: "error", message: "Please enter a valid email" });
            return;
        }

        try {
            setStatus({ type: "loading", message: "Sending message..." });

            const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
            throw new Error(data.message || "Something went wrong");
            }

            setStatus({
            type: "success",
            message: data.message || "Message sent successfully!",
            });

            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => {
            setStatus({ type: "", message: "" });
            }, 5000);
        } catch (error) {
            setStatus({
            type: "error",
            message: error.message || "Failed to send message",
            });
        }
        };

    return (
        <section id='contact' className='relative py-20 md:pt-24 bg-black overflow-hidden'>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 lg:left-1/6 w-96 h-96 lg:w-120 lg:h-120 bg-primary/10 rounded-full opacity-30 blur-3xl" />
                <div className='absolute bottom-1/4 right-1/8 w-96 h-96 bg-primary/10 rounded-full opacity-30 blur-3xl lg:w-120 lg:h-120' />
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full opacity-30 blur-3xl lg:w-120 lg:h-120" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <FadeIn delay={10}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <MessageSquare className='w-4 h-4 text-primary' />
                            <span className="text-sm text-primary font-medium tracking-wider uppercase">Get In Touch</span>
                        </div>
                        <h2 className="sub-heading mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-white/60 mx-auto text-sm leading-relaxed xs:text-[12px] md:text-lg text-center items-center max-w-137.5">
                            Have a project in mind? Let's discuss how we can bring your ideas to life.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12">
                    <FadeIn delay={100}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:max-w-140 mx-auto lg:mx-0">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-white/80 mb-2">Name</label>
                                    <input type="text" id='name' name="name" value={formData.name} onChange={handleChange} className='w-full text-sm lg:text-[16px] px-3 py-2 md:p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300' placeholder='Your name'/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='your.email@example.com' className='w-full text-sm lg:text-[16px] px-3 py-2 md:p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-3000' />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2"> Message</label>
                                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} placeholder='Tell me about your project...' className='w-full text-sm lg:text-[16px] px-3 py-2 md:p-4  bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none'  />
                                </div>

                                <button type="submit" className='w-full px-6 py-3 md:py-4 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 active:scale-96 transition-all duration-300 flex items-center justify-center gap-2 group'>
                                    <span>Send Message</span>
                                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                                </button>

                                {status.message && (
                                    <div 
                                        className={`p-4 rounded-xl ${status.type === 'success'
                                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                        }`} >
                                            {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </FadeIn>


                    <FadeIn delay={300}>
                        <div className="hidden lg:flex text-center rounded-2xl">
                            <img src="./images/arad_flyer.png" alt="" className='rounded-2xl hover:scale-99 transition-all duration-300 md:max-w-135 ml-auto' />
                        </div>
                    </FadeIn>
                </div>
            </div>
            
        </section>
    )
}

export default Contact