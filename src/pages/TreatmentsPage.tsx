import React, { useState } from 'react';
import { Calendar, Phone, Sparkles, CheckCircle2, Star, ArrowRight, Heart, Droplets } from 'lucide-react';
import { BUSINESS_INFO, ALL_TREATMENTS } from '../data/spaData';
import { TreatmentItem } from '../types';
import { trackCtaClick } from '../utils/analytics';

interface TreatmentsPageProps {
  onOpenBooking: (serviceInterest?: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'facial' | 'body' | 'combination'>('all');

  const handleBook = (treatment: TreatmentItem) => {
    trackCtaClick(treatment.ctaTrackingId, {
      ctaName: `Book ${treatment.name}`,
      ctaCategory: 'booking',
      location: 'treatments_menu_grid',
      serviceInterest: treatment.name,
      targetUrl: BUSINESS_INFO.bookingUrl
    });
    onOpenBooking(treatment.name);
  };

  const filteredTreatments = filter === 'all'
    ? ALL_TREATMENTS
    : ALL_TREATMENTS.filter((t) => t.category === filter);

  const flagshipTreatments = ALL_TREATMENTS.filter((t) => t.isFlagship);

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#1F1A17] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=2000&q=90"
            alt="Facial and Body Treatments Pasadena MD"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17] via-[#1F1A17]/60 to-[#1F1A17]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A880]/50 text-[#E8D8C8] text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Couture Aesthetic Care & Sensory Rituals</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] tracking-tight">
            Facial & Body Treatments
          </h1>

          <p className="font-sans-clean text-[#D8CCC1] text-base max-w-2xl mx-auto mt-3 leading-relaxed font-light">
            Indulge in holistic Korean glass-skin protocols, deeply restorative body polishing, and combined head spa retreats engineered for pure renewal.
          </p>
        </div>
      </section>

      {/* 2. Flagship Featured Section: Seoul Glow Facial & Cashmere Body Glow Ritual */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Signatures
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal">
              Our Most Coveted Treatments
            </h2>
            <p className="text-[#655850] text-sm mt-2">
              Specifically formulated as premier standalone journeys to deliver unparalleled skin clarity and tactile bliss.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Flagship 1: Seoul Glow Facial */}
            <div className="bg-[#F5EFEB] rounded-3xl overflow-hidden border-2 border-[#C5A880] shadow-lg flex flex-col justify-between">
              <div>
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#2A2421]">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85"
                    alt="Seoul Glow Facial Korean Glass Skin"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-[#C5A880] text-[#1F1A17] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Flagship Skincare
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#E8D8C8] font-semibold">
                      Korean Glass Skin Protocol
                    </p>
                    <h3 className="font-serif-luxury text-3xl font-bold text-[#FAF7F2]">
                      Seoul Glow Facial
                    </h3>
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5DAD0]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B28E5E]">
                      75 Minutes • Intensive Cryo & Ampoule
                    </span>
                    <span className="font-serif-luxury text-3xl font-bold text-[#2A2421]">
                      $225
                    </span>
                  </div>

                  <p className="text-sm text-[#554740] leading-relaxed">
                    Inspired by the sophisticated aesthetic clinics of Gangnam, Seoul. A multi-phase facial incorporating double botanical oil cleansing, micro-exfoliating fermented rice enzymes, ultrasonic ampoule infusion, chilled cryo-sculpting globes, custom hydro-jelly mask, and Red Light therapy for reflective, porcelain glass skin.
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#3E3430]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0" />
                      <span>Cryo-globe sculpting to tighten pores and de-puff</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#3E3430]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0" />
                      <span>Centella Asiatica & multi-peptide high-potency ampoules</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#3E3430]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0" />
                      <span>Medical-grade Red Light collagen stimulation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <button
                  id="book-flagship-seoul-glow-btn"
                  data-tracking-cta="btn_book_seoul_glow_facial"
                  onClick={() => onOpenBooking('Seoul Glow Facial (Korean Glass Skin)')}
                  className="w-full py-3.5 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md transition-luxury cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Seoul Glow Facial ($225)</span>
                </button>
              </div>
            </div>

