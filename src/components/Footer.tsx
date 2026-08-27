import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight, Instagram, Facebook, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { trackCtaClick } from '../utils/analytics';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceInterest?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (tabId: string) => {
    onNavigate(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = () => {
    trackCtaClick('cta_footer_book_now', {
      ctaName: 'Book Now Footer',
      ctaCategory: 'booking',
      location: 'footer_primary',
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking();
  };

  const handleCallClick = () => {
    trackCtaClick('cta_footer_phone_click', {
      ctaName: 'Footer Call Phone',
      ctaCategory: 'call',
      location: 'footer_contact_list',
      targetUrl: `tel:${BUSINESS_INFO.phoneRaw}`
    });
  };

  return (
    <footer className="bg-[#211C19] text-[#E5DAD0] border-t border-[#38302B]">
      {/* Upper VIP Invitation Banner */}
      <div className="border-b border-[#352D28] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-[#C5A880] text-xs font-semibold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Private Sanctuary Reservations
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#FAF7F2] font-normal leading-snug">
              Immerse in the Art of Japanese Scalp & Skin Wellness
            </h3>
            <p className="text-[#AFA297] text-sm mt-2 leading-relaxed">
              Experience therapeutic waterfall halo hydrotherapy, medical-grade Hydrafacial® precision, and couture facial rituals in Pasadena, Maryland.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              id="footer-action-book-btn"
              data-tracking-cta="cta_footer_banner_book"
              onClick={handleBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#211C19] text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl transition-luxury cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Your Treatment</span>
            </button>
            <a
              id="footer-action-call-btn"
              data-tracking-cta="cta_footer_banner_call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              onClick={handleCallClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#52453D] hover:border-[#C5A880] text-[#E5DAD0] text-xs uppercase tracking-widest font-semibold transition-luxury"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call (202) 670-8335</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-[#C5A880]/60 bg-[#2E2723] flex items-center justify-center text-[#C5A880] font-serif-luxury text-xl font-bold">
                雪
              </div>
              <div>
                <span className="block font-serif-luxury text-2xl font-bold tracking-wider text-[#FAF7F2]">
                  YUKI
                </span>
                <span className="block font-sans-clean text-[10px] uppercase tracking-[0.22em] text-[#A59489]">
                  Luxury Headspa & Skincare
                </span>
              </div>
            </div>

            <p className="text-sm text-[#AFA297] leading-relaxed max-w-sm pt-2">
              A serene Japanese sanctuary in Pasadena, Maryland combining authentic holistic scalp care, medical-grade Hydrafacial® precision, and radiant facial & body therapies.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#2E2723] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#211C19] flex items-center justify-center border border-[#3E352F] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#2E2723] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#211C19] flex items-center justify-center border border-[#3E352F] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg text-[#FAF7F2] font-semibold tracking-wide border-b border-[#352D28] pb-2">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#AFA297]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer text-left"
                >
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('head-spa')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer text-left"
                >
                  Japanese Head Spa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hydrafacial')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer text-left"
                >
                  Hydrafacial® Rituals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('treatments')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer text-left"
                >
                  Facial & Body Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about-contact')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer text-left"
                >
                  About & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Signature Treatments */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg text-[#FAF7F2] font-semibold tracking-wide border-b border-[#352D28] pb-2">
              Signature Rituals
            </h4>
            <ul className="space-y-2 text-sm text-[#AFA297]">
              <li>
                <button
                  onClick={() => handleNav('head-spa')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Imperial Waterfall Halo Spa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hydrafacial')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Deluxe & Platinum Hydrafacial®
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('treatments')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Seoul Glow Korean Facial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('treatments')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  Cashmere Body Glow Ritual
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('treatments')}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  The Pasadena Royal Retreat
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg text-[#FAF7F2] font-semibold tracking-wide border-b border-[#352D28] pb-2">
              Sanctuary Hours
            </h4>
            <div className="space-y-3 text-xs text-[#AFA297]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#E5DAD0]">{BUSINESS_INFO.hours}</p>
                  <p className="text-[11px] text-[#8E7E73]">By Appointment & Walk-In Inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#E5DAD0] font-medium">{BUSINESS_INFO.address}</p>
                  <p className="text-[#E5DAD0]">{BUSINESS_INFO.cityStateZip}</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#C5A880] hover:underline text-[11px] mt-1 font-semibold"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  onClick={handleCallClick}
                  className="hover:text-[#C5A880] text-[#E5DAD0] font-semibold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#C5A880] text-[#AFA297] transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#181412] py-5 px-4 text-center text-xs text-[#7A6B63] border-t border-[#2A2421]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Yuki Luxury Headspa. All rights reserved. Pasadena, Maryland.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Japanese Head Spa</span>
            <span>•</span>
            <span>Hydrafacial® MD</span>
            <span>•</span>
            <span>Seoul Glow</span>
            <span>•</span>
            <span>Cashmere Body</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
