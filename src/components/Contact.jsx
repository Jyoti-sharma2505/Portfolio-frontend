import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { submitContactForm } from '../services/api';

const Contact = ({ data }) => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await submitContactForm(formData);
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon!",
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 text-lg">Let's build something amazing together</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's talk about your project</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I'm always interested in hearing about new projects and opportunities.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Card className="p-4 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                                        <Mail className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-white font-medium">{data.email}</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                                        <Phone className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <p className="text-white font-medium">{data.phone}</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                                        <MapPin className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Location</p>
                                        <p className="text-white font-medium">{data.location}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Contact form */}
                    <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <Send className="h-5 w-5" />
                                        Send Message
                                    </span>
                                )}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;
