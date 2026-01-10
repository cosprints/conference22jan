import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { MobileRegisterButton } from '../components/MobileRegisterButton';

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-8">Community Sprints</p>

          <p className="text-gray-700 mb-6">
            This Privacy Policy is incorporated by reference into the Terms and Conditions of Community Sprints ("Community Sprints", "we", "us", or "our") and is part of the agreement between you and Volee Technologies OU regarding your use of <a href="https://cosprints.ai" className="text-blue-600 hover:text-blue-800">https://cosprints.ai</a> and <a href="https://conf.cosprints.ai" className="text-blue-600 hover:text-blue-800">https://conf.cosprints.ai</a> (together, the "Website") and related services and digital products (the "Service").
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Important Privacy Information</h2>
          <p className="text-gray-700 mb-4">
            To provide the Service, we may ask you to share information during onboarding and use of the Website, such as your name, email address, age, gender, current situation and other onboarding answers (including goal- or profile-related questions). We also automatically collect information from your device such as language settings, IP address, time zone, device type and model, device settings, operating system and its version.
          </p>

          <p className="text-gray-700 mb-2">We use this data to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>provide and secure the Service,</li>
            <li>understand how people use the Service and improve it,</li>
            <li>measure and optimize advertising and marketing performance.</li>
          </ul>

          <p className="text-gray-700 mb-4">
            To improve the Service and serve ads, we use third-party tools and services. As a result, some data may be processed on the systems of providers such as Amazon Web Services, Meta, Google, TikTok, Hotjar, Amplitude, Apple, PayPal, FreshDesk, Solidgate, ActiveCampaign (and similar vendors we may use over time). This helps us, for example, to:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>analyze how users interact with the Service (subscriptions, popular features, time spent, etc.);</li>
            <li>measure marketing effectiveness and show ads to relevant audiences (for example, showing ads to users who visited certain pages or users who subscribed).</li>
          </ul>

          <p className="text-gray-700 mb-2">Depending on your location, you may have privacy controls and rights, such as:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>managing tracking and cookies via website privacy/e-privacy settings,</li>
            <li>opting out of sale/share of personal data (as defined by certain US laws, where applicable),</li>
            <li>requesting data access or deletion,</li>
            <li>exercising other privacy rights described below.</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Where available, such controls will be shown in the Service (e.g., in the footer, menus, or profile/account areas). If you cannot find a needed control, contact us.
          </p>

          <p className="text-gray-700 mb-8">
            Contact email: <a href="mailto:info@cosprints.ai" className="text-blue-600 hover:text-blue-800">info@cosprints.ai</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            This Privacy Policy explains what personal data we collect when you use the Website and Service and how we process that data.
          </p>

          <div className="bg-gray-50 border-l-4 border-gray-900 p-6 mb-8">
            <p className="text-gray-700 font-medium mb-2">BY USING THE SERVICE, YOU CONFIRM THAT:</p>
            <p className="text-gray-700">
              (i) you have read and understand this Privacy Policy; and<br />
              (ii) you are at least 16 years old (or your parent/guardian has reviewed and agreed to this Privacy Policy on your behalf).
            </p>
            <p className="text-gray-700 mt-4">
              If you do not agree, you must not use the Service. You may contact us to request deletion of your data and stop using the Website.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Definitions</h2>
          <p className="text-gray-700 mb-2">"GDPR" means Regulation (EU) 2016/679 (General Data Protection Regulation).</p>
          <p className="text-gray-700 mb-2">"EEA" includes EU and EEA member states and, for the purposes of this Policy, the United Kingdom.</p>
          <p className="text-gray-700 mb-8">"Process" means collecting, storing, using, disclosing, or otherwise handling personal data.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-6 mb-8 text-gray-700 space-y-1">
            <li>Personal Data Controller</li>
            <li>Categories of Personal Data We Collect</li>
            <li>Purposes and Legal Bases for Processing</li>
            <li>With Whom We Share Personal Data</li>
            <li>Your Privacy Rights and How to Exercise Them</li>
            <li>Age Limitation</li>
            <li>International Data Transfers</li>
            <li>Changes to this Privacy Policy</li>
            <li>California Privacy Rights</li>
            <li>Data Retention</li>
            <li>"Do Not Track" Signals</li>
            <li>Contact Us</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Personal Data Controller</h2>
          <p className="text-gray-700 mb-8">
            Volee Technologies OU, Tallinn, Estonia, is the controller of your personal data for the purposes of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Categories of Personal Data We Collect</h2>
          <p className="text-gray-700 mb-4">We collect personal data:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>you provide to us, and</li>
            <li>automatically when you use the Service.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">A. Data You Provide</h3>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">1) Identifiers and onboarding data</h4>
          <p className="text-gray-700 mb-6">
            Information you provide when registering or using the Service, such as: name, email address, age, gender, and other onboarding/profile answers (including goal-related information).
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2) Commercial information (payments and purchases)</h4>
          <p className="text-gray-700 mb-2">
            If you purchase paid features, payment processing is handled by third-party payment providers. We do not store full payment card numbers. We may receive limited payment-related information such as:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>payment token or identifier,</li>
            <li>product/service purchased,</li>
            <li>date, time, and amount,</li>
            <li>payment method type,</li>
            <li>limited card digits (where provided by processors).</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">3) Communications</h4>
          <p className="text-gray-700 mb-6">
            If you contact us via forms, email, or support channels, we receive the information you include (for example, message content and contact details).
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">B. Data We Collect Automatically</h3>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.1 Referral data</h4>
          <p className="text-gray-700 mb-6">
            Information about how you arrived at the Website (e.g., referring URL or campaign source).
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.2 Device and approximate location data</h4>
          <p className="text-gray-700 mb-6">
            Such as: language settings, IP address, time zone, device type/model, device settings, operating system and version.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.3 Usage data</h4>
          <p className="text-gray-700 mb-6">
            Information about how you use the Service, such as page views, clicks/taps, feature interactions, session duration, subscription actions, and interactions with ads.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.4 Transaction metadata</h4>
          <p className="text-gray-700 mb-6">
            If payments occur, we may receive transaction metadata (e.g., date/time/amount and payment method type).
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.5 Cookies and similar tracking technologies</h4>
          <p className="text-gray-700 mb-2">We use cookies, SDKs, pixels, and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>operate the Website,</li>
            <li>remember preferences,</li>
            <li>analyze traffic and performance,</li>
            <li>measure and personalize marketing/ads.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            Cookies may be session cookies (expire when you close your browser) or persistent cookies (remain for a period of time). Cookies may be:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>first-party (set by our domains), or</li>
            <li>third-party (set by service providers integrated into our Website).</li>
          </ul>
          <p className="text-gray-700 mb-6">
            You can manage non-essential cookies through available cookie/privacy settings. Disabling some technologies may limit certain functionality, but the Website should remain usable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Purposes and Legal Bases for Processing</h2>
          <p className="text-gray-700 mb-6">
            We process personal data for the purposes below, relying on one or more lawful bases under applicable law.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.1 Provide the Service and operate the Website</h3>
          <p className="text-gray-700 mb-2">
            Including account creation, access to features, hosting, debugging, and security.
          </p>
          <p className="text-gray-700 mb-2">Categories: identifiers, onboarding data, device data, usage data, commercial info (if paid).</p>
          <p className="text-gray-700 mb-6">Legal bases: performance of a contract; legitimate interests (service reliability, security).</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.2 Communicate with you</h3>
          <p className="text-gray-700 mb-2">
            Service messages, important updates, security notices, support responses, and (where allowed) offers.
            You can opt out of marketing emails using the unsubscribe link in each message.
          </p>
          <p className="text-gray-700 mb-2">Categories: identifiers/contact data; communications; usage data (limited, e.g., email opens/clicks where used).</p>
          <p className="text-gray-700 mb-6">Legal bases: legitimate interests; consent where required.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.3 Personalize and measure advertising/marketing</h3>
          <p className="text-gray-700 mb-2">Measuring campaigns, building audiences, and showing relevant ads.</p>
          <p className="text-gray-700 mb-2">Categories: onboarding/profile data (where relevant), device data, usage data, cookies/IDs.</p>
          <p className="text-gray-700 mb-6">Legal bases: consent or legitimate interests (depending on jurisdiction and tracking rules).</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.4 Customer support and account management</h3>
          <p className="text-gray-700 mb-2">Handling requests, troubleshooting, and communicating inside support channels.</p>
          <p className="text-gray-700 mb-2">Categories: identifiers, contact data, communications, usage data.</p>
          <p className="text-gray-700 mb-6">Legal bases: performance of a contract; legitimate interests (support quality).</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.5 Analytics and product improvement</h3>
          <p className="text-gray-700 mb-2">Understanding usage trends and improving features and content.</p>
          <p className="text-gray-700 mb-2">Categories: device data, usage data, identifiers (where needed), cookies.</p>
          <p className="text-gray-700 mb-6">Legal bases: legitimate interests (improving Service performance and safety) and consent where required.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.6 Payments and subscriptions</h3>
          <p className="text-gray-700 mb-2">Processing purchases and preventing payment fraud.</p>
          <p className="text-gray-700 mb-2">Categories: identifiers, transaction metadata, limited commercial info, device data.</p>
          <p className="text-gray-700 mb-6">Legal bases: performance of a contract.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.7 Legal obligations and protection of rights</h3>
          <p className="text-gray-700 mb-2">Compliance, dispute resolution, enforcing terms, and responding to lawful requests.</p>
          <p className="text-gray-700 mb-2">Categories: any relevant categories.</p>
          <p className="text-gray-700 mb-6">Legal bases: legal obligation; legitimate interests; performance of contract.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. With Whom We Share Personal Data</h2>
          <p className="text-gray-700 mb-6">
            We share personal data only when necessary to operate and improve the Service.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4.1 Service providers</h3>
          <p className="text-gray-700 mb-2">
            We may share data with vendors providing hosting, analytics, marketing, payments, and customer support, such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Hosting/Infrastructure: Amazon Web Services</li>
            <li>Analytics/Performance: Google, Amplitude, Hotjar</li>
            <li>Advertising/Marketing: Meta, Google, TikTok, ActiveCampaign</li>
            <li>Payments: Solidgate, PayPal, Apple Pay, Google Pay</li>
            <li>Support/Communications: FreshDesk</li>
          </ul>
          <p className="text-gray-700 mb-6">
            These providers process data on our instructions and for the purposes described in this Policy.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4.2 Authorities and legal disclosures</h3>
          <p className="text-gray-700 mb-6">
            We may disclose data when required by law, court order, or valid legal process, or to protect rights, safety, and security.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4.3 Business transfers</h3>
          <p className="text-gray-700 mb-6">
            If we are involved in a merger, acquisition, restructuring, or sale of assets, user information may be transferred as part of that transaction, subject to applicable law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Your Privacy Rights and How to Exercise Them</h2>
          <p className="text-gray-700 mb-2">Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>access your personal data,</li>
            <li>correct inaccurate data,</li>
            <li>delete your data,</li>
            <li>object to or restrict processing,</li>
            <li>withdraw consent (where processing is based on consent),</li>
            <li>data portability (receive data in a machine-readable format).</li>
          </ul>
          <p className="text-gray-700 mb-6">
            To exercise your rights, contact us at: <a href="mailto:info@cosprints.ai" className="text-blue-600 hover:text-blue-800">info@cosprints.ai</a>
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Marketing opt-out</h3>
          <p className="text-gray-700 mb-6">
            You can unsubscribe from marketing emails using the link in the email footer.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Cookie and tracking controls</h3>
          <p className="text-gray-700 mb-6">
            Where available, you can manage cookies and tracking via cookie banner/settings or other privacy/e-privacy settings on the Website.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Personalized ads controls (device-level examples)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>iOS/iPadOS: Settings → Privacy/Advertising settings</li>
            <li>Android: Google Settings → Ads</li>
            <li>macOS: System Settings → Privacy/Apple Advertising</li>
            <li>Windows: Settings → Privacy → Advertising ID controls</li>
          </ul>

          <p className="text-gray-700 mb-6">
            <strong>Automated decision-making:</strong> We do not use solely automated decision-making that produces legal or similarly significant effects on you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Age Limitation</h2>
          <p className="text-gray-700 mb-6">
            We do not knowingly process personal data of users under 16. If you believe a child has provided us data, contact us at <a href="mailto:info@cosprints.ai" className="text-blue-600 hover:text-blue-800">info@cosprints.ai</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. International Data Transfers</h2>
          <p className="text-gray-700 mb-2">
            Your data may be processed outside your country, including in jurisdictions with different data protection laws. Where required, we use appropriate safeguards, such as:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission, or</li>
            <li>adequacy decisions where applicable.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this Policy from time to time. If changes are material, we will provide notice via the Service or other reasonable means. Continued use of the Service after updates means you accept the revised Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. California Privacy Rights (If Applicable)</h2>
          <p className="text-gray-700 mb-2">
            If you are a California resident, you may have rights under the CCPA/CPRA, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>the right to know what personal information is collected and shared,</li>
            <li>the right to delete,</li>
            <li>the right to correct (in certain cases),</li>
            <li>the right to opt out of "sale" or "sharing" of personal information (as defined by law),</li>
            <li>the right to limit certain uses of sensitive personal information (where applicable).</li>
          </ul>
          <p className="text-gray-700 mb-6">
            If required for your use case, we will provide a link or settings option such as "Your Privacy Choices" to exercise opt-out rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Data Retention</h2>
          <p className="text-gray-700 mb-2">
            We keep personal data only for as long as reasonably necessary to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>provide the Service,</li>
            <li>maintain accounts and subscriptions,</li>
            <li>comply with legal obligations,</li>
            <li>resolve disputes and enforce agreements.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Some data may be retained after deletion requests if required by law (e.g., accounting/tax obligations).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. "Do Not Track" Signals</h2>
          <p className="text-gray-700 mb-6">
            Except where required by law, the Website does not currently respond to browser "Do Not Track" signals. Third-party providers may have their own policies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">Community Sprints</p>
          <p className="text-gray-700 mb-2">Volee Technologies OU, Tallinn, Estonia</p>
          <p className="text-gray-700 mb-2">
            Websites: <a href="https://cosprints.ai" className="text-blue-600 hover:text-blue-800">https://cosprints.ai</a>, <a href="https://conf.cosprints.ai" className="text-blue-600 hover:text-blue-800">https://conf.cosprints.ai</a>
          </p>
          <p className="text-gray-700 mb-8">
            Email: <a href="mailto:info@cosprints.ai" className="text-blue-600 hover:text-blue-800">info@cosprints.ai</a>
          </p>

          <p className="text-gray-600 text-sm mb-12">
            Date of last revision: December 23, 2025
          </p>
        </div>
      </div>
      <MobileRegisterButton calendlyUrl={calendlyUrl} />
    </div>
  );
}
