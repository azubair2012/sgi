import Link from "next/link";
import { type ReactNode } from "react";

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
      <header className="border-b border-[#3F4E4F]/35 bg-[#DCD7C9]">
        <div className="sgi-container py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link className="font-bold text-lg" href={`/${locale}`}>
              {localize(locale, siteCopy.instituteName)}
            </Link>
            <div className="flex items-center gap-3 text-sm">
              <Link
                className="rounded-md bg-[#A27B5C] px-3 py-2 text-[#DCD7C9]"
                href={socialLinks.whatsapp}
                target="_blank"
              >
                {localize(locale, siteCopy.cta.inquiry)}
              </Link>
              <Link
                className="rounded-md border border-[#3F4E4F]/45 px-3 py-2"
                href={`/${locale === "en" ? "bn" : "en"}`}
              >
                {locale === "en" ? "বাংলা" : "English"}
              </Link>
            </div>
          </div>
          <nav className="mt-4 flex flex-wrap gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.key}
                className="rounded-md px-2 py-1 hover:bg-[#3F4E4F]/10"
                href={`/${locale}${item.href}`}
              >
                {localize(locale, siteCopy.nav[item.key])}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="sgi-container py-8">{children}</main>
      <footer className="mt-8 border-t border-[#3F4E4F]/35 py-8">
        <div className="sgi-container flex flex-wrap items-center justify-between gap-3 text-sm">
          <p>
            {localize(locale, siteCopy.instituteName)} -{" "}
            {localize(locale, siteCopy.footer.rights)}
          </p>
          <div className="flex gap-4">
            <Link href={socialLinks.facebook} target="_blank">
              Facebook
            </Link>
            <Link href={socialLinks.email}>Email</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
