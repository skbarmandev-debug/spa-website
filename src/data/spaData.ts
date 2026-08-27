import {
  ServicePillar,
  HeadSpaTreatment,
  HydrafacialTier,
  TreatmentItem,
  WhyChoosePillar,
  Testimonial,
  FAQItem,
  BeforeAfterItem
} from '../types';

export const BUSINESS_INFO = {
  name: 'Yuki Luxury Headspa',
  legalName: 'Yuki Luxury Headspa & Skincare LLC',
  tagline: 'Luxury Japanese Head Spa & Advanced Skincare Destination',
  address: '8573 Fort Smallwood Road',
  cityStateZip: 'Pasadena, MD 21122',
  fullAddress: '8573 Fort Smallwood Road, Pasadena, MD 21122',
  phone: '(202) 670-8335',
  phoneRaw: '2026708335',
  email: 'reservations@yukiluxuryheadspa.com',
  hours: 'Monday – Sunday: 9:00 AM – 6:00 PM',
  bookingUrl: 'https://yukinaing.glossgenius.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  googleMapsUrl: 'https://maps.google.com/?q=8573+Fort+Smallwood+Road,+Pasadena,+MD+21122'
};

export const THREE_SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'japanese-head-spa',
    title: 'Japanese Head Spa',
    subtitle: 'Signature Holistic Scalp Rituals',
    tagline: 'Deep Follicle Detox, Herbal Waterfall Halo & Acupressure',
    description: 'Our signature Japanese Head Spa combines micro-camera scalp diagnostic scans, organic botanical cleansing, soothing waterfall halo hydrotherapy, and pressure-point massage on heated ergonomic beds.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    path: 'head-spa',
    startingPrice: '$165',
    duration: '60 – 90 Mins',
    highlights: [
      'Micro-camera scalp & follicle analysis',
      'Continuous herbal waterfall halo hydrotherapy',
      'Ergonomic heated massage beds & organic steam',
      'Medical-grade Red Light follicle rejuvenation'
    ],
    ctaText: 'Explore Head Spa',
    ctaTrackingId: 'btn_hero_explore_headspa'
  },
  {
    id: 'hydrafacial',
    title: 'Hydrafacial®',
    subtitle: 'Advanced Medical-Grade Skin Glow',
    tagline: 'Patented Vortex-Fusion® Cleansing, Extraction & Hydration',
    description: 'A revolutionary non-invasive resurfacing treatment delivering instant glass-skin radiance. Patented 3-step Vortex-Fusion deeply decongests pores and saturates the skin with peptides, hyaluronic acid, and tailored boosters.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    path: 'hydrafacial',
    startingPrice: '$199',
    duration: '30 – 75 Mins',
    highlights: [
      'Zero downtime with instant glass-skin glow',
      'Painless suction extraction of impurities & sebum',
      'Custom targeted boosters for pigmentation & aging',
      'Includes LED Light Therapy & lymphatic drainage'
    ],
    ctaText: 'Explore Hydrafacial',
    ctaTrackingId: 'btn_hero_explore_hydrafacial'
  },
  {
    id: 'facial-body',
    title: 'Facial & Body Treatments',
    subtitle: 'Couture Skincare & Sensory Body Rituals',
    tagline: 'Featuring the Seoul Glow Facial & Cashmere Body Glow Ritual',
    description: 'Bespoke aesthetic therapies engineered for cellular renewal and profound sensory relaxation. Experience our coveted Seoul Glow Facial for glass skin or surrender to the decadent Cashmere Body Glow Ritual.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85',
    path: 'treatments',
    startingPrice: '$150',
    duration: '60 – 120 Mins',
    highlights: [
      'Seoul Glow Facial: Korean Glass-Skin cryo-protocol',
      'Cashmere Body Glow Ritual: Botanical sugar polish & hot stones',
      'Targeted anti-aging peptide & enzyme infusions',
      'Customized organic essential oil aromatherapies'
    ],
    ctaText: 'Explore Treatments',
    ctaTrackingId: 'btn_hero_explore_treatments'
  }
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    id: 'pillar-headspa',
    title: 'Japanese Head Spa Experiences',
    description: 'Authentic Japanese scalp rituals blending centuries-old meridian acupressure with modern waterfall hydrotherapy.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    iconName: 'Sparkles'
  },
  {
    id: 'pillar-personalized',
    title: 'Personalized Scalp & Skincare',
    description: 'Every session begins with high-magnification diagnostics to formulate custom botanical blends for your exact needs.',
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=600&q=80',
    iconName: 'UserCheck'
  },
  {
    id: 'pillar-hydrafacial',
    title: 'Medical-Grade Hydrafacial®',
    description: 'Certified practitioners using authentic Vortex-Fusion technology for painless extractions and deep serum saturation.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    iconName: 'Droplet'
  },
  {
    id: 'pillar-beds',
    title: 'Luxury Heated Massage Beds',
    description: 'Sink into ergonomically contoured, climate-warmed memory-foam beds designed to relieve spinal pressure.',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80',
    iconName: 'Flame'
  },
  {
    id: 'pillar-aromatherapy',
    title: 'Pure Organic Aromatherapy',
    description: 'Artisan distilled Japanese hinoki cypress, yuzu, lavender, and eucalyptus oils calming the central nervous system.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    iconName: 'Flower2'
  },
  {
    id: 'pillar-redlight',
    title: 'Clinical Red Light Therapy',
    description: 'FDA-cleared 633nm wavelengths stimulate dormant hair follicles, accelerate cellular collagen, and reduce inflammation.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80',
    iconName: 'Sun'
  },
  {
    id: 'pillar-sanctuary',
    title: 'Serene Japanese Spa Environment',
    description: 'An unhurried boutique wellness sanctuary free from clinical coldness—natural stone, warm wood, and gentle water soundscapes.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    iconName: 'HeartHandshake'
  },
  {
    id: 'pillar-dual-focus',
    title: 'Relaxation Meets Clinical Results',
    description: 'We reject the compromise between pampering and efficacy; you leave completely rejuvenated with visibly glowing skin and hair.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b9355152?auto=format&fit=crop&w=600&q=80',
    iconName: 'ShieldCheck'
  }
];

