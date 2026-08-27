import React, { useState } from 'react';
import { Calendar, Phone, Sparkles, CheckCircle2, Droplets, ShieldCheck, Eye, Layers, ArrowRight, Star, Flame, Zap } from 'lucide-react';
import { BUSINESS_INFO, HYDRAFACIAL_TIERS, HYDRAFACIAL_ADDONS, BEFORE_AFTER_ITEMS, HYDRAFACIAL_FAQS } from '../data/spaData';
import { FaqAccordion } from '../components/FaqAccordion';
import { trackCtaClick } from '../utils/analytics';

interface HydrafacialPageProps {
  onOpenBooking: (serviceInterest?: string) => void;
}

export const HydrafacialPage: React.FC<HydrafacialPageProps> = ({ onOpenBooking }) => {
  const [selectedConcern, setSelectedConcern] = useState<string>('all');

  const handleBookHydrafacial = (tierName: string, trackingId: string) => {
    trackCtaClick(trackingId, {
      ctaName: `Book Hydrafacial ${tierName}`,
      ctaCategory: 'booking',
      location: 'hydrafacial_pricing_table',
      serviceInterest: `Hydrafacial - ${tierName}`,
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking(`Hydrafacial® (${tierName})`);
  };

  const handlePromoClaim = () => {
    trackCtaClick('cta_hydrafacial_claim_promo_banner', {
      ctaName: 'First-Time Client Hydrafacial Promo Claim',
      ctaCategory: 'special_offer',
      location: 'hydrafacial_promo_banner',
      serviceInterest: 'Hydrafacial First-Time Promo'
    });
    onOpenBooking('Hydrafacial® Promo Special');
  };

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. High-Converting Ad-Ready Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#181412] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2000&q=90"
            alt="Hydrafacial Medical-Grade Glow Treatment"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181412] via-[#181412]/65 to-[#181412]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A880]/50 text-[#E8D8C8] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Pasadena, MD • Authentic Medical-Grade Resurfacing</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FAF7F2] tracking-tight leading-tight">
            Hydrafacial® Glow Experience
          </h1>

          <p className="font-sans-clean text-[#E2D8CC] text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mt-4 leading-relaxed">
            3 Steps. 30 Minutes. The Best Skin of Your Life. Patented Vortex-Fusion® technology delivers instant glass-skin radiance with zero downtime and painless pore extractions.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs sm:text-sm text-[#C5A880] font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 0 Days Downtime
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Painless Extraction
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Instant Glass Skin
            </span>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
            <button
              id="hydrafacial-hero-book-btn"
              data-tracking-cta="cta_hydrafacial_hero_book_now"
              onClick={() => handleBookHydrafacial('Deluxe Hydrafacial', 'cta_hydrafacial_hero_book_now')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#181412] text-xs uppercase tracking-widest font-bold shadow-xl transition-luxury cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#181412]" />
              <span>Book Your Hydrafacial</span>
            </button>

            <a
              id="hydrafacial-hero-call-btn"
              data-tracking-cta="cta_hydrafacial_hero_call_now"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xs border border-white/20 text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-luxury"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call (202) 670-8335</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. First-Time Client Offer / Promo Banner */}
      <section className="bg-gradient-to-r from-[#2A2421] via-[#38302B] to-[#2A2421] text-[#FAF7F2] py-4 px-4 border-y border-[#4A3F39]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-full bg-[#C5A880] text-[#2A2421] flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif-luxury text-base sm:text-lg font-bold text-[#E8D8C8]">
                First-Time Guest Welcome Offer: <span className="text-[#C5A880]">$25 Off</span> Deluxe or Platinum Hydrafacial®
              </p>
              <p className="text-[11px] text-[#AFA297]">
                Includes complimentary custom medical-grade booster + FDA-cleared LED light therapy.
              </p>
            </div>
          </div>

          <button
            id="claim-hydrafacial-promo-btn"
            data-tracking-cta="cta_hydrafacial_claim_promo_banner"
            onClick={handlePromoClaim}
            className="shrink-0 px-6 py-2 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#2A2421] text-xs uppercase tracking-wider font-bold shadow-sm transition-colors cursor-pointer"
          >
            Claim $25 Voucher
          </button>
        </div>
      </section>

      {/* 3. Patented 3-Step Vortex-Fusion Process Section */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Patented Technology
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal">
              How Vortex-Fusion® Resurfaces Skin
            </h2>
            <p className="text-[#655850] text-sm sm:text-base mt-3 leading-relaxed">
              Unlike traditional abrasive microdermabrasion, Hydrafacial uses a spiral vortex tip creating a fluid vortex to vacuum out blackheads while simultaneously drenching cells in active serums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#F5EFEB] p-8 rounded-3xl border border-[#E5DAD0] relative group hover:border-[#C5A880] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2A2421] text-[#C5A880] flex items-center justify-center font-serif-luxury text-xl font-bold mb-6">
                01
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2A2421]">
                Cleanse + Peel
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B28E5E] mt-1">
                Gentle Exfoliation & Resurfacing
              </p>
              <p className="text-xs sm:text-sm text-[#5C5048] mt-3 leading-relaxed">
                Uncovers a fresh new layer of skin with gentle exfoliation and relaxing resurfacing. Non-irritating glycolic and salicylic acid blend loosens deep-seated debris.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F5EFEB] p-8 rounded-3xl border border-[#E5DAD0] relative group hover:border-[#C5A880] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2A2421] text-[#C5A880] flex items-center justify-center font-serif-luxury text-xl font-bold mb-6">
                02
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2A2421]">
                Extract + Hydrate
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B28E5E] mt-1">
                Painless Vortex Suction
              </p>
              <p className="text-xs sm:text-sm text-[#5C5048] mt-3 leading-relaxed">
                Removes debris and sebum from congested pores with painless vortex suction. Simultaneously quenches skin with intense botanical moisturizers and hyaluronic acid.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F5EFEB] p-8 rounded-3xl border border-[#E5DAD0] relative group hover:border-[#C5A880] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2A2421] text-[#C5A880] flex items-center justify-center font-serif-luxury text-xl font-bold mb-6">
                03
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#2A2421]">
                Fuse + Protect
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B28E5E] mt-1">
                Antioxidants & Peptides Saturation
              </p>
              <p className="text-xs sm:text-sm text-[#5C5048] mt-3 leading-relaxed">
                Saturates the skin’s surface with antioxidants and peptides to maximize your glow, strengthen lipid barriers, and lock in deep cellular radiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Hydrafacial Tiers Comparison Cards (Pricing & Differences clearly visible) */}
      <section className="py-20 bg-[#F5EFEB] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Treatment Tiers
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal">
              Compare Hydrafacial® Packages
            </h2>
            <p className="text-[#655850] text-sm sm:text-base mt-3 leading-relaxed">
              Find the perfect tier for your skin goals — from instant lunch-break refreshers to complete lymphatic detoxification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {HYDRAFACIAL_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-[#FAF7F2] border-2 border-[#C5A880] shadow-xl ring-4 ring-[#C5A880]/20'
                    : 'bg-[#FAF7F2] border border-[#E2D8CC] shadow-sm hover:shadow-md'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C5A880] text-[#181412] text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
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

                  <p className="text-xs sm:text-sm text-[#5C5048] mt-4 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Key Difference Highlight Box */}
                  <div className="mt-4 p-3 rounded-xl bg-[#F0E8DE] border border-[#D9CDBF] text-xs text-[#2A2421]">
                    <span className="font-bold text-[#8A673B] block mb-0.5">Key Distinction:</span>
                    {tier.keyDifference}
                  </div>

                  {/* Target Concerns */}
                  <div className="mt-4 pt-3 border-t border-[#E8DFD5]">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#75675F] mb-1.5">
                      Target Concerns:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.targetConcerns.map((tc, i) => (
                        <span key={i} className="text-[11px] bg-[#EAE0D5] text-[#4A3F39] px-2 py-0.5 rounded-md font-medium">
                          {tc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-5 pt-4 border-t border-[#E8DFD5] space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#75675F]">
                      Treatment Protocol:
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
                    id={`book-hydrafacial-${tier.id}`}
                    data-tracking-cta={tier.ctaTrackingId}
                    onClick={() => handleBookHydrafacial(tier.name, tier.ctaTrackingId)}
                    className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-bold transition-luxury cursor-pointer flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'bg-[#2A2421] text-[#FAF7F2] hover:bg-[#B28E5E] shadow-md'
                        : 'bg-[#EAE0D5] hover:bg-[#2A2421] text-[#2A2421] hover:text-[#FAF7F2]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book {tier.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hydrafacial Add-Ons & Perks Section */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Elevate Your Glow
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal">
              Hydrafacial® Perks & Targeted Add-Ons
            </h2>
            <p className="text-[#655850] text-sm mt-2">
              Customize your treatment with clinical upgrades designed for delicate lips, eyes, and neckline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HYDRAFACIAL_ADDONS.map((addon, idx) => (
              <div
                key={idx}
                className="bg-[#F5EFEB] p-6 rounded-2xl border border-[#E5DAD0] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E]">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <span className="font-serif-luxury text-xl font-bold text-[#2A2421]">
                      {addon.price}
                    </span>
                  </div>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#2A2421]">
                    {addon.name}
                  </h4>
                  <p className="text-xs text-[#655850] mt-2 leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DFD5]">
                  <span className="text-[11px] text-[#B28E5E] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Selectable during checkout
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Before & After Transformation Showcase */}
      <section className="py-20 bg-[#F5EFEB] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Visible Clinical Transformation
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal">
              Real Skin Results at Yuki
            </h2>
            <p className="text-[#655850] text-sm mt-2">
              Immediate pore refinement and deep cellular saturation captured under high magnification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BEFORE_AFTER_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E2D8CC] shadow-sm flex flex-col justify-between"
              >
                {/* Images side-by-side */}
                <div className="grid grid-cols-2 gap-1 p-2 bg-[#2A2421]">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img src={item.beforeImage} alt="Before treatment" className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-black/75 text-[#FAF7F2] text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img src={item.afterImage} alt="After treatment" className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-[#C5A880] text-[#2A2421] text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      After
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#2A2421]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8A673B] font-semibold mt-1">
                      Concern: {item.concern}
                    </p>
                    <p className="text-xs text-[#5C5048] mt-2 leading-relaxed">
                      {item.results}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8DFD5] text-[11px] text-[#75675F] flex items-center justify-between">
                    <span>{item.treatmentUsed}</span>
                    <span className="font-bold text-[#2A2421]">{item.sessions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Hydrafacial FAQ Accordion */}
      <FaqAccordion
        items={HYDRAFACIAL_FAQS}
        title="Hydrafacial® Frequently Asked Questions"
        subtitle="Clear answers about skin safety, contraindications, and maintenance rhythms"
      />

      {/* 8. Final High-Converting Bottom CTA Strip */}
      <section className="py-16 bg-[#211C19] text-[#FAF7F2] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[#C5A880] text-xs font-semibold uppercase tracking-widest">
            Instant Radiance Guaranteed
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal mt-2">
            Experience the Hydrafacial® Difference Today
          </h2>
          <p className="text-sm text-[#D5C7B8] mt-3 max-w-xl mx-auto">
            Reserve your session online via our verified GlossGenius portal or speak directly with our Pasadena concierge.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              id="hydrafacial-bottom-book-cta"
              data-tracking-cta="cta_hydrafacial_bottom_book_now"
              onClick={() => handleBookHydrafacial('Deluxe Hydrafacial', 'cta_hydrafacial_bottom_book_now')}
              className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#211C19] text-xs uppercase tracking-widest font-bold shadow-lg transition-luxury cursor-pointer"
            >
              Book Deluxe Hydrafacial
            </button>
            <a
              id="hydrafacial-bottom-call-cta"
              data-tracking-cta="cta_hydrafacial_bottom_call"
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
