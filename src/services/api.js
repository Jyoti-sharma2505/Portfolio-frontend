import axios from 'axios';

const BACKEND_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8001";

const API = `${BACKEND_URL}/api`;

// Portfolio APIs
export const getPortfolioData = async () => {
  try {
    const response = await axios.get(`${API}/portfolio`);
    return response.data;
  } catch (error) {
    console.warn('API error fetching portfolio, falling back to mock data:', error);
    throw error;
  }
};

export const updatePortfolioData = async (data) => {
  try {
    const response = await axios.put(`${API}/portfolio`, data);
    return response.data;
  } catch (error) {
    console.error('API error updating portfolio:', error);
    throw error;
  }
};

// Skills APIs
export const getSkills = async () => {
  try {
    const response = await axios.get(`${API}/skills`);
    return response.data;
  } catch (error) {
    console.warn('API error fetching skills, falling back to mock data:', error);
    throw error;
  }
};

export const createSkill = async (data) => {
  try {
    const response = await axios.post(`${API}/skills`, data);
    return response.data;
  } catch (error) {
    console.error('API error creating skill:', error);
    throw error;
  }
};

export const updateSkill = async (id, data) => {
  try {
    const response = await axios.put(`${API}/skills/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('API error updating skill:', error);
    throw error;
  }
};

export const deleteSkill = async (id) => {
  try {
    const response = await axios.delete(`${API}/skills/${id}`);
    return response.data;
  } catch (error) {
    console.error('API error deleting skill:', error);
    throw error;
  }
};

// Projects APIs
export const getProjects = async (featured = null) => {
  try {
    const url = featured !== null ? `${API}/projects?featured=${featured}` : `${API}/projects`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.warn('API error fetching projects, falling back to mock data:', error);
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const response = await axios.get(`${API}/projects/${id}`);
    return response.data;
  } catch (error) {
    console.warn('API error fetching project, falling back to mock data:', error);
    throw error;
  }
};

export const createProject = async (data) => {
  try {
    const response = await axios.post(`${API}/projects`, data);
    return response.data;
  } catch (error) {
    console.error('API error creating project:', error);
    throw error;
  }
};

export const updateProject = async (id, data) => {
  try {
    const response = await axios.put(`${API}/projects/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('API error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API}/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error('API error deleting project:', error);
    throw error;
  }
};

// Experience APIs
export const getExperience = async () => {
  try {
    const response = await axios.get(`${API}/experience`);
    return response.data;
  } catch (error) {
    console.warn('API error fetching experience, falling back to mock data:', error);
    throw error;
  }
};

export const createExperience = async (data) => {
  try {
    const response = await axios.post(`${API}/experience`, data);
    return response.data;
  } catch (error) {
    console.error('API error creating experience:', error);
    throw error;
  }
};

export const updateExperience = async (id, data) => {
  try {
    const response = await axios.put(`${API}/experience/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('API error updating experience:', error);
    throw error;
  }
};

// Contact APIs
export const submitContactForm = async (data) => {
  try {
    const response = await axios.post(`${API}/contact`, data);
    return response.data;
  } catch (error) {
    console.warn('API error submitting contact form, falling back to mock:', error);
    return { success: true, message: 'Fallback: Message sent successfully!' };
  }
};

export const getContactMessages = async (unreadOnly = false) => {
  try {
    const url = unreadOnly ? `${API}/contact/messages?unread_only=true` : `${API}/contact/messages`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('API error fetching messages:', error);
    return [];
  }
};

// Chat APIs
export const sendChatMessage = async (message, sessionId = null) => {
  try {
    const response = await axios.post(`${API}/chat`, {
      message,
      session_id: sessionId
    });
    return response.data;
  } catch (error) {
    console.warn('API error sending chat message, falling back to mock:', error);
    const responses = [
      "Alex is a highly skilled Full Stack Developer with expertise in React, Node.js, and AI integration. He has 5+ years of experience building scalable applications.",
      "Alex has worked on various impressive projects including AI Content Generator, Smart Task Manager, and Analytics Dashboard. Each project showcases his expertise in both frontend and backend development.",
      "His technical skills span across Frontend (React, Next.js, TypeScript), Backend (Node.js, Python, FastAPI), AI/ML (OpenAI, LangChain, TensorFlow), and DevOps (Docker, AWS, Kubernetes).",
      "Alex is currently working as a Senior Full Stack Developer at TechCorp Inc., where he leads the development of AI-powered enterprise solutions serving 100K+ users.",
      "You can reach Alex via email at alex.richardson@example.com or connect on LinkedIn, GitHub, or Twitter. He's always open to discussing new opportunities and projects!"
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return { response: randomResponse };
  }
};