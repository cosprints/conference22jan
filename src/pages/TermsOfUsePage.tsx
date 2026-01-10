import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { MobileRegisterButton } from '../components/MobileRegisterButton';

export default function TermsOfUsePage() {
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/maxpog/ai/');

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

    const updateCalendlyUrl = () => {
      const baseUrl = window.innerWidth > 650
        ? 'https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22'
        : 'https://calendly.com/maxpog/ai/';

      const urlWithUtm = partnerParam ? `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}utm_source=${partnerParam}` : baseUrl;
      setCalendlyUrl(urlWithUtm);
    };

    updateCalendlyUrl();
    window.addEventListener('resize', updateCalendlyUrl);

    return () => window.removeEventListener('resize', updateCalendlyUrl);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
          <p className="text-xl text-gray-600 mb-8">Community Sprints</p>

          <p className="text-gray-700 mb-6">
            Welcome to Community Sprints!
          </p>
          <p className="text-gray-700 mb-6">
            These Terms of Use ("Terms") explain the rules for using our websites and services. Please read them carefully, as they form a legally binding agreement between you and us.
          </p>
          <p className="text-gray-700 mb-8">
            By accessing or using <a href="https://cosprints.ai" className="text-blue-600 hover:text-blue-800">https://cosprints.ai</a> or <a href="https://conf.cosprints.ai" className="text-blue-600 hover:text-blue-800">https://conf.cosprints.ai</a> (together, the "Website") and related services (the "Service"), you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Important Notice</h2>
          <p className="text-gray-700 mb-4">
            Please read these Terms carefully, especially sections related to subscriptions, billing, disclaimers, limitation of liability, and dispute resolution.
          </p>
          <p className="text-gray-700 mb-2">
            If you purchase a subscription or any auto-renewing service, you agree that:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>subscriptions renew automatically unless cancelled,</li>
            <li>you must cancel at least 24 hours before the end of the current trial or billing period to avoid being charged.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sections of Most Attention</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Agreement Overview</li>
            <li>Eligibility</li>
            <li>What We Offer</li>
            <li>Subscription Plans</li>
            <li>Billing, Cancellation, and Refunds</li>
            <li>Intellectual Property</li>
            <li>Disclaimers and Limitation of Liability</li>
            <li>Governing Law and Disputes</li>
            <li>Contact Information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Who We Are</h2>
          <p className="text-gray-700 mb-2">
            Community Sprints is operated by Volee Technologies OU, a company registered in Tallinn, Estonia ("we", "us", "our", or the "Company").
          </p>
          <p className="text-gray-700 mb-2">
            We provide educational, community-based, and productivity-related digital content and services through:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li><a href="https://cosprints.ai" className="text-blue-600 hover:text-blue-800">https://cosprints.ai</a></li>
            <li><a href="https://conf.cosprints.ai" className="text-blue-600 hover:text-blue-800">https://conf.cosprints.ai</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Agreement Overview</h2>
          <p className="text-gray-700 mb-4">
            By using Community Sprints, you agree to these Terms, as well as our Privacy Policy, which is incorporated by reference and forms part of this Agreement.
          </p>
          <p className="text-gray-700 mb-8">
            If any translation of these Terms is provided, it is for convenience only. The English version prevails in case of any conflict.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Eligibility</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>You must be at least 16 years old to use the Service and have the legal capacity to enter into a binding agreement.</li>
            <li>If you are under 18, you confirm that you have permission from a parent or legal guardian.</li>
          </ul>
          <p className="text-gray-700 mb-8">
            If you do not meet these requirements or do not agree with these Terms, you must not use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. What We Offer</h2>
          <p className="text-gray-700 mb-2">
            Community Sprints provides access to digital content and services, including (but not limited to):
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>educational materials,</li>
            <li>community programs and events,</li>
            <li>challenges, sessions, or sprints,</li>
            <li>tools and features designed to support learning, collaboration, or productivity.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            All materials, features, and services are referred to as "Digital Content".
          </p>
          <p className="text-gray-700 mb-8">
            Access to some parts of the Service may require registration, payment, or an active subscription. Additional paid features may be offered from time to time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. AI-Powered Features (If Available)</h2>
          <p className="text-gray-700 mb-4">
            Some parts of the Service may include features powered by artificial intelligence ("AI Features"), used for educational, informational, or productivity purposes only.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Content Ownership</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>You own the information you submit ("Input").</li>
            <li>The Service may generate responses ("Output") based on your Input.</li>
            <li>To the extent permitted by law, you are granted rights to use the Output for personal purposes.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Important Notes</h3>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>AI-generated Output may not be unique and may be similar to content generated for other users.</li>
            <li>AI Features do not provide professional, legal, medical, or financial advice.</li>
            <li>We may use anonymized or aggregated Content to improve the Service. You may contact us if you wish to opt out where legally required.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Subscription Plans</h2>
          <p className="text-gray-700 mb-2">
            Depending on the offer available at the time of purchase, we may provide:
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">a) Introductory / Trial Offers</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Short-term access at a reduced price or free trial.</li>
            <li>Automatically converts into a paid subscription unless cancelled at least 24 hours before the end of the trial period.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">b) Subscription Plans</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Recurring access for a defined period (e.g., monthly, quarterly, or otherwise stated at purchase).</li>
            <li>Automatically renew unless cancelled in time.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">c) Additional Paid Features</h3>
          <p className="text-gray-700 mb-4">
            Optional one-time or recurring paid features offered separately.
          </p>
          <p className="text-gray-700 mb-8">
            <strong>Important:</strong> Prices, features, and availability may change over time. Discounted prices may convert to full-price renewals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Billing, Cancellation, and Refunds</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Methods of Payment</h3>
          <p className="text-gray-700 mb-2">
            Payments are processed via third-party payment providers (e.g., card payments, digital wallets). We do not store full payment card details.
          </p>
          <p className="text-gray-700 mb-2">
            By submitting payment details, you authorize us to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>charge your selected payment method,</li>
            <li>store payment tokens where permitted,</li>
            <li>automatically charge renewal fees unless cancelled.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            If a payment fails, we may retry or suspend access until payment is resolved.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Auto-Renewal</h3>
          <p className="text-gray-700 mb-6">
            Subscriptions renew automatically for the same period unless stated otherwise. Renewal prices may differ from promotional prices.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Cancellation</h3>
          <p className="text-gray-700 mb-6">
            You are responsible for cancelling your subscription on time using the available account or payment-provider tools. Cancellation prevents future charges but does not retroactively refund paid periods unless required by law.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Refunds</h3>
          <p className="text-gray-700 mb-8">
            Refund eligibility depends on the offer, applicable law, and the specific subscription terms presented at purchase. We may issue refunds at our discretion where legally permitted.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Data Protection</h2>
          <p className="text-gray-700 mb-8">
            We collect and process personal data in accordance with our Privacy Policy. By using the Service, you consent to such processing as described there.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content, software, branding, text, images, graphics, logos, and materials on the Website are owned by or licensed to Volee Technologies OU or its partners.
          </p>
          <p className="text-gray-700 mb-2">
            You are granted a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes only.
          </p>
          <p className="text-gray-700 mb-2">
            You may not:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>copy, modify, distribute, sell, or reverse engineer the Service,</li>
            <li>use the Service to create competing products,</li>
            <li>misuse or infringe our intellectual property.</li>
          </ul>
          <p className="text-gray-700 mb-8">
            User-generated content remains yours, but you grant us a limited license to use it as necessary to operate and improve the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Third-Party Links and Ads</h2>
          <p className="text-gray-700 mb-4">
            The Service may contain links to third-party websites or services. We are not responsible for third-party content, products, or services.
          </p>
          <p className="text-gray-700 mb-8">
            Your interactions with third parties are at your own risk and subject to their own terms and policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Compliance and Geographic Availability</h2>
          <p className="text-gray-700 mb-4">
            The Service is operated from Estonia. We make no guarantees that the Service is suitable or available in all jurisdictions.
          </p>
          <p className="text-gray-700 mb-8">
            If you access the Service from outside Estonia, you do so at your own risk and are responsible for compliance with local laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Copyright Notice</h2>
          <p className="text-gray-700 mb-8">
            All Digital Content is protected by copyright and other intellectual property laws. Any unauthorized reproduction, redistribution, or commercial use is prohibited without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">13. User Representations and Restrictions</h2>
          <p className="text-gray-700 mb-2">
            By using the Service, you confirm that:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>you meet eligibility requirements,</li>
            <li>you will use the Service lawfully,</li>
            <li>you will not misuse, abuse, or interfere with the Service,</li>
            <li>you will not use automated tools, scraping, or reverse engineering.</li>
          </ul>
          <p className="text-gray-700 mb-8">
            We reserve the right to suspend or terminate access for violations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">14. Disclaimers</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>The Service and Digital Content are provided "as is" and "as available".</li>
            <li>Content is for educational and informational purposes only.</li>
            <li>We do not guarantee results, outcomes, or success.</li>
            <li>We do not provide professional advice (legal, financial, medical, or otherwise).</li>
            <li>Your use of the Service is at your own risk.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">15. Limitation of Liability</h2>
          <p className="text-gray-700 mb-2">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>we are not liable for indirect, incidental, consequential, or punitive damages,</li>
            <li>our total liability is limited to the amount you paid to us in the last billing period.</li>
          </ul>
          <p className="text-gray-700 mb-8">
            Some jurisdictions do not allow certain limitations, so some provisions may not apply to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">16. Indemnification</h2>
          <p className="text-gray-700 mb-2">
            You agree to indemnify and hold harmless Volee Technologies OU from claims, damages, or expenses arising from:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>your use of the Service,</li>
            <li>your content,</li>
            <li>your violation of these Terms or applicable laws.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">17. Governing Law and Disputes</h2>
          <p className="text-gray-700 mb-4">
            These Terms are governed by the laws of Estonia, without regard to conflict-of-law principles.
          </p>
          <p className="text-gray-700 mb-4">
            If you are a consumer in the EEA, UK, or Switzerland, mandatory consumer protection laws of your country apply, and you may bring claims before competent courts in your place of residence.
          </p>
          <p className="text-gray-700 mb-8">
            We encourage resolving disputes informally by contacting us first.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">18. Changes to the Service or Terms</h2>
          <p className="text-gray-700 mb-4">
            We may update the Service or these Terms from time to time. Material changes will be communicated where required by law.
          </p>
          <p className="text-gray-700 mb-8">
            Continued use of the Service after updates means you accept the revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">19. Contact Us</h2>
          <p className="text-gray-700 mb-2">Community Sprints</p>
          <p className="text-gray-700 mb-2">Volee Technologies OU</p>
          <p className="text-gray-700 mb-2">Tallinn, Estonia</p>
          <p className="text-gray-700 mb-4">
            Email: <a href="mailto:info@cosprints.ai" className="text-blue-600 hover:text-blue-800">info@cosprints.ai</a>
          </p>
          <p className="text-gray-700 mb-8">
            Websites: <a href="https://cosprints.ai" className="text-blue-600 hover:text-blue-800">https://cosprints.ai</a>, <a href="https://conf.cosprints.ai" className="text-blue-600 hover:text-blue-800">https://conf.cosprints.ai</a>
          </p>

          <p className="text-gray-600 text-sm mb-12">
            Last updated: December 23, 2025
          </p>
        </div>
      </div>
      <MobileRegisterButton calendlyUrl={calendlyUrl} />
    </div>
  );
}