            {/* Flagship 2: Cashmere Body Glow Ritual */}
            <div className="bg-[#F5EFEB] rounded-3xl overflow-hidden border-2 border-[#C5A880] shadow-lg flex flex-col justify-between">
              <div>
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#2A2421]">
                  <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85"
                    alt="Cashmere Body Glow Ritual Hot Stone Melt"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-[#C5A880] text-[#1F1A17] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Signature Body Ritual
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#E8D8C8] font-semibold">
                      Full-Body Silk Polish & Hot Stones
                    </p>
                    <h3 className="font-serif-luxury text-3xl font-bold text-[#FAF7F2]">
                      Cashmere Body Glow Ritual
                    </h3>
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5DAD0]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B28E5E]">
                      90 Minutes • Full Body Transformation
                    </span>
                    <span className="font-serif-luxury text-3xl font-bold text-[#2A2421]">
                      $245
                    </span>
                  </div>

                  <p className="text-sm text-[#554740] leading-relaxed">
                    Surrender every sense to pure luxury. Begins with gentle body dry brushing to awaken lymphatic pathways, followed by an artisanal whipped brown sugar and vanilla bean polish. Melt away tension with smooth hot basalt stones before being enveloped in a warmed cashmere silk body soufflé.
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#3E3430]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0" />
                      <span>Whipped sugar & botanical butter exfoliation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#3E3430]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0" />
                      <span>Deeply relaxing hot basalt stone spinal massage</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#3E3430]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E] shrink-0" />
                      <span>Hydrating cashmere silk cocoon body envelope</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <button
                  id="book-flagship-cashmere-glow-btn"
                  data-tracking-cta="btn_book_cashmere_body_glow"
                  onClick={() => onOpenBooking('Cashmere Body Glow Ritual')}
                  className="w-full py-3.5 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md transition-luxury cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Cashmere Body Ritual ($245)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Services Grid with Filter Tabs (Styled like Inmmedicalspa's grid) */}
      <section className="py-20 bg-[#F5EFEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Full Spa Menu
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal">
              Explore Our Complete Treatment Catalog
            </h2>
            <p className="text-[#655850] text-sm mt-2">
              Filter by category to view our facial enhancements, full body therapies, and retreat combinations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Treatments' },
              { id: 'facial', label: 'Facial Therapies' },
              { id: 'body', label: 'Body Glow Rituals' },
              { id: 'combination', label: 'Combination Retreats' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#2A2421] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#655850] hover:bg-[#EAE0D5] border border-[#D5C7B8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E2D8CC] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#2A2421]">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 right-3 bg-[#FAF7F2]/95 px-3 py-1 rounded-full text-xs font-bold text-[#2A2421]">
                      {treatment.price} • {treatment.duration}
                    </div>

                    {treatment.badge && (
                      <div className="absolute top-3 left-3 bg-[#C5A880] text-[#1F1A17] px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">
                        {treatment.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#2A2421] group-hover:text-[#B28E5E] transition-colors leading-snug">
                      {treatment.name}
                    </h3>
                    <p className="text-xs text-[#5C5048] leading-relaxed">
                      {treatment.shortDescription}
                    </p>

                    <div className="pt-2 border-t border-[#E8DFD5] space-y-1">
                      {treatment.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#4A3F39]">
                          <CheckCircle2 className="w-3 h-3 text-[#B28E5E] shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-[#E8DFD5]">
                  <div className="pt-4 flex items-center justify-between gap-2">
                    <span className="text-xs text-[#75675F] font-medium">
                      Ideal for: {treatment.category}
                    </span>
                    <button
                      id={`book-card-${treatment.id}`}
                      data-tracking-cta={treatment.ctaTrackingId}
                      onClick={() => handleBook(treatment)}
                      className="px-4 py-2 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider transition-luxury cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
