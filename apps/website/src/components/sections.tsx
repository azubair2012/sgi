import Image from "next/image";
import Link from "next/link";

import {
  branches,
  events,
  facultyMembers,
  faqItems,
  localize,
  notices,
  programs,
  prospectus,
  siteCopy,
  socialLinks,
  type Locale,
} from "@/lib/site";

export function HomeSections({ locale }: { locale: Locale }) {
  const valuePillars = [
    {
      title: locale === "en" ? "Build Trust" : "আস্থা তৈরি",
      body:
        locale === "en"
          ? "Clear branch identity, faculty visibility, and reliable public information for guardians and students."
          : "অভিভাবক ও শিক্ষার্থীদের জন্য স্পষ্ট শাখা পরিচিতি, শিক্ষক দৃশ্যমানতা এবং নির্ভরযোগ্য জনতথ্য।",
    },
    {
      title: locale === "en" ? "Guide Admissions" : "ভর্তি নির্দেশনা",
      body:
        locale === "en"
          ? "Simple inquiry path with prospectus access, FAQs, and practical admission-focused calls to action."
          : "প্রসপেক্টাস, জিজ্ঞাসা ও বাস্তবধর্মী ভর্তি নির্দেশনাসহ সহজ যোগাযোগ পথ।",
    },
    {
      title: locale === "en" ? "Prepare for Growth" : "ভবিষ্যৎ প্রস্তুতি",
      body:
        locale === "en"
          ? "Static-first architecture today, with a clean migration path to secure dynamic modules in Phase 2."
          : "আজ স্ট্যাটিক-ফার্স্ট কাঠামো, যা ফেজ ২-এ নিরাপদ ডায়নামিক মডিউলে সহজে রূপান্তরযোগ্য।",
    },
  ];

  return (
    <div>
      <section className="hero-homepage relative overflow-hidden rounded-2xl border border-[#3F4E4F]/25">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-placeholder.svg"
            alt="Campus hero placeholder"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3639]/85 via-[#2C3639]/65 to-[#2C3639]/30" />
        </div>
        <div className="relative min-h-[420px] p-6 md:min-h-[560px] md:p-10 lg:p-12">
          <div className="max-w-3xl pt-4 md:pt-8">
            <span className="inline-block rounded-full border border-[#DCD7C9]/45 bg-[#DCD7C9]/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#DCD7C9]">
              {locale === "en" ? "Official Public Website" : "অফিসিয়াল পাবলিক ওয়েবসাইট"}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#DCD7C9] md:text-5xl">
              {localize(locale, siteCopy.instituteName)}
            </h1>
            <p className="mt-4 max-w-2xl text-[0.98rem] text-[#DCD7C9]/90 md:text-lg">
              {locale === "en"
                ? "Structured Islamic education with campus-based guidance, transparent public information, and clear admissions pathways."
                : "ক্যাম্পাসভিত্তিক দিকনির্দেশনা, স্বচ্ছ জনতথ্য এবং স্পষ্ট ভর্তি-পথসহ গঠনমূলক ইসলামী শিক্ষা।"}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="sgi-btn-primary"
                href={socialLinks.whatsapp}
                target="_blank"
              >
                {localize(locale, siteCopy.cta.whatsapp)}
              </Link>
              <Link className="sgi-btn-secondary border-[#DCD7C9]/70 bg-[#DCD7C9]/8 text-[#DCD7C9]" href={prospectus.filePath}>
                {localize(locale, siteCopy.cta.prospectus)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sgi-section">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="sgi-subheading font-semibold">
            {locale === "en" ? "What This Website Delivers" : "এই ওয়েবসাইটে যা থাকছে"}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <article className="sgi-card" key={pillar.title}>
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="sgi-muted mt-2 text-sm">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sgi-section">
        <div className="mb-4">
          <h2 className="sgi-subheading font-semibold">
            {locale === "en" ? "Programs at a Glance" : "প্রোগ্রামের সংক্ষিপ্ত পরিচিতি"}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => (
          <article className="sgi-card" key={program.id}>
            <h3 className="text-lg font-semibold">{localize(locale, program.title)}</h3>
            <p className="sgi-muted mt-2 text-sm">
              {localize(locale, program.summary)}
            </p>
          </article>
        ))}
        </div>
      </section>

      <section className="sgi-section">
        <div className="mb-4">
          <h2 className="sgi-subheading font-semibold">
            {locale === "en" ? "Our Campuses" : "আমাদের ক্যাম্পাসসমূহ"}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
        {branches.map((branch) => (
          <article className="sgi-card" key={branch.id}>
            <h3 className="text-lg font-semibold">{localize(locale, branch.name)}</h3>
            <p className="mt-2 text-sm">{localize(locale, branch.address)}</p>
            <p className="sgi-muted mt-2 text-sm">{branch.phone}</p>
            <Link className="mt-3 inline-block text-sm underline" href={branch.mapLink}>
              {locale === "en" ? "Open map" : "ম্যাপ দেখুন"}
            </Link>
          </article>
        ))}
        </div>
      </section>

      <section className="sgi-section">
        <article className="sgi-surface p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-[1.6fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                {locale === "en"
                  ? "Admissions and Inquiry in One Place"
                  : "ভর্তি ও জিজ্ঞাসার সব পথ এক জায়গায়"}
              </h2>
              <p className="sgi-muted mt-3 max-w-2xl">
                {locale === "en"
                  ? "Start with WhatsApp inquiry, review branch details, and download the prospectus for complete orientation."
                  : "হোয়াটসঅ্যাপে জিজ্ঞাসা দিয়ে শুরু করুন, শাখা তথ্য দেখুন এবং পূর্ণ নির্দেশনার জন্য প্রসপেক্টাস ডাউনলোড করুন।"}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link className="sgi-btn-primary w-full md:w-auto" href={socialLinks.whatsapp} target="_blank">
                {localize(locale, siteCopy.cta.inquiry)}
              </Link>
              <Link className="sgi-btn-secondary w-full md:w-auto" href={prospectus.filePath}>
                {localize(locale, siteCopy.cta.prospectus)}
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="sgi-section grid gap-4 md:grid-cols-2">
        <article className="sgi-card">
          <h2 className="text-lg font-semibold">{localize(locale, siteCopy.nav.notices)}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {notices.map((notice) => (
              <li key={notice.id}>
                <strong>{notice.date}:</strong> {localize(locale, notice.title)}
              </li>
            ))}
          </ul>
        </article>
        <article className="sgi-card">
          <h2 className="text-lg font-semibold">{localize(locale, siteCopy.nav.events)}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {events.map((event) => (
              <li key={event.id}>
                <strong>{event.date}:</strong> {localize(locale, event.title)}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}

export function GenericListPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <header className="sgi-surface p-6 md:p-8">
        <h1 className="text-2xl font-bold leading-tight md:text-4xl">{title}</h1>
        <p className="sgi-muted mt-3 max-w-3xl">{intro}</p>
      </header>
      <div className="sgi-section">{children}</div>
    </section>
  );
}

export function FacultyCards({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {facultyMembers.map((member) => (
        <article className="sgi-card" key={member.id}>
          <h2 className="text-lg font-semibold">{localize(locale, member.name)}</h2>
          <p className="sgi-muted text-sm">{localize(locale, member.role)}</p>
          <p className="mt-2 text-sm">{localize(locale, member.bio)}</p>
        </article>
      ))}
    </div>
  );
}

export function FaqCards({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-3">
      {faqItems.map((faq) => (
        <article className="sgi-card" key={faq.id}>
          <h2 className="font-semibold">{localize(locale, faq.question)}</h2>
          <p className="mt-2 text-sm">{localize(locale, faq.answer)}</p>
        </article>
      ))}
    </div>
  );
}
