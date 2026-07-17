import { HomeExperience } from "@/components/HomeExperience";
import type { Locale } from "@/i18n/routing";

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <HomeExperience locale={locale} />;
}
