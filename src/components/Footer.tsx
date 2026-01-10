import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8">
              <a href="/terms-of-use" className="text-gray-300 hover:text-white transition-colors">Terms of Use</a>
              <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <div className="text-gray-400 text-sm">
              © Community Sprints, 2026, Volee Technologies OU, Tallinn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;