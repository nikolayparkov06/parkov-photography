import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Camera,
  Clapperboard,
  Eye,
  Gift,
  Images,
  Languages,
  Music2,
  Package,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link, routing } from "@/i18n/routing";
import { getCachedPublicHomeData } from "@/lib/public-home-data";
import {
  getServicePage,
  servicePages,
  type ServiceIcon,
} from "@/lib/service-pages";
import { getContactMethods } from "@/lib/site-settings";
import { siteUrl } from "@/lib/site-url";

export const dynamicParams = false;
export const revalidate = 300;

const icons: Record<ServiceIcon, typeof Camera> = {
  camera: Camera,
  video: Clapperboard,
  drone: Plane,
  images: Images,
  users: Users,
  sparkles: Sparkles,
  building: Building2,
  music: Music2,
  eye: Eye,
  gift: Gift,
  briefcase: Briefcase,
  package: Package,
};

const shared = {
  bg: {
    backHome: "Към началната страница",
    primary: "Изпрати запитване",
    secondary: "Виж кадри",
    includedTitle: "Какво включва заснемането",
    storyTitle: "Защо Parkov Visuals",
    story: [
      "Семейството ни снима от 1996 г., когато отвори Studio Parkov. Днес продължаваме под името Parkov Visuals.",
      "Николай Парков е второ поколение фотограф, завършил фотография в НАТФИЗ, с над 13 години опит зад камерата. Снима и монтира сам — затова снимките и видеото са едно цяло.",
    ],
    dayTitle: "Как работим",
    day: [
      { title: "Запитване", copy: "Изпращате дата, място и какво ви трябва. Отговаряме до 24 часа с възможности и оферта." },
      { title: "Заснемане", copy: "Насочваме само когато е нужно и улавяме случващото се естествено." },
      { title: "Предаване", copy: "Получавате обработени снимки и видео в онлайн галерия. Срокът се потвърждава с офертата." },
    ],
    galleryTitle: "Кадри от портфолиото",
    galleryCta: "Цялата галерия",
    faqTitle: "Често задавани въпроси",
    relatedTitle: "Други услуги",
    ctaWhatsApp: "Пиши в WhatsApp",
    city: "София",
  },
  en: {
    backHome: "Back to homepage",
    primary: "Send an inquiry",
    secondary: "See photos",
    includedTitle: "What the coverage includes",
    storyTitle: "Why Parkov Visuals",
    story: [
      "Our family has been photographing since 1996, when Studio Parkov opened. Today we continue as Parkov Visuals.",
      "Nikolay Parkov is a second-generation photographer with a photography degree from NATFIZ and more than 13 years behind the camera. He shoots and edits himself, so photos and video are one piece.",
    ],
    dayTitle: "How we work",
    day: [
      { title: "Inquiry", copy: "Send the date, place and what you need. We reply within 24 hours with options and a quote." },
      { title: "The shoot", copy: "We direct only when needed and capture what happens naturally." },
      { title: "Delivery", copy: "You receive edited photos and video in an online gallery. The timeline is confirmed in the quote." },
    ],
    galleryTitle: "From the portfolio",
    galleryCta: "Full gallery",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Other services",
    ctaWhatsApp: "Message on WhatsApp",
    city: "Sofia",
  },
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    servicePages.map((page) => ({ locale, service: page.slug })),
  );
}

