import React from 'react';
import { Code2, Sparkles, Rocket } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ data }) => {
    const highlights = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable, scalable code following best practices"
        },
        {
            icon: Sparkles,
            title: "AI Integration",
            description: "Leveraging cutting-edge AI to build intelligent applications"
        },
        {
            icon: Rocket,
            title: "Fast Delivery",
            description: "Rapid development without compromising on quality"
        }
    ];

    return (
        <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Bio */}
                    <div className="space-y-6">
                        <div className="prose prose-lg prose-invert">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {data.bio}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <span className="text-gray-400 text-sm">📍 {data.location}</span>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <span className="text-gray-400 text-sm">📧 {data.email}</span>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <span className="text-gray-400 text-sm">📱 {data.phone}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Highlights */}
                    <div className="grid gap-6">
                        {highlights.map((item, index) => (
                            <Card
                                key={index}
                                className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                        <item.icon className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
