import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PartnerPopupProps {
  partner: string;
  onClose: () => void;
}

export function PartnerPopup({ partner, onClose }: PartnerPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Partner ID -> popup content (from CSV)
  const partnerPopupContent: Record<string, string> = {
    '5': 'Perplexity Mastery Guide',
    '6': 'ChatGPT Images Mastery Guide',
    '7': 'Google’s Veo Mastery Guide',
    '8': 'Gemini Mastery Guide',
    '9': 'AI Agents Mastery Guide',
    '10': 'Deep Researcher Mega-Prompt',
    '11': 'Grok Mastery Guide',
    '12': 'AI Agents System Prompt Generator',
    '13': 'Claude Mastery Guide',
    '14': 'ChatGPT — Most Used Words',
    '15': 'Tweet Generator Mega-Prompt',
    '16': 'Midjourney Mastery Guide',
    '17': 'Prompt Engineering Guide'
  };

  // Normalize partner input (supports "7", "?7", "Partner=7", "partner=7")
  const normalizedPartnerId = (() => {
    const raw = (partner ?? '').trim();
    const noLeadingQuestion = raw.startsWith('?') ? raw.slice(1) : raw;

    const match =
      noLeadingQuestion.match(/(?:^|[?&])(?:Partner|partner)=?(\d+)\b/) ||
      noLeadingQuestion.match(/^(\d+)\b/);

    return match ? match[1] : noLeadingQuestion;
  })();

  const bonusName =
    partnerPopupContent[normalizedPartnerId] ?? 'Perplexity Mastery Guide';

  const bonusText = `🎁 ${bonusName}`;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            You’re invited to COSPRINTS 2025 🚀
          </h2>

          <p className="mt-3 text-gray-600">
            Join the world’s top AI builders and researchers.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="text-gray-600 text-sm">
              {bonusText}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href="https://conf.cosprints.ai"
              className="block w-full rounded-xl bg-black px-6 py-3 text-white font-semibold hover:bg-gray-800 transition"
            >
              Get Free Ticket
            </a>

            <a
              href="#"
              onClick={onClose}
              className="block w-full text-sm text-gray-400 hover:text-gray-600"
            >
              Maybe later
            </a>
          </div>

          <div className="mt-4 space-y-1 text-xs text-gray-500">
            <p>✓ Free conference access</p>
            <p>✓ Instant bonus delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
