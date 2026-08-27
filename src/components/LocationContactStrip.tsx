import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { trackCtaClick } from '../utils/analytics';

interface LocationContactStripProps {
  onOpenBooking: () => void;
}

export const LocationContactStrip: React.FC<LocationContactStripProps> = ({ onOpenBooking }) => {
  const handleBook = () => {
    trackCtaClick('cta_location_strip_book_now', {
      ctaName: 'Location Strip Book Now',
      ctaCategory: 'booking',
      location: 'location_strip',
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking();
  };

  const handleCall = () => {
    trackCtaClick('cta_location_strip_call_phone', {
      ctaName: 'Location Strip Call Phone',
      ctaCategory: 'call',
      location: 'location_strip',
      targetUrl: `tel:${BUSINESS_INFO.phoneRaw}`
    });
  };

  return (
    <section className="py-16 bg-[#F5EFEB] border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E2D8CC] shadow-sm">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Visit Our Sanctuary
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#2A2421] font-normal">
                Conveniently Located in Pasadena, Maryland
              </h3>
              <p className="text-[#6B5E57] text-sm mt-2 leading-relaxed">
                A serene refuge nestled along Fort Smallwood Road, easily accessible from Severna Park, Annapolis, Gibson Island, and the greater Baltimore area. Dedicated private parking available.
              </p>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A2421]">{BUSINESS_INFO.name}</p>
                  <p className="text-[#655850]">{BUSINESS_INFO.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A2421]">Hours of Serenity</p>
                  <p className="text-[#655850]">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A2421]">Direct Reservations & Concierge</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    onClick={handleCall}
                    className="text-[#B28E5E] font-bold hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="location-strip-book-btn"
                data-tracking-cta="cta_location_strip_book_btn"
                onClick={handleBook}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-luxury cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E8D8C8]" />
                <span>Book Appointment</span>
              </button>

              <a
                id="location-strip-directions-btn"
                data-tracking-cta="cta_location_strip_get_directions"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#CBBDB0] hover:border-[#C5A880] hover:bg-[#F2EAE0] text-[#2A2421] text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B28E5E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Map / Visual Suite Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D9C7B6] shadow-md bg-[#2A2421] aspect-[4/3] sm:aspect-[16/10]">
              {/* Google Map / Stylized Sanctuary Map Overlay */}
              <iframe
                title="Yuki Luxury Headspa Location Map"
                src="https://maps.google.com/maps?q=8573+Fort+Smallwood+Road,+Pasadena,+MD+21122&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-[0.8] contrast-[1.05]"
                loading="lazy"
                allowFullScreen
              />
              
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs border border-[#C5A880]/60 px-3.5 py-1.5 rounded-lg shadow-sm text-xs font-semibold text-[#2A2421] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B28E5E]" />
                <span>8573 Fort Smallwood Rd, Pasadena, MD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
