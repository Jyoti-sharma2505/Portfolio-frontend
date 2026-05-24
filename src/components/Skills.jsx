import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const Skills = ({ skills }) => {
    return (
        <section id="skills" className="py-20 sm:py-32 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 text-lg">Technologies I work with</p>
                </div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skillCategory, index) => (
                        <Card
                            key={index}
                            className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/[0.07] transition-all duration-300 group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full group-hover:h-10 transition-all duration-300"></span>
                                {skillCategory.category}
                            </h3>
                            <div className="space-y-6">
                                {skillCategory.technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 font-medium">{tech.name}</span>
                                            <span className="text-blue-400 text-sm font-semibold">{tech.level}%</span>
                                        </div>
                                        <Progress
                                            value={tech.level}
                                            className="h-2 bg-white/10"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
