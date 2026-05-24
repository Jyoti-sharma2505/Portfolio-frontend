import React from 'react';
import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import { getExperience } from '../services/api';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={exp.id} className="relative pl-20">
                                {/* Timeline dot */}
                                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-4 border-slate-950 shadow-lg shadow-purple-500/50 animate-pulse"></div>

                                <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/[0.07] transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20">
                                    {/* Company and duration */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {exp.position}
                                            </h3>
                                            <p className="text-blue-400 font-semibold mt-1">{exp.company}</p>
                                        </div>
                                        <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-300 text-sm font-medium">
                                            {exp.duration}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-4">{exp.description}</p>

                                    {/* Achievements */}
                                    <div className="space-y-2">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300 text-sm">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
