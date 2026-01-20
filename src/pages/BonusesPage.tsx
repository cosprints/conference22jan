import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Award, ExternalLink } from 'lucide-react';

const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E';

function BonusesPage() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMG;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Main Content */}
      <main className="bg-white pb-8">
        {/* Hero Section */}
        <section className="py-4 lg:py-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="hero-title text-xl lg:text-3xl font-bold text-black text-center mb-0">
              Invite your LinkedIn connections and get rewards:
            </h1>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="py-6 lg:py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {/* 500+ Invites Reward */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 shadow-lg border-2 border-blue-200">
              <div className="flex items-start gap-3 mb-0">
                <div className="flex-shrink-0">
                  <Gift className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h2 className="hero-title text-xl lg:text-2xl font-bold text-black mb-2">
                    500+ invites <span className="italic text-gray-600">(2 min of your time):</span>
                  </h2>
                  <ul className="space-y-1.5">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold flex-shrink-0">–</span>
                      <span className="text-base text-gray-700">20+ AI business case recordings (4+ hours of content)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold flex-shrink-0">–</span>
                      <span className="text-base text-gray-700">Promotion to all attendees via email – your firm and URL featured in our supporters list</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold flex-shrink-0">–</span>
                      <span className="text-base text-gray-700">Entry into raffle: Win a 30-min consultation with the AI Director of Deliveroo (acquired by DoorDash)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 1,000+ Invites Reward */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 shadow-lg border-2 border-purple-200">
              <div className="flex items-start gap-3 mb-0">
                <div className="flex-shrink-0">
                  <Award className="w-10 h-10 text-purple-600" />
                </div>
                <div>
                  <h2 className="hero-title text-xl lg:text-2xl font-bold text-black mb-2">
                    1,000 invites <span className="italic text-gray-600">(3 min of your time):</span>
                  </h2>
                  <ul className="space-y-1.5">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold flex-shrink-0">–</span>
                      <span className="text-base text-gray-700">Complete AI Bundle ($2,500+ value)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold flex-shrink-0">–</span>
                      <span className="text-base text-gray-700">Top-100 AI tool list, 30K+ prompts, guides for all major AI tools, no-code automations, agents & lifetime updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Section */}
            <div className="bg-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-start gap-3 mb-0 w-full">
                <div>
                  <h2 className="hero-title text-xl lg:text-2xl font-bold text-black mb-2">
                    How:
                  </h2>
                  <div className="text-base text-gray-700 mb-3">
                    <span className="text-green-600 font-bold">1.</span> Watch 1-min video below {'->'} <span className="text-green-600 font-bold">2.</span> LinkedIn event {'->'} Register {'->'} Invite {'->'} Screenshot {'->'} Submit.
                  </div>

                  <div className="mb-4">
                    <p className="text-base text-gray-700">
                      <span className="text-xl">👉</span>{' '}
                      <a
                        href="https://www.linkedin.com/events/7414274913672482816/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-green-600 hover:text-green-800 underline transition-colors inline-flex items-center gap-1"
                      >
                        Here is this LinkedIn event
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {' '}<span className="text-xl">👈</span> to register/invite your connections. <br />After sending the invites and taking a screenshot, <span className="text-xl">👉</span>{' '}
                      <a
                        href="https://airtable.com/appsz9jDqXPSoBU2N/pagN0RXVOoumwqho8/form"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-green-600 hover:text-green-800 underline transition-colors inline-flex items-center gap-1"
                      >
                        submit it here
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {' '}<span className="text-xl">👈</span>.
                    </p>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/zwGTr-3Yk3I"
                      title="How to invite LinkedIn connections"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      sandbox="allow-presentation allow-same-origin allow-scripts allow-popups"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a
              href="https://www.linkedin.com/events/7414274913672482816/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Invite your connections to a LinkedIn event
            </a>

            <p className="text-base text-gray-700 mt-4">
              Don't forget to submit your screenshot{' '}
              <a
                href="https://airtable.com/appsz9jDqXPSoBU2N/pagN0RXVOoumwqho8/form"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:text-blue-800 underline transition-colors inline-flex items-center gap-1"
              >
                here
                <ExternalLink className="w-4 h-4" />
              </a>
              {' '}to receive your bonuses.
            </p>
          </div>
        </section>

        {/* Media Partners Block */}
        <section className="py-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200">
              <p className="text-base text-gray-700 leading-relaxed text-center">
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
      </main>
    </>
  );
}

export default BonusesPage;
