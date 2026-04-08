export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

type LocalizedText = Record<Locale, string>;

type Branch = {
  id: string;
  name: LocalizedText;
  address: LocalizedText;
  phone: string;
  mapLink: string;
  mapEmbedUrl: string;
};

type Notice = {
  id: string;
  date: string;
  title: LocalizedText;
};

type EventItem = {
  id: string;
  date: string;
  title: LocalizedText;
  detail: LocalizedText;
};

type FaqItem = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

type Faculty = {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  bio: LocalizedText;
};

type Program = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
};

export const siteCopy = {
  instituteName: {
    en: "Shariah Graduation Institute",
    bn: "শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
  },
  tagline: {
    en: "",
    bn: "",
  },
  nav: {
    home: { en: "Home", bn: "হোম" },
    about: { en: "About", bn: "আমাদের সম্পর্কে" },
    programs: { en: "Programs", bn: "প্রোগ্রামসমূহ" },
    faculty: { en: "Faculty", bn: "শিক্ষকবৃন্দ" },
    admissions: { en: "Admissions", bn: "ভর্তি" },
    notices: { en: "Notices", bn: "নোটিশ" },
    events: { en: "Events", bn: "ইভেন্ট" },
    faq: { en: "FAQ", bn: "জিজ্ঞাসা" },
    gallery: { en: "Gallery", bn: "গ্যালারি" },
    contact: { en: "Contact", bn: "যোগাযোগ" },
  },
  cta: {
    inquiry: { en: "Apply / Inquiry", bn: "আবেদন / জিজ্ঞাসা" },
    prospectus: { en: "Download Prospectus", bn: "প্রসপেক্টাস ডাউনলোড" },
    whatsapp: { en: "Chat on WhatsApp", bn: "হোয়াটসঅ্যাপে যোগাযোগ" },
  },
  footer: {
    rights: {
      en: "All rights reserved.",
      bn: "সর্বস্বত্ব সংরক্ষিত।",
    },
  },
} as const;

export const branches: Branch[] = [
  {
    id: "ctg",
    name: { en: "Chattogram Campus", bn: "চট্টগ্রাম ক্যাম্পাস" },
    address: {
      en: "Lalkhan Bazar Madrasa Masjid, Khulshi, Chattogram.",
      bn: "লালখান বাজার মাদ্রাসা মসজিদ, খুলশী, চট্টগ্রাম।",
    },
    phone: "+8801XXXXXXXXX",
    mapLink:
      "https://maps.google.com/?q=Lalkhan+Bazar+Madrasa+Masjid,+Khulshi,+Chattogram",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Lalkhan%20Bazar%20Madrasa%20Masjid%2C%20Khulshi%2C%20Chattogram&z=15&output=embed",
  },
  {
    id: "dhk",
    name: { en: "Dhaka Campus", bn: "ঢাকা ক্যাম্পাস" },
    address: {
      en: "86, Nazimuddin Road, Chankharpul, Dhaka.",
      bn: "৮৬, নাজিমুদ্দিন রোড, চানখারপুল, ঢাকা।",
    },
    phone: "+8801XXXXXXXXX",
    mapLink: "https://maps.google.com/?q=86+Nazimuddin+Road,+Chankharpul,+Dhaka",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=86%20Nazimuddin%20Road%2C%20Chankharpul%2C%20Dhaka&z=15&output=embed",
  },
];

export const programs: Program[] = [
  {
    id: "foundation",
    title: { en: "Shariah Foundation Track", bn: "শরীয়াহ ফাউন্ডেশন ট্র্যাক" },
    summary: {
      en: "Core grounding in Islamic studies with structured progression.",
      bn: "ধারাবাহিক অগ্রগতির মাধ্যমে ইসলামী শিক্ষায় দৃঢ় ভিত্তি।",
    },
  },
  {
    id: "graduation",
    title: { en: "Graduation Pathway", bn: "গ্রাজুয়েশন পথধারা" },
    summary: {
      en: "Advanced study pathway with guided scholarship and mentorship.",
      bn: "দিকনির্দেশনামূলক স্কলারশিপ ও মেন্টরশিপসহ উন্নত অধ্যয়ন।",
    },
  },
];

