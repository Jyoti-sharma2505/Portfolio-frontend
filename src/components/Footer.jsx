import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                {data.name.split(' ')[0]}
                            </span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {data.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-3">
                            <a
                                href={data.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400 transition-all duration-300 group"
                            >
                                <Github className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            </a>
                            <a
                                href={data.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400 transition-all duration-300 group"
                            >
                                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            </a>
                            <a
                                href={data.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400 transition-all duration-300 group"
                            >
                                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            </a>
                            <a
                                href={`mailto:${data.email}`}
                                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400 transition-all duration-300 group"
                            >
                                <Mail className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} {data.name}. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                        Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & AI
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
