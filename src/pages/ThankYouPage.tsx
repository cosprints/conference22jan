import React, { useState, useEffect } from 'react';

// Placeholder image for missing assets
const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E';

import { Link } from 'react-router-dom';
import { ArrowDown, Users, Briefcase, Rocket, MessageCircle, ExternalLink } from 'lucide-react';
import { MobileRegisterButton } from '../components/MobileRegisterButton';

function ThankYouPage() {
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/maxpog/ai/');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMG;
  };

  useEffect(() => {
    const getPartnerParam = () => {
      const params = new URLSearchParams(window.location.search);
      let partnerParam = params.get('partner');

      if (!partnerParam) {
        const searchStr = window.location.search.slice(1);
        const match = searchStr.match(/^\d+/);
        if (match) {
          partnerParam = match[0];
        }
      }

      return partnerParam;
    };

    const partnerParam = getPartnerParam();

    const updateCalendlyUrl = () => {
      const baseUrl = window.innerWidth > 650
        ? 'https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22'
        : 'https://calendly.com/maxpog/ai/';

      const urlWithUtm = partnerParam ? `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}utm_source=${partnerParam}` : baseUrl;
      setCalendlyUrl(urlWithUtm);
    };

    updateCalendlyUrl();
    window.addEventListener('resize', updateCalendlyUrl);

    return () => window.removeEventListener('resize', updateCalendlyUrl);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        .pulse-animation {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        @keyframes levitate {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .levitate-arrow {
          animation: levitate 3s ease-in-out infinite;
        }
      `}</style>

      {/* Simplified Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <Link to="/">
              <img src="/ai-skills-26-logo.png" alt="AI Skills 26" className="h-8 md:h-12 w-auto" onError={handleImageError} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">

        {/* Steps Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* STEP 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="hero-title text-2xl lg:text-3xl font-bold text-black mb-4">
                    Step 1. Don't forget to add the Zoom event to your calendar!
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We've just emailed you the invite from{' '}
                    <span className="font-semibold text-blue-600">notifications@calendly.com</span>
                    {' '}or{' '}
                    <span className="font-semibold text-blue-600">maxpog@inniches.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow Connection */}
            <div className="flex justify-center mb-8">
              <ArrowDown className="w-12 h-12 text-gray-400 animate-bounce" />
            </div>

            {/* STEP 2 */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="hero-title text-2xl lg:text-3xl font-bold text-black mb-2">
                    Step 2. Action needed to receive 4 bonuses:
                  </h2>
                </div>
              </div>

              {/* Bonuses Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Bonus 1 */}
                <div className="bg-white rounded-xl p-4 border border-purple-100 hover:border-purple-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">100+ AI investors list</h3>
                    </div>
                  </div>
                </div>

                {/* Bonus 2 */}
                <div className="bg-white rounded-xl p-4 border border-purple-100 hover:border-purple-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">50+ AI freelancers & AI agencies list</h3>
                    </div>
                  </div>
                </div>

                {/* Bonus 3 */}
                <div className="bg-white rounded-xl p-4 border border-purple-100 hover:border-purple-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <Rocket className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Build 3 AI Agents in 3 Days Challenge</h3>
                    </div>
                  </div>
                </div>

                {/* Bonus 4 */}
                <div className="bg-white rounded-xl p-4 border border-purple-100 hover:border-purple-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp group with AI speakers, experts & attendees</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold text-purple-700">To get all 4:</span> Find your poster for your LinkedIn/X post in an email (will arrive in 3-5 minutes) and submit it via{' '}
                  <a
                    href="https://airtable.com/appsz9jDqXPSoBU2N/pagPLTG9DKsZ6k8pz/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-purple-600 hover:text-purple-800 underline transition-colors inline-flex items-center gap-1"
                  >
                    this form
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Partners Block */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                If you have <span className="font-bold text-black">1K+, 10K+ or 100K+ email subscribers</span>, let me know at{' '}
                <a
                  href="mailto:maxpog@inniches.com"
                  className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  maxpog@inniches.com
                </a>
                , and I'll share our benefits for media partners.
              </p>
            </div>
          </div>
        </section>

        {/* Co-Hosts Section */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="hero-title text-2xl lg:text-3xl font-bold text-black mb-8 text-center">Co-Hosted by Leading AI Communities</h3>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Community Sprints */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/co-hosts-company_logo_community_sprints.jpeg"
                    alt="Community Sprints"
                    className="w-full h-full object-contain rounded-lg" onError={handleImageError} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Community Sprints
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A network of passionate AI enthusiasts
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_belyaev.jpg"
                      alt="Alex Belyaev"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Alex Belyaev</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_max_pog.jpg"
                      alt="Max Pog"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Max Pog</span>
                  </div>
                </div>
              </div>

              {/* The Product Compass */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/co-hosts-company_logo_compass.jpeg"
                    alt="The Product Compass"
                    className="w-full h-full object-cover rounded-lg" onError={handleImageError} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  The Product Compass
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The #1 AI & Product Management Newsletter
                </p>
                <div className="flex flex-col items-center mt-2">
                  <img
                    src="/huryn_copy.jpg"
                    alt="Pawel Huryn"
                    className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                  <span className="text-xs text-gray-700 font-medium">Pawel Huryn</span>
                </div>
              </div>

              {/* God of Prompt */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/co-hosts-company_logo_god-of-prompt.jpeg"
                    alt="God of Prompt"
                    className="w-full h-full object-cover rounded-lg" onError={handleImageError} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  God of Prompt
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  AI prompts & guides for all businesses
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_veremeyenko.jpg"
                      alt="Alex Veremeyenko"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Alex Veremeyenko</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/co-hosts_robert-youssef.jpg"
                      alt="Robert Youssef"
                      className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                    <span className="text-xs text-gray-700 font-medium">Robert Youssef</span>
                  </div>
                </div>
              </div>

              {/* Product Growth */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/product_growth_logo.jpg"
                    alt="Product Growth"
                    className="w-full h-full object-contain rounded-lg" onError={handleImageError} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Product Growth
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The newsletter & podcast for AI PMs
                </p>
                <div className="flex flex-col items-center mt-2">
                  <img
                    src="/aakash_gupta.jpg"
                    alt="Aakash Gupta"
                    className="w-12 h-12 rounded-full object-cover mb-1" onError={handleImageError} />
                  <span className="text-xs text-gray-700 font-medium">Aakash Gupta</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MobileRegisterButton calendlyUrl={calendlyUrl} />
    </>
  );
}

export default ThankYouPage;
