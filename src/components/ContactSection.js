import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiUser, FiMail, FiChevronDown } from "react-icons/fi";

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("services");

  const contactData = {
    services: {
      title: "Our Services",
      icon: <FiPhone className="text-electric-blue" />,
      items: [
        "Enterprise IT Solutions",
        "24/7 Emergency Support",
        "Artificial Intelligence",
        "Full Stack Development",
        "Infrastructure Services",
        "Future Ready Products"
      ]
    },
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
    }
  };

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-8 py-4 text-lg font-medium transition-colors ${
        activeTab === id
          ? "text-electric-blue border-b-2 border-electric-blue"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );

  return (
    <section className="min-h-screen bg-midnight-black py-20 px-6 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Connect With Our Experts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reach out to our dedicated team for comprehensive IT solutions and 
            enterprise-grade support tailored to your business needs.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <TabButton id="services">Services Hotline</TabButton>
          <TabButton id="team">Executive Team</TabButton>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {activeTab === "services" ? (
              <div className="space-y-6">
                {contactData.services.items.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-void-black rounded-xl border border-opacity-10 border-white hover:border-electric-blue transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-electric-blue to-cyan-600 rounded-lg">
                        <FiPhone className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-electric-blue transition-colors">
                        {service}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
             <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
  {contactData.team.members.map((member, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1 }}
      className="p-16 bg-void-black rounded-3xl border border-opacity-10 border-white hover:border-electric-blue transition-all group relative overflow-hidden min-h-[400px] min-w-[500px] w-full"
    >
      <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity" />
      <div className="flex gap-16 items-start h-full">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gradient-to-br from-electric-blue to-cyan-600 rounded-2xl flex items-center justify-center">
            <FiUser className="text-4xl text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl font-bold text-white mb-4">
            {member.name}
          </h3>
          <p className="text-xl text-electric-blue mb-6">
            {member.role}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <FiPhone className="text-gray-400 text-2xl" />
              <a
                href={`tel:${member.contact}`}
                className="text-gray-300 hover:text-electric-blue transition-colors text-xl"
              >
                {member.contact}
              </a>
            </div>
                          <div className="flex items-center gap-2">
                            <FiMail className="text-gray-400" />
                            <a
                              href={`mailto:${member.email}`}
                              className="text-gray-300 hover:text-electric-blue transition-colors"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-400">
                          {member.expertise}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-br from-void-black to-midnight-black p-8 rounded-xl border border-electric-blue border-opacity-20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {contactData[activeTab].title}
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-void-black rounded-lg">
                  <p className="text-gray-400 mb-4">
                    {activeTab === "services"
                      ? "24/7 Support Center"
                      : "Direct Executive Access"}
                  </p>
                  <a
                    href="tel:+919940042415"
                    className="inline-flex items-center gap-3 text-electric-blue text-xl font-semibold hover:text-cyan-400 transition-colors"
                  >
                    <FiPhone className="text-2xl" />
                    +91 9337287145
                  </a>
                </div>
                <div className="p-6 bg-void-black rounded-lg">
                  <p className="text-gray-400 mb-4">
                    {activeTab === "services"
                      ? "Service Inquiries"
                      : "Executive Communications"}
                  </p>
                  <a
                    href="mailto:info@zetaailabs.com"
                    className="inline-flex items-center gap-3 text-electric-blue text-xl font-semibold hover:text-cyan-400 transition-colors"
                  >
                    <FiMail className="text-2xl" />
                    contact@zetailabs.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;