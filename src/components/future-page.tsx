import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  LucideIcon,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { CONTACT_INFO } from "@/lib/contact-info";

type IntroCard = {
  title: string;
  text: string;
};

type DetailPanel = {
  eyebrow: string;
  title: string;
  text: string;
  bullets: readonly string[];
  cta: string;
  href: string;
};

type FuturePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  introCards: readonly IntroCard[];
  roadmapTitle: string;
  roadmap: readonly string[];
  primaryPanel: DetailPanel;
  secondaryPanel: DetailPanel;
  consultiveNote: string;
  heroCtaLabel?: string;
  heroHref?: string;
  supportLabel?: string;
  supportHref?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  icon: LucideIcon;
};

export function FuturePage({
  eyebrow,
  title,
  description,
  introCards,
  roadmapTitle,
  roadmap,
  primaryPanel,
  secondaryPanel,
  consultiveNote,
  heroCtaLabel = "Solicitar consultoría",
  heroHref = "/consultoria-gratuita#formulario",
  supportLabel = "Contactar por WhatsApp",
  supportHref = CONTACT_INFO.whatsappHref,
  heroImageSrc,
  heroImageAlt,
  icon: Icon,
}: FuturePageProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#FFFFFF_0%,#EAEAFF_54%,#D9D9FF_100%)] text-[#17111A]">
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
          <Link
            href="/"
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg border border-[#9512A0]/30 bg-white/[0.8] px-3.5 py-2.5 text-sm font-bold text-[#9512A0] shadow-sm backdrop-blur transition hover:bg-white sm:mb-8 sm:px-4 sm:py-3"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>

          <section className="rounded-[24px] border border-white/80 bg-white/[0.8] p-4 shadow-[0_22px_68px_rgba(149,18,160,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-8 sm:shadow-[0_28px_90px_rgba(149,18,160,0.16)] lg:p-10">
            <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#EAEAFF] px-3 py-1.5 text-xs font-black uppercase text-[#9512A0] sm:px-4 sm:py-2 sm:text-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {eyebrow}
                </div>
                <h1 className="mt-4 max-w-4xl text-[1.95rem] font-black leading-tight sm:mt-6 sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-3 max-w-3xl text-[0.95rem] leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
                  {description}
                </p>
                {heroImageSrc ? (
                  <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-[20px] border border-white/80 shadow-[0_18px_48px_rgba(23,17,26,0.12)] lg:hidden">
                    <Image
                      src={heroImageSrc}
                      alt={heroImageAlt ?? title}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                ) : null}
                <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                  <Link
                    href={heroHref}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_38px_rgba(149,18,160,0.23)] transition hover:bg-[#7B0C81] sm:min-h-14 sm:px-6 sm:py-4 sm:text-base sm:shadow-[0_18px_44px_rgba(149,18,160,0.26)]"
                  >
                    {heroCtaLabel}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <a
                    href={supportHref}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#9512A0]/30 bg-white px-5 py-3 text-sm font-bold text-[#9512A0] transition hover:bg-[#EAEAFF] sm:min-h-14 sm:px-6 sm:py-4 sm:text-base"
                  >
                    {supportLabel}
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#D9D9FF] bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3FF_100%)] p-4 sm:rounded-[28px] sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase text-[#9512A0]">
                      Vista general
                    </p>
                    <p className="mt-1 text-lg font-black text-[#17111A]">
                      Contenido base preparado
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#9512A0] text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                  {introCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-xl border border-[#D9D9FF] bg-white p-3.5 sm:rounded-2xl sm:p-4"
                    >
                      <p className="font-black text-[#17111A]">{card.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#4A4552]">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-5 sm:mt-8 sm:gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[22px] border border-[#D9D9FF] bg-white p-4 shadow-[0_16px_48px_rgba(23,17,26,0.06)] sm:rounded-[28px] sm:p-8 sm:shadow-[0_22px_70px_rgba(23,17,26,0.08)]">
              <p className="text-sm font-black uppercase text-[#9512A0]">{roadmapTitle}</p>
              <div className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3">
                {roadmap.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-[#D9D9FF] bg-[#FDFDFF] p-3.5 sm:gap-4 sm:rounded-2xl sm:p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9512A0] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-bold leading-6 text-[#17111A]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6">
              <PagePanel panel={primaryPanel} />
              <PagePanel panel={secondaryPanel} subtle />
            </div>
          </section>

          <section className="mt-6 rounded-[22px] border border-[#9512A0]/25 bg-white/[0.82] p-4 text-center shadow-sm backdrop-blur sm:mt-8 sm:rounded-[28px] sm:p-8">
            <p className="mx-auto max-w-4xl text-sm font-semibold leading-6 text-[#4A4552] sm:text-base sm:leading-7">
              {consultiveNote}
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function PagePanel({
  panel,
  subtle = false,
}: {
  panel: DetailPanel;
  subtle?: boolean;
}) {
  return (
    <article
      className={`rounded-[22px] border p-4 shadow-[0_16px_48px_rgba(23,17,26,0.06)] sm:rounded-[28px] sm:p-8 sm:shadow-[0_22px_70px_rgba(23,17,26,0.08)] ${
        subtle
          ? "border-[#D9D9FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)]"
          : "border-[#D9D9FF] bg-white"
      }`}
    >
      <p className="text-sm font-black uppercase text-[#9512A0]">{panel.eyebrow}</p>
      <h2 className="mt-2.5 text-[1.4rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-3xl">
        {panel.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#4A4552] sm:mt-4 sm:text-base sm:leading-7">{panel.text}</p>
      <ul className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3">
        {panel.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3 text-sm font-bold text-[#17111A]">
            <Check className="h-4 w-4 shrink-0 text-[#9512A0]" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link
        href={panel.href}
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#9512A0] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#7B0C81] sm:mt-8 sm:min-h-12 sm:w-auto"
      >
        {panel.cta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