export const HEAD_SPA_TREATMENTS: HeadSpaTreatment[] = [
  {
    id: 'signature-head-spa',
    name: 'Signature Japanese Head Spa',
    tagline: 'The Essential Scalp & Mind Restoration',
    duration: '60 Minutes',
    price: '$165',
    description: 'An immersive introduction to Japanese scalp wellness. Perfect for relieving tension, clarifying sebum buildup, and restoring healthy follicle circulation.',
    includes: [
      'Micro-camera scalp & follicle diagnostic analysis',
      'Botanical pre-cleanse & gentle scalp exfoliation',
      'Continuous waterfall halo hydrotherapy soak',
      'Japanese meridian acupressure scalp massage',
      'Organic hair mask with warm botanical steam',
      'Neck & shoulder tension release',
      'Quick blow-dry finish'
    ],
    sensoryFeatures: [
      'Warm waterfall halo hydrotherapy',
      'Lavender & eucalyptus steam',
      'Heated ergonomic treatment bed'
    ],
    ctaTrackingId: 'btn_book_signature_headspa'
  },
  {
    id: 'deluxe-head-spa',
    name: 'Deluxe Japanese Head Spa & Scalp Detox',
    tagline: 'Our Most Popular Scalp Rejuvenation',
    duration: '75 Minutes',
    price: '$210',
    isPopular: true,
    badge: 'Client Favorite',
    description: 'A deeper, elevated scalp ritual featuring custom exfoliating mask, extended cervical acupressure, ultrasonic scalp therapy, and collagen infusion.',
    includes: [
      'Comprehensive before & after scalp camera comparison',
      'Enzymatic deep scalp scrub & detoxifying cleanse',
      'Signature waterfall halo hydrotherapy with herbal infusion',
      'Extended 25-minute neck, shoulder & scalp acupressure',
      'Ultrasonic infusion of nourishing scalp ampoule',
      'Thermal botanical steam & deep conditioning mask',
      'Red Light Therapy scalp follicle stimulation',
      'Full styling blowout'
    ],
    sensoryFeatures: [
      'Herbal infused waterfall halo',
      'FDA-cleared Red Light canopy',
      'Yuzu & Hinoki aromatherapy blend',
      'Heated jade stone neck contour'
    ],
    ctaTrackingId: 'btn_book_deluxe_headspa'
  },
  {
    id: 'imperial-head-spa',
    name: 'Imperial Herbal Halo & Red Light Ritual',
    tagline: 'The Ultimate Head Spa & Upper Body Transcendence',
    duration: '90 Minutes',
    price: '$265',
    badge: 'Signature Luxury',
    description: 'The pinnacle of Japanese scalp pampering. Combines our complete head spa protocol with targeted facial acupressure, hand/arm massage, and specialized hair gloss treatment.',
    includes: [
      'In-depth scalp health consultation & magnified imaging',
      'Triple-phase custom scalp exfoliation & peptide cleanse',
      'Signature warm waterfall halo hydrotherapy immersion',
      '35-minute scalp, neck, shoulder, decollete & hand massage',
      'Deep restorative hair glaze & keratin-repair treatment',
      'Extended Red Light therapy with botanical steam bath',
      'Gentle soothing mini facial cleanse & hydrating mist',
      'Post-treatment hair blow-dry & finishing serum'
    ],
    sensoryFeatures: [
      'Multi-angle waterfall halo hydrotherapy',
      'Rose quartz eye mask & heated shoulder wrap',
      'Custom essential oil blend tailored to mood',
      'Private acoustic soundscape & tea ceremony finale'
    ],
    ctaTrackingId: 'btn_book_imperial_headspa'
  }
];

