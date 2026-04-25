import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiPhone, FiInstagram } from 'react-icons/fi';
import { contactData } from '../data/contact';

const Motion = motion;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING');

    const payload = {
      ...formData,
      access_key: contactData.accessKey
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.success) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-accent-teal" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-teal">Connectivity</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white px-2 leading-none">
                Get In <br />
                <span className="text-accent-indigo italic">Touch.</span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6 pt-6">
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-6 group">
                <div className="p-4 bg-dark-800 rounded-2xl border border-white/5 text-accent-indigo group-hover:bg-accent-indigo group-hover:text-white transition-all duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</p>
                  <p className="text-xl font-medium text-white">{contactData.email}</p>
                </div>
              </a>

              <a href={`tel:${contactData.phone.replace(/\s+/g, '')}`} className="flex items-center gap-6 group">
                <div className="p-4 bg-dark-800 rounded-2xl border border-white/5 text-accent-teal group-hover:bg-accent-teal group-hover:text-white transition-all duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone Number</p>
                  <p className="text-xl font-medium text-white">{contactData.phone}</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                {contactData.socials.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-dark-800 rounded-2xl border border-white/5 text-slate-400 hover:text-white hover:border-accent-indigo/50 transition-all duration-300"
                  >
                    {social.name === 'Github' ? <FiGithub size={24} /> : social.name === 'Linkedin' ? <FiLinkedin size={24} /> : <FiInstagram size={24} />}
                  </a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Functional Form UI */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[3rem] p-12 md:p-16 space-y-8 relative"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              <p className="text-sm text-slate-500">Usually responds within 24 hours.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name" 
                  className="w-full bg-dark-950/50 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-accent-indigo/50 transition-all font-light"
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address" 
                  className="w-full bg-dark-950/50 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-accent-indigo/50 transition-all font-light"
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full bg-dark-950/50 border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-accent-indigo/50 transition-all resize-none font-light"
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'SENDING'}
                className={`w-full btn-primary py-5 cursor-pointer flex items-center justify-center gap-2 group transition-all duration-300 ${
                  status === 'SENDING' ? 'opacity-70 cursor-wait' : ''
                }`}
              >
                {status === 'SENDING' ? (
                  <>Processing...</>
                ) : status === 'SUCCESS' ? (
                  <><FiCheckCircle className="animate-bounce" /> Message Sent!</>
                ) : (
                  <>Submit Request <FiSend className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>

              {status === 'ERROR' && (
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono justify-center animate-pulse">
                  <FiAlertCircle /> Something went wrong. Please try again.
                </div>
              )}
            </form>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-indigo/5 blur-[50px] rounded-full pointer-events-none" />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
