import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { type Locale, localize, siteCopy, socialLinks } from "@/lib/site";

const navItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "programs", href: "/programs" },
  { key: "faculty", href: "/faculty" },
  { key: "admissions", href: "/admissions" },
  { key: "notices", href: "/notices" },
  { key: "events", href: "/events" },
  { key: "faq", href: "/faq" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
] as const;

export function SiteLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <div className={locale === "bn" ? "font-bn" : undefined}>
      <header className="bg-[#DCD7C9]/95 backdrop-blur-sm">
        <div className="sgi-container py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Link className="flex items-center gap-3" href={`/${locale}`}>
                <Image
                  src="/logo.png"
                  alt={`${localize(locale, siteCopy.instituteName)} logo`}
                  width={42}
                  height={42}
                  className="h-10 w-10 rounded-md object-cover"
                  priority
                />
                <span className="text-lg font-bold md:text-xl">
                  {localize(locale, siteCopy.instituteName)}
                </span>
              </Link>
              <p className="mt-1 text-xs sgi-muted md:text-sm">
                {localize(locale, siteCopy.tagline)}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Link
                className="sgi-btn-primary"
                href={socialLinks.whatsapp}
                target="_blank"
              >
                {localize(locale, siteCopy.cta.inquiry)}
              </Link>
              <Link
                className="sgi-btn-secondary"
                href={`/${locale === "en" ? "bn" : "en"}`}
              >
                {locale === "en" ? "বাংলা" : "English"}
              </Link>
            </div>
          </div>
        </div>
        <nav
          aria-label="Primary navigation"
          className="border-y border-[#3F4E4F]/40 bg-[#2C3639] text-[#DCD7C9]"
        >
          <div className="sgi-container">
            <ul
              className="flex snap-x snap-mandatory items-center gap-x-1 overflow-x-auto py-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center md:overflow-visible md:gap-x-2"
              role="menubar"
            >
              {navItems.map((item) => (
                <li className="shrink-0 snap-start md:shrink" key={item.key} role="none">
                  <Link
                    role="menuitem"
                    className="block whitespace-nowrap rounded-sm px-3 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.05em] transition-colors hover:bg-[#A27B5C] hover:text-[#2C3639] md:text-[0.84rem]"
                    href={`/${locale}${item.href}`}
                  >
                    {localize(locale, siteCopy.nav[item.key])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <main className="sgi-container py-10 md:py-12">{children}</main>
      <section className="bg-[#DCD7C9] py-12">
        <div className="sgi-container">
          <div className="rounded-2xl border border-[#3F4E4F]/20 bg-white/45 p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="sgi-kicker">
                  {locale === "en" ? "Upcoming Events" : "আসন্ন ইভেন্ট"}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-[#2C3639] md:text-3xl">
                  {locale === "en" ? "Upcoming Events" : "আসন্ন ইভেন্টসমূহ"}
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-xl border border-[#3F4E4F]/20 bg-[#DCD7C9]/35 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#3F4E4F]">
                  APR 8
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#2C3639]">
                  {locale === "en"
                    ? "Talks: AI in Action"
                    : "টকস: এআই ইন অ্যাকশন"}
                </h3>
                <p className="mt-2 text-sm text-[#3F4E4F]">
                  {locale === "en"
                    ? "Insights from education practitioners on practical AI usage and implementation."
                    : "শিক্ষাক্ষেত্রে এআই-এর বাস্তব ব্যবহার ও প্রয়োগ নিয়ে প্র্যাকটিশনারদের অভিজ্ঞতা।"}
                </p>
              </article>

              <article className="rounded-xl border border-[#3F4E4F]/20 bg-[#DCD7C9]/35 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#3F4E4F]">
                  APR 15
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#2C3639]">
                  {locale === "en"
                    ? "Campus Open Session"
                    : "ক্যাম্পাস ওপেন সেশন"}
                </h3>
                <p className="mt-2 text-sm text-[#3F4E4F]">
                  {locale === "en"
                    ? "Prospective students and guardians can visit and ask admission-related questions."
                    : "সম্ভাব্য শিক্ষার্থী ও অভিভাবকরা ভর্তি-সংক্রান্ত প্রশ্ন নিয়ে অংশ নিতে পারবেন।"}
                </p>
              </article>

              <article className="rounded-xl border border-[#3F4E4F]/20 bg-[#DCD7C9]/35 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#3F4E4F]">
                  APR 22
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#2C3639]">
                  {locale === "en"
                    ? "Orientation Briefing"
                    : "ওরিয়েন্টেশন ব্রিফিং"}
                </h3>
                <p className="mt-2 text-sm text-[#3F4E4F]">
                  {locale === "en"
                    ? "Guidance session covering program pathways, schedules, and support services."
                    : "প্রোগ্রাম পথধারা, সময়সূচি ও সহায়তা সেবা নিয়ে দিকনির্দেশনামূলক সেশন।"}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#DCD7C9] py-12">
        <div className="sgi-container">
          <div className="grid gap-6 rounded-2xl border border-[#3F4E4F]/20 bg-white/45 p-6 md:grid-cols-[1.1fr_1fr] md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-bold text-[#2C3639] md:text-3xl">
                {locale === "en" ? "Stay Connected" : "সংযুক্ত থাকুন"}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#3F4E4F] md:text-base">
                {locale === "en"
                  ? "Follow institute highlights, student milestones, and campus activities. Stay informed through official updates and community stories."
                  : "প্রতিষ্ঠানের গুরুত্বপূর্ণ আপডেট, শিক্ষার্থীদের মাইলফলক এবং ক্যাম্পাস কার্যক্রম সম্পর্কে জানতে আমাদের সাথে থাকুন।"}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#A27B5C] text-[#DCD7C9] transition-colors hover:bg-[#2C3639]"
                  href={socialLinks.facebook}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3F4E4F]/35 text-[#2C3639] transition-colors hover:bg-[#2C3639] hover:text-[#DCD7C9]"
                  href="https://www.youtube.com/"
                  target="_blank"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </Link>
                <Link
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3F4E4F]/35 text-[#2C3639] transition-colors hover:bg-[#2C3639] hover:text-[#DCD7C9]"
                  href="https://x.com/"
                  target="_blank"
                  aria-label="X"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3F4E4F]/35 text-[#2C3639] transition-colors hover:bg-[#2C3639] hover:text-[#DCD7C9]"
                  href={socialLinks.whatsapp}
                  target="_blank"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#3F4E4F]/20">
              <Image
                src="/images/social-placeholder.svg"
                alt="Social feed placeholder"
                width={900}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#3F4E4F] py-10 text-[#DCD7C9]">
        <div className="sgi-container">
          <div className="rounded-2xl border border-[#DCD7C9]/20 bg-[#2C3639]/35 p-6 md:p-8">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              {locale === "en"
                ? "Equal Opportunity and Nondiscrimination"
                : "সমান সুযোগ ও বৈষম্যহীনতা নীতি"}
            </h2>
            <p className="mt-4 max-w-5xl text-sm leading-7 text-[#DCD7C9]/90 md:text-base">
              {locale === "en"
                ? "Shariah Graduation Institute welcomes students, families, educators, and staff from diverse backgrounds and perspectives. The institute is committed to maintaining an inclusive, respectful, and academically focused environment where every learner can access guidance and opportunity without unfair discrimination."
                : "শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট বিভিন্ন পটভূমি ও অভিজ্ঞতার শিক্ষার্থী, পরিবার, শিক্ষক এবং কর্মীদের স্বাগত জানায়। প্রতিষ্ঠানটি অন্তর্ভুক্তিমূলক, সম্মানজনক ও একাডেমিকভাবে সহায়ক পরিবেশ নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ, যেখানে প্রত্যেক শিক্ষার্থী অন্যায্য বৈষম্য ছাড়া দিকনির্দেশনা ও সুযোগ পায়।"}
            </p>
          </div>
        </div>
      </section>
      <footer className="mt-12 border-t border-[#3F4E4F]/25 bg-[#2C3639] py-10 text-[#DCD7C9]">
        <div className="sgi-container space-y-8">
          <div className="grid gap-8 md:grid-cols-[1.25fr_1fr_1fr]">
            <section>
              <h2 className="text-xl font-bold">
                {localize(locale, siteCopy.instituteName)}
              </h2>
              <p className="mt-3 text-sm text-[#DCD7C9]/90">
                {locale === "en"
                  ? "Chattogram Campus and Dhaka Campus"
                  : "চট্টগ্রাম ক্যাম্পাস এবং ঢাকা ক্যাম্পাস"}
              </p>
              <p className="mt-2 text-sm text-[#DCD7C9]/90">
                {locale === "en"
                  ? "Telephone: +8801XXXXXXXXX"
                  : "ফোন: +8801XXXXXXXXX"}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link className="rounded-md border border-[#DCD7C9]/35 px-3 py-2 hover:bg-[#A27B5C] hover:text-[#2C3639]" href={`/${locale}/contact`}>
                  {locale === "en" ? "Contact Us" : "যোগাযোগ"}
                </Link>
                <Link className="rounded-md border border-[#DCD7C9]/35 px-3 py-2 hover:bg-[#A27B5C] hover:text-[#2C3639]" href={`/${locale}/contact`}>
                  {locale === "en" ? "Maps" : "ম্যাপ"}
                </Link>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#DCD7C9]/85">
                {locale === "en" ? "Navigate" : "নেভিগেট"}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="hover:underline" href={`/${locale}/admissions`}>
                    {localize(locale, siteCopy.nav.admissions)}
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={`/${locale}/programs`}>
                    {localize(locale, siteCopy.nav.programs)}
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={`/${locale}/faculty`}>
                    {localize(locale, siteCopy.nav.faculty)}
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={`/${locale}/notices`}>
                    {localize(locale, siteCopy.nav.notices)}
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#DCD7C9]/85">
                {locale === "en" ? "Connect" : "সংযুক্ত থাকুন"}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="hover:underline" href={socialLinks.facebook} target="_blank">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={socialLinks.whatsapp} target="_blank">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={socialLinks.email}>
                    Email
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="border-t border-[#DCD7C9]/20 pt-6">
            <h3 className="text-base font-semibold">
              {locale === "en" ? "Institute Heritage" : "প্রতিষ্ঠানের ঐতিহ্য"}
            </h3>
            <p className="mt-2 max-w-4xl text-sm text-[#DCD7C9]/85">
              {locale === "en"
                ? "Shariah Graduation Institute serves communities through values-based education, trusted public engagement, and branch-focused academic support."
                : "শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট মূল্যবোধভিত্তিক শিক্ষা, জনআস্থা এবং শাখাভিত্তিক একাডেমিক সহায়তার মাধ্যমে সমাজে অবদান রাখে।"}
            </p>
            <p className="mt-4 text-xs text-[#DCD7C9]/70">
              {localize(locale, siteCopy.instituteName)} -{" "}
              {localize(locale, siteCopy.footer.rights)}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
