import React, { useState } from "react";

const OutSolution = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Comprehensive IT Solutions & Services
        </h2>

        {/* Primary Solutions Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              Our Core IT Solutions
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
               We deliver innovative digital solutions tailored to meet modern business challenges. From intelligent automation to custom software, our services are designed to drive growth, efficiency, and user engagement.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-center space-x-2">
                ✅ Full Stack Web Development
              </li>
              <li className="flex items-center space-x-2">
                ✅ Artificial Intelligence Solutions
              </li>
              <li className="flex items-center space-x-2">
                ✅ Mobile App Development
              </li>
              <li className="flex items-center space-x-2">
                ✅ Digital Marketing & Branding
              </li>
              <li className="flex items-center space-x-2">
                ✅ Custom Software Development
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/solutions.jpg"
              alt="IT Solutions Overview"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-600 text-white text-lg px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {showMore ? "Show Less" : "Learn More About Our IT Solutions"}
          </button>
        </div>

        {/* Expandable Learn More Section */}
        {showMore && (
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-5">
               Unlock the Full Potential of Digital Innovation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our expert team transforms ideas into scalable digital products using modern technologies and intelligent solutions. From intuitive mobile apps to AI-powered systems and engaging web experiences, we help businesses stay ahead in today’s fast-paced tech landscape.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                Key Services We Offer
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <li className="flex items-center space-x-2">💻 Full Stack Web Development</li>
                <li className="flex items-center space-x-2">🤖 AI-Powered Solutions</li>
                <li className="flex items-center space-x-2">📱 Mobile App Development</li>
                <li className="flex items-center space-x-2">📈 Digital Marketing & SEO</li>
                <li className="flex items-center space-x-2">🧠 Custom Software Development</li>
                <li className="flex items-center space-x-2">🎯 UI/UX Design & Optimization</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/images/photo.avif"
                alt="Advanced IT Services"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OutSolution;
