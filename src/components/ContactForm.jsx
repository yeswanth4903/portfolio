import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-dark-secondary/30 rounded-lg border border-primary/20
                   focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                   placeholder:text-gray-500"
        />
      </div>
      
      <div>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-dark-secondary/30 rounded-lg border border-primary/20
                   focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                   placeholder:text-gray-500"
        />
      </div>
      
      <div>
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 bg-dark-secondary/30 rounded-lg border border-primary/20
                   focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                   placeholder:text-gray-500 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/80
                 transition-colors flex items-center justify-center gap-2
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <FaPaperPlane className="text-sm" />
          </>
        )}
      </button>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`text-center p-2 rounded ${
            submitStatus === 'success' 
              ? 'bg-green-500/20 text-green-500' 
              : 'bg-red-500/20 text-red-500'
          }`}
        >
          {submitStatus === 'success' 
            ? 'Message sent successfully!' 
            : 'Failed to send message. Please try again.'}
        </motion.div>
      )}
    </motion.form>
  );
}
