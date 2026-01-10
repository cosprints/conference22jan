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

  if (!isVisible) return null;

  const calendlyUrl = `https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22&utm_source=${partner}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative">
        {/* Close Button - Outside popup */}
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="absolute -top-12 -right-12 p-2 hover:bg-white/20 rounded-lg transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
          {/* Content */}
          <div className="p-8 text-center space-y-6">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900">
              Don't Miss Out!
            </h2>

            {/* Main CTA */}
            <div className="space-y-2">
              <p className="text-gray-700 font-semibold text-lg">
                Register Now (Free)
              </p>
              <p className="text-gray-600 text-sm">
                + Get 50 AI Tools Library
              </p>
            </div>

            {/* Button */}
            <div className="space-y-3">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
              >
                Secure Your Spot
              </a>
            </div>

            {/* Footer */}
            <div className="space-y-1 text-xs text-gray-500">
              <p>✓ Free Bonus Included</p>
              <p>Library of 50 AI Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
