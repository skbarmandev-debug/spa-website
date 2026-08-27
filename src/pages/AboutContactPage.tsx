import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles, Send, CheckCircle2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { trackCtaClick } from '../utils/analytics';
import { BookingFormData } from '../types';

interface AboutContactPageProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceInterest?: string) => void;
  onSubmitContactForm: (data: BookingFormData) => void;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({
  onNavigate,
  onOpenBooking,
  onSubmitContactForm
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: 'Japanese Head Spa',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    concernsOrNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackCtaClick('cta_contact_page_form_submit', {
      ctaName: 'Contact Form Submission',
      ctaCategory: 'contact_form',
      location: 'about_contact_page',
      serviceInterest: formData.serviceCategory
    });

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitContactForm(formData);
    }, 500);
  };

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. Hero Header */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-[#1D1815] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=90"
            alt="Yuki Luxury Headspa Sanctuary"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1815] via-[#1D1815]/60 to-[#1D1815]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A880]/50 text-[#E8D8C8] text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Our Heritage & Concierge Services</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] tracking-tight">
            About Yuki & Contact Us
          </h1>

          <p className="font-sans-clean text-[#D8CCC1] text-base max-w-2xl mx-auto mt-3 leading-relaxed font-light">
            Founded on the revered principles of Japanese *Omotenashi* (mindful hospitality) and clinical skincare excellence in Pasadena, Maryland.
          </p>
        </div>
      </section>

      {/* 2. Brand Story & Sanctuary Philosophy */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The Yuki Story
              </span>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal leading-tight">
                Where Japanese Scalp Artistry Meets Advanced Aesthetic Science
              </h2>

              <p className="text-[#554740] text-base leading-relaxed">
                Yuki Luxury Headspa was created to fulfill a vital need: a dedicated sanctuary where clients can escape the overstimulating pace of everyday life and experience true cellular restoration. We believe that radiant skin and healthy hair are inextricably linked to nervous system calm and proper circulation.
              </p>

              <p className="text-[#655850] text-sm leading-relaxed">
                Our founders traveled to Tokyo and Seoul to study authentic meridian scalp techniques, waterfall hydrotherapy engineering, and Korean glass-skin protocols. Today, we bring those exact elevated rituals to Pasadena, MD — outfitted with state-of-the-art heated massage beds, medical-grade Hydrafacial® systems, and botanical aromatherapies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E5DAD0]">
                  <h4 className="font-serif-luxury font-bold text-lg text-[#2A2421]">Omotenashi (おもてなし)</h4>
                  <p className="text-xs text-[#655850] mt-1">
                    Wholehearted, selfless hospitality anticipating your every comfort before you even ask.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E5DAD0]">
                  <h4 className="font-serif-luxury font-bold text-lg text-[#2A2421]">Sanctuary Purity</h4>
                  <p className="text-xs text-[#655850] mt-1">
                    Acoustically quieted suites, pure organic botanicals, and zero harsh chemicals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#D5C7B8] aspect-[4/5] bg-[#2A2421]">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85"
                  alt="Yuki Luxury Headspa Interior"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Info Block + Native Squarespace-Style Contact & Reservation Form */}
      <section className="py-20 bg-[#F5EFEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Official Business Info Block & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Sanctuary Contact
                </span>
                <h3 className="font-serif-luxury text-3xl text-[#2A2421]">
                  Connect With Our Concierge
                </h3>
                <p className="text-[#655850] text-sm mt-2">
                  We are delighted to assist you with treatment recommendations, group reservations, or custom retreat packages.
                </p>
              </div>

              {/* Verified Contact Card */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E2D8CC] shadow-xs space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2A2421]">{BUSINESS_INFO.name}</p>
                    <p className="text-[#554740]">{BUSINESS_INFO.address}</p>
                    <p className="text-[#554740]">{BUSINESS_INFO.cityStateZip}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2A2421]">Hours of Operation</p>
                    <p className="text-[#554740]">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2A2421]">Direct Phone Line</p>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#B28E5E] font-bold hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2A2421]">Email Inquiries</p>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#554740] hover:text-[#B28E5E] break-all">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Booking Portal Card */}
              <div className="bg-[#2A2421] text-[#FAF7F2] p-6 rounded-2xl border border-[#3E3430] space-y-3">
                <h4 className="font-serif-luxury text-xl font-bold text-[#E8D8C8]">
                  Prefer Instant Online Scheduling?
                </h4>
                <p className="text-xs text-[#D8CCC1]">
                  Book directly through our verified GlossGenius portal with live calendar slots.
                </p>
                <a
                  id="about-glossgenius-link"
                  data-tracking-cta="cta_about_glossgenius_direct"
                  href={BUSINESS_INFO.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A880] hover:bg-[#D4BC96] text-[#2A2421] text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open GlossGenius Portal</span>
                </a>
              </div>
            </div>

            {/* Right: Native Squarespace Style Contact & Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#E2D8CC] shadow-md">
                <div className="mb-6">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2A2421] font-normal">
                    Send a Message or Consultation Request
                  </h3>
                  <p className="text-xs sm:text-sm text-[#655850] mt-1">
                    Fill out the form below. Upon submission, you will receive an immediate confirmation and redirect.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Jessica Sterling"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(410) 555-0199"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jessica@example.com"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors cursor-pointer"
                    >
                      <option value="Japanese Head Spa">Japanese Head Spa (Signature, Deluxe, Imperial)</option>
                      <option value="Hydrafacial® MD">Hydrafacial® MD (Signature, Deluxe, Platinum)</option>
                      <option value="Seoul Glow Facial">Seoul Glow Facial (Korean Glass Skin)</option>
                      <option value="Cashmere Body Glow Ritual">Cashmere Body Glow Ritual</option>
                      <option value="Zen Harmony Head & Facial Combo">Zen Harmony Head & Facial Combo</option>
                      <option value="The Pasadena Royal Day Retreat">The Pasadena Royal Day Retreat</option>
                      <option value="General Question / Gift Cards">General Question / Gift Cards / Group Inquiries</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1.5">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1.5">
                        Preferred Time of Day
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                      >
                        <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                        <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM - 6:00 PM)</option>
                        <option value="Any Available Window">Any Available Window</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1.5">
                      Your Message or Scalp / Skin Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.concernsOrNotes}
                      onChange={(e) => setFormData({ ...formData, concernsOrNotes: e.target.value })}
                      placeholder="Please let us know any sensitivities, previous treatments, or special requests..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    data-tracking-cta="cta_contact_page_submit_button"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-luxury cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Reservation Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
