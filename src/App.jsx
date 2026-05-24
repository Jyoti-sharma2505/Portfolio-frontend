import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { getPortfolioData, getSkills, getProjects, getExperience } from './services/api';

function App() {
  const [loading, setLoading] = useState(true);
  const [portfolioDataState, setPortfolioDataState] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let portfolio = null;
        let skillsData = [];
        let projectsData = [];
        let experienceData = [];

        try {
          portfolio = await getPortfolioData();
        } catch (e) {
          console.warn("Failed to fetch portfolio data, using mock fallback", e);
        }

        try {
          skillsData = await getSkills();
        } catch (e) {
          console.warn("Failed to fetch skills, using mock fallback", e);
        }

        try {
          projectsData = await getProjects();
        } catch (e) {
          console.warn("Failed to fetch projects, using mock fallback", e);
        }

        try {
          experienceData = await getExperience();
        } catch (e) {
          console.warn("Failed to fetch experience, using mock fallback", e);
        }

        const personal = portfolio?.personal || {};

        const finalSkills = skillsData || [];

        const finalProjects = projectsData || [];

        const finalExperience = experienceData || [];

        setPortfolioDataState(personal);
        setSkills(finalSkills);
        setProjects(finalProjects);
        setExperience(finalExperience);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load portfolio data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="App bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-slate-950 min-h-screen">
      <Hero data={portfolioDataState} />
      <About data={portfolioDataState} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Contact data={portfolioDataState} />
      <Footer data={portfolioDataState} />
      <AIChatbot />
      <Toaster />
    </div>
  );
}

export default App;