import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import BonusesPage from './pages/BonusesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';

function AppContent() {
  const location = useLocation();
  const isThankYouPage = location.pathname === '/thank-you' || location.pathname === '/thank-you/';
  const isBonusesPage = location.pathname === '/bonuses' || location.pathname === '/bonuses/';
  const isPrivacyPage = location.pathname === '/privacy-policy' || location.pathname === '/privacy-policy/';
  const isTermsPage = location.pathname === '/terms-of-use' || location.pathname === '/terms-of-use/';

  return (
    <div className="min-h-screen bg-white">
      {!isThankYouPage && !isBonusesPage && !isPrivacyPage && !isTermsPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/bonuses" element={<BonusesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Routes>
      </main>
      {!isPrivacyPage && !isTermsPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;