import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-warm-khaki">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-olive mb-4">About GoPark Safaris</h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto mb-4"></div>
          <p className="text-dark-leather max-w-3xl mx-auto text-lg italic">
            One World, One Life, Let's Travel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-safari-olive mb-6">Who We Are</h3>
            <p className="text-dark-leather mb-4 leading-relaxed">
              GoPark Safaris is a premier licensed tour operator based in Mombasa, Kenya. We have evolved 
              from a transport provider into a full-service travel management company specializing in safaris, 
              corporate logistics, themed holidays, and international B2B partnerships.
            </p>
            
            <h4 className="text-xl font-bold text-safari-olive mt-6 mb-3">Our Philosophy</h4>
            <p className="text-dark-leather mb-4 leading-relaxed">
              We believe travel is not just about moving from place to place; it is about seizing the moment. 
              Whether it is a corporate trip or a dream safari, we ensure every journey is seamless and memorable.
            </p>
            
            <h4 className="text-xl font-bold text-safari-olive mt-6 mb-3">Our Mission</h4>
            <p className="text-dark-leather mb-4 leading-relaxed">
              To connect travelers with the beauty of Kenya and the world through professional service, 
              exceptional customer care, and personalized itineraries.
            </p>

            <h4 className="text-xl font-bold text-safari-olive mt-6 mb-3">Trusted Partners</h4>
            <p className="text-dark-leather leading-relaxed">
              Proudly working with industry leaders: <strong>Pollmans Tours & Safaris</strong>, <strong>Untours</strong>, 
              and other global operators.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-safari-olive mb-4">Our Values</h4>
              <ul className="space-y-3 text-dark-leather">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sunset-orange mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Excellence:</strong> High standards in every transfer and tour</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sunset-orange mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Integrity:</strong> Transparent pricing and honest advice</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sunset-orange mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Reliability:</strong> We are there when we say we will be</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sunset-orange mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Passion:</strong> We love what we do</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-safari-olive mb-8 text-center">Why Travel With GoPark Safaris?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sunset-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-safari-olive mb-2">Licensed & Trusted</h4>
              <p className="text-dark-leather text-sm">Fully licensed Kenya tour operator</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sunset-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-safari-olive mb-2">Global Standards</h4>
              <p className="text-dark-leather text-sm">Professional multilingual guides and modern fleet</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sunset-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-safari-olive mb-2">Safety First</h4>
              <p className="text-dark-leather text-sm">24/7 monitoring and secure corporate transfers</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sunset-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-safari-olive mb-2">Tailor-Made</h4>
              <p className="text-dark-leather text-sm">Custom itineraries for solo travelers, families, and international agents</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sunset-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sunset-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-safari-olive mb-2">Seamless B2B Solutions</h4>
              <p className="text-dark-leather text-sm">Trusted ground handling for global operators</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sunset-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sunset-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-safari-olive mb-2">Instant Support</h4>
              <p className="text-dark-leather text-sm">Fast WhatsApp response and dedicated customer care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
