export const siteConfig = {
  name: 'Adv. Demo User',
  shortName: 'Adv. Demo User',
  title: 'Advocate, High Court of Delhi',
  tagline: 'Dedicated Legal Counsel with Over Two Decades of Excellence in Indian Courts',
  description:
    'Advocate Demo User is a seasoned High Court lawyer in Delhi specializing in criminal law, civil litigation, corporate law, family law, and property disputes. Book a confidential consultation today.',
  url: 'https://advocate-portfolio-demo-opal.vercel.app',
  city: 'New Delhi',
  state: 'Delhi',
  country: 'India',
  locale: 'en_IN',

  contact: {
    phone: '+91 98765 43210',
    phoneDisplay: '+91 98765 43210',
    email: 'contact@demo-advocate.com',
    whatsapp: '919876543210',
    address: {
      street: 'Chamber No. 412, Lawyers\' Chambers Block',
      area: 'Delhi High Court, Sher Shah Road',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110003',
      country: 'India',
      full: 'Chamber No. 412, Lawyers\' Chambers Block, Delhi High Court, Sher Shah Road, New Delhi – 110003',
    },
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.123456789!2d77.2295!3d28.6109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzM5LjIiTiA3N8KwMTMnNDYuMiJF!5e0!3m2!1sen!2sin!4v1234567890',
    officeHours: [
      { days: 'Monday – Friday', hours: '10:00 AM – 6:00 PM' },
      { days: 'Saturday', hours: '10:00 AM – 2:00 PM' },
      { days: 'Sunday', hours: 'By Appointment Only' },
    ],
  },

  social: {
    linkedin: 'https://linkedin.com/in/demo-advocate',
    twitter: 'https://twitter.com/demo-advocate',
    facebook: 'https://facebook.com/demo-advocate',
  },

  barCouncil: {
    enrollmentNumber: 'D/1234/2001',
    council: 'Bar Council of Delhi',
    year: 2001,
  },

  stats: [
    { label: 'Years of Experience', value: 23, suffix: '+' },
    { label: 'Cases Handled', value: 2500, suffix: '+' },
    { label: 'Success Rate', value: 94, suffix: '%' },
    { label: 'Clients Served', value: 1800, suffix: '+' },
  ],

  images: {
    hero: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    about: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    courtroom: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80',
    portrait: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80',
    ],
  },

  usps: [
    {
      title: 'Courtroom-Proven Expertise',
      description:
        'Over two decades of active practice before the Delhi High Court, Supreme Court, and various tribunals with a consistent track record of favorable outcomes.',
      icon: 'Scale',
    },
    {
      title: 'Client-First Approach',
      description:
        'Every case receives personalized attention. I believe in transparent communication, realistic expectations, and keeping clients informed at every stage.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Strategic Legal Planning',
      description:
        'Beyond litigation, I focus on preventive legal strategies — helping clients avoid disputes through sound documentation and compliance.',
      icon: 'Target',
    },
    {
      title: 'Confidential & Ethical',
      description:
        'Attorney-client privilege is sacred. All consultations and case details are handled with the utmost confidentiality and professional ethics.',
      icon: 'Shield',
    },
  ],

  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY',
  },

  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Practice Areas', path: '/practice-areas' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Experience', path: '/experience' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],

  disclaimer: {
    storageKey: 'advocate-disclaimer-acknowledged',
    paragraphs: [
      'The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you acknowledge and confirm that you are seeking information relating to me, {name}, of your own accord and that there has been no form of solicitation, advertisement, or inducement by me.',
      'The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material or information provided here should be construed as legal advice. I shall not be liable for consequences of any action taken by relying on the material or information provided on this website.',
    ],
    acknowledgeLabel: 'I Acknowledge & Enter Website',
  },
};

export default siteConfig;
