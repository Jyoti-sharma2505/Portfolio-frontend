import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const Projects = ({ projects }) => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : filter === 'featured'
            ? projects.filter(p => p.featured)
            : projects;

    return (
        <section id="projects" className="py-20 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 text-lg">Some of my recent work</p>
                </div>

                {/* Filter tabs */}
                <Tabs defaultValue="all" className="mb-12">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/5 backdrop-blur-sm border border-white/10">
                        <TabsTrigger value="all" onClick={() => setFilter('all')}>All Projects</TabsTrigger>
                        <TabsTrigger value="featured" onClick={() => setFilter('featured')}>Featured</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/[0.07] transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                        >
                            {/* Project image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white">Featured</Badge>
                                    </div>
                                )}
                            </div>

                            {/* Project details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 4).map((tech, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 border-white/20 bg-white/5 hover:bg-white/10 text-white"
                                        onClick={() => window.open(project.github, '_blank')}
                                    >
                                        <Github className="h-4 w-4 mr-2" />
                                        Code
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                                        onClick={() => window.open(project.demo, '_blank')}
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Demo
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
