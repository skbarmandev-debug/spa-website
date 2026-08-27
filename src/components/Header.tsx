import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { trackCtaClick } from '../utils/analytics';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceInterest?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'head-spa', label: 'Japanese Head Spa' },
    { id: 'hydrafacial', label: 'Hydrafacial®' },
    { id: 'treatments', label: 'Facial & Body' },
    { id: 'about-contact', label: 'About & Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNowClick = (trackingId: string, location: string) => {
    trackCtaClick(trackingId, {
      ctaName: 'Book Now Header',
      ctaCategory: 'booking',
      location: location,
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking();
  };

  const handleCallClick = (trackingId: string, location: string) => {
    trackCtaClick(trackingId, {
      ctaName: 'Call Now Header',
      ctaCategory: 'call',
      location: location,
      targetUrl: `tel:${BUSINESS_INFO.phoneRaw}`
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Concierge Announcement Bar */}
      <div className="bg-[#2A2421] text-[#E8D8C8] text-xs font-medium py-2 px-4 border-b border-[#3E3430]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mx-auto md:mx-0">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </span>
            <span className="hidden sm:inline-block text-[#5A4D46]">|</span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-90">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{BUSINESS_INFO.hours}</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span className="text-[#C5A880] flex items-center gap-1 font-serif-luxury italic text-sm">
              <Sparkles className="w-3 h-3" />
              Bespoke Japanese Scalp & Skincare Sanctuary
            </span>
            <span className="text-[#5A4D46]">|</span>
            <a
              id="header-top-call-link"
              data-tracking-cta="cta_header_call_top"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              onClick={() => handleCallClick('cta_header_call_top', 'top_announcement_bar')}
              className="flex items-center gap-1 hover:text-[#C5A880] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Direct Concierge: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD5] py-3.5' 
          : 'bg-[#FAF7F2] border-b border-[#ECE3D8] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#C5A880]/50 bg-[#F5EFEB] flex items-center justify-center text-[#B28E5E] font-serif-luxury text-lg font-bold group-hover:bg-[#C5A880] group-hover:text-white transition-colors duration-300">
                雪
              </div>
              <div>
                <span className="block font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#2A2421] group-hover:text-[#B28E5E] transition-colors leading-tight">
                  YUKI
                </span>
                <span className="block font-sans-clean text-[9px] uppercase tracking-[0.25em] text-[#7A6B63] font-semibold">
                  Luxury Headspa & Skincare
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm tracking-wide font-medium relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-[#2A2421] font-semibold' 
                      : 'text-[#655850] hover:text-[#2A2421]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Action CTAs (Call + Persistent Book Now) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-phone-cta-btn"
              data-tracking-cta="cta_header_phone_button"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              onClick={() => handleCallClick('cta_header_phone_button', 'header_desktop_actions')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#D5C7B8] text-[#3E3430] hover:border-[#C5A880] hover:bg-[#F3ECE4] text-xs font-semibold tracking-wide transition-luxury"
            >
              <Phone className="w-3.5 h-3.5 text-[#B28E5E]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="header-book-now-cta-btn"
              data-tracking-cta="cta_header_book_now"
              onClick={() => handleBookNowClick('cta_header_book_now', 'header_desktop_primary')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2A2421] text-[#FAF7F2] hover:bg-[#B28E5E] text-xs uppercase tracking-wider font-semibold shadow-sm hover:shadow transition-luxury cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8D8C8]" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-book-header-btn"
              data-tracking-cta="cta_header_mobile_book"
              onClick={() => handleBookNowClick('cta_header_mobile_book', 'header_mobile_bar')}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#2A2421] text-[#FAF7F2] text-xs font-medium tracking-wide"
            >
              Book Now
            </button>
            <button
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#3E3430] hover:text-[#2A2421] hover:bg-[#EFE7DE] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#ECE3D8] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EFE7DE] text-[#2A2421] font-semibold'
                        : 'text-[#655850] hover:bg-[#F5EFEB] hover:text-[#2A2421]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A880]" />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#ECE3D8] flex flex-col gap-2.5">
              <button
                id="drawer-book-now-btn"
                data-tracking-cta="cta_mobile_drawer_book"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBookNowClick('cta_mobile_drawer_book', 'mobile_drawer');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#2A2421] text-[#FAF7F2] text-sm uppercase tracking-wider font-semibold shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#E8D8C8]" />
                <span>Book Appointment Online</span>
              </button>

              <a
                id="drawer-call-btn"
                data-tracking-cta="cta_mobile_drawer_call"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                onClick={() => handleCallClick('cta_mobile_drawer_call', 'mobile_drawer')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#D5C7B8] text-[#3E3430] bg-[#F5EFEB] text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#B28E5E]" />
                <span>Call Spa: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-[#7A6B63]">
              <p>{BUSINESS_INFO.fullAddress}</p>
              <p className="mt-0.5">{BUSINESS_INFO.hours}</p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
