import React, { useState, useEffect } from 'react';

interface Review {
  id: number;
  title: string;
  text: string;
  emoji: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: 'Marketing Copywriter',
    text: "AI deleted the freelance writing market and decimated the bottom 50% of all corporate writing positions in a matter of days. Applicant pools went from 40-60 per job to 3500-5500 per job in under a month.",
    emoji: '😭',
  },
  {
    id: 2,
    title: 'Customer Support Specialist',
    text: "They had us train a chat bot so we made the resources to feed it. The chat bot was supposed to help us with the load. Chat bot now gets to carry the whole load. Entire support team got laid off.",
    emoji: '😤',
  },
  {
    id: 3,
    title: 'Voice Actor',
    text: "I've lost a lot of the smaller jobs. For example, storyboarding. Ad agencies will create a digital storyboard detailing what the ad will look like, they hire a voice artist to do a preliminary voice over, it's all AI now.",
    emoji: '😢',
  },
  {
    id: 4,
    title: 'Sales Executive',
    text: 'We "had" to all start using AI in everything, and then one day they let go the entire QA department, the entire sales department, a big chunk of the software engineering group, and the post-sales group.',
    emoji: '😠',
  },
  {
    id: 5,
    title: 'Graphic Designer',
    text: "I haven't been fully replaced yet, but the landscape has completely changed. Clients now expect me to use AI as a 'co-pilot' — generating initial concepts, mood boards, and even rough copy in minutes, not hours.",
    emoji: '😞',
  },
];

export function AISkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentIndex];

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-left-top rounded-2xl"
        style={{
          backgroundImage: 'url(/screens.png)',
          filter: 'blur(4px)',
        }}
      />

      <div className="absolute inset-0 bg-black/40 rounded-2xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="text-8xl">{review.emoji}</div>
        </div>

        <h3 className="text-white text-xl lg:text-2xl font-bold mb-4">
          {review.title}
        </h3>

        <p className="text-white text-lg lg:text-xl leading-relaxed font-medium">
          "{review.text}"
        </p>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2 hover:bg-white/70'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
