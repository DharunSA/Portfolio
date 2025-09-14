import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "dharun887@gmail.com",
      href: "mailto:dharun887@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91-6381814730",
      href: "tel:+916381814730"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hosur, Tamil Nadu",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/DharunSA",
      color: "hover:text-purple-300"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/dharun-sa-550648204",
      color: "hover:text-blue-300"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50" />
      
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="p-3 glass-card rounded-full"
            >
              <MessageCircle className="text-green-500 dark:text-green-400" size={32} />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}
          >
            <span className="text-gradient">Let's Connect</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-1 bg-gradient-primary mx-auto mb-6"
            style={{ maxWidth: '150px' }}
          />
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 text-center h-full group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 p-4 glass rounded-full group-hover:bg-gradient-primary transition-all duration-300"
                >
                  <div className="text-blue-500 dark:text-blue-400 group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{info.label}</h3>
                {info.href !== "#" ? (
                  <a 
                    href={info.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-gradient transition-colors inline-flex items-center gap-1"
                  >
                    {info.value}
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <p className="text-slate-600 dark:text-slate-300">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-600 dark:text-slate-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 dark:focus:bg-white/10 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-600 dark:text-slate-300 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 dark:focus:bg-white/10 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-600 dark:text-slate-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 dark:focus:bg-white/10 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 glass hover:bg-gradient-primary hover:text-white transition-all duration-300 rounded-lg text-slate-700 dark:text-white border border-white/20"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Media */}
            <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 glass rounded-full text-slate-600 dark:text-slate-300 hover:text-gradient hover:bg-gradient-primary transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-slate-500 dark:text-slate-400 mt-6 leading-relaxed">
                Follow me for updates on my latest projects, tech insights, and industry thoughts.
              </p>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Availability</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-700 dark:text-white font-medium">Available for new projects</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-700 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400">
            © 2024 Dharun Saravanakumar. Crafted with modern web technologies.
          </p>
          <p className="text-slate-400 dark:text-slate-500 mt-2 text-sm">
            Passionate about creating innovative solutions through technology
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;