import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  FaqCards,
  FacultyCards,
  GenericListPage,
} from "@/components/sections";
import {
  branches,
  events,
  isLocale,
  localize,
  notices,
  programs,
  prospectus,
  siteCopy,
  socialLinks,
} from "@/lib/site";

const slugs = [
  "about",
  "programs",
  "faculty",
  "admissions",
  "notices",
  "events",
  "faq",
  "gallery",
  "contact",
] as const;

export function generateStaticParams() {
  return ["en", "bn"].flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

const metadataBySlug = {
  about: {
    en: {
      title: "About | Shariah Graduation Institute",
      description:
        "Learn about the mission, vision, and educational direction of Shariah Graduation Institute.",
    },
    bn: {
      title: "আমাদের সম্পর্কে | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description:
        "শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউটের লক্ষ্য, উদ্দেশ্য ও শিক্ষাগত দিকনির্দেশনা সম্পর্কে জানুন।",
    },
  },
  programs: {
    en: {
      title: "Programs | Shariah Graduation Institute",
      description:
        "Explore structured academic pathways and program information for prospective students.",
    },
    bn: {
      title: "প্রোগ্রামসমূহ | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description:
        "সম্ভাব্য শিক্ষার্থীদের জন্য সাজানো একাডেমিক পথধারা ও প্রোগ্রাম সম্পর্কিত তথ্য দেখুন।",
    },
  },
  faculty: {
    en: {
      title: "Faculty | Shariah Graduation Institute",
      description:
        "Meet the leadership and faculty members guiding students at Shariah Graduation Institute.",
    },
    bn: {
      title: "শিক্ষকবৃন্দ | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description:
        "শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউটের নেতৃত্ব ও শিক্ষকবৃন্দ সম্পর্কে জানুন।",
    },
  },
  admissions: {
    en: {
      title: "Admissions | Shariah Graduation Institute",
      description:
        "Review admissions guidance, inquiry options, and prospectus access for Phase 1.",
    },
    bn: {
      title: "ভর্তি | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description:
        "ফেজ ১ ভর্তি নির্দেশনা, জিজ্ঞাসার মাধ্যম এবং প্রসপেক্টাস ডাউনলোড সম্পর্কে জানুন।",
    },
  },
  notices: {
    en: {
      title: "Notices | Shariah Graduation Institute",
      description: "Read official institutional notices and public announcements.",
    },
    bn: {
      title: "নোটিশ | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description: "অফিসিয়াল নোটিশ ও জনসাধারণের জন্য ঘোষণাসমূহ দেখুন।",
    },
  },
  events: {
    en: {
      title: "Events | Shariah Graduation Institute",
      description: "Stay updated on institutional events and public sessions.",
    },
    bn: {
      title: "ইভেন্ট | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description: "প্রতিষ্ঠানের ইভেন্ট ও জনসেশনের আপডেট দেখুন।",
    },
  },
  faq: {
    en: {
      title: "FAQ | Shariah Graduation Institute",
      description:
        "Find answers to common questions on admissions, branches, schedules, and contact.",
    },
    bn: {
      title: "জিজ্ঞাসা | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description:
        "ভর্তি, শাখা, সময়সূচি ও যোগাযোগ সংক্রান্ত সাধারণ প্রশ্নের উত্তর দেখুন।",
    },
  },
  gallery: {
    en: {
      title: "Gallery | Shariah Graduation Institute",
      description:
        "View institutional visual highlights from campus and educational activities.",
    },
    bn: {
      title: "গ্যালারি | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description:
        "ক্যাম্পাস ও শিক্ষামূলক কার্যক্রমের নির্বাচিত ভিজ্যুয়াল হাইলাইট দেখুন।",
    },
  },
  contact: {
    en: {
      title: "Contact | Shariah Graduation Institute",
      description:
        "Get branch-specific addresses, map links, and inquiry contact paths.",
    },
    bn: {
      title: "যোগাযোগ | শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট",
      description:
        "শাখাভিত্তিক ঠিকানা, ম্যাপ লিংক এবং জিজ্ঞাসার যোগাযোগ মাধ্যম দেখুন।",
    },
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !(slug in metadataBySlug)) {
    return {};
  }

  return metadataBySlug[slug as keyof typeof metadataBySlug][locale];
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  if (slug === "about") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.about)}
        intro={
          locale === "en"
            ? "Shariah Graduation Institute is focused on trustworthy, values-driven Islamic learning with branch-based support."
            : "শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট আস্থা-ভিত্তিক ও মূল্যবোধনির্ভর ইসলামী শিক্ষায় প্রতিশ্রুতিবদ্ধ।"
        }
      />
    );
  }

  if (slug === "programs") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.programs)}
        intro={
          locale === "en"
            ? "Programs are structured to support clear progression and public understanding of study pathways."
            : "প্রোগ্রামসমূহ ধাপে ধাপে অগ্রগতির জন্য সাজানো এবং জনসাধারণের বোঝার উপযোগী।"
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {programs.map((program) => (
            <article className="sgi-card" key={program.id}>
              <h2 className="font-semibold">{localize(locale, program.title)}</h2>
              <p className="mt-2 text-sm">{localize(locale, program.summary)}</p>
            </article>
          ))}
        </div>
      </GenericListPage>
    );
  }

  if (slug === "faculty") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.faculty)}
        intro={
          locale === "en"
            ? "Leadership and faculty profiles for public trust and academic transparency."
            : "জনআস্থা ও একাডেমিক স্বচ্ছতার জন্য নেতৃত্ব ও শিক্ষক পরিচিতি।"
        }
      >
        <FacultyCards locale={locale} />
      </GenericListPage>
    );
  }

  if (slug === "admissions") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.admissions)}
        intro={
          locale === "en"
            ? "Phase 1 admissions information is inquiry-led with non-sensitive public guidance."
            : "ফেজ ১ ভর্তি তথ্য জিজ্ঞাসাভিত্তিক এবং অ-সংবেদনশীল জনতথ্যকেন্দ্রিক।"
        }
      >
        <article className="sgi-card space-y-3 text-sm">
          <p>
            {locale === "en"
              ? "Primary inquiry channel is WhatsApp. Email fallback is available."
              : "প্রাথমিক যোগাযোগ মাধ্যম হোয়াটসঅ্যাপ। ইমেইল বিকল্প হিসেবে থাকবে।"}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-md bg-[#A27B5C] px-4 py-2 text-[#DCD7C9]"
              href={socialLinks.whatsapp}
            >
              {localize(locale, siteCopy.cta.inquiry)}
            </Link>
            <Link className="rounded-md border px-4 py-2" href={socialLinks.email}>
              Email
            </Link>
            <Link className="rounded-md border px-4 py-2" href={prospectus.filePath}>
              {localize(locale, siteCopy.cta.prospectus)}
            </Link>
          </div>
        </article>
      </GenericListPage>
    );
  }

  if (slug === "notices") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.notices)}
        intro={locale === "en" ? "Latest official announcements." : "সর্বশেষ অফিসিয়াল ঘোষণা।"}
      >
        <div className="space-y-3">
          {notices.map((notice) => (
            <article className="sgi-card" key={notice.id}>
              <p className="text-xs text-[#3F4E4F]">{notice.date}</p>
              <h2 className="mt-1 font-semibold">{localize(locale, notice.title)}</h2>
            </article>
          ))}
        </div>
      </GenericListPage>
    );
  }

  if (slug === "events") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.events)}
        intro={locale === "en" ? "Upcoming and recent public events." : "আসন্ন ও সাম্প্রতিক পাবলিক ইভেন্ট।"}
      >
        <div className="space-y-3">
          {events.map((event) => (
            <article className="sgi-card" key={event.id}>
              <p className="text-xs text-[#3F4E4F]">{event.date}</p>
              <h2 className="mt-1 font-semibold">{localize(locale, event.title)}</h2>
              <p className="mt-2 text-sm">{localize(locale, event.detail)}</p>
            </article>
          ))}
        </div>
      </GenericListPage>
    );
  }

  if (slug === "faq") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.faq)}
        intro={
          locale === "en"
            ? "Answers to common public questions."
            : "সাধারণ জনজিজ্ঞাসার উত্তর।"
        }
      >
        <FaqCards locale={locale} />
      </GenericListPage>
    );
  }

  if (slug === "gallery") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.gallery)}
        intro={
          locale === "en"
            ? "Gallery placeholders can be replaced with official photos."
            : "গ্যালারির প্লেসহোল্ডারগুলো অফিসিয়াল ছবিতে বদলানো যাবে।"
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article className="sgi-card h-32" key={item}>
              <p className="text-sm text-[#3F4E4F]">
                {locale === "en" ? "Image placeholder" : "ছবির প্লেসহোল্ডার"} #{item}
              </p>
            </article>
          ))}
        </div>
      </GenericListPage>
    );
  }

  if (slug === "contact") {
    return (
      <GenericListPage
        title={localize(locale, siteCopy.nav.contact)}
        intro={
          locale === "en"
            ? "Branch-specific contact information and map links."
            : "শাখাভিত্তিক যোগাযোগ তথ্য এবং ম্যাপ লিংক।"
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {branches.map((branch) => (
            <article className="sgi-card" key={branch.id}>
              <h2 className="font-semibold">{localize(locale, branch.name)}</h2>
              <p className="mt-2 text-sm">{localize(locale, branch.address)}</p>
              <p className="mt-2 text-sm">{branch.phone}</p>
              <div className="mt-2 flex gap-3 text-sm">
                <Link className="underline" href={branch.mapLink}>
                  {locale === "en" ? "Open map" : "ম্যাপ"}
                </Link>
                <Link className="underline" href={socialLinks.whatsapp}>
                  WhatsApp
                </Link>
              </div>
            </article>
          ))}
        </div>
      </GenericListPage>
    );
  }

  notFound();
}
