import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Clapperboard,
  Images,
  Languages,
  Plane,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "@/i18n/routing";
import { getCachedPublicHomeData } from "@/lib/public-home-data";
import { getContactMethods } from "@/lib/site-settings";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";
export const revalidate = 300;

const path = "/wedding-photography-sofia";

type Copy = {
  seoTitle: string;
  seoDescription: string;
  backHome: string;
  eyebrow: string;
  title: string;
  intro: string;
  primary: string;
  secondary: string;
  includedTitle: string;
  included: Array<{ title: string; copy: string }>;
  storyTitle: string;
  story: string[];
  dayTitle: string;
  day: Array<{ title: string; copy: string }>;
  galleryTitle: string;
  galleryCta: string;
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
  ctaTitle: string;
  ctaCopy: string;
  ctaWhatsApp: string;
  ctaForm: string;
  serviceName: string;
};

const copy: Record<"bg" | "en", Copy> = {
  bg: {
    seoTitle: "Сватбена фотография и видео в София | Parkov Visuals",
    seoDescription:
      "Сватбен фотограф и видеооператор в София: снимки, видео и дрон от един екип. Второ поколение фотограф, Studio Parkov от 1996. Запитване с отговор до 24 ч.",
    backHome: "Към началната страница",
    eyebrow: "Сватби · София и цяла България",
    title: "Сватбена фотография и видео в София",
    intro:
      "Снимки, видео и дрон от един екип и с един план за деня. Спокойно присъствие, внимание към детайла и кадри, които ще гледате след 20 години.",
    primary: "Провери свободна дата",
    secondary: "Виж сватбени кадри",
    includedTitle: "Какво включва заснемането",
    included: [
      {
        title: "Сватбена фотография",
        copy: "Подготовка, церемония, портрети на двойката, гости и парти. Селектирани и обработени кадри в онлайн галерия.",
      },
      {
        title: "Сватбено видео",
        copy: "Кинематографичен трейлър и филм от деня, в който музиката, slow motion кадрите и емоцията разказват историята.",
      },
      {
        title: "Дрон кадри",
        copy: "Мястото, церемонията и двойката отвисоко. Дронът добавя мащаб, който земната камера не може да даде.",
      },
      {
        title: "Онлайн галерия",
        copy: "Готови за споделяне снимки, които изтегляте и изпращате на близките с един линк.",
      },
    ],
    storyTitle: "Защо Parkov Visuals",
    story: [
      "Семейството ни снима от 1996 г., когато отвори Studio Parkov. Днес продължаваме под името Parkov Visuals.",
      "Николай Парков е второ поколение фотограф, завършил фотография в НАТФИЗ, с над 13 години опит зад камерата. Снима и монтира сам — затова снимките и видеото от вашата сватба са едно цяло, а не работа на два екипа, които си пречат.",
    ],
    dayTitle: "Как минава денят",
    day: [
      {
        title: "Запитване и среща",
        copy: "Изпращате дата и място. Уточняваме програмата, важните хора и моментите, които не бива да пропуснем.",
      },
      {
        title: "Сватбеният ден",
        copy: "Насочваме само когато е нужно. През останалото време сме незабележими и улавяме случващото се естествено.",
      },
      {
        title: "Предаване",
        copy: "Получавате обработена онлайн галерия и видео. Срокът се потвърждава предварително с офертата.",
      },
    ],
    galleryTitle: "Сватбени кадри",
    galleryCta: "Цялата галерия",
    faqTitle: "Въпроси за сватбеното заснемане",
    faqs: [
      {
        q: "Снимате ли извън София?",
        a: "Да. Работим в цяла България, а пътните разходи се уточняват според локацията.",
      },
      {
        q: "Може ли само снимки или само видео?",
        a: "Да. Можете да изберете само фотография, само видео или и двете с дрон — офертата се прави според деня ви.",
      },
      {
        q: "Колко бързо получаваме снимките?",
        a: "Срокът зависи от обема на заснемането и се потвърждава в офертата, преди да запазите датата.",
      },
      {
        q: "Как се запазва дата?",
        a: "Датата се запазва с капаро. Точните условия се уточняват предварително.",
      },
      {
        q: "Получаваме ли RAW файлове?",
        a: "Получавате селектирани и обработени финални изображения. RAW файловете не са част от стандартната доставка.",
      },
    ],
    ctaTitle: "Свободна ли е вашата дата?",
    ctaCopy:
      "Изпратете дата, място и брой гости. Ще получите отговор с възможности и оферта до 24 часа.",
    ctaWhatsApp: "Пиши в WhatsApp",
    ctaForm: "Изпрати запитване",
    serviceName: "Сватбена фотография и видео",
  },
  en: {
    seoTitle: "Wedding Photographer & Videographer in Sofia | Parkov Visuals",
    seoDescription:
      "Wedding photography, video and drone in Sofia from one team. Second-generation photographer, Studio Parkov since 1996. Replies within 24 hours.",
    backHome: "Back to homepage",
    eyebrow: "Weddings · Sofia and all of Bulgaria",
    title: "Wedding photography and video in Sofia",
    intro:
      "Photos, video and drone from one team with one plan for the day. A calm presence, attention to detail, and images you will still watch in 20 years.",
    primary: "Check your date",
    secondary: "See wedding photos",
    includedTitle: "What the coverage includes",
    included: [
      {
        title: "Wedding photography",
        copy: "Getting ready, ceremony, couple portraits, guests and party. Selected, edited images in an online gallery.",
      },
      {
        title: "Wedding video",
        copy: "A cinematic trailer and film of the day, told through music, slow motion and real emotion.",
      },
      {
        title: "Drone footage",
        copy: "The venue, ceremony and couple from above, adding a sense of scale no ground camera can.",
      },
      {
        title: "Online gallery",
        copy: "Share-ready photos to download and send to family with a single link.",
      },
    ],
    storyTitle: "Why Parkov Visuals",
    story: [
      "Our family has been photographing since 1996, when Studio Parkov opened. Today we continue as Parkov Visuals.",
      "Nikolay Parkov is a second-generation photographer with a photography degree from NATFIZ and more than 13 years behind the camera. He shoots and edits himself, so the photos and video of your wedding are one piece, not the work of two teams in each other's way.",
    ],
    dayTitle: "How the day works",
    day: [
      {
        title: "Inquiry and meeting",
        copy: "Send the date and venue. We agree the schedule, the key people and the moments not to miss.",
      },
      {
        title: "The wedding day",
        copy: "We direct only when needed. The rest of the time we stay unobtrusive and capture the day as it happens.",
      },
      {
        title: "Delivery",
        copy: "You receive an edited online gallery and video. The timeline is confirmed upfront with the quote.",
      },
    ],
    galleryTitle: "Wedding photos",
    galleryCta: "Full gallery",
    faqTitle: "Wedding coverage FAQ",
    faqs: [
      {
        q: "Do you shoot outside Sofia?",
        a: "Yes. We work across Bulgaria; travel costs depend on the location.",
      },
      {
        q: "Can we book only photos or only video?",
        a: "Yes. Choose photography, video, or both with drone. The quote is built around your day.",
      },
      {
        q: "How fast do we get the photos?",
        a: "It depends on the size of the coverage and is confirmed in the quote before you book.",
      },
      {
        q: "How do we reserve the date?",
        a: "The date is reserved with a deposit. The exact terms are agreed in advance.",
      },
      {
        q: "Do we get RAW files?",
        a: "You receive selected, edited final images. RAW files are not part of the standard delivery.",
      },
    ],
    ctaTitle: "Is your date available?",
    ctaCopy:
      "Send the date, venue and number of guests. You will get availability and a quote within 24 hours.",
    ctaWhatsApp: "Message on WhatsApp",
    ctaForm: "Send an inquiry",
    serviceName: "Wedding photography and video",
  },
};

