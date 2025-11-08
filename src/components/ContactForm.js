import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiMapPin, FiClock, FiHeadphones } from 'react-icons/fi';

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("services");

  const contactData = {
    team: {
      title: "Leadership Team",
      icon: <FiUser className="text-electric-blue" />,
      members: [
        {
          name: 'Mr. CHAITANYA Rana',
          contact: '📞 91-9337287145',
          email: "info@zetaailabs.com"
        }
      ]
    },
    services: {
      title: "24/7 Support Center",
      subtitle: "Service Inquiries",
      description: "Reach out to our dedicated team for comprehensive IT solutions and enterprise-grade support tailored to your business needs."
    },
    executive: {
      title: "Direct Executive Access", 
      subtitle: "Executive Communications",
      description: "Connect directly with our leadership team for strategic partnerships and high-level business discussions."
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-void-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-electric-blue">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {activeTab === "services" 
              ? contactData.services.description 
              : contactData.executive.description
            }
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-void-black rounded-xl p-2 border border-gray-800">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all text-sm md:text-base ${
                activeTab === "services"
                  ? "bg-electric-blue text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiHeadphones className="inline mr-2" />
              Support Services
            </button>
            <button
              onClick={() => setActiveTab("executive")}
              className={`px-4 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all text-sm md:text-base ${
                activeTab === "executive"
                  ? "bg-electric-blue text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiUser className="inline mr-2" />
              Executive Team
            </button>
          </div>
        </div>

        {/* Team Section - BIG & RESPONSIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 max-w-7xl mx-auto">
          {contactData.team.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 md:p-8 lg:p-16 bg-void-black rounded-xl md:rounded-2xl lg:rounded-3xl border border-opacity-10 border-white hover:border-electric-blue transition-all group relative overflow-hidden min-h-[280px] md:min-h-[350px] lg:min-h-[400px] w-full"
            >
              <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-16 items-start h-full">
                <div className="flex-shrink-0 self-center sm:self-start">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-electric-blue to-cyan-600 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center">
                    <FiUser className="text-2xl md:text-3xl lg:text-4xl text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 lg:mb-4">
                    {member.name}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-electric-blue mb-3 md:mb-4 lg:mb-6">
                    {contactData.team.title}
                  </p>
                  
                  <div className="space-y-2 md:space-y-3 lg:space-y-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 lg:gap-6">
                      <FiPhone className="text-gray-400 text-lg md:text-xl lg:text-2xl flex-shrink-0" />
                      <a
                        href={`tel:${member.contact.replace('📞 ', '')}`}
                        className="text-gray-300 hover:text-electric-blue transition-colors text-base md:text-lg lg:text-xl break-all"
                      >
                        {member.contact}
                      </a>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 lg:gap-6">
                      <FiMail className="text-gray-400 text-lg md:text-xl lg:text-2xl flex-shrink-0" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-300 hover:text-electric-blue transition-colors text-base md:text-lg lg:text-xl break-all"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 lg:top-6 lg:right-6">
                <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-1 md:py-2 bg-green-500 bg-opacity-20 rounded-full">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm text-green-400 font-medium">
                    {activeTab === "services" ? "24/7 Available" : "Executive Access"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="p-4 md:p-6 bg-void-black rounded-xl border border-gray-800">
              <FiMapPin className="text-2xl md:text-3xl text-electric-blue mx-auto mb-3 md:mb-4" />
              <h4 className="text-base md:text-lg font-semibold text-white mb-2">Location</h4>
              <p className="text-sm md:text-base text-gray-400">Global Operations</p>
            </div>
            
            <div className="p-4 md:p-6 bg-void-black rounded-xl border border-gray-800">
              <FiClock className="text-2xl md:text-3xl text-electric-blue mx-auto mb-3 md:mb-4" />
              <h4 className="text-base md:text-lg font-semibold text-white mb-2">Availability</h4>
              <p className="text-sm md:text-base text-gray-400">24/7 Support</p>
            </div>
            
            <div className="p-4 md:p-6 bg-void-black rounded-xl border border-gray-800">
              <FiHeadphones className="text-2xl md:text-3xl text-electric-blue mx-auto mb-3 md:mb-4" />
              <h4 className="text-base md:text-lg font-semibold text-white mb-2">Response Time</h4>
              <p className="text-sm md:text-base text-gray-400">Within 2 Hours</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
