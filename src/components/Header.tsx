import React, { useState, useEffect } from 'react';

// Placeholder image for missing assets
const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E';

import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMG;
  };

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState('https://www.linkedin.com/events/7414274913672482816/');

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
      setCalendlyUrl('https://www.linkedin.com/events/7414274913672482816/');
    };

    updateCalendlyUrl();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-[36px] z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-1">
              <img src="/ai-skills-26-logo.png" alt="AI Skills 26" className="h-8 md:h-12 w-auto" onError={handleImageError} />
              <div className="flex items-center gap-0.5">
                <span className="text-black text-[8px] md:text-[10px] font-medium">BY</span>
                <img src="/csprints.png" alt="Community Sprints" className="h-4 md:h-5 w-auto" onError={handleImageError} />
              </div>
            </Link>
          </div>

          {/* Navigation - Hidden on mobile, shown on desktop */}
          <nav className="hidden md:flex space-x-8">
            {location.pathname === '/' ? (
              <>
                <button onClick={() => scrollToSection('experts')} className="text-black hover:text-purple-600 font-medium transition-colors">Speakers</button>
                <button onClick={() => scrollToSection('schedule')} className="text-black hover:text-purple-600 font-medium transition-colors">Schedule</button>
                <button onClick={() => scrollToSection('community')} className="text-black hover:text-purple-600 font-medium transition-colors">About us</button>
                <button onClick={() => scrollToSection('faq')} className="text-black hover:text-purple-600 font-medium transition-colors">FAQ</button>
              </>
            ) : (
              <>
                <Link to="/" className="text-black hover:text-purple-600 font-medium transition-colors">Home</Link>
              </>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-black hover:bg-gray-800 text-white px-3 md:px-6 py-2 rounded-lg font-medium text-xs md:text-base transition-colors">
              Register for free
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            {location.pathname === '/' ? (
              <>
                <button onClick={() => scrollToSection('experts')} className="block w-full text-left text-black hover:text-purple-600 font-medium py-2 transition-colors">Speakers</button>
                <button onClick={() => scrollToSection('schedule')} className="block w-full text-left text-black hover:text-purple-600 font-medium py-2 transition-colors">Schedule</button>
                <button onClick={() => scrollToSection('community')} className="block w-full text-left text-black hover:text-purple-600 font-medium py-2 transition-colors">About us</button>
                <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-black hover:text-purple-600 font-medium py-2 transition-colors">FAQ</button>
              </>
            ) : (
              <>
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-black hover:text-purple-600 font-medium py-2 transition-colors">Home</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;