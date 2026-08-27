import React from 'react';
import { Calendar, Phone, MapPin, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO, THREE_SERVICE_PILLARS } from '../data/spaData';
import { WhyChooseYuki } from '../components/WhyChooseYuki';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { LocationContactStrip } from '../components/LocationContactStrip';
import { trackCtaClick } from '../utils/analytics';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceInterest?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const handlePrimaryBook = () => {
    trackCtaClick('cta_home_hero_book_now', {
      ctaName: 'Home Hero Book Now',
      ctaCategory: 'booking',
      location: 'hero_primary',
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking();
  };

  const handleServiceClick = (path: string, trackingId: string, title: string) => {
    trackCtaClick(trackingId, {
      ctaName: `Explore ${title}`,
      ctaCategory: 'navigation',
      location: 'home_service_grid',
      serviceInterest: title
    });
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section: Full-Bleed Luxury Japanese Sanctuary Atmosphere */}
      <section className="relative min-h-[88vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1D1815] text-[#FAF7F2]">
        {/* Background Image with Cinematic Luxury Spa Texture */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=90"
            alt="Japanese Head Spa Waterfall Halo Therapy"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-in fade-in duration-1000"
          />
          {/* Multi-tier gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1815] via-[#1D1815]/60 to-[#1D1815]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1D1815]/40 to-[#1D1815]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Subtle Japanese Crest / Mon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A880]/40 text-[#E8D8C8] text-xs font-semibold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Pasadena's Premier Japanese Scalp & Skincare Sanctuary</span>
          </div>

          {/* Bold Core Offering Headline (Japanese Head Spa / Hydrafacial / Facial & Body) */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FAF7F2] tracking-tight leading-[1.15] max-w-4xl">
            Japanese Head Spa <span className="text-[#C5A880] font-light italic">•</span> Hydrafacial® <span className="text-[#C5A880] font-light italic">•</span> Facial & Body
          </h1>

          {/* Subheadline reflecting the client's official positioning brief */}
          <p className="font-sans-clean text-[#D8CCC1] text-base sm:text-lg md:text-xl font-light max-w-2xl mt-6 leading-relaxed">
            Immerse in meditative scalp hydrotherapy, clinical glow resurfacing, and bespoke holistic treatments tailored to your body’s unique rhythm.
          </p>

          {/* Quick Credibility Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-[#C5A880] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Waterfall Halo Therapy
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Heated Contour Beds
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Seoul Glow & Hydrafacial®
            </span>
          </div>

          {/* Hero CTAs (Book Now + Call Now + Address) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <button
              id="hero-book-now-cta"
              data-tracking-cta="cta_home_hero_book_now"
              onClick={handlePrimaryBook}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#1D1815] text-xs uppercase tracking-widest font-bold shadow-xl hover:shadow-2xl transition-luxury cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#1D1815]" />
              <span>Book An Appointment</span>
            </button>

            <a
              id="hero-call-now-cta"
              data-tracking-cta="cta_home_hero_call_now"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xs border border-white/20 text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-luxury"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Direct: (202) 670-8335</span>
            </a>
          </div>

          {/* Subtle Location & Hours Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#AFA297]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              8573 Fort Smallwood Road, Pasadena, MD 21122
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Open Mon–Sun: 9:00 AM – 6:00 PM</span>
          </div>
        </div>
      </section>

      {/* 2. "Welcome" Introduction Section (Concierge & Boutique Experience Tone) */}
      <section className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D5C7B8] aspect-[4/5] bg-[#2A2421]">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85"
                  alt="Yuki Luxury Headspa Japanese Scalp & Facial Sanctuary"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Japanese Seal Accent */}
              <div className="absolute -bottom-5 -right-5 bg-[#FAF7F2] p-4 rounded-2xl border border-[#C5A880]/60 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2A2421] text-[#C5A880] flex items-center justify-center font-serif-luxury text-xl font-bold">
                  美
                </div>
                <div>
                  <p className="font-serif-luxury font-bold text-sm text-[#2A2421]">Omotenashi</p>
                  <p className="text-[11px] text-[#7A6B63]">Japanese Pure Hospitality</p>
                </div>
              </div>
            </div>

            {/* Right Story Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Welcome to Yuki Luxury Headspa
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal leading-tight">
                  A Luxury Japanese Head Spa & Advanced Skincare Destination in Pasadena, Maryland
                </h2>
              </div>

              <p className="text-[#554740] text-base leading-relaxed">
                Step inside an unhurried, serene wellness retreat designed to soothe overstimulated senses and restore cellular vitality. At Yuki, we elevate head spa treatments into an art form — merging ancestral Japanese scalp diagnostics and continuous herbal waterfall hydrotherapy with world-class clinical skincare.
              </p>

              <p className="text-[#655850] text-sm leading-relaxed">
                Whether you seek profound tension relief on our heated memory-foam massage beds, immediate glass-skin luminosity with our medical-grade Hydrafacial® protocols, or full-body rejuvenation with our coveted Cashmere Body Glow Ritual, every touch is customized to you.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-y border-[#E8DFD5] py-5">
                <div>
                  <p className="font-serif-luxury text-2xl font-bold text-[#B28E5E]">100%</p>
                  <p className="text-xs text-[#6B5E57] mt-0.5">Bespoke Scalp & Skin Analysis</p>
                </div>
                <div>
                  <p className="font-serif-luxury text-2xl font-bold text-[#B28E5E]">FDA-Cleared</p>
                  <p className="text-xs text-[#6B5E57] mt-0.5">Clinical Red Light Therapy</p>
                </div>
                <div>
                  <p className="font-serif-luxury text-2xl font-bold text-[#B28E5E]">7 Days</p>
                  <p className="text-xs text-[#6B5E57] mt-0.5">9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="welcome-learn-more-btn"
                  onClick={() => {
                    onNavigate('about-contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#2A2421] hover:text-[#B28E5E] border-b-2 border-[#2A2421] hover:border-[#B28E5E] pb-1 transition-colors cursor-pointer"
                >
                  <span>Learn More About Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Equal-Weight Core Service Category Cards */}
      <section className="py-20 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Our Core Offerings
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal">
              Signature Treatment Disciplines
            </h2>
            <p className="text-[#655850] text-sm sm:text-base mt-3 leading-relaxed">
              Engineered with equal visual prominence: authentic Japanese scalp therapy, medical-grade Hydrafacial® precision, and couture facial & body rituals.
            </p>
          </div>

          {/* 3-Card Grid (Equal Weight) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {THREE_SERVICE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="group bg-[#F5EFEB] rounded-3xl overflow-hidden border border-[#E2D8CC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-[#2A2421]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Price & Duration Badge */}
                  <div className="absolute top-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-xs border border-[#C5A880]/60 px-3.5 py-1 rounded-full text-xs font-bold text-[#2A2421] shadow-sm">
                    From {pillar.startingPrice} • {pillar.duration}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#E8D8C8] font-semibold">
                      {pillar.subtitle}
                    </p>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#FAF7F2] mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold text-[#B28E5E] italic font-serif-luxury text-base">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C5048] leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-[#E5DAD0]">
                      {pillar.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#4A3F39]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-[#E5DAD0] flex items-center justify-between gap-3">
                    <button
                      id={`card-learn-more-${pillar.id}`}
                      onClick={() => handleServiceClick(pillar.path, pillar.ctaTrackingId, pillar.title)}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#2A2421] hover:text-[#B28E5E] transition-colors cursor-pointer"
                    >
                      <span>Explore Treatment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      id={`card-book-now-${pillar.id}`}
                      data-tracking-cta={`cta_grid_book_${pillar.id}`}
                      onClick={() => {
                        trackCtaClick(`cta_grid_book_${pillar.id}`, {
                          ctaName: `Book ${pillar.title}`,
                          ctaCategory: 'booking',
                          location: 'home_service_grid_button',
                          serviceInterest: pillar.title
                        });
                        onOpenBooking(pillar.title);
                      }}
                      className="px-4 py-2 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-luxury cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Why Choose Yuki" 8 Experience Pillars Grid */}
      <WhyChooseYuki />

      {/* 5. Sensory Atmospheric Full-Width Breather */}
      <section className="relative py-24 bg-[#1F1916] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1800&q=80"
            alt="Warm Spa Light & Botanicals"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#C5A880] text-xs uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" />
            The Sensory Art of Japanese Calm
          </span>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#FAF7F2]">
            "When the scalp breathes, the mind stills and the complexion awakens."
          </h3>
          <p className="text-sm sm:text-base text-[#D5C7B8] font-light max-w-xl mx-auto mt-6 leading-relaxed">
            Experience our heated memory foam contours, artisan botanical steam infusions, and soothing waterfall halos in absolute acoustic peace.
          </p>
          <div className="mt-8">
            <button
              id="breather-book-now-btn"
              data-tracking-cta="cta_home_breather_book"
              onClick={handlePrimaryBook}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#1F1916] text-xs uppercase tracking-widest font-bold shadow-lg transition-luxury cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Your Sanctuary Time</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Reviews Carousel */}
      <TestimonialsSlider />

      {/* 7. Location / Contact Strip */}
      <LocationContactStrip onOpenBooking={onPrimaryBook => handlePrimaryBook()} />
    </div>
  );
};