function resolve(locale: string, slug: string) {
  const page = getServicePage(slug);
  if (!page) return null;
  const lang = locale === "en" ? "en" : "bg";
  return { page, lang, c: page[lang], s: shared[lang] } as const;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const r = resolve(locale, service);
  if (!r) return {};
  const path = `/${service}`;

  return {
    title: r.c.seoTitle,
    description: r.c.seoDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: { bg: `${siteUrl}/bg${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: r.c.seoTitle,
      description: r.c.seoDescription,
      url: `${siteUrl}/${locale}${path}`,
      siteName: "Parkov Visuals",
      locale: locale === "en" ? "en_US" : "bg_BG",
      type: "website",
    },
  };
}

export default async function ServicePageView({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  const r = resolve(locale, service);
  if (!r) notFound();
  setRequestLocale(locale);
  const { page, lang, c, s } = r;
  const path = `/${page.slug}`;
  const alternateLocale = locale === "bg" ? "en" : "bg";
  const { portfolioItems, portfolioCategories, settings } =
    await getCachedPublicHomeData(locale);

  const matchingKeys = new Set(
    portfolioCategories
      .filter((category) => page.photoMatch.test(category.key) || page.photoMatch.test(category.label))
      .map((category) => category.key),
  );
  const photos = portfolioItems.filter((item) => matchingKeys.has(item.category)).slice(0, 12);
  const whatsapp = getContactMethods(settings).find((m) => m.key === "whatsapp");
  const related = page.related
    .map((slug) => getServicePage(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.serviceName,
      serviceType: c.serviceName,
      url: `${siteUrl}/${locale}${path}`,
      areaServed: [
        { "@type": "City", name: "Sofia" },
        { "@type": "Country", name: "Bulgaria" },
      ],
      provider: {
        "@type": "ProfessionalService",
        name: "Parkov Visuals",
        url: siteUrl,
        telephone: settings.phone,
        email: settings.email,
        address: { "@type": "PostalAddress", addressLocality: "Sofia", addressCountry: "BG" },
        sameAs: [settings.instagramUrl, settings.facebookUrl].filter(Boolean),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const pill =
    "inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface/80 py-2 pr-4 pl-3 text-sm font-bold backdrop-blur hover:border-foreground/30";
  const primaryButton =
    "inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground transition hover:bg-accent-strong";
  const secondaryButton =
    "inline-flex h-12 items-center gap-2 rounded-md border border-line px-6 text-sm font-bold hover:border-foreground/30";

  return (
    <main className="isolate min-h-dvh bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-line bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
          <Link href="/" aria-label="Homepage" className="font-serif text-2xl font-bold tracking-wide">
            Parkov
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className={`${pill} hidden sm:inline-flex`}>
              <ArrowLeft size={16} className="shrink-0" />
              {s.backHome}
            </Link>
            <Link href={path} locale={alternateLocale} className={pill}>
              <Languages size={16} className="shrink-0" />
              {alternateLocale.toUpperCase()}
            </Link>
            <ThemeToggle label="Theme" />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-line px-5 py-16 md:px-8 md:py-24">
        {photos[0] ? (
          <div className="absolute inset-y-0 right-0 hidden w-[46vw] lg:block">
            <Image src={photos[0].image} alt="" fill priority sizes="46vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-linear-to-r from-background via-background/70 to-background/5" />
          </div>
        ) : null}
        <div className="relative mx-auto max-w-7xl">
          <p className="section-kicker">{c.eyebrow}</p>
          <h1 className="max-w-[18ch] font-serif text-5xl font-bold tracking-tight text-balance md:text-7xl">
            {c.title}
          </h1>
          <p className="mt-6 max-w-[56ch] text-base leading-7 text-muted text-pretty md:text-lg md:leading-8">
            {c.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className={primaryButton}>
              {s.primary}
              <ArrowRight size={16} />
            </Link>
            {photos.length > 0 ? (
              <a href="#gallery" className={secondaryButton}>
                {s.secondary}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title max-w-3xl">{s.includedTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.included.map((item) => {
              const Icon = icons[item.icon] ?? Camera;
              return (
                <div key={item.title} className="rounded-md border border-line bg-background p-6">
                  <Icon className="mb-6 text-accent" size={28} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <h2 className="section-title">{s.storyTitle}</h2>
          <div className="grid gap-5 text-base leading-7 text-muted md:text-lg md:leading-8">
            {s.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {photos.length > 0 ? (
        <section id="gallery" className="border-y border-line bg-surface px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="section-title">{s.galleryTitle}</h2>
              <Link href="/gallery" className={secondaryButton}>
                {s.galleryCta}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((item, index) => (
                <div key={item.id} className="relative aspect-[4/5] overflow-hidden rounded-md bg-background">
                  <Image
                    src={item.image}
                    alt={`${c.serviceName}, ${item.location ?? s.city} — ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="section-title">{s.dayTitle}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {s.day.map((step, index) => (
              <div key={step.title} className="border-l border-line pl-5">
                <span className="font-serif text-5xl text-accent">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-title">{s.faqTitle}</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {c.faqs.map((item) => (
              <details key={item.q} className="py-5">
                <summary className="cursor-pointer list-none text-lg font-bold">{item.q}</summary>
                <p className="mt-3 text-base leading-7 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{c.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-7 text-muted md:text-lg">{c.ctaCopy}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/#contact" className={primaryButton}>
              {s.primary}
              <ArrowRight size={16} />
            </Link>
            {whatsapp ? (
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                {s.ctaWhatsApp}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <nav aria-label={s.relatedTitle} className="border-t border-line px-5 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold">{s.relatedTitle}</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`} className={pill}>
                    {item[lang].navLabel}
                    <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : null}
    </main>
  );
}
