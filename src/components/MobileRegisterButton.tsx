import React from 'react';

interface MobileRegisterButtonProps {
  calendlyUrl: string;
}

export function MobileRegisterButton({ calendlyUrl }: MobileRegisterButtonProps) {
  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-32 z-30 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)' }} />
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium text-center transition-all shadow-2xl hover:shadow-3xl"
          style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' }}
        >
          [LIVE] Join now
        </a>
      </div>
    </>
  );
}
