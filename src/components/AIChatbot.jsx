import React, { useState, useRef, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm Alex's AI assistant. Ask me anything about his skills, projects, or experience!"
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = inputMessage.trim();
        setInputMessage('');

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsTyping(true);

        // Mock AI response - will be replaced with actual API call
        setTimeout(() => {
            const responses = [
                "Alex is a highly skilled Full Stack Developer with expertise in React, Node.js, and AI integration. He has 5+ years of experience building scalable applications.",
                "Alex has worked on various impressive projects including AI Content Generator, Smart Task Manager, and Analytics Dashboard. Each project showcases his expertise in both frontend and backend development.",
                "His technical skills span across Frontend (React, Next.js, TypeScript), Backend (Node.js, Python, FastAPI), AI/ML (OpenAI, LangChain, TensorFlow), and DevOps (Docker, AWS, Kubernetes).",
                "Alex is currently working as a Senior Full Stack Developer at TechCorp Inc., where he leads the development of AI-powered enterprise solutions serving 100K+ users.",
                "You can reach Alex via email at alex.richardson@example.com or connect on LinkedIn, GitHub, or Twitter. He's always open to discussing new opportunities and projects!"
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <>
            {/* Chat button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl shadow-purple-500/50 hover:scale-110 transition-all duration-300 z-50 group"
                >
                    <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
                </Button>
            )}

            {/* Chat window */}
            {isOpen && (
                <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-slate-900/95 backdrop-blur-xl border-white/20 shadow-2xl z-50 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Bot className="h-6 w-6 text-white" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600"></span>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">AI Assistant</h3>
                                <p className="text-white/80 text-xs">Always here to help</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 rounded-full"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                        <div className="space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {message.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                            <Bot className="h-5 w-5 text-white" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[75%] rounded-2xl p-3 ${message.role === 'user'
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                            : 'bg-white/10 text-gray-200'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed">{message.content}</p>
                                    </div>
                                    {message.role === 'user' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0">
                                            <User className="h-5 w-5 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-3 justify-start">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        <Bot className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="bg-white/10 rounded-2xl p-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </ScrollArea>

                    {/* Input */}
                    <div className="p-4 border-t border-white/10">
                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <Input
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                                disabled={isTyping}
                            />
                            <Button
                                type="submit"
                                disabled={isTyping || !inputMessage.trim()}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4"
                            >
                                <Send className="h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                </Card>
            )}
        </>
    );
};

export default AIChatbot;
