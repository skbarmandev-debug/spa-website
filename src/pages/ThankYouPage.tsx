import React, { useEffect } from 'react';
import { CheckCircle2, Calendar, Phone, ArrowLeft, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { trackCtaClick } from '../utils/analytics';
import { BookingFormData } from '../types';

interface ThankYouPageProps {
  bookingData?: BookingFormData | null;
  onReturnHome: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  bookingData,
  onReturnHome
}) => {
  useEffect(() => {
    // Fire GA4 conversion event for form completion
    trackCtaClick('ga4_event_conversion_thank_you_view', {
      ctaName: 'Thank You Conversion View',
      ctaCategory: 'contact_form',
      location: 'thank_you_page',
      serviceInterest: bookingData?.serviceCategory || 'General Inquiry'
    });
  }, [bookingData]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-[#F5EFEB] rounded-3xl p-8 sm:p-12 border border-[#E2D8CC] shadow-xl text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-[#EAE0D5] border-2 border-[#C5A880] mx-auto flex items-center justify-center text-[#B28E5E] shadow-sm mb-6 animate-in zoom-in-50 duration-300">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        {/* Title */}
        <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Inquiry Received & Tracked
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal leading-snug">
          Thank You for Connecting With Yuki
        </h1>

        <p className="text-sm text-[#5C5048] mt-3 leading-relaxed">
          Your reservation request has been transmitted to our concierge desk in Pasadena, MD. A spa coordinator will contact you promptly at{' '}
          <strong className="text-[#2A2421]">{bookingData?.phone || 'your phone number'}</strong> to confirm timing and customize your ritual.
        </p>

        {/* Summary Box */}
        {bookingData && (
          <div className="mt-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-left text-xs space-y-2 text-[#4A3F39]">
            <div className="flex justify-between pb-1 border-b border-[#E8DFD5]">
              <span className="text-[#75675F]">Guest Name:</span>
              <span className="font-semibold text-[#2A2421]">{bookingData.fullName}</span>
            </div>
            <div className="flex justify-between pb-1 border-b border-[#E8DFD5]">
              <span className="text-[#75675F]">Requested Treatment:</span>
              <span className="font-semibold text-[#B28E5E]">{bookingData.serviceCategory}</span>
            </div>
            {bookingData.preferredDate && (
              <div className="flex justify-between pb-1 border-b border-[#E8DFD5]">
                <span className="text-[#75675F]">Preferred Date:</span>
                <span className="font-semibold text-[#2A2421]">{bookingData.preferredDate}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[#75675F]">Time Window:</span>
              <span className="font-semibold text-[#2A2421]">{bookingData.preferredTime}</span>
            </div>
          </div>
        )}

        {/* Fast Action Links */}
        <div className="mt-8 pt-6 border-t border-[#E0D4C8] space-y-3">
          <p className="text-xs text-[#75675F]">
            Want to immediately lock in a live slot on our calendar right now?
          </p>
          <a
            id="thank-you-glossgenius-btn"
            data-tracking-cta="cta_thank_you_glossgenius_direct"
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md transition-luxury"
          >
            <span>Open Direct GlossGenius Schedule</span>
            <ExternalLink className="w-4 h-4 text-[#E8D8C8]" />
          </a>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              id="thank-you-return-home-btn"
              onClick={onReturnHome}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#655850] hover:text-[#2A2421] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Sanctuary Home</span>
            </button>
            <span className="text-[#CBBDB0]">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs font-semibold text-[#B28E5E] hover:underline"
            >
              Direct: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
