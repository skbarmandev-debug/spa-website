import React from 'react';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { trackCtaClick } from '../utils/analytics';

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ onOpenBooking }) => {
  const handleDirectBook = () => {
    trackCtaClick('cta_sticky_bottom_book_now', {
      ctaName: 'Sticky Bar Book Now',
      ctaCategory: 'booking',
      location: 'sticky_bar',
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking();
  };

  const handleCall = () => {
    trackCtaClick('cta_sticky_bottom_call_now', {
      ctaName: 'Sticky Bar Call',
      ctaCategory: 'call',
      location: 'sticky_bar',
      targetUrl: `tel:${BUSINESS_INFO.phoneRaw}`
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E2D8CC] px-4 py-3 shadow-xl transition-transform duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Info Tagline (Visible on tablets and desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#EFE7DE] border border-[#C5A880]/40 flex items-center justify-center text-[#B28E5E]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#2A2421]">
              Yuki Luxury Headspa & Skincare
            </p>
            <p className="text-[11px] text-[#75675F]">
              Pasadena, MD • Open 7 Days: 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full md:w-auto flex items-center justify-end gap-2.5">
          <a
            id="sticky-bar-call-btn"
            data-tracking-cta="cta_sticky_bottom_call_now"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            onClick={handleCall}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#CBBDB0] bg-[#FAF7F2] hover:bg-[#F0E8DE] text-[#2A2421] text-xs uppercase tracking-wider font-semibold shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B28E5E]" />
            <span>Call Spa</span>
          </a>

          <button
            id="sticky-bar-book-btn"
            data-tracking-cta="cta_sticky_bottom_book_now"
            onClick={handleDirectBook}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-luxury cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E8D8C8]" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