export const HYDRAFACIAL_TIERS: HydrafacialTier[] = [
  {
    id: 'signature-hydrafacial',
    name: 'Signature Hydrafacial®',
    duration: '30 Minutes',
    price: '$199',
    description: 'The essential 3-step resurfacing treatment. Deeply cleanses, gently extracts pores with Vortex-Fusion suction, and saturates the skin with intensive antioxidants, peptides, and hyaluronic acid.',
    targetConcerns: ['Dull skin', 'Congested pores', 'Dehydration', 'General maintenance'],
    includes: [
      'Step 1: Cleanse + Peel (gentle exfoliation & relaxing resurfacing)',
      'Step 2: Extract + Hydrate (painless vortex suction & intense moisturizers)',
      'Step 3: Fuse + Protect (saturate surface with antioxidants and peptides)',
      'Finishing SPF & nourishing barrier cream'
    ],
    keyDifference: 'Essential maintenance for an instant, radiant boost with zero downtime.',
    ctaTrackingId: 'btn_book_hydrafacial_signature'
  },
  {
    id: 'deluxe-hydrafacial',
    name: 'Deluxe Hydrafacial®',
    duration: '50 Minutes',
    price: '$265',
    isPopular: true,
    badge: 'Most Popular',
    description: 'An invigorating treatment that includes all the essentials of the Signature while addressing specific skin concerns with a personalized Booster Serum and professional LED Light Therapy.',
    targetConcerns: ['Hyperpigmentation', 'Fine lines & wrinkles', 'Loss of elasticity', 'Active acne & redness'],
    includes: [
      'All Signature Hydrafacial steps (Cleanse, Extract, Hydrate)',
      'Choice of targeted Booster (Brightenol, Dermabuilder, or Clarifying)',
      'Medical-grade LED Light Therapy (Red for collagen / Blue for acne)',
      'Relaxing neck & decollete lymphatic massage',
      'Personalized finishing serums & hydration seal'
    ],
    keyDifference: 'Includes targeted medical-grade booster serum + FDA-cleared LED light therapy.',
    ctaTrackingId: 'btn_book_hydrafacial_deluxe'
  },
  {
    id: 'platinum-hydrafacial',
    name: 'Platinum Hydrafacial®',
    duration: '75 Minutes',
    price: '$330',
    badge: 'The Ultimate Glow',
    description: 'The complete luxury Hydrafacial experience. Begins the detoxification process with soothing Lymphatic Drainage, followed by the Signature steps, customized booster, LED therapy, and delicate Perk enhancement.',
    targetConcerns: ['Advanced aging', 'Facial puffiness & fluid retention', 'Uneven texture', 'Tired eye/lip contour'],
    includes: [
      'Mechanical Lymphatic Drainage to detoxify & contour',
      'Complete Signature 3-step Vortex-Fusion deep cleanse & extraction',
      'Premium specialty booster vial tailored to clinical skin needs',
      'Extended Red and Blue LED light rejuvenation',
      'Lip Perk or Eye Perk delicate contour treatment + take-home serum',
      'Sculpting face, neck, shoulder and décolleté massage',
      'Chilled cryo-globe lymphatic sealing'
    ],
    keyDifference: 'Full mechanical lymphatic drainage + custom booster + LED + Lip/Eye Perk + cryo seal.',
    ctaTrackingId: 'btn_book_hydrafacial_platinum'
  }
];

