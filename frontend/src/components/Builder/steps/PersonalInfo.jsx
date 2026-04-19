import { useResume } from '../../../context/ResumeContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function PersonalInfo() {
  const { resumeData, updateResumeData } = useResume();
  const data = resumeData.personal;

  const handleChange = (e) => {
    updateResumeData('personal', { ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
        <input 
          type="text" 
          name="fullName"
          value={data.fullName}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Location</label>
          <input 
            type="text" 
            name="location"
            value={data.location}
            onChange={handleChange}
            placeholder="New York, NY"
            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">LinkedIn Profile</label>
          <div className="relative">
            <FaLinkedin className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="url" 
              name="linkedin"
              value={data.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/johndoe"
              className="w-full rounded-md border border-border bg-white pl-10 pr-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">GitHub Profile</label>
          <div className="relative">
            <FaGithub className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="url" 
              name="github"
              value={data.github}
              onChange={handleChange}
              placeholder="github.com/johndoe"
              className="w-full rounded-md border border-border bg-white pl-10 pr-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
