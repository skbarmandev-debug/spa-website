import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

interface FaqAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about your sanctuary experience'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Clarity & Guidance
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2A2421] font-normal">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#655850] text-sm mt-2 max-w-lg mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F5EFEB] rounded-xl border border-[#E5DAD0] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2A2421] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D5C7B8] flex items-center justify-center text-[#B28E5E] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E8DC CE]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#5C5048] leading-relaxed border-t border-[#E8DFD5] animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
