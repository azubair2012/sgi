import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeSections } from "@/components/sections";
import { isLocale, siteCopy } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const isEnglish = locale === "en";
  return {
    title: isEnglish
      ? `${siteCopy.instituteName.en} | Official Website`
      : `${siteCopy.instituteName.bn} | অফিসিয়াল ওয়েবসাইট`,
    description: isEnglish
      ? "Official bilingual website of Shariah Graduation Institute with admissions information, branch details, notices, events, and contact pathways."
      : "শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউটের অফিসিয়াল দ্বিভাষিক ওয়েবসাইট: ভর্তি তথ্য, শাখা বিবরণ, নোটিশ, ইভেন্ট ও যোগাযোগ।",
  };
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <HomeSections locale={locale} />;
}
