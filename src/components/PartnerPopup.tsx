import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PartnerPopupProps {
  partner: string;
  bonusName: string;
  onClose: () => void;
}

export function PartnerPopup({ partner, bonusName, onClose }: PartnerPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const bonusText = `🎁 ${bonusName}`;

  if (!isVisible) return null;

  const calendlyUrl = `https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22&utm_source=${partner}`;

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
            Don't Miss Out!
          </h2>

          <p className="mt-3 text-gray-600">
            Your Bonus is Ready!
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="text-gray-600 text-sm">
              {bonusText}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={calendlyUrl}
              className="block w-full rounded-xl bg-black px-6 py-3 text-white font-semibold hover:bg-gray-800 transition"
            >
              Claim your bonus + Register for free

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
