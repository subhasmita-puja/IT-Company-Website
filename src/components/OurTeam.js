import React from 'react';

const OurTeam = () => {
  // CEO Information
  const ceoInfo = {
    photo: '/images/ceo.jpg',
    name: 'Mr. CHAITANYA Rana',
    phone: '📞 91-9337287145',
    about: 'With 12+ years of experience and 319 successful projects, our CEO is a results-driven technology leader with a strong track record in innovation and execution. Having led AI and ML initiatives, they bring deep technical expertise and a forward-thinking approach to solving complex business challenges. Passionate about empowering teams and driving strategic growth, their leadership is rooted in vision, agility, and impact.'
  };

  const teamMembers = [
    {
      photo: '/images/software dev.jpg',
      name: 'Subhasmita Sahoo',
      job: 'Software Devloper',
    },
    {
      photo: '/images/user.jpg',
      name: "Kajal Kumari",
      job: 'Software Devloper',
    },
    {
      photo: '/images/android & ios dev.jpg',
      name: "Anjali jain",
      job: 'Android and IOS Devloper',
    },
    {
      photo: '/images/hr.jpg',
      name: 'Namita Bhol',
      job: 'Hr and Business Analyst',
    },
    {
      photo: '/images/aiml.dev.jpg',
      name: 'Shivam Kumar',
      job: ' AI ML Devloper',
    },
    {
      photo: '/images/ai.ml.jpg',
      name: "N Joshita",
      job: 'AI ML Devloper',
    },
    {
      photo: '/images/aidev.jpg',
      name: "Sib sundar Das",
      job: 'AI ML Devloper',
    },
    {
      photo: '/images/digital marketing.jpg',
      name: ' Soubhagya Nalini Pradhan',
      job: ' Digital Marketing',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-48 h-48 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div className="absolute top-[60%] right-[15%] w-36 h-36 bg-purple-300/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[60%] w-24 h-24 bg-gray-400/10 rounded-full animate-ping"></div>
        <div className="absolute top-[30%] right-[40%] w-32 h-32 bg-purple-500/5 rounded-full animate-bounce delay-1000"></div>
      </div>

     {/* CEO Section */}
<section className="relative z-10 max-w-6xl mx-auto mb-12 md:mb-16 lg:mb-24 px-4 sm:px-6 lg:px-8">
  
  {/* Section Header */}
  <div className="text-center mb-8 md:mb-12 lg:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 md:mb-5 drop-shadow-2xl">
      Leadership Excellence
    </h2>
    <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 mx-auto rounded-full shadow-lg shadow-purple-500/30"></div>
  </div>
  
  {/* CEO Card */}
  <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl transform perspective-1000 hover:scale-105 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-3xl relative overflow-hidden">
    
    {/* Top Border Gradient */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-gray-600"></div>
    
    {/* Subtle Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-2 md:top-4 right-2 md:right-4 w-12 md:w-20 h-12 md:h-20 border border-purple-300 rounded-full"></div>
      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-8 md:w-16 h-8 md:h-16 border border-gray-400 rounded-full"></div>
    </div>
    
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center relative z-10">
      
      {/* CEO Image Container */}
      <div className="flex justify-center items-center relative order-1 md:order-none">
        <div className="relative">
          {/* Main Image Frame */}
          <div className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-gray-800 p-1.5 md:p-2 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-2 hover:shadow-purple-500/50">
            <img 
              src={ceoInfo.photo} 
              alt={ceoInfo.name}
              className="w-full h-full rounded-full object-cover relative z-10 border-2 border-purple-200/50"
            />
            {/* Image Overlay */}
            <div className="absolute inset-1.5 md:inset-2 rounded-full bg-gradient-to-br from-purple-600/30 via-transparent to-gray-800/20 z-20"></div>
          </div>
          
          {/* Floating Dots - Hidden on mobile for cleaner look */}
          <div className="hidden sm:block absolute -bottom-2 -left-2 w-3 md:w-4 h-3 md:h-4 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50"></div>
          <div className="hidden sm:block absolute top-6 md:top-10 -left-4 md:-left-8 w-2 md:w-3 h-2 md:h-3 bg-gray-400 rounded-full animate-pulse"></div>
          <div className="hidden sm:block absolute bottom-8 md:bottom-16 -right-3 md:-right-6 w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-300 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>
      
      {/* CEO Content */}
      <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-none">
        
        {/* CEO Header */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-gray-800 bg-clip-text text-transparent mb-2 md:mb-3">
            {ceoInfo.name}
          </h3>
          <div className="text-purple-600 font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wider mb-3 md:mb-4 flex items-center justify-center md:justify-start">
            <span className="w-2.5 md:w-3 h-2.5 md:h-3 bg-purple-500 rounded-full mr-2 md:mr-3"></span>
            Chief Executive Officer
          </div>
          <div className="inline-block bg-gradient-to-r from-purple-600 to-gray-700 text-white px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:from-purple-500 hover:to-gray-600">
            {ceoInfo.phone}
          </div>
        </div>
        
        {/* CEO Description */}
        <div className="bg-gradient-to-r from-purple-50/80 to-gray-50/80 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-purple-200/30 backdrop-blur-sm">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify md:text-left">
            {ceoInfo.about}
          </p>
        </div>
        
        {/* Achievement Badges */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start">
          <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 rounded-xl md:rounded-2xl border-2 border-purple-500 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/30">
            <div className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-purple-700 mb-1 md:mb-2">12+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">Years Experience</div>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-50 via-gray-100 to-purple-100 rounded-xl md:rounded-2xl border-2 border-gray-500 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform hover:scale-105 hover:shadow-gray-500/30">
            <div className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-gray-700 mb-1 md:mb-2">319</div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">Successful Projects</div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>


      {/* Team Members Section */}
      <section className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-5 drop-shadow-2xl">
            Our Expert Team
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-purple-300 to-gray-300 mx-auto rounded-full shadow-lg shadow-purple-500/30"></div>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 relative overflow-hidden group hover:shadow-purple-500/20"
            >
              
              {/* Card Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-purple-400/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Member Image */}
              <div className="relative mb-6 mx-auto w-32 h-32">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-purple-500 shadow-lg group-hover:border-purple-400 transition-colors duration-300 group-hover:shadow-purple-500/30"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Image Ring Effect */}
                <div className="absolute -inset-2 border-2 border-purple-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Member Info */}
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">
                  {member.job}
                </p>
                
                {/* Bottom Accent Line */}
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-gray-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