function pickCopy(locale: string) {
  return locale === "en" ? copy.en : copy.bg;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = pickCopy(locale);

  return {
    title: c.seoTitle,
    description: c.seoDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: {
        bg: `${siteUrl}/bg${path}`,
        en: `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      title: c.seoTitle,
      description: c.seoDescription,
      url: `${siteUrl}/${locale}${path}`,
      siteName: "Parkov Visuals",
      locale: locale === "en" ? "en_US" : "bg_BG",
      type: "website",
    },
  };
}

export default async function WeddingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = pickCopy(locale);
  const alternateLocale = locale === "bg" ? "en" : "bg";
  const { portfolioItems, portfolioCategories, settings } =
    await getCachedPublicHomeData(locale);

  const weddingKeys = new Set(
    portfolioCategories
      .filter(
        (category) =>
          /wedding|svatb/i.test(category.key) || /сватб|wedding/i.test(category.label),
      )
      .map((category) => category.key),
  );
  const photos = portfolioItems
    .filter((item) => weddingKeys.has(item.category))
    .slice(0, 12);
  const whatsapp = getContactMethods(settings).find((m) => m.key === "whatsapp");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.serviceName,
    serviceType: c.serviceName,
    areaServed: [
      { "@type": "City", name: "Sofia" },
      { "@type": "Country", name: "Bulgaria" },
    ],
    url: `${siteUrl}/${locale}${path}`,
    provider: {
      "@type": "ProfessionalService",
      name: "Parkov Visuals",
      url: siteUrl,
      telephone: settings.phone,
      email: settings.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sofia",
        addressCountry: "BG",
      },
      sameAs: [settings.instagramUrl, settings.facebookUrl].filter(Boolean),
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const includedIcons = [Camera, Clapperboard, Plane, Images];
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqLd]) }}
      />
      <header className="border-b border-line bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
          <Link href="/" aria-label="Homepage" className="font-serif text-2xl font-bold tracking-wide">
            Parkov
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className={`${pill} hidden sm:inline-flex`}>
              <ArrowLeft size={16} className="shrink-0" />
              {c.backHome}
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
              {c.primary}
              <ArrowRight size={16} />
            </Link>
            <a href="#gallery" className={secondaryButton}>
              {c.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title max-w-3xl">{c.includedTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.included.map((item, index) => {
              const Icon = includedIcons[index] ?? Camera;
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
          <h2 className="section-title">{c.storyTitle}</h2>
          <div className="grid gap-5 text-base leading-7 text-muted md:text-lg md:leading-8">
            {c.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {photos.length > 0 ? (
        <section id="gallery" className="border-y border-line bg-surface px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="section-title">{c.galleryTitle}</h2>
              <Link href="/gallery" className={secondaryButton}>
                {c.galleryCta}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((item, index) => (
                <div key={item.id} className="relative aspect-[4/5] overflow-hidden rounded-md bg-background">
                  <Image
                    src={item.image}
                    alt={`${c.serviceName}, ${item.location ?? (locale === "en" ? "Sofia" : "София")} — ${index + 1}`}
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
          <h2 className="section-title">{c.dayTitle}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {c.day.map((step, index) => (
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
          <h2 className="section-title">{c.faqTitle}</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {c.faqs.map((item) => (
              <details key={item.q} className="group py-5">
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
              {c.ctaForm}
              <ArrowRight size={16} />
            </Link>
            {whatsapp ? (
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                {c.ctaWhatsApp}
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
