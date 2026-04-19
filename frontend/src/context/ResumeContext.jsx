import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const defaultData = {
  personal: { fullName: '', email: '', phone: '', linkedin: '', github: '', location: '' },
  summary: '',
  education: [], // { id, degree, college, year, score }
  skills: [], // string array
  projects: [], // { id, title, description, tech }
  experience: [], // { id, role, org, duration, description }
  achievements: [], // string array
  certifications: [], // { id, name, issuer }
  extracurricular: '',
  additional: { languages: '', hobbies: '', declaration: false }
};

const defaultOrder = [
  'personal', 'summary', 'education', 'skills', 'experience', 'projects',
  'achievements', 'certifications', 'extracurricular', 'additional'
];

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  // Load from local storage or use default
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeDraft');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return defaultData; }
    }
    return defaultData;
  });

  const [activeTemplate, setActiveTemplate] = useState('clean');
  const [sectionsOrder, setSectionsOrder] = useState(defaultOrder);

  // Auto-save
  useEffect(() => {
    localStorage.setItem('resumeDraft', JSON.stringify(resumeData));
  }, [resumeData]);

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: typeof data === 'function' ? data(prev[section]) : data
    }));
  };

  // Basic ATS Score calculation based on completeness and keywords
  const atsScore = useMemo(() => {
    let score = 0;
    const maxScore = 100;
    
    // Completeness Checks
    if (resumeData.personal.fullName && resumeData.personal.email && resumeData.personal.phone) score += 15;
    if (resumeData.summary.length > 50) score += 15;
    if (resumeData.education.length > 0) score += 10;
    if (resumeData.skills.length >= 5) score += 15; else if (resumeData.skills.length > 0) score += 5;
    if (resumeData.projects.length > 0) score += 15;
    if (resumeData.experience.length > 0) score += 15;
    if (resumeData.achievements.length > 0 || resumeData.certifications.length > 0) score += 15;

    // Optional penalization if no action verbs, but keeping it simple for V1
    return Math.min(score, maxScore);
  }, [resumeData]);

  return (
    <ResumeContext.Provider value={{
      resumeData, 
      updateResumeData, 
      activeTemplate, 
      setActiveTemplate,
      sectionsOrder,
      setSectionsOrder,
      atsScore
    }}>
      {children}
    </ResumeContext.Provider>
  );
}

export const useResume = () => useContext(ResumeContext);
