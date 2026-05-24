import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = [
        data.title,
        "MERN Stack Expert",
        "AI Integration Specialist",
        "Problem Solver"
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Welcome text */}
                    <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                        <span className="text-sm text-gray-300">👋 Welcome to my portfolio</span>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            {data.name}
                        </span>
                    </h1>

                    {/* Animated title */}
                    <div className="h-20 sm:h-24 mb-2">
                        <h2 className="text-4xl sm:text-4xl lg:text-6xl font-semibold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                {text}
                            </span>
                            <span className="animate-pulse">|</span>
                        </h2>
                    </div>

                    {/* Tagline */}
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        {data.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 mt-10">
                        <Button
                            onClick={scrollToContact}
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105"
                        >
                            Get In Touch
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            View My Work
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center">
                        <a
                            href={data.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                        >
                            <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href={data.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                        >
                            <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href={data.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                        >
                            <Twitter className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href={`mailto:${data.email}`}
                            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                        >
                            <Mail className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
