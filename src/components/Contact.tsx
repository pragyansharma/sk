import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS once when component mounts
    emailjs.init('dWKkCgHoq9yX9LnnD');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!formRef.current) return;

      // Log the form data to verify it's being captured correctly
      const formData = new FormData(formRef.current);
      console.log('Form data:', {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        message: formData.get('message')
      });

      const result = await emailjs.sendForm(
        'service_i3fvy4r',
        'template_mhi6h65',
        formRef.current,
        'dWKkCgHoq9yX9LnnD'
      );

      console.log('Response:', result);
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      // Log the full error
      console.error('Full error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out if you're looking for a data-driven product manager 
              or want to discuss opportunities in education technology and consulting.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:Shraddhakhadka2020@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Mail size={20} />
                </div>
                <span>Shraddhakhadka2020@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/shraddha-khadka-34a78825a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Linkedin size={20} />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Phone size={20} />
                </div>
                <span>(419) 685-8510</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin size={20} />
                </div>
                <span>Dallas, Texas</span>
              </div>
            </div>
          </div>
          
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;