import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function CertificateCard({ certificate }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative bg-dark-secondary/30 rounded-xl overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6 backdrop-blur-sm">
          <div className="relative z-10">
            {certificate.image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 text-gray-light">{certificate.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-primary">{certificate.date}</span>
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  View Certificate →
                </a>
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative w-[90vw] h-[90vh] bg-dark rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 text-white bg-primary/20 p-2 rounded-full
                         hover:bg-primary/40 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes size={24} />
              </button>
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
