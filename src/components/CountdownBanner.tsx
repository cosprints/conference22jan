import React from 'react';

interface CountdownBannerProps {
  calendlyUrl: string;
}

export function CountdownBanner({ calendlyUrl }: CountdownBannerProps) {
  return (
    <div className="hidden fixed top-0 left-0 right-0 w-full bg-black z-[60]">
      <button
        onClick={() => window.open(calendlyUrl, '_blank')}
        className="hidden w-full hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-[10px] sm:text-sm font-semibold">
                FREE Virtual Conference
              </span>
            </div>
            <div className="h-3 sm:h-4 w-px bg-gray-600"></div>
            <span className="text-gray-300 text-[10px] sm:text-sm">
              Seats are limited
            </span>
            <div className="h-3 sm:h-4 w-px bg-gray-600"></div>
            <span className="text-white text-[10px] sm:text-sm font-medium">
              [LIVE] Join now →
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
