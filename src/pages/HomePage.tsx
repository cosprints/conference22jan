import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, BookOpen, Target, Zap, Brain, Camera, Mic, Video, Bot, Sparkles, CheckCircle, User, MapPin, Calendar, Gift, GraduationCap, Network, ChevronDown, Award } from 'lucide-react';
import { PartnerPopup } from '../components/PartnerPopup';
import { CountdownBanner } from '../components/CountdownBanner';
import { MobileRegisterButton } from '../components/MobileRegisterButton';
import { AISkillsCarousel } from '../components/AISkillsCarousel';
import { HeroSpeakersCarousel } from '../components/HeroSpeakersCarousel';

// Placeholder image for missing assets
const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E';

// Partner ID -> popup content (from CSV)
const PARTNER_POPUP_CONTENT: Record<string, string> = {
  '5': 'Perplexity Mastery Guide',
  '6': 'ChatGPT Images Mastery Guide',
  '7': 'Google\'s Veo Mastery Guide',
  '8': 'Gemini Mastery Guide',
  '9': 'AI Agents Mastery Guide',
  '10': 'Deep Researcher Mega-Prompt',
  '11': 'Grok Mastery Guide',
  '12': 'AI Agents System Prompt Generator',
  '13': 'Claude Mastery Guide',
  '14': 'ChatGPT — Most Used Words',
  '15': 'Tweet Generator Mega-Prompt',
  '16': 'Midjourney Mastery Guide',
  '17': 'Prompt Engineering Guide',
  '62': '10 Ideas How You Can Start Earning with AI in 2026',
  '63': 'How to make viral posts on LinkedIn and get 16M+ impressions in 3 months?',
  '64': 'AI revenue-growth playbook: 30 High-ROI AI actions to scale without hiring',
  '52': 'Vibe Coding book (PDF)'
};

