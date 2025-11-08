import React, { useState } from "react";

const InAddition = () => {
  const services = [
    {
      logo: "🛠️",
      title: "Software Development Solutions",
      content:
        "At Zeta AI Labs, we craft custom software solutions that align with your business needs. Whether it's a web application, internal tool, or full-scale platform, our team uses modern technologies and agile methods to deliver reliable, scalable, and high-performing products. We focus on turning your ideas into impactful digital solutions that drive real results.",
    },
    {
      logo: "📡",
      title: "Quality Assurance",
      content:
        "At Zeta AI Labs, we ensure your software is reliable, secure, and performs flawlessly. Our Quality Assurance team follows rigorous testing processes—manual and automated—to catch bugs early and guarantee a smooth user experience. From functionality and performance to usability and security, we help you deliver high-quality products with confidence.",
    },
    {
      logo: "💻",
      title: "Website Design",
      content:
        "At Zeta AI Labs, we design modern, responsive, and user-friendly websites that leave a lasting impression. Whether it’s a business site, portfolio, or e-commerce platform, we focus on clean design, intuitive navigation, and mobile-first performance. Our goal is to create visually engaging and conversion-driven websites that reflect your brand and captivate your audience.",
    },
    {
      logo: "📱",
      title: "UI/UX Design",
      content:
        "Zeta AI Labs delivers intuitive and engaging UI/UX designs that enhance user experience across all platforms. We focus on user-centered design principles to create interfaces that are not only visually appealing but also functional and easy to navigate. From wireframes to prototypes, we craft digital experiences that drive user satisfaction and boost engagement.",
    },
    {
      logo: "⚙️",
      title: "Performance Optimization",
      content:
        "Zeta AI Labs helps you boost the speed, efficiency, and scalability of your digital products. We analyze bottlenecks, optimize code, enhance server performance, and fine-tune databases to ensure your application runs smoothly under any load. Whether you're facing slow load times or preparing for high traffic, our performance experts deliver measurable improvements that enhance user satisfaction.",
    },
    {
      logo: "💼",
      title: "Technical Consulting",
      content:
        "Zeta AI Labs offers expert technical consulting to help you make smart, strategic tech decisions. Whether you're planning a new project, scaling existing systems, or solving complex challenges, our team provides insights on architecture, tools, and best practices. We bridge the gap between business goals and technology, ensuring your solutions are future-ready and aligned with your vision.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center py-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Big Rounded Button */}
      <a
        href="#_"
        onClick={toggleVisibility}
        className="relative inline-flex-block items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
          {isVisible ? "Hide Services" : "Explore Services"}
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </a>

      {/* InAddition Component */}
      {isVisible && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4 text-blue-400">{service.logo}</div>
                <h3 className="text-2xl font-semibold text-gray-200">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-300 text-sm">{service.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InAddition;
