import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

export default function EducationCard({ education, index }) {
  const icons = {
    university: FaUniversity,
    college: FaGraduationCap,
    school: FaSchool
  };

  const Icon = icons[education.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative group"
    >
      <div className="bg-dark-secondary/30 p-6 rounded-xl backdrop-blur-sm
                    transform transition-all duration-500 hover:bg-dark-secondary/50
                    group-hover:translate-x-2">
        <div className="absolute -left-3 top-6 bg-primary rounded-full p-2 shadow-lg">
          <Icon className="text-white text-xl" />
        </div>
        
        <div className="ml-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">
              {education.school}
            </h3>
            <span className="text-sm text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
              {education.duration}
            </span>
          </div>
          
          <p className="text-gray-400 text-sm mb-2">{education.location}</p>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <p className="text-gray-300 font-medium">{education.degree}</p>
            <span className="text-primary font-bold bg-primary/5 px-3 py-1 rounded-lg">
              {education.grade}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent 
                      opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
      </div>
    </motion.div>
  );
}