function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [partner, setPartner] = useState<string | null>(null);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);
  const [conferenceSlide, setConferenceSlide] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMG;
  };
  const [calendlyUrl] = useState('https://www.linkedin.com/events/7414274913672482816?viewAsMember=true');

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

    if (partnerParam) {
      setPartner(partnerParam);
      // Only show popup if partner has bonuses (exists in PARTNER_POPUP_CONTENT)
      const hasBonus = partnerParam in PARTNER_POPUP_CONTENT;
      if (hasBonus) {
      setShowPartnerPopup(true);
      } else {
        // Explicitly ensure popup is not shown for partners without bonuses
        setShowPartnerPopup(false);
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setConferenceSlide((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  const companyLogos = [
    { src: '/microsoft-logo.png', alt: 'Microsoft' },
    { src: '/aws.png', alt: 'AWS' },
    { src: '/deliveroo.png', alt: 'Deliveroo' },
    { src: '/google-ai-logo.png', alt: 'Google AI' },
    { src: '/miro-logo.png', alt: 'Miro' },
    { src: '/zencoder_2.png', alt: 'Zencoder' },
    { src: '/techstars2.png', alt: 'Techstars' },
    { src: '/fluently_.png', alt: 'Fluently' },
    { src: '/hustle-fund-logo.png', alt: 'Hustle Fund' },
    { src: '/descript-logo.png', alt: 'Descript' },
    { src: '/idc-ventures.png', alt: 'IDC Ventures' },
  ];

  const conferences = [
    {
      id: 1,
      title: 'AI Showcase Virtual Conf',
      image: '/conf_1.jpg',
      stats: [
        { label: 'Registrations', value: '3,100+' },
        { label: 'Business owners / CEOs / Directors', value: '1,095' },
        { label: 'AI Investors', value: '264' },
        { label: 'AI Startups', value: '264' },
        { label: 'AI freelancers / agencies', value: '194' },
        { label: 'General Attendees', value: '730' },
        { label: 'Unique visitors', value: '1,433' },
        { label: 'Zoom peak attendance', value: '734' },
      ],
    },
    {
      id: 2,
      title: 'Capital Networking Virtual Conf',
      image: '/conf_2.jpg',
      stats: [
        { label: 'Participants', value: '4,500+' },
        { label: 'VC Funds', value: '839' },
        { label: 'Angels', value: '630' },
        { label: 'Venture Studios', value: '515' },
        { label: 'Single Family offices', value: '383' },
        { label: 'Accelerators', value: '374' },
        { label: 'PE Funds', value: '315' },
        { label: 'RE Funds', value: '234' },
        { label: 'Corporations / CVCs', value: '208' },
        { label: 'LPs', value: '295' },
        { label: 'HNWIs ($1M+)', value: '262' },
        { label: 'Funds of Funds', value: '164' },
        { label: 'Crypto Funds', value: '138' },
        { label: 'Private Credit Funds', value: '133' },
        { label: 'Unique visitors', value: '2,703' },
        { label: 'Zoom peak attendance', value: '1,111' },
      ],
    },
    {
      id: 3,
      title: 'Early-Stage Virtual Conf',
      image: '/conf_3.jpg',
      stats: [
        { label: 'Participants', value: '2,921' },
        { label: 'Startups', value: '2,259' },
        { label: 'VC Funds', value: '544' },
        { label: 'Angels', value: '359' },
        { label: 'Startup advisors & others', value: '863' },
        { label: 'Fundraising agents', value: '372' },
        { label: 'Accelerators', value: '138' },
        { label: 'Venture Studios', value: '167' },
        { label: 'Family Offices', value: '147' },
        { label: 'Angel Syndicate Leads', value: '152' },
        { label: 'Private Equity Funds', value: '65' },
        { label: 'CVCs', value: '52' },
        { label: 'Limited Partners', value: '88' },
        { label: 'Fund of Funds', value: '42' },
        { label: 'Unique visitors', value: '3,576' },
        { label: 'Zoom peak attendance', value: '2,000+' },
      ],
    },
  ];

  const faqs = [
    {
      question: "What is AI Skills '26?",
      answer: "AI Skills '26 is a free virtual conference designed to help professionals gain practical AI skills. The event brings together 20+ top AI experts, 1,000+ attendees, and over 4 hours of hands-on learning, use-case breakdowns, and workflow implementation tips."
    },
    {
      question: "When and where does the conference take place?",
      answer: "The event is fully online and will be held on 22 January 2026 at 8 AM SF | 11 AM NYC | 4 PM GMT. You can join from anywhere in the world."
    },
    {
      question: "Who is this conference for?",
      answer: "AI Skills '26 is ideal for: Business owners, operations managers, project & product managers, sales and marketing professionals, customer support managers, developers, investors, creators, consultants, and educators. If you want to apply AI to real workflows, this event is for you."
    },
    {
      question: "Is the event really free?",
      answer: "Yes! Registration is completely free. Your ticket includes access to all talks, workshops, partner perks, and bonus materials."
    },
    {
      question: "What will I learn?",
      answer: "You will learn how to: Identify high-ROI AI use cases, implement AI in existing workflows without disruption, build real no-code AI agents, leverage AI for content, automation, analytics, and more. Gain practical skills directly applicable to your daily tasks."
    },
    {
      question: "Who are the speakers?",
      answer: "Our speakers include leading AI experts such as AI Directors, Product Managers, and tech innovators who have implemented AI systems with measurable business impact—like cutting costs 2×, increasing ROI 3×, and creating viral AI-powered content."
    },
    {
      question: "Will I get access to the schedule?",
      answer: "Yes. The full agenda is available on the event page, and includes talks and workshops across startup, corporate, and VC tracks. Additional sessions will be revealed closer to the event."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely. You'll join a community of 1,000+ attendees, including leaders, founders, AI practitioners, investors, and creators. You can expand your professional network, make new connections, and collaborate on real AI projects."
    },
    {
      question: "How do I join as a media partner?",
      answer: "If you have 1K+, 10K+ or 100K+ email subscribers, let us know at maxpog@inniches.com, and we'll share our benefits for media partners."
    },
    {
      question: "Who organizes AI Skills '26?",
      answer: "The conference is powered by Community Sprints, a global learning community with 10,000+ learners. We've launched 50+ educational programs, delivered hands-on AI workshops, and hosted multiple successful conferences worldwide."
    }
  ];


  const scrollToSection = (sectionId: string) => {
    // Update URL hash without triggering scroll
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for fixed banner (36px) and sticky header (64px) + some padding
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle initial page load with hash and browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            // Account for fixed banner (36px) and sticky header (64px) + some padding
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.classList.contains('ai-pro-highlight')) {
            entry.target.classList.add('animate-highlight');
          }
        });
      },
      { threshold: 0.5 }
    );

    const highlightElement = document.querySelector('.ai-pro-highlight');
    if (highlightElement) {
      observer.observe(highlightElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showPartnerPopup && partner && PARTNER_POPUP_CONTENT[partner] && (
        <PartnerPopup
          partner={partner}
          bonusName={PARTNER_POPUP_CONTENT[partner]}
          onClose={() => setShowPartnerPopup(false)}
        />
      )}

      <div className="pb-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

        .hero-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .levitate-button {
          animation: levitate 3s ease-in-out infinite;
        }

        @keyframes levitate {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .ai-pro-highlight {
          position: relative;
          color: white !important;
          background: linear-gradient(135deg, #8bd2a0, #00a88b);
          border-radius: 12px;
          padding: 8px 16px;
          display: inline-block;
        }

        .ai-pro-highlight::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 210, 160, 0.3), rgba(0, 168, 139, 0.3));
          border-radius: 12px;
          z-index: 1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1.2s ease-out;
          pointer-events: none;
        }

        .ai-pro-highlight.animate-highlight::after {
          transform: scaleX(1);
        }

        @keyframes live-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
          }
        }

        .live-button {
          animation: live-pulse 2s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .live-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      {/* LIVE Conference Banner */}
      <section className="py-12 lg:py-16 live-gradient bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="inline-block bg-white/30 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold text-base md:text-lg uppercase tracking-wider animate-pulse shadow-lg border-2 border-white/50">
                🔴 LIVE
              </span>
            </div>
            <h2 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
              [LIVE] Conference is live now!
            </h2>
            <a
              href="https://www.linkedin.com/events/7414274913672482816?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="live-button inline-block bg-white text-orange-600 px-10 py-5 md:px-16 md:py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all shadow-2xl hover:shadow-3xl hover:scale-110 transform border-4 border-white/50"
            >
              Join →
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 lg:py-24 bg-gradient-to-br from-purple-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        {/* Accent Gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-300/30 to-purple-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-8">
              <h1 className="hero-title text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-tight mt-4">
                Join Our Virtual Conf —<br className="sm:hidden" /> Build Real AI Skills
              </h1>

              <div className="flex flex-wrap gap-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Online via Zoom</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <span className="font-medium hidden sm:inline">
                    <span className="text-gray-800">22 January 2026, </span>
                    <span className="text-gray-400">8 AM SF | 11 AM NYC | 4 PM GMT</span>
                  </span>
                  <span className="font-medium sm:hidden">
                    <span className="text-gray-800">22 Jan 2026, </span>
                    <span className="text-gray-400">8 AM SF | 11 AM NYC | 4 PM GMT</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="border-2 border-black text-black font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">5,000+</span>
                  <span className="text-gray-700">attendees as your network</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="border-2 border-black text-black font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">20+</span>
                  <span className="text-gray-700">speakers — top AI experts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="border-2 border-black text-black font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">4+</span>
                  <span className="text-gray-700">hours of hands-on practice and insights</span>
                </li>
              </ul>

              <div className="pt-4 relative inline-block">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="levitate-button bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all inline-block shadow-lg hover:shadow-xl hover:scale-105">
                  [LIVE] Join now
                </a>
                <span className="absolute -top-3 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full font-bold text-base shadow-lg transform rotate-12 z-10">
                  For free
                </span>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative w-full">
              <HeroSpeakersCarousel />
            </div>
          </div>

          {/* Company Logos Carousel */}
          <div className="mt-16">
            <style>{`
              @keyframes scroll-logos {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .logo-carousel {
                animation: scroll-logos 30s linear infinite 3s;
              }
            `}</style>
            <div className="overflow-hidden">
              <div className="logo-carousel flex items-center gap-8 py-4">
                {[...companyLogos, ...companyLogos].map((logo, index) => (
                  <img
                    key={`${logo.src}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                    onError={handleImageError}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mt-12 mb-8">
              <h3 className="hero-title text-3xl lg:text-5xl font-bold text-black mb-6">
                This Event Is For
              </h3>

              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                <div className="transform -rotate-1">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Business Owners
                  </span>
                </div>

                <div className="transform rotate-2">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Project & Product Managers
                  </span>
                </div>

                <div className="transform -rotate-2">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Operations Managers
                  </span>
                </div>

                <div className="transform rotate-1">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Sales & Marketing Executives
                  </span>
                </div>

                <div className="transform -rotate-1">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Customer Support Managers
                  </span>
                </div>

                <div className="transform rotate-2">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Developers
                  </span>
                </div>

                <div className="transform -rotate-2">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Investors & VCs
                  </span>
                </div>

                <div className="transform rotate-1">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Consultants & Advisors
                  </span>
                </div>

                <div className="transform -rotate-1">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Creators
                  </span>
                </div>

                <div className="transform rotate-2">
                  <span className="inline-block px-6 py-3 border-2 border-black text-black rounded-full text-sm lg:text-base font-semibold">
                    Educators & Trainers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 text-center">
            <h3 className="hero-title text-3xl lg:text-5xl font-bold text-black mb-6">
              What You'll Walk Away With
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-black">
              <div className="mb-6">
                <img src="/tools.png" alt="Actionable AI Workflows" className="h-20 w-20" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">
                Actionable AI Workflows & Use Cases
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Real workflows from practitioners who use AI daily at companies like Microsoft, Google AI, DoorDash and Miro — not theory
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-black">
              <div className="mb-6">
                <img src="/hands.png" alt="Ready-to-Use Prompts" className="h-20 w-20" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">
                Ready-to-Use Prompts & Templates
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Copy-paste prompts and frameworks you can implement in your work the same day
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-black">
              <div className="mb-6">
                <img src="/goal.png" alt="2026 AI Trends" className="h-20 w-20" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">
                2026 AI Trends & Predictions
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Understand what's coming so you can prepare your career and your team
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-black">
              <div className="mb-6">
                <img src="/community.png" alt="Access to AI Community" className="h-20 w-20" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">
                Access to AI Community
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Connect with 5,000+ professionals learning AI together
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why AI Skills Matter In 2026 */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="hero-title text-2xl lg:text-4xl font-bold text-black mb-4">
              Check Out 1,000+ Cases of Job Losses Due to AI
            </h2>
            <p className="text-lg text-gray-600">According to a Recent Reddit Thread</p>
          </div>

          <div className="mb-12 lg:mb-16 bg-white rounded-2xl border-2 border-black overflow-hidden shadow-lg">
            <AISkillsCarousel />
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-black p-8 lg:p-12 shadow-lg">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-black">The skills needed in 2026 are completely different from a year ago.</span> Just knowing how to use GPT doesn't impress people anymore.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-black">Now other things matter:</span> building quick prototypes, managing AI agents, understanding where AI can help and where it can't.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                We'll talk about this at our Virtual AI Conf about AI skills!
              </p>
            </div>

            <div className="mt-8">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors"
              >
                [LIVE] Join now
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Meet Our Experts */}
      <section id="experts" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="hero-title text-3xl lg:text-5xl font-bold text-black mb-6">Speakers</h2>
            <p className="text-xl text-gray-700">Learn from top industry leaders and innovators shaping the future of AI</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-pink-400 to-pink-600">
                <img
                  src="/martijn_lancee.jpg"
                  alt="Martijn Lancee"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">GTM AI</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/microsoft-logo.png" alt="Microsoft" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Martijn Lancee</h3>
                <p className="text-gray-400 text-sm italic">A senior leader at Microsoft driving the adoption and growth of AI and cloud solutions, with a focus on business development, strategic AI partnerships, and go-to-market programs.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-indigo-400 to-blue-600">
                <img
                  src="/satyajeet-salgar.jpg"
                  alt="Satyajeet Salgar"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Director of Product</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/google-ai-logo.png" alt="Google AI" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Satyajeet Salgar</h3>
                <p className="text-gray-400 text-sm italic">Leads product and UX teams for Google's Applied AI research, focusing on human interaction and scaling products to 1B+ daily active users.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-orange-400 to-red-600">
                <img
                  src="/zborovskiy.jpg"
                  alt="Dima Zborovskiy"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">AI Director</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/deliveroo.png" alt="Deliveroo" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Dima Zborovskiy</h3>
                <p className="text-gray-400 text-sm italic">Integrated AI agents into real workflows, achieving a 3× ROI increase. Leads the integration of multi-agent AI systems to drive product innovation, accelerate team productivity, and deliver measurable business impact.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-amber-400 to-yellow-600">
                <img
                  src="/tomas-dostal-freire.jpg"
                  alt="Tomás Dostal Freire"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">CIO</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/miro-logo.png" alt="Miro" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tomás Dostal Freire</h3>
                <p className="text-gray-400 text-sm italic">CIO & Head of Business Transformation. Defining AI-first operating models for hypergrowth scale. Ex-Netflix, Google, Booking.com</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-teal-400 to-cyan-600">
                <img
                  src="/filev.jpg"
                  alt="Andrew Filev"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Founder & CEO</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/zencoder-logo.png" alt="Zencoder" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Andrew Filev</h3>
                <p className="text-gray-400 text-sm italic">Founded Zencoder AI coding assistant and Wrike, sold to Citrix for ~$2.25B. Featured in Forbes, Entrepreneur, Inc., and The New York Times.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-400 to-indigo-600">
                <img
                  src="/Angela_Elle_Sun.jpeg"
                  alt="Angela Elle Sun"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">AI Adoption Lead</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/microsoft-logo.png" alt="Microsoft" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Angela Elle Sun</h3>
                <p className="text-gray-400 text-sm italic">Expert on all things related to AI Adoption in Enterprise, from leading internal AI adoption programs internally at Microsoft to founding 'Enterprise AI Enabled', a private network of AI Enablement Executives across 40+ F500s.</p>
              </div>
            </div>


            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-pink-400 to-rose-600">
                <img
                  src="/nick_golos.jpg"
                  alt="Nick Golos"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">Growth manager</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/fluently_.png" alt="Fluently" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Nik Golos</h3>
                <p className="text-gray-400 text-sm italic">He grew 2 LinkedIn accounts to 20M+ views in just 4 months creating viral content with over 1M impressions per post. Nick is a Y Combinator alumnus and frequently speaks about building AI-native products and product-led growth.</p>
              </div>
            </div>
        

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-yellow-400 to-amber-600">
                <img
                  src="/amandeep_khurana.jpeg"
                  alt="Amandeep Khurana"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Product Manager</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/aws.png" alt="AWS" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Amandeep Khurana</h3>
                <p className="text-gray-400 text-sm italic">He leads product efforts for AWS AgentCore. He was also the founding PM for Kiro, an agentic IDE, and led the build out of the PLG motion for Amazon Q. Amandeep is also a startup founder and his company exited to Databricks.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-yellow-400 to-orange-600">
                <img
                  src="/veremeyenko.jpg"
                  alt="Alex Veremeyenko"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">Founder</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/veremeyenko_company_logo.png" alt="God of Prompt" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Alex Veremeyenko</h3>
                <p className="text-gray-400 text-sm italic">Built a leading AI prompting platform serving 17,000+ customers, 70,000+ newsletter subscribers, and featuring a library of 30,000+ prompts.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-purple-400 to-pink-600">
                <img
                  src="/gupta.jpg"
                  alt="Pallavi Gupta"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Product Manager</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/microsoft-logo.png" alt="Microsoft" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Pallavi Gupta</h3>
                <p className="text-gray-400 text-sm italic">Leads AI and analytics product Titan at Microsoft, democratizing data and insights across Microsoft AI, Copilot and Windows.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-indigo-400 to-blue-600">
                <img
                  src="/misti-cain_.jpg"
                  alt="Misti Cain"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">Managing Director</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/techstars-logo-vector.png" alt="Techstars" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Misti Cain</h3>
                <p className="text-gray-400 text-sm italic">Has helped portfolio startups raise over $30 million and achieve two successful exits. Recipient of the prestigious #GiveFirst Award (2022) and voted All-Star Mentor (2019).</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-amber-400 to-orange-600">
                <img
                  src="/haley-bryant.jpg"
                  alt="Haley Bryant"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">Partner</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/hustle-fund-logo.png" alt="Hustle Fund" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Haley Bryant</h3>
                <p className="text-gray-400 text-sm italic">Invests in pre-seed AI/ML, fintech, and digital health startups at Hustle Fund. Has made 50+ angel investments and was recently promoted to Partner (December 2025).</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-emerald-400 to-green-600">
                <img
                  src="/huryn_copy.jpg"
                  alt="Pawel Huryn"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">CEO</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/product-compass.png" alt="The Product Compass" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Pawel Huryn</h3>
                <p className="text-gray-400 text-sm italic">Runs the #1 AI & Product Management newsletter, plus courses and step-by-step playbooks for AI PMs—trusted by 127K+ and growing.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-amber-400 to-orange-600">
                <img
                  src="/laura-burkhauser.jpg"
                  alt="Laura Burkhauser"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">CEO</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/descript-logo.png" alt="Descript" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Laura Burkhauser</h3>
                <p className="text-gray-400 text-sm italic">Previously Director of Product Management at Twitter, with product roles at Rent the Runway, Le Tote, and Amazon.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-slate-400 to-blue-700">
                <img
                  src="/max-reiff.jpg"
                  alt="Max Reiff"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Partner</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/idc-ventures.png" alt="IDC Ventures" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Max Reiff</h3>
                <p className="text-gray-400 text-sm italic">Leads investments in fintech and marketplace startups at a global VC platform managing $850M in assets across the US, Latin America, and Europe.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-lime-400 to-green-600">
                <img
                  src="/liam_dubson.jpg"
                  alt="Liam Dubson"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Founder & CEO</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/encountr.png" alt="Encountr" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Liam Dubson</h3>
                <p className="text-gray-400 text-sm italic">The founder and CEO of encountr.ai, an AI-driven relationship intelligence platform designed to decode and enhance human connection through voice science and emotional data.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-500 to-cyan-600">
                <img
                  src="/jay_singh.jpg"
                  alt="Jay Singh"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">CEO</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/logo-casper-studios.png" alt="Casper Studios" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Jay Singh</h3>
                <p className="text-gray-400 text-sm italic">He has worked with dozens of brands and founders, overseeing 100+ creative projects spanning video, digital media, and brand storytelling.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-violet-400 to-fuchsia-600">
                <img
                  src="/hamel_husain.jpg"
                  alt="Hamel Husain"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">ML Engineer</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/logo-parlance-labs.png" alt="Parlance Labs" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hamel Husain</h3>
                <p className="text-gray-400 text-sm italic">Independent AI Consultant & ML Engineer with 20+ years of experience building and scaling applied AI, machine learning, and data science systems.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-rose-400 to-red-600">
                <img
                  src="/matthias_walter.jpg"
                  alt="Matthias Walter"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Co-Founder</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/fastbreak_one_logo.jpeg" alt="Fastbreak.one" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Matthias Walter</h3>
                <p className="text-gray-400 text-sm italic">Building innovative AI solutions at Fastbreak.one</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-violet-400 to-purple-600">
                <img
                  src="/aakash_gupta.jpg"
                  alt="Aakash Gupta"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Founder</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <span className="text-gray-900 text-xs font-medium px-2">Product Growth</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Aakash Gupta</h3>
                <p className="text-gray-400 text-sm italic">He is a former VP of Product at a Unicorn who now writes one of the most actionable newsletters for product managers, product leaders, and aspiring PMs. He focuses on product growth, product-led growth (PLG), and scaling B2B SaaS through the product itself.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-cyan-400 to-blue-600">
                <img
                  src="/seva_ustinov.jpeg"
                  alt="Seva Ustinov"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Founder</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/plurio.png" alt="Plurio" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Seva Ustinov</h3>
                <p className="text-gray-400 text-sm italic">Expert in building AI‑native companies. Over the past year, Seva moved his entire team into Cursor and built a unified AI operating layer where company context and rules are shared, onboarding and knowledge transfer happen in minutes, and routine work is automated.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-400 to-cyan-600">
                <img
                  src="/carraro.jpg"
                  alt="Fabrício Carraro"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">AI Developer Advocate</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/fabricio_carraroco_company.png" alt="Barcelona Supercomputing Center" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fabrício Carraro</h3>
                <p className="text-gray-400 text-sm italic">Advancing AI development and innovation</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-orange-400 to-red-600">
                <img
                  src="/boris_krumrey.jpeg"
                  alt="Boris Krumrey"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">VP Automation</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/uipath.png" alt="UiPath" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Boris Krumrey</h3>
                <p className="text-gray-400 text-sm italic">He works with global organizations to drive large-scale process automation and AI adoption. He focuses on helping enterprises transform operations using intelligent automation, AI agents, and platform-driven workflows.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-green-400 to-emerald-600">
                <img
                  src="/joseph.jpg"
                  alt="Raphael Joseph"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-3 py-2 rounded-full text-sm font-medium">Co-Founder</span>
                  <span className="inline-flex items-center bg-white px-3 py-2 rounded-full">
                    <img src="/raphael_joseph_company_logo.png" alt="We Are Agentic" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Raphael Joseph</h3>
                <p className="text-gray-400 text-sm italic">Co-founded an AI training and consulting firm that helps enterprises implement agentic workflows and AI adoption strategies across the UK, Europe, GCC, and the USA.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-teal-400 to-green-600">
                <img
                  src="/David_Jayatillake.jpeg"
                  alt="David Jayatillake"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Founder</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/davidj.substack.png" alt="davidj.substack" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">David Jayatillake</h3>
                <p className="text-gray-400 text-sm italic">Experienced and world renowned data, technology and AI leader. Expert in the application of LLMs to the semantic layer. Writes at davidsj.substack.com about data, leadership, venture capital and AI.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-rose-400 to-pink-600">
                <img
                  src="/Kamil_Banc.jpeg"
                  alt="Kamil Banc"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Founder</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/right_click_prompt.png" alt="Right Click Prompt" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Kamil Banc</h3>
                <p className="text-gray-400 text-sm italic">The founder of the AI Adopters Club and one of Substack's top technology best sellers. He serves as a fractional Chief AI Officer for Fortune 500 companies.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-indigo-400 to-purple-600">
                <img
                  src="/Tak_Lo.jpeg"
                  alt="Tak Lo"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Founder</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/the-automated.png" alt="The Automated" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tak Lo</h3>
                <p className="text-gray-400 text-sm italic">He is passionate about inspiring 1 billion people with AI. He founded Zeroth.ai, one of the first accelerators that solely focused on AI technologies.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-emerald-400 to-teal-600">
                <img
                  src="/benjamin_joffe.jpg"
                  alt="Benjamin Joffe"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Senior Partner</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/sosv.jpeg" alt="SOSV" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Benjamin Joffe</h3>
                <p className="text-gray-400 text-sm italic">He is Senior Partner at SOSV, a global early stage fund focused on deep tech. He has built a broad knowledge in climate tech and health tech, and curate / co-produce the SOSV Climate Tech Summit.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-orange-400 to-yellow-600">
                <img
                  src="/tanya_roosta.jpg"
                  alt="Tanya Roosta"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Science Manager</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/amazon.png" alt="Amazon" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tanya Roosta</h3>
                <p className="text-gray-400 text-sm italic">She is an AI executive leader with 15+ years of experience shaping enterprise-scale AI strategy, building high-performing applied science organizations, and delivering production-ready GenAI systems across Search, Personalization, and Conversational AI.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-400 to-indigo-600">
                <img
                  src="/virginia_roberts.jpg"
                  alt="Virginia Roberts"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Cloud Trainer</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/google.png" alt="Google" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Virginia Roberts</h3>
                <p className="text-gray-400 text-sm italic">She is seasoned expert with 10+ years of cloud and AI experience, including as a trainer and program manager across many technical areas.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full bg-gradient-to-br from-purple-400 to-indigo-600">
                <img
                  src="/johann_nogueira.jpg"
                  alt="Johann Nogueira"
                  className="w-full h-full object-cover"
                  loading="lazy" onError={handleImageError} />
              </div>
              <div className="px-4 py-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-block bg-gray-600 text-white px-2 py-2 rounded-full text-sm font-medium">Director</span>
                  <span className="inline-flex items-center bg-white px-2 py-2 rounded-full">
                    <img src="/ai-tech-advisory.png" alt="AI Tech Advisory" className="h-5" onError={handleImageError} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Johann Nogueira</h3>
                <p className="text-gray-400 text-sm italic">An entrepreneur, tech investor, and AI innovator who helps business owners scale through systems, technology, and leverage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Schedule Section */}
      <section id="schedule" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="hero-title text-3xl lg:text-5xl font-bold text-black mb-6">Conference Schedule</h2>
            <p className="text-xl text-gray-700">Full agenda of talks and workshops</p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => scrollToSection('track1')} className="text-purple-600 font-medium transition-colors border-b-2 border-purple-600 pb-2">Track 1</button>
            <button onClick={() => scrollToSection('track2')} className="text-black hover:text-purple-600 font-medium transition-colors border-b-2 border-transparent hover:border-purple-600 pb-2">Track 2 (Breakout Room)</button>
          </div>

          <div id="track1" className="space-y-4">
            {/* Schedule Card 1 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">11:00 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Main Stage</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">11:00 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Main Stage</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Co-hosts introduction</div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src="/co-hosts_max_pog.jpg" alt="Max Pog" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Max Pog, Co-Host</span>
                      <img src="/csprints.png" alt="Community Sprints" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/co-hosts_robert-youssef.jpg" alt="Robert Youssef" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Robert Youssef, Co-Founder</span>
                      <img src="/veremeyenko_company_logo.png" alt="God of Prompt" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/huryn_copy.jpg" alt="Pawel Huryn" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Pawel Huryn, CEO</span>
                      <img src="/product-compass.png" alt="The Product Compass" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/aakash_gupta.jpg" alt="Aakash Gupta" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Aakash Gupta, Founder</span>
                      <span className="text-gray-700 text-xs font-medium">Product Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 2 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">11:05 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">11:05 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How to Cut Through AI Tool Noise. What are the Must-Have AI Skills for 2026?</div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <img src="/zborovskiy.jpg" alt="Dima Zborovskiy" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Dima Zborovskiy, AI Director</span>
                      <img src="/deliveroo.png" alt="Deliveroo" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/martijn_lancee.jpg" alt="Martijn Lancee" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Martijn Lancee, GTM AI</span>
                      <img src="/microsoft-logo.png" alt="Microsoft" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/virginia_roberts.jpg" alt="Virginia Roberts" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Virginia Roberts, Cloud Trainer</span>
                      <img src="/google.png" alt="Google" className="h-5" onError={handleImageError} />
                    </div>
                    <span className="text-gray-600 italic ml-10">Moderator: Liam Dubson @ encountr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 3 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">11:35 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">11:35 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How to use AI agents for metrics and personal growth? AI use cases from Deliveroo</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/zborovskiy.jpg" alt="Dima Zborovskiy" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Dima Zborovskiy, AI Director</span>
                    <img src="/deliveroo.png" alt="Deliveroo" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 4 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">12:25 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">12:25 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How we use AI for growth & marketing</div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <img src="/laura-burkhauser.jpg" alt="Laura Burkhauser" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Laura Burkhauser, CEO</span>
                      <img src="/descript-logo.png" alt="Descript" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/nick_golos.jpg" alt="Nick Golos" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Nik Golos, Growth manager</span>
                      <img src="/fluently_.png" alt="Fluently" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/jay_singh.jpg" alt="Jay Singh" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Jay Singh, CEO</span>
                      <img src="/logo-casper-studios.png" alt="Casper Studios" className="h-5" onError={handleImageError} />
                    </div>
                    <span className="text-gray-600 italic ml-10">Moderator: Emilia David</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 5 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">12:50 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">12:50 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How to make 16M views on LinkedIn in 3 months with AI</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/nick_golos.jpg" alt="Nick Golos" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Nik Golos, Growth manager</span>
                    <img src="/fluently_.png" alt="Fluently" className="h-4" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 6 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">13:05 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">13:05 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">What VCs think: Is AI a Bubble? And Which AI Startups They'll Actually Fund in 2026</div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <img src="/misti-cain_.jpg" alt="Misti Cain" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Misti Cain, Managing Director</span>
                      <img src="/techstars-logo-vector.png" alt="Techstars" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/max-reiff.jpg" alt="Max Reiff" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Max Reiff, Partner</span>
                      <img src="/idc-ventures.png" alt="IDC Ventures" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/haley-bryant.jpg" alt="Haley Bryant" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Haley Bryant, Partner</span>
                      <img src="/hustle-fund-logo.png" alt="Hustle Fund" className="h-5" onError={handleImageError} />
                    </div>
                    <span className="text-gray-600 italic ml-10">Moderator: Nathan Beckord @ Foundersuite</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 7 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">13:30 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">13:30 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">The 5 most popular financial agentic AI workflows relevant to all industries</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/joseph.jpg" alt="Raphael Joseph" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Raphael Joseph, Co-Founder</span>
                    <img src="/raphael_joseph_company_logo.png" alt="We Are Agentic" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 8 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">13:45 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">13:45 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Panel</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">MCP, AI Agents, AI Skills, Automations & Prompting: What's Dead and What's Next in 2026</div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <img src="/veremeyenko.jpg" alt="Alex Veremeyenko" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Alex Veremeyenko, Founder</span>
                      <img src="/veremeyenko_company_logo.png" alt="God Of Prompt" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/carraro.jpg" alt="Fabricio Carraro" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Fabrício Carraro, AI Developer Advocate</span>
                      <img src="/fabricio_carraroco_company.png" alt="Barcelona Supercomputing Center" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/gupta.jpg" alt="Pallavi Gupta" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Pallavi Gupta, Product Manager</span>
                      <img src="/microsoft-logo.png" alt="Microsoft AI" className="h-5" onError={handleImageError} />
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/hamel_husain.jpg" alt="Hamel Husain" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Hamel Husain, ML Engineer</span>
                      <img src="/logo-parlance-labs.png" alt="Parlance Labs" className="h-5" onError={handleImageError} />
                    </div>
                    <span className="text-gray-600 italic ml-10">Moderator: Robert Youssef @ God Of Prompt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 9 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">14:10 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">14:10 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">AI Superpowers: Can one person build a unicorn?</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/satyajeet-salgar.jpg" alt="Satyajeet Salgar" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Satyajeet Salgar, Director of Product</span>
                    <img src="/google-ai-logo.png" alt="Google AI" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 10 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">14:25 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">14:25 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Scaling AI engineering to production repositories</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/filev.jpg" alt="Andrew Filev" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Andrew Filev, Founder & CEO</span>
                    <img src="/zencoder-logo.png" alt="The Product Compass" className="h-4" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 11 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">14:40 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">14:40 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Stop using AI in your browser</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/aakash_gupta.jpg" alt="Aakash Gupta" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Aakash Gupta, Founder</span>
                    <span className="text-gray-700 text-xs font-medium">Product Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 12 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">14:55 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">14:55 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How to build a ready SaaS without coding?</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/huryn_copy.jpg" alt="Pawel Huryn" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Pawel Huryn, CEO</span>
                    <img src="/product-compass.png" alt="The Product Compass" className="h-4" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 13 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">15:25 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">15:25 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Emotional and relationship intelligence in the era of AI</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/liam_dubson.jpg" alt="Liam Dubson" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Liam Dubson, Founder & CEO</span>
                    <img src="/encountr.png" alt="Encountr" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 14 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">15:30 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">15:30 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Agentic Innovation: 10× Output. Same Budget.</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/matthias_walter.jpg" alt="Matthias Walter" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Matthias Walter, Co-Founder</span>
                    <img src="/fastbreak_one_logo.jpeg" alt="Fastbreak.one" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 15 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">15:45 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">15:45 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Developing your Human API</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/Kamil_Banc.jpeg" alt="Kamil Banc" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Kamil Banc, Founder</span>
                    <img src="/right_click_prompt.png" alt="Right Click Prompt" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 16 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">15:50 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">15:50 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">AGI is probably here</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/David_Jayatillake.jpeg" alt="David Jayatillake" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">David Jayatillake, Founder</span>
                    <img src="/davidj.substack.png" alt="davidj.substack" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card 17 */}
            <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                <div className="md:hidden flex items-center gap-3">
                  <div className="text-gray-900 font-bold text-lg">15:55 <span className="text-gray-400">(NYC)</span></div>
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-gray-900 font-bold text-lg">15:55 <span className="text-gray-400">(NYC)</span></div>
                </div>
                <div className="hidden md:block">
                  <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                </div>
                <div>
                  <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Secret topic</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/johann_nogueira.jpg" alt="Johann Nogueira" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                    <span className="text-gray-900">Johann Nogueira, Director</span>
                    <img src="/ai-tech-advisory.png" alt="AI Tech Advisory" className="h-5" onError={handleImageError} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-12 mb-4">
            <button onClick={() => scrollToSection('track2')} className="text-purple-600 font-medium transition-colors border-b-2 border-purple-600 pb-2">Track 2 (Breakout Room)</button>
            <button onClick={() => scrollToSection('track1')} className="text-black hover:text-purple-600 font-medium transition-colors border-b-2 border-transparent hover:border-purple-600 pb-2">Track 1</button>
          </div>
          <div id="track2" className="mt-4">
            <div className="space-y-4">
              {/* Schedule Card - Track 2 - 13:05 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">13:05 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Workshop</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">13:05 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Workshop</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Multi-agent decision board</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/tomas-dostal-freire.jpg" alt="Tomás Dostal Freire" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Tomás Dostal Freire, CIO</span>
                      <img src="/miro-logo.png" alt="Miro" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card - Track 2 - 13:20 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">13:20 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">13:20 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How to Think About Building AI Startups</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/Tak_Lo.jpeg" alt="Tak Lo" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Tak Lo, Founder</span>
                      <img src="/the-automated.png" alt="The Automated" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card - Track 2 - 13:30 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">13:30 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">13:30 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How to move from using AI tools to running an AI-native company in practice.</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/seva_ustinov.jpeg" alt="Seva Ustinov" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Seva Ustinov, Founder</span>
                      <img src="/plurio.png" alt="Plurio" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card - Track 2 - 13:45 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">13:45 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">13:45 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How VCs and teams can leverage AI and automation</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/benjamin_joffe.jpg" alt="Benjamin Joffe" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Benjamin Joffe, Senior Partner</span>
                      <img src="/sosv.jpeg" alt="SOSV" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card - Track 2 - 14:00 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">14:00 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">14:00 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Gen AI customisation</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/virginia_roberts.jpg" alt="Virginia Roberts" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Virginia Roberts, Cloud Trainer</span>
                      <img src="/google.png" alt="Google" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card - Track 2 - 14:10 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">14:10 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">14:10 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">2026 AI and Agentic Automation Trends</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/boris_krumrey.jpeg" alt="Boris Krumrey" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Boris Krumrey, VP Automation</span>
                      <img src="/uipath.png" alt="UiPath" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card - Track 2 - 14:25 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">14:25 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">14:25 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">How to Build and Scale AI Skills Across the Enterprise</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/Angela_Elle_Sun.jpeg" alt="Angela Elle Sun" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Angela Elle Sun, AI Adoption Lead</span>
                      <img src="/microsoft-logo.png" alt="Microsoft" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card - Track 2 - 14:40 */}
              <div className="bg-white border-2 border-black rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:grid md:grid-cols-[120px_140px_1fr_1fr] gap-4 p-4 md:p-6">
                  <div className="md:hidden flex items-center gap-3">
                    <div className="text-gray-900 font-bold text-lg">14:40 <span className="text-gray-400">(NYC)</span></div>
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-gray-900 font-bold text-lg">14:40 <span className="text-gray-400">(NYC)</span></div>
                  </div>
                  <div className="hidden md:block">
                    <span className="inline-block border border-black text-black bg-transparent px-3 py-1 rounded-full text-sm font-medium">Presentation</span>
                  </div>
                  <div>
                    <div className="hero-title text-gray-700 text-lg mb-3 md:mb-0">Did AI just kill the PM job?</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img src="/amandeep_khurana.jpeg" alt="Amandeep Khurana" className="w-8 h-8 rounded-full object-cover flex-shrink-0" onError={handleImageError} />
                      <span className="text-gray-900">Amandeep Khurana, Product Manager</span>
                      <img src="/aws.png" alt="AWS" className="h-5" onError={handleImageError} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="relative inline-block">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                [LIVE] Join now
              </a>
              <span className="absolute -top-3 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg transform rotate-12 z-10">
                FREE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="community" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="hero-title text-3xl lg:text-5xl font-bold text-black mb-12 text-center">About Us</h2>

          {/* Co-Hosted by Leading AI Communities */}
          <div className="mb-16">
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

          {/* Our Previous 100% Virtual Conferences Carousel */}
          <div className="mb-16">
            <h3 className="hero-title text-2xl lg:text-3xl font-bold text-black mb-12 text-center">
              Our previous 100% virtual conferences
            </h3>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Image */}
              <div className="flex justify-center order-1 lg:order-2 px-4 sm:px-6 lg:px-8">
                <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={conferences[conferenceSlide].image}
                    alt={conferences[conferenceSlide].title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-2 lg:order-1 px-4 sm:px-6 lg:px-8">
                <h4 className="hero-title text-lg lg:text-2xl font-bold text-black mb-8">
                  {conferences[conferenceSlide].title}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {conferences[conferenceSlide].stats.map((stat, idx) => {
                    const isHighlighted = stat.label.includes('Unique visitors') || stat.label.includes('Zoom peak');
                    const needsBreak = stat.label.includes('Unique visitors');
                    return (
                      <>
                        {needsBreak && <div key={`break-${idx}`} className="sm:col-span-3" />}
                        <div key={idx} className={isHighlighted ? 'py-2 px-3 bg-blue-50 rounded-lg' : ''}>
                          <span className={`font-bold ${isHighlighted ? 'text-blue-700' : 'text-gray-900'}`}>
                            {stat.value}
                          </span>
                          <span className={`ml-2 text-sm ${isHighlighted ? 'text-blue-600' : 'text-gray-600'}`}>
                            {stat.label}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carousel Controls - Below the block */}
            <div className="flex items-center justify-center gap-6 py-8 lg:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
              <button
                onClick={() => setConferenceSlide((prev) => (prev - 1 + conferences.length) % conferences.length)}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous conference"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <div className="flex gap-3">
                {conferences.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setConferenceSlide(idx)}
                    className={`h-3 rounded-full transition-all ${
                      idx === conferenceSlide ? 'bg-gray-900 w-8' : 'bg-gray-300 w-3'
                    }`}
                    aria-label={`Go to conference ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setConferenceSlide((prev) => (prev + 1) % conferences.length)}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next conference"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Profile Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl opacity-30"></div>
                    <img
                      src="/co-hosts_max_pog.jpg"
                      alt="Max Pog"
                      className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover object-left shadow-2xl border-4 border-white" onError={handleImageError} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Name and Logo */}
                  <div className="flex items-center gap-4">
                    <h3 className="hero-title text-2xl lg:text-3xl font-bold text-gray-900">Max Pog</h3>
                    <img src="/csprints_inverted.png" alt="Community Sprints Logo" className="h-10 lg:h-12 rounded-lg" onError={handleImageError} />
                  </div>

                  {/* Quote Bubble */}
                  <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                    {/* Decorative quote marks */}
                    <div className="absolute -top-4 left-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg">
                      "
                    </div>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed pt-4">
                      We're glad to invite you to our online conference, <b>AI Skills '26</b> — a place where inspiring people meet practical AI experience. This event is powered by <b>Community Sprints</b>, a company focused on building a network of passionate people committed to growth and continuous learning. We've launched more than 50 events, delivered hands-on AI workshops, and successfully hosted two conferences — with even more ahead.
                    </p>
                    <div className="absolute -bottom-4 right-6 bg-gradient-to-br from-cyan-500 to-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg">
                      "
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          </div>

        </div>
      </section>

      {/* Media Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="hero-title text-2xl lg:text-3xl font-bold text-black mb-8 text-center">Media Partners</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/ai_pulse_logo.png"
                  alt="AI Pulse"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/r3i-capital.jpg"
                  alt="R3I Capital"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/encountr.png"
                  alt="Encountr"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/fundingstack.png"
                  alt="Funding Stack"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/lead_gen_man.png"
                  alt="Lead Gen Man"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/right_click_prompt.png"
                  alt="Right Click Prompt"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/fastbreak_one_logo.jpeg"
                  alt="Fastbreak One"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/davidj.substack.png"
                  alt="David J Substack"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/the-automated.png"
                  alt="The Automated"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/multiplyers.png"
                  alt="Multiplyers VC"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl">
                <img
                  src="/aixup.png"
                  alt="AixUp.ai"
                  className="w-full h-16 object-contain rounded-md" onError={handleImageError} />
              </div>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="hero-title text-3xl lg:text-4xl font-bold text-center text-black mb-12">
            Trusted by 10,000+ learners worldwide
          </h2>

          {/* Community Members Images */}
          <div className="flex flex-col items-center gap-4">
            {/* First Row - 5 pictures */}
            <div className="flex justify-center items-center -space-x-4">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Second Row - 4 pictures */}
            <div className="flex justify-center items-center -space-x-4">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Third Row - 3 pictures */}
            <div className="flex justify-center items-center -space-x-4">
              <img
                src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
                alt="Community member"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Skills Matter Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="hero-title text-2xl lg:text-4xl font-bold text-black mb-4">
                  Why AI Skills Matter in 2026
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  Insights from Research by the World Economic Forum
                </p>
              </div>

              {/* Statistics */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <img src="/check.jpg" alt="bullet" className="w-8 h-8 flex-shrink-0 rounded-md" onError={handleImageError} />
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    77% of businesses plan to reskill and upskill their workforce to work alongside AI
                  </p>
                </div>

                <div className="flex gap-4">
                  <img src="/check.jpg" alt="bullet" className="w-8 h-8 flex-shrink-0 rounded-md" onError={handleImageError} />
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    69% of businesses will hire new people with skills to design AI tools
                  </p>
                </div>

                <div className="flex gap-4">
                  <img src="/check.jpg" alt="bullet" className="w-8 h-8 flex-shrink-0 rounded-md" onError={handleImageError} />
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    39% of current skills will be disrupted by 2030
                  </p>
                </div>
              </div>
            </div>

            {/* Right - WEF Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/image_(45).png"
                alt="World Economic Forum Logo"
                className="w-full max-w-64 h-auto object-contain"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Conference Ticket Style */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Modern Ticket Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-black">
              <div className="flex flex-col lg:flex-row">
                {/* Main Content Area */}
                <div className="flex-1 p-8 lg:p-12 relative">
                  {/* Semicircular notches on left side */}
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-full shadow-inner border-2 border-black"></div>

                  <div className="space-y-8">
                    {/* Title */}
                    <div>
                      <h2 className="hero-title text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        Secure your spot now
                      </h2>
                      <p className="text-gray-600 text-lg">Join 5,000+ professionals for 5 hours of actionable AI frameworks from 30+ industry practitioners</p>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Gift className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-700">Enjoy exclusive benefits from our partners</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-700">Gain AI skills directly relevant to your daily tasks</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Network className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-700">Expand your professional network significantly</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-700">Get a certificate to add on LinkedIn</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <div className="relative inline-block">
                        <a
                          href={calendlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          [LIVE] Join now
                        </a>
                        <span className="absolute -top-3 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg transform rotate-12 z-10">
                          FREE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Perforation Line with Dots */}
                <div className="hidden lg:flex flex-col items-center justify-center px-2">
                  <div className="flex flex-col gap-3">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Stub Section */}
                <div className="lg:w-56 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 flex flex-col justify-center items-center space-y-6 relative">
                  {/* Semicircular notches on right side */}
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-full shadow-inner border-2 border-black"></div>

                  <div className="text-center space-y-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Event</div>
                    <div className="text-base font-bold text-gray-900">AI Skills '26</div>
                    <div className="text-base font-bold text-gray-900">Virtual Conf</div>
                  </div>

                  <div className="w-16 h-px bg-gray-300"></div>

                  <div className="text-center space-y-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Date</div>
                    <div className="text-sm font-bold text-gray-900">22 January 2026,</div>
                    <div className="text-sm font-bold text-gray-900">8 AM SF | 11 AM NYC | 4 PM GMT</div>
                  </div>

                  <div className="w-16 h-px bg-gray-300"></div>

                  <div className="text-center space-y-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Price</div>
                    <div className="text-2xl font-bold text-green-600">FREE</div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="text-xs font-mono text-gray-400 tracking-widest">ADMIT ONE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="hero-title text-3xl lg:text-5xl font-bold text-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      <CountdownBanner calendlyUrl={calendlyUrl} />
      <MobileRegisterButton calendlyUrl={calendlyUrl} />
    </>
  );
}

export default HomePage;