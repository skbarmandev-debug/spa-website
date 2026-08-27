import React from 'react';
import { Sparkles, Droplets, Flame, Flower2, Sun, HeartHandshake, ShieldCheck, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_PILLARS } from '../data/spaData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
  Droplet: <Droplets className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Flower2: <Flower2 className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />
};

export const WhyChooseYuki: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5EFEB] border-y border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B28E5E] text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            The Yuki Experience Standard
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#2A2421] font-normal tracking-tight">
            Why Choose Yuki Luxury Headspa
          </h2>
          <p className="text-[#655850] text-sm sm:text-base mt-3 leading-relaxed">
            Where holistic Japanese scalp traditions and medical-grade skincare innovation converge in an atmosphere of unhurried calm.
          </p>
        </div>

        {/* 8-Pillar Sensory Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#E5DAD0] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Sensory Detail Photography Thumbnail */}
              <div className="relative h-40 w-full overflow-hidden bg-[#2A2421]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Subtle Floating Icon Badge */}
                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#C5A880]/50 flex items-center justify-center text-[#B28E5E] shadow-sm">
                  {iconMap[pillar.iconName] || <Sparkles className="w-4 h-4" />}
                </div>
              </div>

              {/* Copy */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#2A2421] group-hover:text-[#B28E5E] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6B5E57] mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
