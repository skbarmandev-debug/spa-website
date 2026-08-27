import React from 'react';
import { Calendar, Phone, Sparkles, CheckCircle2, Droplets, Sun, Flame, Flower2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, HEAD_SPA_TREATMENTS, HEAD_SPA_FAQS } from '../data/spaData';
import { FaqAccordion } from '../components/FaqAccordion';
import { trackCtaClick } from '../utils/analytics';

interface HeadSpaPageProps {
  onOpenBooking: (serviceInterest?: string) => void;
}

export const HeadSpaPage: React.FC<HeadSpaPageProps> = ({ onOpenBooking }) => {
  const handleBookHeadSpa = (tierName: string, trackingId: string) => {
    trackCtaClick(trackingId, {
      ctaName: `Book ${tierName}`,
      ctaCategory: 'booking',
      location: 'head_spa_pricing_table',
      serviceInterest: tierName,
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking(tierName);
  };

  const steps = [
    {
      num: '01',
      title: 'Micro-Camera Scalp Scan',
      desc: '200x magnification diagnostic to analyze follicle density, sebum buildup, scalp hydration, and microcirculation.'
    },
    {
      num: '02',
      title: 'Botanical Pre-Cleanse & Scrub',
      desc: 'Gentle organic exfoliating paste infused with Japanese green tea and jojoba to dissolve hardened impurities.'
    },
    {
      num: '03',
      title: 'Waterfall Halo Hydrotherapy',
      desc: 'Continuous warm herbal water cascades over the crown, soothing the nervous system into a meditative theta state.'
    },
    {
      num: '04',
      title: 'Meridian Acupressure Massage',
      desc: 'Deep pressure-point massage across scalp, neck, occipital ridge, and shoulders to release stagnant tension.'
    },
    {
      num: '05',
      title: 'Herbal Steam & Red Light Canopy',
      desc: 'Aromatic botanical mist paired with FDA-cleared 633nm Red Light to stimulate hair follicle cellular renewal.'
    },
    {
      num: '06',
      title: 'Nourishing Ampoule & Blow-Dry',
      desc: 'Ultrasonic infusion of peptide & botanical scalp serum followed by a refreshing blow-dry styling finish.'
    }
  ];

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. Dedicated Head Spa Hero Banner */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-[#1D1815] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=90"
            alt="Authentic Japanese Head Spa Pasadena"
            className="w-full h-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1815] via-[#1D1815]/60 to-[#1D1815]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A880]/40 text-[#E8D8C8] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Yuki's Signature Holistic Scalp Sanctuary</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] tracking-tight leading-tight">
            Authentic Japanese Head Spa
          </h1>

          <p className="font-sans-clean text-[#D8CCC1] text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            A deeply restorative multi-sensory ritual merging ancient Japanese meridian scalp therapy, continuous waterfall halo hydrotherapy, botanical steam, and clinical Red Light rejuvenation on heated memory-foam massage beds.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              id="headspa-hero-book-btn"
              data-tracking-cta="cta_headspa_hero_book_now"
              onClick={() => handleBookHeadSpa('Signature Japanese Head Spa', 'cta_headspa_hero_book_now')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#1D1815] text-xs uppercase tracking-widest font-bold shadow-lg transition-luxury cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#1D1815]" />
              <span>Book Head Spa Ritual</span>
            </button>

            <a
              id="headspa-hero-call-btn"
              data-tracking-cta="cta_headspa_hero_call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xs border border-white/20 text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-luxury"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>(202) 670-8335</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Sensory Description & Holistic Philosophy Section */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The Holistic Philosophy
              </span>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal leading-snug">
                More Than Scalp Care — A Symphony of Sensory Awakening
              </h2>

              <p className="text-[#554740] text-sm sm:text-base leading-relaxed">
                In traditional Japanese wellness, the scalp is considered the root of vital energetic flow (*Ki*). Chronic stress, scalp tension, environmental pollutants, and sebum buildup restrict microcirculation to hair follicles and trigger mental fatigue.
              </p>

              <p className="text-[#655850] text-sm leading-relaxed">
                At Yuki Luxury Headspa, our certified specialists create a sanctuary of total immersion. From the gentle warmth of our climate-controlled ergonomic massage beds to the calming cadence of our custom waterfall halo and botanical hinoki steam, every element is engineered to lower cortisol levels and revive luscious, healthy hair.
              </p>

              {/* Sensory Highlights Feature Grid */}
              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E5DAD0]">
                  <Droplets className="w-5 h-5 text-[#B28E5E] mb-2" />
                  <p className="font-serif-luxury font-bold text-[#2A2421]">Waterfall Halo</p>
                  <p className="text-xs text-[#75675F] mt-1">Continuous warm herbal hydrotherapy</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E5DAD0]">
                  <Flame className="w-5 h-5 text-[#B28E5E] mb-2" />
                  <p className="font-serif-luxury font-bold text-[#2A2421]">Heated Massage Beds</p>
                  <p className="text-xs text-[#75675F] mt-1">Spine-contouring memory foam warmth</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E5DAD0]">
                  <Sun className="w-5 h-5 text-[#B28E5E] mb-2" />
                  <p className="font-serif-luxury font-bold text-[#2A2421]">Red Light Therapy</p>
                  <p className="text-xs text-[#75675F] mt-1">633nm follicle cellular energizing</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E5DAD0]">
                  <Flower2 className="w-5 h-5 text-[#B28E5E] mb-2" />
                  <p className="font-serif-luxury font-bold text-[#2A2421]">Aromatherapy Mist</p>
                  <p className="text-xs text-[#75675F] mt-1">Organic Japanese cedar, yuzu & lavender</p>
                </div>
              </div>
            </div>

            {/* Right Photo Composition */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D5C7B8] aspect-[4/3] bg-[#2A2421]">
                <img
                  src="https://images.unsplash.com/photo-1512290900672-1f55b9355152?auto=format&fit=crop&w=1000&q=85"
                  alt="Japanese Head Spa Scalp Massage Treatment"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Treatment Breakdown with Pricing & "What's Included" Comparison */}
      <section className="py-20 bg-[#F5EFEB] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Treatment Menu & Tiers
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal">
              Select Your Head Spa Ritual
            </h2>
            <p className="text-[#655850] text-sm sm:text-base mt-3 leading-relaxed">
              Transparent pricing, comprehensive "What’s Included" protocols, and guaranteed luxury standard across all options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {HEAD_SPA_TREATMENTS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-[#FAF7F2] border-2 border-[#C5A880] shadow-xl ring-4 ring-[#C5A880]/15'
                    : 'bg-[#FAF7F2] border border-[#E2D8CC] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C5A880] text-[#211C19] text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5]">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#B28E5E]">
                        {tier.duration}
                      </span>
                      <h3 className="font-serif-luxury text-2xl font-bold text-[#2A2421] mt-0.5">
                        {tier.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="font-serif-luxury text-3xl font-bold text-[#2A2421]">
                        {tier.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs italic text-[#B28E5E] font-medium mt-3">
                    {tier.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C5048] mt-2 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Sensory Features Pills */}
                  <div className="mt-4 pt-3 border-t border-[#E8DFD5]">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#75675F] mb-2">
                      Sensory Highlights:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.sensoryFeatures.map((sf, idx) => (
                        <span key={idx} className="bg-[#F0E8DE] text-[#4A3F39] text-[11px] px-2.5 py-1 rounded-md font-medium">
                          {sf}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-5 pt-4 border-t border-[#E8DFD5] space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#75675F]">
                      What's Included:
                    </p>
                    {tier.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4A3F39]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8DFD5]">
                  <button
                    id={`book-tier-${tier.id}`}
                    data-tracking-cta={tier.ctaTrackingId}
                    onClick={() => handleBookHeadSpa(tier.name, tier.ctaTrackingId)}
                    className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-bold transition-luxury cursor-pointer flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'bg-[#2A2421] text-[#FAF7F2] hover:bg-[#B28E5E] shadow-md'
                        : 'bg-[#EAE0D5] hover:bg-[#2A2421] text-[#2A2421] hover:text-[#FAF7F2]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book {tier.name.split(' ')[0]} Head Spa</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Step-By-Step 6-Stage Journey Guide */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              The Treatment Journey
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal">
              What to Expect During Your Japanese Scalp Ritual
            </h2>
            <p className="text-[#655850] text-sm mt-2">
              Every detail is choreographed for profound sensory renewal and scientific scalp restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F5EFEB] p-6 rounded-2xl border border-[#E5DAD0] relative group hover:border-[#C5A880] transition-colors"
              >
                <span className="font-serif-luxury text-3xl font-bold text-[#C5A880]/70 group-hover:text-[#B28E5E] transition-colors">
                  {step.num}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-[#2A2421] mt-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#655850] mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Treatment Photo Gallery Showcase */}
      <section className="py-16 bg-[#F5EFEB] border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2A2421]">
              Inside the Japanese Head Spa Sanctuary
            </h3>
            <p className="text-xs text-[#75675F] mt-1">
              Pasadena, MD • Continuous Waterfall Hydrotherapy & Red Light Follicle Rejuvenation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#2A2421] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Waterfall Halo Hydrotherapy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#2A2421] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
                alt="Scalp Acupressure & Botanical Cleansing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#2A2421] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80"
                alt="Heated Memory Foam Beds & Steam"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Head Spa FAQ Accordion */}
      <FaqAccordion
        items={HEAD_SPA_FAQS}
        title="Japanese Head Spa Questions & Answers"
        subtitle="Common inquiries regarding scalp diagnostics, hair types, and booking preparation"
      />

      {/* 7. Bottom Sticky Conversion CTA */}
      <section className="py-16 bg-[#2A2421] text-[#FAF7F2] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[#C5A880] text-xs font-semibold uppercase tracking-widest">
            Begin Your Scalp Transformation
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal mt-2">
            Ready to Relieve Tension and Restore Healthy Hair?
          </h2>
          <p className="text-sm text-[#D5C7B8] mt-3 max-w-xl mx-auto">
            Reserve your Japanese Head Spa experience online with real-time schedule confirmation on GlossGenius.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              id="headspa-bottom-book-cta"
              data-tracking-cta="cta_headspa_bottom_book_now"
              onClick={() => handleBookHeadSpa('Japanese Head Spa', 'cta_headspa_bottom_book_now')}
              className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#2A2421] text-xs uppercase tracking-widest font-bold shadow-lg transition-luxury cursor-pointer"
            >
              Book Head Spa Now
            </button>
            <a
              id="headspa-bottom-call-cta"
              data-tracking-cta="cta_headspa_bottom_call_now"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-full border border-[#52453D] hover:border-[#C5A880] text-[#E5DAD0] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Call (202) 670-8335
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
