import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "saikiranreddymekala@gmail.com",
      href: "mailto:saikiranreddymekala@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/saikiranreddymekala",
      color: "hover:text-purple-300"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/saikiranreddymekala",
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
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            Let's Connect
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-full text-white"
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{info.label}</h3>
                {info.href !== "#" ? (
                  <a 
                    href={info.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {info.value}
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <p className="text-white/70">{info.value}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-lg text-white hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </Card>
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Media */}
            <Card className="p-8 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-white/10 border border-white/30 rounded-full text-white/70 ${social.color} transition-colors duration-300 hover:bg-white/20`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-white/60 mt-6 leading-relaxed">
                Follow me for updates on my latest projects, tech insights, and industry thoughts.
              </p>
            </Card>

            {/* Availability */}
            <Card className="p-8 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Available for new projects</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white/60">
            © 2024 Sai Kiran Reddy Mekala. Crafted with modern web technologies.
          </p>
          <p className="text-white/40 mt-2 text-sm">
            Passionate about creating innovative solutions through technology
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;