import { notFound } from "next/navigation";
import { PackageDetail } from "@/components/PackageDetail";
import { getPackage, tourPackages } from "@/data/packages";
import type { Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return tourPackages.flatMap((pkg) =>
    ["es", "en", "pt"].map((locale) => ({ locale, slug: pkg.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} | Explora Red Valley`,
    description: pkg.shortDescription
  };
}

export default async function PackagePage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();
  return <PackageDetail pkg={pkg} locale={locale} />;
}
