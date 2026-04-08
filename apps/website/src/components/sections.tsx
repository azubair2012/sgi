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
  return (
    <div className="space-y-6">
      <section className="sgi-card">
        <h1 className="text-3xl font-bold">
          {localize(locale, siteCopy.instituteName)}
        </h1>
        <p className="mt-2 text-[#3F4E4F]">{localize(locale, siteCopy.tagline)}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            className="rounded-md bg-[#A27B5C] px-4 py-2 text-[#DCD7C9]"
            href={socialLinks.whatsapp}
            target="_blank"
          >
            {localize(locale, siteCopy.cta.whatsapp)}
          </Link>
          <Link className="rounded-md border px-4 py-2" href={prospectus.filePath}>
            {localize(locale, siteCopy.cta.prospectus)}
          </Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => (
          <article className="sgi-card" key={program.id}>
            <h2 className="font-semibold">{localize(locale, program.title)}</h2>
            <p className="mt-2 text-sm text-[#3F4E4F]">
              {localize(locale, program.summary)}
            </p>
          </article>
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {branches.map((branch) => (
          <article className="sgi-card" key={branch.id}>
            <h2 className="font-semibold">{localize(locale, branch.name)}</h2>
            <p className="mt-2 text-sm">{localize(locale, branch.address)}</p>
            <p className="mt-2 text-sm">{branch.phone}</p>
            <Link className="mt-2 inline-block text-sm underline" href={branch.mapLink}>
              {locale === "en" ? "Open map" : "ম্যাপ দেখুন"}
            </Link>
          </article>
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="sgi-card">
          <h2 className="font-semibold">{localize(locale, siteCopy.nav.notices)}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {notices.map((notice) => (
              <li key={notice.id}>
                <strong>{notice.date}:</strong> {localize(locale, notice.title)}
              </li>
            ))}
          </ul>
        </article>
        <article className="sgi-card">
          <h2 className="font-semibold">{localize(locale, siteCopy.nav.events)}</h2>
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
    <section className="space-y-4">
      <header className="sgi-card">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-[#3F4E4F]">{intro}</p>
      </header>
      {children}
    </section>
  );
}

export function FacultyCards({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {facultyMembers.map((member) => (
        <article className="sgi-card" key={member.id}>
          <h2 className="font-semibold">{localize(locale, member.name)}</h2>
          <p className="text-sm text-[#3F4E4F]">{localize(locale, member.role)}</p>
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
