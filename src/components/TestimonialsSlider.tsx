import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/spaData';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto rotate slowly
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Guest Reflections
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal">
            Praise From Our Sanctuary Guests
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
            ))}
            <span className="text-xs font-semibold text-[#5A4D46] ml-2">
              5.0 Star Verified Spa Experiences
            </span>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-[#F5EFEB] rounded-2xl p-8 sm:p-12 border border-[#E5DAD0] shadow-sm">
          <Quote className="w-12 h-12 text-[#D9C7B6]/60 absolute top-6 left-6" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="font-serif-luxury text-xl sm:text-2xl md:text-2xl text-[#2A2421] italic leading-relaxed min-h-[120px] flex items-center justify-center">
              "{currentReview.quote}"
            </p>

            {/* Client Metadata */}
            <div className="mt-8 pt-6 border-t border-[#E0D4C8] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="font-sans-clean font-bold text-sm text-[#2A2421] flex items-center gap-1.5">
                {currentReview.clientName}
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B28E5E]" />
              </span>
              <span className="hidden sm:inline text-[#B5A599]">•</span>
              <span className="text-xs text-[#75675F]">
                {currentReview.location}
              </span>
              <span className="hidden sm:inline text-[#B5A599]">•</span>
              <span className="text-xs text-[#B28E5E] font-medium bg-[#EAE0D5] px-2.5 py-0.5 rounded-full">
                {currentReview.treatment}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between absolute inset-y-0 left-2 right-2 pointer-events-none">
            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="pointer-events-auto w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D5C7B8] hover:bg-[#C5A880] hover:text-white text-[#2A2421] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="pointer-events-auto w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D5C7B8] hover:bg-[#C5A880] hover:text-white text-[#2A2421] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-[#C5A880]' : 'w-2 bg-[#D5C7B8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
