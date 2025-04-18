import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Github as GitHub, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thanks for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-mono">
              Let's Build Something Amazing Together
            </h3>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Whether you have a question about my work, a project idea, or just want to say hello,
              I'm always open to new opportunities and connections. Feel free to reach out through
              this form or directly via my social media channels.
            </p>
            
            <div className="space-y-4 mb-8">
              <ContactItem icon={<MapPin />} label="Location">
                Rambha, Odisha, India
              </ContactItem>
              <ContactItem icon={<Mail />} label="Email">
                chatulprusty@egmail.com
              </ContactItem>
              <ContactItem icon={<Phone />} label="Phone">
                (+91) 7894143522
              </ContactItem>
            </div>
            
            <h4 className="text-lg font-bold mb-4 font-mono">Connect with me:</h4>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/ChAtulKumarPrusty" icon={<GitHub />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/chatulkumarprusty/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="chatulprusty@gmail.com" icon={<Mail />} label="Email" />
            </div>
          </div>
          
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800/70 backdrop-blur' : 'bg-gray-50 shadow-md'
          }`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-500'
                  } border`}
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-500'
                  } border`}
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="subject" 
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-500'
                  } border`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-cyan-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-500'
                  } border`}
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                primary
                disabled={isSubmitting}
                className="w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-green-900/30 text-green-300 border border-green-700' 
                    : 'bg-green-100 text-green-700 border border-green-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, children }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-start">
      <div className={`mt-1 p-2 rounded-full ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
      }`}>
        {React.cloneElement(icon as React.ReactElement, {
          className: `w-5 h-5 ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`
        })}
      </div>
      <div className="ml-4">
        <h4 className="font-medium">{label}</h4>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
          {children}
        </p>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`p-3 rounded-full transition-colors ${
        theme === 'dark'
          ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
          : 'bg-gray-200 text-indigo-600 hover:bg-gray-300'
      }`}
      aria-label={label}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: "w-5 h-5"
      })}
    </a>
  );
};

export default Contact;