import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

interface PartnerPopupProps {
  // Still supported as a fallback, but primary source is URL param "Partner"
  partner?: string;
  onClose: () => void;
}

/**
 * Mapping from partners.csv (Partner ID -> Popup content).
 * Only non-empty "Popup content" rows are listed here.
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
  "16": "Midjourney Mastery Guide",
  "17": "Prompt Engineering Guide",
};

const DEFAULT_BONUS_NAME = "WhatsApp group with AI speakers, experts & attendees";

/**
 * Per your requirement:
 * - If "Popup content" is empty => popup SHOULD appear.
 * That means we hide the popup only when content is present? (counterintuitive, but matches your sentence)
 *
 * If you actually meant the opposite, flip this to: const shouldShowPopup = bonusFromCsv !== "";
 */
function computeShouldShowPopup(bonusFromCsv: string) {
  return bonusFromCsv.trim() === "";
}

function readPartnerFromUrl(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);

  // Exact key requested: "Partner"
  const direct = params.get("Partner");
  if (direct && direct.trim()) return direct.trim();

  // Small extra resilience (optional)
  const lower = params.get("partner");
  return (lower ?? "").trim();
}

export function PartnerPopup({ partner, onClose }: PartnerPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  const partnerId = useMemo(() => {
    const fromUrl = readPartnerFromUrl();
    return (fromUrl || partner || "").trim();
  }, [partner]);

  const bonusFromCsv = useMemo(() => {
    if (!partnerId) return "";
    return PARTNER_POPUP_CONTENT[partnerId] ?? "";
  }, [partnerId]);

  const shouldShowPopup = useMemo(() => computeShouldShowPopup(bonusFromCsv), [bonusFromCsv]);

  const bonusName = useMemo(() => (bonusFromCsv.trim() ? bonusFromCsv.trim() : DEFAULT_BONUS_NAME), [bonusFromCsv]);

  useEffect(() => {
    if (!shouldShowPopup) return;

    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [shouldShowPopup]);

  if (!shouldShowPopup) return null;
  if (!isVisible) return null;

  const calendlyUrl = `https://calendly.com/maxpog/ai/2026-01-22T16:00:00+00:00?month=2026-01&date=2026-01-22&utm_source=${encodeURIComponent(
    partnerId || ""
  )}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-2xl">
        {/* Close Button - Outside popup */}
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

        {/* Wider popup */}
        <div className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden">
          <div className="p-10 text-center space-y-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>

            {/* Main CTA */}
            <div className="space-y-2">
              <p className="text-gray-700 font-semibold text-xl">Your Bonus is Ready!</p>

              {/* Bonus line (dynamic) */}
              <p className="text-gray-600 text-base">
                🎁 {bonusName}
              </p>
            </div>

            {/* Button */}
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

            {/* Footer */}
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
