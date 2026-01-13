import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

interface PartnerPopupProps {
  // optional fallback (if you already pass it from elsewhere)
  partner?: string;
  onClose: () => void;
}

/**
 * Partner ID -> Popup content (from partners.csv)
 * Only non-empty rows need to be listed; everything else counts as "empty".
 */
const PARTNER_POPUP_CONTENT: Record<string, string> = {
  "5": "Perplexity Mastery Guide",
  "6": "ChatGPT Images Mastery Guide",
  "7": "Google’s Veo Mastery Guide",
  "8": "Gemini Mastery Guide",
  "9": "AI Agents Mastery Guide",
  "10": "Deep Researcher Mega-Prompt",
  "11": "Grok Mastery Guide",
  "12": "AI Agents System Prompt Generator",
  "13": "Claude Mastery Guide",
  "14": "ChatGPT — Most Used Words",
  "15": "Tweet Generator Mega-Prompt",
  // add the rest of non-empty rows here if needed
};

const DEFAULT_BONUS_NAME = "Perplexity Mastery Guide";

function getPartnerFromUrl(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);

  // requested key: Partner
  const v = params.get("Partner") || params.get("partner") || "";
  return v.trim();
}

export function PartnerPopup({ partner, onClose }: PartnerPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [partnerId, setPartnerId] = useState<string>("");

  // Read URL param on client (important for Next.js / SSR)
  useEffect(() => {
    const fromUrl = getPartnerFromUrl();
    setPartnerId(fromUrl || (partner ?? "").trim());
  }, [partner]);

  const popupContent = useMemo(() => {
    if (!partnerId) return "";
    return (PARTNER_POPUP_CONTENT[partnerId] ?? "").trim();
  }, [partnerId]);

  // Per your requirement: if Popup content is empty -> popup should appear
  const shouldShowPopup = useMemo(() => popupContent === "", [popupContent]);

  // When popup is shown (empty content), we still show a default bonus label
  const bonusName = useMemo(() => {
    return popupContent || DEFAULT_BONUS_NAME;
  }, [popupContent]);

  useEffect(() => {
    if (!shouldShowPopup) return;

    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [shouldShowPopup]);

  if (!shouldShowPopup || !isVisible) return null;

  const calendlyUrl = `https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22&utm_source=${encodeURIComponent(
    partnerId || ""
  )}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-2xl">
        {/* Close Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="absolute -top-12 -right-2 sm:-right-12 p-2 hover:bg-white/20 rounded-lg transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Popup */}
        <div className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden">
          <div className="p-10 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>

            <div className="space-y-2">
              <p className="text-gray-700 font-semibold text-xl">Your Bonus is Ready!</p>

              {/* 🎁 emoji + space before bonus */}
              <p className="text-gray-600 text-base">🎁 {bonusName}</p>
            </div>

            <div className="space-y-3">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Claim your bonus + Register for free
              </a>
            </div>

            <div className="space-y-1 text-sm text-gray-500">
              <p>✓ Free conference access</p>
              <p>✓ Instant bonus delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