export const facultyMembers: Faculty[] = [
  {
    id: "faculty-1",
    name: { en: "Principal Scholar", bn: "প্রধান আলেম" },
    role: { en: "Academic Lead", bn: "একাডেমিক প্রধান" },
    bio: {
      en: "Leads curriculum direction and public educational guidance.",
      bn: "কারিকুলাম পরিচালনা ও জনমুখী শিক্ষাদিকনির্দেশনার দায়িত্বে।",
    },
  },
  {
    id: "faculty-2",
    name: { en: "Senior Instructor", bn: "সিনিয়র প্রশিক্ষক" },
    role: { en: "Programs and Student Support", bn: "প্রোগ্রাম ও শিক্ষার্থী সহায়তা" },
    bio: {
      en: "Supports branch coordination and student-facing learning paths.",
      bn: "শাখা সমন্বয় ও শিক্ষার্থী-কেন্দ্রিক পাঠক্রমে সহায়তা করেন।",
    },
  },
];

export const notices: Notice[] = [
  {
    id: "n1",
    date: "2026-04-01",
    title: {
      en: "Admissions inquiry for upcoming session is now open.",
      bn: "আসন্ন সেশনের ভর্তি জিজ্ঞাসা এখন থেকে উন্মুক্ত।",
    },
  },
  {
    id: "n2",
    date: "2026-03-20",
    title: {
      en: "Updated guidance for required admission documents.",
      bn: "ভর্তির জন্য প্রয়োজনীয় কাগজপত্রের হালনাগাদ নির্দেশনা।",
    },
  },
];

export const events: EventItem[] = [
  {
    id: "e1",
    date: "2026-04-20",
    title: { en: "Orientation Session", bn: "ওরিয়েন্টেশন সেশন" },
    detail: {
      en: "Introductory session for guardians and prospective students.",
      bn: "অভিভাবক ও সম্ভাব্য শিক্ষার্থীদের জন্য পরিচিতিমূলক সেশন।",
    },
  },
  {
    id: "e2",
    date: "2026-05-02",
    title: { en: "Public Lecture", bn: "জনসাধারণের জন্য লেকচার" },
    detail: {
      en: "Special lecture on values-driven education.",
      bn: "মূল্যবোধভিত্তিক শিক্ষা নিয়ে বিশেষ লেকচার।",
    },
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: { en: "Who can apply?", bn: "কারা আবেদন করতে পারবেন?" },
    answer: {
      en: "Students interested in structured Islamic education can inquire.",
      bn: "গঠনমূলক ইসলামী শিক্ষা নিতে আগ্রহী শিক্ষার্থীরা জিজ্ঞাসা করতে পারবেন।",
    },
  },
  {
    id: "f2",
    question: {
      en: "What documents are required?",
      bn: "কোন কাগজপত্র প্রয়োজন?",
    },
    answer: {
      en: "Required documents are listed on the admissions page and notices.",
      bn: "প্রয়োজনীয় কাগজপত্র ভর্তি পেজ ও নোটিশে উল্লেখ থাকবে।",
    },
  },
];

export const socialLinks = {
  facebook: "https://www.facebook.com/shariahgibd",
  whatsapp: "https://wa.me/8801000000000",
  email: "mailto:info@shariahgi.edu.bd",
};

export const prospectus = {
  filePath: "/prospectus/phase1-prospectus.pdf",
  label: {
    en: "Phase 1 Prospectus (Sample Placeholder)",
    bn: "ফেজ ১ প্রসপেক্টাস (নমুনা প্লেসহোল্ডার)",
  },
};

export const localize = (
  locale: Locale,
  text: LocalizedText | string,
): string => (typeof text === "string" ? text : text[locale]);
