import React, { useState } from 'react';
import { X, Calendar, Phone, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spaData';
import { trackCtaClick } from '../utils/analytics';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onCompleteReservation?: (data: BookingFormData) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Japanese Head Spa',
  onCompleteReservation
}) => {
  const [activeTab, setActiveTab] = useState<'instant' | 'concierge'>('instant');
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceCategory: initialService || 'Japanese Head Spa',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    concernsOrNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleLaunchGlossGenius = () => {
    trackCtaClick('cta_modal_glossgenius_external', {
      ctaName: 'GlossGenius Direct Portal Launch',
      ctaCategory: 'booking',
      location: 'booking_modal',
      targetUrl: BUSINESS_INFO.bookingUrl,
      serviceInterest: formData.serviceCategory
    });
    window.open(BUSINESS_INFO.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackCtaClick('cta_modal_concierge_request_submit', {
      ctaName: 'Concierge Booking Inquiry Submit',
      ctaCategory: 'contact_form',
      location: 'booking_modal_form',
      serviceInterest: formData.serviceCategory
    });

    setTimeout(() => {
      setIsSubmitting(false);
      if (onCompleteReservation) {
        onCompleteReservation(formData);
      }
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF7F2] w-full max-w-xl rounded-2xl shadow-2xl border border-[#D5C7B8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Luxury Brand Accent */}
        <div className="bg-[#2A2421] text-[#FAF7F2] px-6 py-5 flex items-center justify-between border-b border-[#3E3430]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3E3430] border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880] font-serif-luxury font-bold">
              雪
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold tracking-wide">
                Reserve Your Yuki Experience
              </h3>
              <p className="text-xs text-[#C5A880] font-sans-clean">
                Pasadena, MD • Japanese Scalp & Advanced Skincare
              </p>
            </div>
          </div>
          
          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="text-[#AFA297] hover:text-[#FAF7F2] p-1.5 rounded-full hover:bg-[#3E3430] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector: Instant GlossGenius vs Concierge Inquiry */}
        <div className="flex border-b border-[#E2D8CC] bg-[#F2EAE0]">
          <button
            id="tab-instant-booking-btn"
            onClick={() => setActiveTab('instant')}
            className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'instant'
                ? 'bg-[#FAF7F2] text-[#2A2421] border-b-2 border-[#C5A880]'
                : 'text-[#6B5E57] hover:text-[#2A2421]'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#B28E5E]" />
            <span>Instant Online Booking</span>
          </button>
          <button
            id="tab-concierge-request-btn"
            onClick={() => setActiveTab('concierge')}
            className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'concierge'
                ? 'bg-[#FAF7F2] text-[#2A2421] border-b-2 border-[#C5A880]'
                : 'text-[#6B5E57] hover:text-[#2A2421]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#B28E5E]" />
            <span>Concierge Inquiry</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {activeTab === 'instant' ? (
            <div className="space-y-5 text-center">
              <div className="w-16 h-16 rounded-full bg-[#EFE7DE] border border-[#C5A880] mx-auto flex items-center justify-center text-[#B28E5E]">
                <Calendar className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-serif-luxury text-2xl text-[#2A2421] font-semibold">
                  Live Appointment Schedule
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E57] mt-1.5 max-w-md mx-auto leading-relaxed">
                  View real-time availability, select your preferred specialist, and instantly confirm your Japanese Head Spa, Hydrafacial®, or facial treatment.
                </p>
              </div>

              <div className="bg-[#F5EFEB] p-4 rounded-xl border border-[#E2D8CC] text-left text-xs space-y-2">
                <div className="flex items-center justify-between text-[#2A2421] font-medium pb-2 border-b border-[#E2D8CC]">
                  <span>Location:</span>
                  <span className="font-semibold">{BUSINESS_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center justify-between text-[#2A2421] font-medium pb-2 border-b border-[#E2D8CC]">
                  <span>Hours:</span>
                  <span className="font-semibold">{BUSINESS_INFO.hours}</span>
                </div>
                <div className="flex items-center justify-between text-[#2A2421] font-medium">
                  <span>Direct Phone:</span>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#B28E5E] hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  id="modal-launch-glossgenius-btn"
                  data-tracking-cta="cta_modal_open_glossgenius"
                  onClick={handleLaunchGlossGenius}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-luxury cursor-pointer"
                >
                  <span>Open GlossGenius Booking Portal</span>
                  <ExternalLink className="w-4 h-4 text-[#E8D8C8]" />
                </button>

                <p className="text-[11px] text-[#8C7D73]">
                  Prefer to speak with a concierge? Call{' '}
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#2A2421] hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConciergeSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(410) 000-0000"
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@example.com"
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1">
                  Service Interested In *
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors cursor-pointer"
                >
                  <option value="Signature Japanese Head Spa ($165)">Signature Japanese Head Spa ($165)</option>
                  <option value="Deluxe Japanese Head Spa ($210)">Deluxe Japanese Head Spa ($210)</option>
                  <option value="Imperial Herbal Halo Head Spa ($265)">Imperial Herbal Halo Head Spa ($265)</option>
                  <option value="Signature Hydrafacial ($199)">Signature Hydrafacial ($199)</option>
                  <option value="Deluxe Hydrafacial with Booster ($265)">Deluxe Hydrafacial with Booster ($265)</option>
                  <option value="Platinum Hydrafacial ($330)">Platinum Hydrafacial with Lymphatic ($330)</option>
                  <option value="Seoul Glow Korean Glass Facial ($225)">Seoul Glow Korean Glass Facial ($225)</option>
                  <option value="Cashmere Body Glow Ritual ($245)">Cashmere Body Glow Ritual ($245)</option>
                  <option value="Zen Harmony Head & Facial Combo ($295)">Zen Harmony Head & Facial Combo ($295)</option>
                  <option value="The Pasadena Royal Day Retreat ($420)">The Pasadena Royal Day Retreat ($420)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM - 6:00 PM)</option>
                    <option value="First Available Slot">First Available Slot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3F39] mb-1">
                  Specific Scalp / Skin Concerns or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.concernsOrNotes}
                  onChange={(e) => setFormData({ ...formData, concernsOrNotes: e.target.value })}
                  placeholder="e.g. Dry scalp tension, upcoming wedding, sensitivity..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-white border border-[#D5C7B8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                id="modal-submit-request-btn"
                data-tracking-cta="cta_modal_submit_concierge_request"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#2A2421] hover:bg-[#B28E5E] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md transition-luxury cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Reservation Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
