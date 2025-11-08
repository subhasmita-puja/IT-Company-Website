import React, { useState } from 'react';

const AboutUs = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* About Us Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Zeta Ai Labs is a leading company in Odisha providing IT solutions. We provide Website Designing & Devlopment, Mobile Application to our clients across India & other Countries. We have successfully delivered thousands of projects covering a wide range of industries.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Our structured processes, flexible solutions, and cost-effective
                            services ensure long-term success and client satisfaction in the IT industry.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 font-semibold">
                            We prioritize your Safety, Security, & Protection!
                        </p>
                        <div className="mt-8">
                            <button 
                                onClick={() => setShowMore(!showMore)} 
                                className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                {showMore ? "Show Less" : "Learn More About Us"}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img 
                            src="/images/22.jpg" 
                            alt="About Us" 
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>

                {/* Expanded Section - Our Clients */}
                {showMore && (
                    <div className="mt-12 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Clients</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We proudly serve a diverse range of clients across industries, providing
                                top-tier IT solutions that enhance security, efficiency, and scalability.
                                Our commitment to excellence has earned us the trust of businesses
                                throughout India.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img 
                                src="/images/55.png" 
                                alt="Our Clients" 
                                className="rounded-lg shadow-lg w-full max-w-md"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutUs;
