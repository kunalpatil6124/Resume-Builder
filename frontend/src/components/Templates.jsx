import { useResume } from '../context/ResumeContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Templates({ template }) {
  const { resumeData, sectionsOrder } = useResume();
  const { personal, summary, education, skills, experience, projects, achievements, certifications, extracurricular, additional } = resumeData;

  // Single Column ATS Template
  return (
    <div className={`resume-a4-container bg-white shadow-lg mx-auto ${template === 'bold' ? 'font-serif' : 'font-sans'}`}>
      
      {/* Header section is strict */}
      <div className={`text-center mb-4 pb-3 ${template === 'bold' ? 'border-b-2 border-black' : 'border-b border-gray-300'}`}>
        <h1 className={`text-2xl font-bold uppercase tracking-wide mb-1 ${template === 'bold' ? 'text-black' : 'text-gray-900'}`}>{personal.fullName || 'YOUR NAME'}</h1>
        <div className="text-xs flex justify-center flex-wrap gap-x-3 gap-y-1 text-gray-800">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.location && <span>• {personal.location}</span>}
          {personal.linkedin && <span className="inline-flex items-center ml-2 border-l border-gray-300 pl-2"><FaLinkedin size={13} className="mr-1.5 text-black" /> {personal.linkedin}</span>}
          {personal.github && <span className="inline-flex items-center ml-2 border-l border-gray-300 pl-2"><FaGithub size={13} className="mr-1.5 text-black" /> {personal.github}</span>}
        </div>
      </div>

      {/* Render sections based on order */}
      {sectionsOrder.map(section => {
        if (section === 'summary' && summary) {
          return (
            <div key="summary" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-1.5 text-black">Professional Summary</h2>
              <p className="text-[13px] text-gray-800 leading-snug text-justify">{summary}</p>
            </div>
          );
        }

        if (section === 'skills' && skills.length > 0) {
          return (
            <div key="skills" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-1.5 text-black">Skills</h2>
              <p className="text-[13px] text-gray-800 font-medium leading-snug">
                {skills.join(' • ')}
              </p>
            </div>
          );
        }

        if (section === 'experience' && experience.length > 0) {
          return (
            <div key="experience" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2 text-black">Professional Experience</h2>
              <div className="space-y-2">
                {experience.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className="text-sm font-bold text-gray-900">{exp.role} <span className="font-normal text-gray-700">| {exp.org}</span></h3>
                      <span className="text-[11px] text-gray-600 font-medium">{exp.duration}</span>
                    </div>
                    {exp.description && (
                      <p className="text-[13px] text-gray-800 leading-snug whitespace-pre-wrap">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section === 'education' && education.length > 0) {
          return (
            <div key="education" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2 text-black">Education</h2>
              <div className="space-y-1.5">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-baseline">
                    <div>
                      <h3 className="text-[13px] font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-[11px] text-gray-700">{edu.college}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-gray-900">{edu.year}</span>
                      {edu.score && <p className="text-[11px] text-gray-700 mt-0.5">Score: {edu.score}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section === 'projects' && projects.length > 0) {
          return (
            <div key="projects" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2 text-black">Projects</h2>
              <div className="space-y-2">
                {projects.map((proj, idx) => (
                  <div key={idx}>
                    <h3 className="text-[13px] font-bold text-gray-900 mb-0.5">
                      {proj.title}
                      {proj.tech && <span className="font-normal text-[11px] text-gray-600 ml-2">[{proj.tech}]</span>}
                    </h3>
                    {proj.description && (
                      <p className="text-[13px] text-gray-800 leading-snug whitespace-pre-wrap">{proj.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section === 'achievements' && achievements.length > 0) {
          return (
            <div key="achievements" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-1.5 text-black">Achievements</h2>
              <ul className="list-disc list-inside text-[13px] text-gray-800 space-y-0.5">
                {achievements.map((ach, idx) => (
                  <li key={idx} className="leading-snug">{ach}</li>
                ))}
              </ul>
            </div>
          );
        }

        if (section === 'certifications' && certifications.length > 0) {
          return (
            <div key="certifications" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-1.5 text-black">Certifications</h2>
              <ul className="list-disc list-inside text-[13px] text-gray-800 space-y-0.5">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="leading-snug"><span className="font-semibold">{cert.name}</span> - {cert.issuer}</li>
                ))}
              </ul>
            </div>
          );
        }
        
        if (section === 'extracurricular' && extracurricular) {
          return (
            <div key="extracurricular" className="mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-1.5 text-black">Extracurricular Activities</h2>
              <p className="text-[13px] text-gray-800 leading-snug whitespace-pre-wrap">{extracurricular}</p>
            </div>
          );
        }

        if (section === 'additional' && (additional.languages || additional.hobbies || additional.declaration)) {
          return (
            <div key="additional" className="mb-1">
              <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-1.5 text-black">Additional Details</h2>
              {additional.languages && <p className="text-[13px] text-gray-800 mb-0.5"><span className="font-semibold">Languages:</span> {additional.languages}</p>}
              {additional.hobbies && <p className="text-[13px] text-gray-800 mb-0.5"><span className="font-semibold">Hobbies:</span> {additional.hobbies}</p>}
              {additional.declaration && (
                <div className="mt-4 text-[12px] text-gray-800">
                  <p>I hereby declare that the above-mentioned information is true to the best of my knowledge and belief.</p>
                  <p className="mt-4 font-semibold uppercase">{personal.fullName}</p>
                </div>
              )}
            </div>
          );
        }

        return null; // For sections gracefully skipped
      })}

    </div>
  );
}
