import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(null);
  const contentRef = useRef(null);

  const services = [
    {
      title: "Artificial Intelligence",
      desc: "We craft smart AI solutions to boost automation, insights, and efficiency.",
      imgUrl: `${process.env.PUBLIC_URL}/images/Artificial Intelligence.avif`,
      details: [
        {
      title: "ML & DATA",
      items: ["Model training", "Data preprocessing", "Pattern recognition"],
    },
    {
      title: "AI SERVICES",
      items: ["Chatbots", "Recommendation systems", "Image & speech recognition"],
    },
    {
      title: "DEPLOYMENT",
      items: ["Cloud integration", "Real-time inference", "API access"],
    },
      ],
    },
    {
      title: "Full Stack WebDevelopment",
      desc: "End-to-end web development using modern frontend and backend technologies.",
      imgUrl: `${process.env.PUBLIC_URL}/images/full stack.avif`,
      details: [
        {
         title: "FRONTEND DEVELOPMENT",
      items: [
        "Responsive UI using HTML, CSS, JavaScript",
        "Frameworks like React, Angular, or Vue",
        "Component-based design and state management",
          ],
        },
        {
      title: "BACKEND DEVELOPMENT",
      items: [
        "Server-side logic with Node.js, Express",
        "RESTful APIs and authentication systems",
        "Database integration (MongoDB & Mongoose)(SQL & NoSQL)",
      ],
    },
    {
      title: "DEPLOYMENT & DEVOPS",
      items: [
        "Version control using Git & GitHub",
        "CI/CD pipelines for automation",
        "Deployment on platforms like Vercel, Netlify",
      ],
    },
      ],
    },
    {
      title: "Mobile Application",
      desc: "User-friendly app with real-time sync and secure access.",
      imgUrl: `${process.env.PUBLIC_URL}/images/mobile2.avif`,
      details: [
         {
      title: "FRONTEND",
      items: ["Cross-platform UI", "Smooth navigation", "Modern framework (React Native/Flutter)"],
    },
    {
      title: "BACKEND",
      items: ["Real-time sync", "API integration", "Secure login"],
    },
    {
      title: "SECURITY",
      items: ["Encrypted data", "Biometric/OTP login", "Role-based access"],
    },
      ],
    },
    {
      title: "Cloud Services",
      desc: "Scalable, secure, and high-performance cloud infrastructure.",
      imgUrl: `${process.env.PUBLIC_URL}/images/secure.jpg`,
      details: [
       {
      title: "COMPUTE",
      items: ["Virtual machines", "Auto-scaling", "Load balancing"],
    },
    {
      title: "STORAGE",
      items: ["Object & block storage", "Data redundancy", "Backup & restore"],
    },
    {
      title: "SECURITY",
      items: ["Firewall rules", "Data encryption", "IAM policies"],
    },
      ],
    },

    {
      title: "Digital Marketing",
      desc: "Targeted strategies to boost online visibility and engagement.",
      imgUrl: `${process.env.PUBLIC_URL}/images/sol.jpg`,
      details: [
        {
      title: "SEO & CONTENT",
      items: ["Keyword optimization", "Content strategy", "On-page SEO"],
    },
    {
      title: "SOCIAL MEDIA",
      items: ["Campaign planning", "Audience targeting", "Analytics tracking"],
    },
    {
      title: "EMAIL & ADS",
      items: ["Email automation", "PPC ads", "Retargeting"],
    },
      ],
    },
    {
      title: "Web Hosting",
      desc: "Reliable hosting with 99.9% uptime and custom web development.",
      imgUrl: `${process.env.PUBLIC_URL}/images/webh.jpg`,
      details: [
    {
      title: "FEATURES",
      items: ["99.9% uptime", "SSL support", "One-click installs"],
    },
    {
      title: "SECURITY",
      items: ["Firewall protection", "DDoS defense", "Daily backups"],
    },
    {
      title: "MANAGEMENT",
      items: ["cPanel/Plesk", "Domain management", "Email hosting"],
    },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setActiveService(null);
      }
    };

    if (activeService !== null) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [activeService]);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 animate-fade-in-down">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Explore our wide range of IT solutions designed to power your business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 relative z-10">
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            <figure className="relative group">
              <img
                src={service.imgUrl}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 text-white text-sm">
                {service.title}
              </figcaption>
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {service.desc}
              </p>
              <button
                onClick={() => setActiveService(activeService === index ? null : index)}
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                aria-label={`More details about ${service.title}`}
              >
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeService !== null && (
        <div
          ref={contentRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-lg max-h-[80vh] bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50 p-8 text-white overflow-hidden"
        >
          <button
            onClick={() => setActiveService(null)}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl"
            aria-label="Close content"
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">
            {services[activeService].title}
          </h2>
          <div className="border-t border-gray-700 mt-4 pt-4">
            {services[activeService].details.map((detail, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{detail.title}</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {detail.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