export const HYDRAFACIAL_ADDONS = [
  {
    name: 'Hydrafacial Lip Perk™',
    price: '$50',
    description: 'Exfoliates and smooths lips with peppermint oil and hyaluronic acid; includes a 30-day take-home serum vial.',
    icon: 'Sparkles'
  },
  {
    name: 'Hydrafacial Eye Perk™',
    price: '$50',
    description: 'Brightens and tones the delicate under-eye area using green tea extract; includes 30-day home serum.',
    icon: 'Eye'
  },
  {
    name: 'Neck & Décolleté Extension',
    price: '$95',
    description: 'Extend the full cleansing, exfoliation, booster, and hydration ritual downward to firm neck and chest skin.',
    icon: 'Layers'
  },
  {
    name: 'Keravive™ Scalp Health Booster',
    price: '$125',
    description: 'Vortex-cleanses hair follicles and delivers proprietary biomimetic growth factors directly into the scalp.',
    icon: 'Flower2'
  }
];

export const ALL_TREATMENTS: TreatmentItem[] = [
  {
    id: 'seoul-glow-facial',
    name: 'Seoul Glow Facial (Korean Glass Skin)',
    category: 'facial',
    isFlagship: true,
    badge: 'Flagship Skincare',
    duration: '75 Minutes',
    price: '$225',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85',
    shortDescription: 'Our signature Korean Glass Skin facial protocol engineered for unmatched dewiness, pore refinement, and luminous clarity.',
    fullDescription: 'Inspired by the sophisticated aesthetic rituals of Gangnam, Seoul. This multi-phase facial incorporates double oil cleansing, gentle enzyme polishing, ultrasonic ampoule infusion, cryo-sculpting globes, custom hydro-jelly mask, and Red Light therapy for reflective glass skin.',
    highlights: [
      'Multi-step double botanical oil & foam cleansing',
      'Micro-exfoliating fermented rice & enzyme peeling',
      'Cryo-globe sculpting massage to tighten pores and soothe redness',
      'High-potency multi-peptide & centella asiatica ampoule infusion',
      'Custom formulated botanical hydro-jelly occlusion mask',
      'Medical Red Light collagen stimulation'
    ],
    idealFor: 'Anyone seeking luminous Korean glass skin, intense hydration, pore tightening, and wedding/event readiness.',
    ctaTrackingId: 'btn_book_seoul_glow_facial'
  },
  {
    id: 'cashmere-body-glow-ritual',
    name: 'Cashmere Body Glow Ritual',
    category: 'body',
    isFlagship: true,
    badge: 'Signature Body Ritual',
    duration: '90 Minutes',
    price: '$245',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85',
    shortDescription: 'A decadent full-body botanical sugar polish, warm oil infusion, hot basalt stone melt, and cashmere silk soufflé wrap.',
    fullDescription: 'Surrender every sense to pure luxury. We begin with gentle body dry brushing to awaken lymphatic pathways, followed by an artisanal whipped brown sugar and vanilla bean polish. Melt away tension with smooth hot basalt stones before being enveloped in a warmed cashmere silk body soufflé.',
    highlights: [
      'Lymphatic awakening body dry brushing',
      'Exfoliating whipped sugar & botanical butter body polish',
      'Warm rain shower rinse & hot towel compression',
      'Deeply relaxing hot basalt stone back and shoulder massage',
      'Hydrating cashmere silk & shea body soufflé envelope wrap',
      'Sublime scalp acupressure during wrap relaxation'
    ],
    idealFor: 'Full-body relaxation, dry or sun-fatigued skin, silky smoothness, and profound stress relief.',
    ctaTrackingId: 'btn_book_cashmere_body_glow'
  },
  {
    id: 'zen-harmony-head-facial-combo',
    name: 'Zen Harmony Head & Facial Combo',
    category: 'combination',
    isFlagship: true,
    badge: 'Ultimate Retreat',
    duration: '105 Minutes',
    price: '$295',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
    shortDescription: 'The supreme harmony of our Deluxe Japanese Head Spa with a customized Hydrating Glow Facial on heated massage beds.',
    fullDescription: 'Why choose between scalp bliss and luminous skin? Experience the ultimate multi-sensory treatment combining full scalp analysis, waterfall halo hydrotherapy, acupressure, followed seamlessly by custom facial deep cleansing, lymphatic face massage, and hydro-jelly mask.',
    highlights: [
      'Deluxe Japanese Head Spa with waterfall halo',
      'Micro-camera scalp and skin analysis',
      'Customized brightening and hydrating mini facial',
      'Red Light therapy simultaneously for scalp & complexion',
      'Hot stone neck & décolleté tension melt'
    ],
    idealFor: 'The complete reset: total mind-body calm combined with glowing complexion and silky revived hair.',
    ctaTrackingId: 'btn_book_zen_harmony_combo'
  },
  {
    id: 'radiance-vitamin-c-facial',
    name: 'Yuki Radiance Botanical Facial',
    category: 'facial',
    duration: '60 Minutes',
    price: '$165',
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b9355152?auto=format&fit=crop&w=900&q=85',
    shortDescription: 'A brightening organic facial packed with active Vitamin C, green tea polyphenols, and sculpting lymphatic massage.',
    fullDescription: 'Customized for sensitive and dull skin types. Uses cold-pressed botanical oils, gentle ultrasonic cleansing, antioxidant serum infusions, and firming facial massage techniques to restore natural vibrancy.',
    highlights: [
      'Ultrasonic deep pore clarification',
      'Triple Vitamin C & niacinamide brightening ampoule',
      'Firming facial contour massage',
      'Algae soothing mask with rosewater compress'
    ],
    idealFor: 'Tired, sun-exposed skin, uneven skin tone, and natural organic beauty enthusiasts.',
    ctaTrackingId: 'btn_book_radiance_facial'
  },
  {
    id: 'detox-volcanic-back-ritual',
    name: 'Detoxifying Japanese Back Ritual',
    category: 'body',
    duration: '60 Minutes',
    price: '$155',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=85',
    shortDescription: 'Deep cleansing, steam exfoliation, volcanic clay mask, and hot stone therapy for the hard-to-reach back area.',
    fullDescription: 'A clarifying and deeply comforting back treatment. Includes deep steam cleansing, bamboo micro-scrub, gentle extractions if needed, warm mineral-rich volcanic mud wrap, and restorative hot stone massage.',
    highlights: [
      'Deep steam cleansing & bamboo exfoliation',
      'Targeted pore clarification and extractions',
      'Warm volcanic thermal clay mask',
      'Restorative hot stone back massage'
    ],
    idealFor: 'Back acne, tension buildup along spine and shoulders, smooth skin before backless attire.',
    ctaTrackingId: 'btn_book_back_ritual'
  },
  {
    id: 'the-pasadena-royal-retreat',
    name: 'The Pasadena Royal Day Retreat',
    category: 'combination',
    duration: '150 Minutes',
    price: '$420',
    badge: 'VIP Full Day',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85',
    shortDescription: 'Our flagship 2.5 hour journey: Imperial Head Spa + Deluxe Hydrafacial + Cashmere Stone Massage.',
    fullDescription: 'The pinnacle of private luxury. An uninterrupted, bespoke wellness journey curated to completely revive your mind, body, scalp, and skin. Includes complimentary herbal tea ceremony, champagne or sparkling infused water.',
    highlights: [
      'Full Imperial Japanese Waterfall Head Spa (90 min)',
      'Complete Deluxe Hydrafacial with custom booster & LED',
      'Targeted Hot Basalt Stone tension release',
      'Private suite exclusivity & complimentary refreshments'
    ],
    idealFor: 'Milestone celebrations, bridal prep, anniversaries, or the ultimate self-care investment.',
    ctaTrackingId: 'btn_book_royal_retreat'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    clientName: 'Amanda S.',
    location: 'Severna Park, MD',
    treatment: 'Imperial Japanese Head Spa',
    rating: 5,
    quote: 'The waterfall halo hydrotherapy was the most peaceful sensation I have ever experienced. My scalp feels completely weightless, my hair hasn\'t been this shiny in years, and the heated bed felt like sleeping on a cloud. A true Japanese sanctuary right here in Pasadena.',
    verified: true,
    date: 'February 2025'
  },
  {
    id: 'rev-2',
    clientName: 'Dr. Rachel M.',
    location: 'Annapolis, MD',
    treatment: 'Deluxe Hydrafacial® & Seoul Glow',
    rating: 5,
    quote: 'I have had Hydrafacials all over DC and Baltimore, but Yuki\'s attention to detail, the lymphatic massage, and the custom booster took my skin to another level. Zero redness—just immediate, jaw-dropping glass skin. Booking my monthly visits now!',
    verified: true,
    date: 'January 2025'
  },
  {
    id: 'rev-3',
    clientName: 'Elena K.',
    location: 'Pasadena, MD',
    treatment: 'Cashmere Body Glow Ritual',
    rating: 5,
    quote: 'The boutique experience here is unmatched. From the subtle hinoki scent when you walk in to the hot stones and cashmere wrap, every minute felt intentional and luxurious. You leave feeling completely renewed.',
    verified: true,
    date: 'February 2025'
  },
  {
    id: 'rev-4',
    clientName: 'Marcus T.',
    location: 'Gibson Island, MD',
    treatment: 'Signature Japanese Head Spa',
    rating: 5,
    quote: 'As someone who carries all their stress in their neck and head, this was life changing. The scalp camera showed such a dramatic before and after. The pressure point massage melted away months of tension. Highly recommend!',
    verified: true,
    date: 'December 2024'
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Hydrafacial Glass Skin & Pore Refining',
    concern: 'Congested Pores & Textured T-Zone',
    treatmentUsed: 'Deluxe Hydrafacial with Clarifying Booster',
    sessions: '1 Single Session',
    results: '98% visible reduction in blackheads and instant reflective hydration with zero downtime.',
    beforeImage: 'https://images.unsplash.com/photo-1512290900672-1f55b9355152?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ba-2',
    title: 'Japanese Head Spa Follicle Clarification',
    concern: 'Dry Flaking & Sebum Buildup at Root',
    treatmentUsed: 'Signature Japanese Head Spa with Botanical Steam',
    sessions: 'Immediate Micro-Camera Result',
    results: 'Unclogged follicle orifices, stimulated microcirculation, and restored lipid barrier balance.',
    beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ba-3',
    title: 'Seoul Glow Korean Glass Radiance',
    concern: 'Dull Complexion & Fine Expression Lines',
    treatmentUsed: 'Seoul Glow Facial with Cryo-Sculpt & Red Light',
    sessions: '1 Session',
    results: 'Plumped dermis, tightened skin barrier, and a lasting luminous dewy glass finish.',
    beforeImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80'
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can easily reserve your appointment online 24/7 through our direct GlossGenius booking portal (click any "Book Now" button), or call our concierge desk directly at (202) 670-8335 for personalized reservation assistance.',
    category: 'general'
  },
  {
    question: 'Where is Yuki Luxury Headspa located?',
    answer: 'We are conveniently located at 8573 Fort Smallwood Road, Pasadena, MD 21122, with dedicated complimentary private parking for all spa guests.',
    category: 'general'
  },
  {
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We kindly request at least 24 hours notice for any cancellations or schedule adjustments to allow us to offer that dedicated sanctuary time to other guests on our waitlist.',
    category: 'general'
  }
];

