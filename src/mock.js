export const portfolioData = {
    personal: {
        name: "Alex Richardson",
        title: "Full Stack Developer & AI Enthusiast",
        tagline: "Building intelligent web experiences that make a difference",
        bio: "I'm a passionate full-stack developer with 5+ years of experience in building scalable web applications. I specialize in React, Node.js, and AI integration to create innovative solutions that solve real-world problems.",
        email: "alex.richardson@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        github: "https://github.com/alexrichardson",
        linkedin: "https://linkedin.com/in/alexrichardson",
        twitter: "https://twitter.com/alexrichardson"
    },
    skills: [
        {
            category: "Frontend",
            technologies: [
                { name: "React", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "TypeScript", level: 88 },
                { name: "Tailwind CSS", level: 92 },
                { name: "Redux", level: 85 }
            ]
        },
        {
            category: "Backend",
            technologies: [
                { name: "Node.js", level: 93 },
                { name: "Python", level: 90 },
                { name: "FastAPI", level: 87 },
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 82 }
            ]
        },
        {
            category: "AI & ML",
            technologies: [
                { name: "OpenAI API", level: 88 },
                { name: "LangChain", level: 85 },
                { name: "TensorFlow", level: 75 },
                { name: "Vector DBs", level: 80 },
                { name: "RAG Systems", level: 83 }
            ]
        },
        {
            category: "DevOps & Tools",
            technologies: [
                { name: "Docker", level: 86 },
                { name: "Git", level: 95 },
                { name: "AWS", level: 80 },
                { name: "CI/CD", level: 82 },
                { name: "Kubernetes", level: 75 }
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI Content Generator",
            description: "A powerful SaaS platform that uses GPT-4 to generate high-quality content for blogs, social media, and marketing materials.",
            technologies: ["React", "Node.js", "OpenAI", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            github: "https://github.com/alexrichardson/ai-content-gen",
            demo: "https://ai-content-gen.demo.com",
            featured: true
        },
        {
            id: 2,
            title: "Smart Task Manager",
            description: "An intelligent task management app with AI-powered prioritization and smart scheduling recommendations.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
            github: "https://github.com/alexrichardson/smart-tasks",
            demo: "https://smart-tasks.demo.com",
            featured: true
        },
        {
            id: 3,
            title: "E-Commerce Platform",
            description: "Full-featured e-commerce platform with real-time inventory, payment processing, and AI-powered product recommendations.",
            technologies: ["React", "Express", "MongoDB", "Stripe", "Redis"],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
            github: "https://github.com/alexrichardson/ecommerce",
            demo: "https://ecommerce.demo.com",
            featured: false
        },
        {
            id: 4,
            title: "Real-Time Chat Application",
            description: "Scalable chat application with WebSocket support, end-to-end encryption, and AI chatbot integration.",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
            image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
            github: "https://github.com/alexrichardson/realtime-chat",
            demo: "https://chat.demo.com",
            featured: false
        },
        {
            id: 5,
            title: "Analytics Dashboard",
            description: "Comprehensive analytics dashboard with real-time data visualization and predictive insights using machine learning.",
            technologies: ["React", "D3.js", "Python", "FastAPI", "TensorFlow"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            github: "https://github.com/alexrichardson/analytics",
            demo: "https://analytics.demo.com",
            featured: true
        },
        {
            id: 6,
            title: "Portfolio Builder",
            description: "No-code portfolio builder with drag-and-drop interface, custom themes, and one-click deployment.",
            technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            github: "https://github.com/alexrichardson/portfolio-builder",
            demo: "https://portfolio-builder.demo.com",
            featured: false
        }
    ],
    experience: [
        {
            id: 1,
            company: "TechCorp Inc.",
            position: "Senior Full Stack Developer",
            duration: "2022 - Present",
            description: "Leading development of AI-powered enterprise solutions. Built scalable microservices architecture serving 100K+ users.",
            achievements: [
                "Reduced API response time by 60% through optimization",
                "Led team of 5 developers on major product redesign",
                "Implemented CI/CD pipeline reducing deployment time by 80%"
            ]
        },
        {
            id: 2,
            company: "StartupXYZ",
            position: "Full Stack Developer",
            duration: "2020 - 2022",
            description: "Developed core features for SaaS platform. Worked on both frontend and backend, focusing on performance and user experience.",
            achievements: [
                "Built real-time collaboration features using WebSocket",
                "Improved application performance by 45%",
                "Integrated payment processing with Stripe"
            ]
        },
        {
            id: 3,
            company: "Digital Agency Co.",
            position: "Frontend Developer",
            duration: "2019 - 2020",
            description: "Created responsive web applications for various clients. Specialized in React and modern CSS frameworks.",
            achievements: [
                "Delivered 15+ client projects on time",
                "Improved code quality with testing coverage >80%",
                "Mentored junior developers"
            ]
        }
    ],
    chatbotMessages: [
        {
            role: "assistant",
            content: "Hi! I'm Alex's AI assistant. Ask me anything about his skills, projects, or experience!"
        }
    ]
};
