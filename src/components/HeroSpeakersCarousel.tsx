import React, { useState, useEffect } from 'react';

interface Speaker {
  id: number;
  name: string;
  image: string;
  company: string;
  companyLogo: string;
  role: string;
}

const SPEAKERS: Speaker[] = [
  {
    id: 2,
    name: 'Dima Zborovskiy',
    image: '/zborovskiy_hero_section_2.gif',
    company: 'Deliveroo',
    companyLogo: '/deliveroo.png',
    role: 'AI Director',
  },
  {
    id: 14,
    name: 'Martijn Lancee',
    image: '/martijn_lancee.jpg',
    company: 'Microsoft',
    companyLogo: '/microsoft-logo.png',
    role: 'GTM AI',
  },
  {
    id: 1,
    name: 'Tomás Dostal Freire',
    image: '/tomas-dostal-freire.jpg',
    company: 'Miro',
    companyLogo: '/miro-logo.png',
    role: 'CIO',
  },
  {
    id: 3,
    name: 'Satyajeet Salgar',
    image: '/satyajeet-salgar.jpg',
    company: 'Google AI',
    companyLogo: '/google-ai-logo.png',
    role: 'Director of Product',
  },
  {
    id: 6,
    name: 'Pallavi Gupta',
    image: '/gupta.jpg',
    company: 'Microsoft',
    companyLogo: '/microsoft-logo.png',
    role: 'Product Manager',
  },
  {
    id: 4,
    name: 'Andrew Filev',
    image: '/filev.jpg',
    company: 'Zencoder',
    companyLogo: '/zencoder-logo.png',
    role: 'Founder & CEO',
  },
  {
    id: 5,
    name: 'Misti Cain',
    image: '/misti-cain_.jpg',
    company: 'Techstars',
    companyLogo: '/techstars-logo-vector.png',
    role: 'Managing Director',
  },
  {
    id: 7,
    name: 'Alex Veremeyenko',
    image: '/veremeyenko.jpg',
    company: 'God of Prompt',
    companyLogo: '/veremeyenko_company_logo.png',
    role: 'Founder',
  },
  {
    id: 8,
    name: 'Fabrício Carraro',
    image: '/carraro.jpg',
    company: 'Barcelona Supercomputing Center',
    companyLogo: '/fabricio_carraroco_company.png',
    role: 'AI Developer Advocate',
  },
  {
    id: 9,
    name: 'Nick Golos',
    image: '/nick_golos.jpg',
    company: 'Fluently',
    companyLogo: '/fluently_.png',
    role: 'Growth Manager',
  },
  {
    id: 10,
    name: 'Haley Bryant',
    image: '/haley-bryant.jpg',
    company: 'Hustle Fund',
    companyLogo: '/hustle-fund-logo.png',
    role: 'Partner',
  },
  {
    id: 11,
    name: 'Pawel Huryn',
    image: '/huryn_copy.jpg',
    company: 'The Product Compass',
    companyLogo: '/product-compass.png',
    role: 'CEO',
  },
  {
    id: 12,
    name: 'Laura Burkhauser',
    image: '/laura-burkhauser.jpg',
    company: 'Descript',
    companyLogo: '/descript-logo.png',
    role: 'CEO',
  },
  {
    id: 13,
    name: 'Max Reiff',
    image: '/max-reiff.jpg',
    company: 'IDC Ventures',
    companyLogo: '/idc-ventures.png',
    role: 'Partner',
  },
];

export function HeroSpeakersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SPEAKERS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E';
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleSpeakers = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(SPEAKERS[(currentIndex + i) % SPEAKERS.length]);
    }
    return visible;
  };

  const visibleSpeakers = getVisibleSpeakers();

  return (
    <div className="w-full">
      <style>{`
        .speaker-item {
          flex-shrink: 0;
          transition: flex 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-in-out;
        }

        .speaker-item-card {
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          height: 100%;
        }

        .speaker-item.featured {
          flex: 2;
        }

        .speaker-item:not(.featured) {
          flex: 1;
        }

        .speaker-item.featured .speaker-item-card {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .speaker-item:not(.featured) .speaker-item-card {
          transform: scale(0.98);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .speaker-image-container {
          background: #f3f4f6;
        }

        @media (prefers-reduced-motion: reduce) {
          .speaker-item,
          .speaker-item-card {
            transition: none;
          }
        }
      `}</style>

      <div className="overflow-hidden">
        <div className="flex gap-4">
          {visibleSpeakers.map((speaker, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={`${speaker.id}-${currentIndex}-${index}`}
                className={`speaker-item ${isFeatured ? 'featured' : ''}`}
              >
                <div className="speaker-item-card bg-white rounded-lg overflow-hidden flex flex-col">
                  <div className="speaker-image-container relative h-56 w-full rounded-t-lg overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{speaker.name}</h3>
                    <p className="text-xs font-semibold text-gray-600 mb-2 line-clamp-2">{speaker.role}</p>

                    <div className="flex items-center justify-center bg-gray-50 p-2 rounded mt-auto w-full">
                      <img
                        src={speaker.companyLogo}
                        alt={speaker.company}
                        className="h-5 object-contain"
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {SPEAKERS.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to speaker group ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