export const HEAD_SPA_FAQS: FAQItem[] = [
  {
    question: 'What happens during a Japanese Head Spa treatment?',
    answer: 'Your ritual begins with a high-magnification micro-camera scalp diagnostic scan. You will then lie back onto our heated memory-foam bed where your scalp will undergo deep botanical cleansing, exfoliating scrub, meridian acupressure massage, waterfall halo hydrotherapy immersion, aromatic botanical steaming, and medical-grade Red Light therapy.',
    category: 'headspa'
  },
  {
    question: 'Will my hair be wet when I leave?',
    answer: 'All of our Head Spa rituals include a complimentary gentle blow-dry finish so you leave comfortable and refreshed. If you have chosen our Deluxe or Imperial rituals, a full styling blowout is included.',
    category: 'headspa'
  },
  {
    question: 'Is a Japanese Head Spa suitable for colored or treated hair?',
    answer: 'Yes! We use pH-balanced, sulfate-free organic Japanese formulas that are completely safe for color-treated hair, keratin treatments, and sensitive scalps. Please notify your specialist if you have tape-in extensions.',
    category: 'headspa'
  },
  {
    question: 'How often should I get a Japanese Head Spa?',
    answer: 'For optimal scalp health and follicle rejuvenation, we recommend monthly visits (every 4–6 weeks) in alignment with your natural epidermal cellular turnover cycle.',
    category: 'headspa'
  }
];

export const HYDRAFACIAL_FAQS: FAQItem[] = [
  {
    question: 'Is there any downtime after a Hydrafacial?',
    answer: 'None at all! You will walk out of Yuki Luxury Headspa with immediate glass-skin luminosity. You can apply makeup immediately or simply enjoy your bare, radiant glow.',
    category: 'hydrafacial'
  },
  {
    question: 'What is the difference between Signature, Deluxe, and Platinum?',
    answer: 'The Signature is the core 30-minute 3-step Vortex cleanse, extract, and hydrate. The Deluxe (50 min) adds a custom medical-grade booster serum for targeted pigmentation/wrinkles and professional LED Light Therapy. The Platinum (75 min) is our ultimate treatment that adds mechanical Lymphatic Drainage to detoxify puffiness plus Lip or Eye Perk enhancements.',
    category: 'hydrafacial'
  },
  {
    question: 'Can I get a Hydrafacial if I have sensitive or acne-prone skin?',
    answer: 'Absolutely. Hydrafacial is famous for being customizable to even the most reactive skin types. Our specialists adjust the vacuum intensity and choose gentle salicylic or peptide infusions specifically tailored to soothe redness and clear congestion without irritation.',
    category: 'hydrafacial'
  }
];
