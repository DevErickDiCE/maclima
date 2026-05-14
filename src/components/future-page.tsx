import Link from "next/link";
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
  icon: Icon,
}: FuturePageProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#FFFFFF_0%,#EAEAFF_54%,#D9D9FF_100%)] text-[#17111A]">
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-lg border border-[#850E88]/20 bg-white/[0.8] px-4 py-3 text-sm font-bold text-[#850E88] shadow-sm backdrop-blur transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>

          <section className="rounded-[32px] border border-white/80 bg-white/[0.8] p-6 shadow-[0_28px_90px_rgba(133,14,136,0.16)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#EAEAFF] px-4 py-2 text-sm font-black uppercase text-[#850E88]">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {eyebrow}
                </div>
                <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F5A66]">
                  {description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={heroHref}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#850E88] px-6 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(133,14,136,0.26)] transition hover:bg-[#6f0b72]"
                  >
                    {heroCtaLabel}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <a
                    href={supportHref}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#850E88]/20 bg-white px-6 py-4 text-base font-bold text-[#850E88] transition hover:bg-[#EAEAFF]"
                  >
                    {supportLabel}
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#D9D9FF] bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3FF_100%)] p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase text-[#850E88]">
                      Vista general
                    </p>
                    <p className="mt-1 text-lg font-black text-[#17111A]">
                      Contenido base preparado
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#850E88] text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  {introCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-[#D9D9FF] bg-white p-4"
                    >
                      <p className="font-black text-[#17111A]">{card.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#5F5A66]">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[28px] border border-[#D9D9FF] bg-white p-6 shadow-[0_22px_70px_rgba(23,17,26,0.08)] sm:p-8">
              <p className="text-sm font-black uppercase text-[#850E88]">{roadmapTitle}</p>
              <div className="mt-6 grid gap-3">
                {roadmap.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-[#D9D9FF] bg-[#FDFDFF] p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#850E88] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-bold leading-6 text-[#17111A]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <PagePanel panel={primaryPanel} />
              <PagePanel panel={secondaryPanel} subtle />
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border border-[#850E88]/15 bg-white/[0.82] p-6 text-center shadow-sm backdrop-blur sm:p-8">
            <p className="mx-auto max-w-4xl text-base font-semibold leading-7 text-[#5F5A66]">
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
      className={`rounded-[28px] border p-6 shadow-[0_22px_70px_rgba(23,17,26,0.08)] sm:p-8 ${
        subtle
          ? "border-[#D9D9FF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)]"
          : "border-[#D9D9FF] bg-white"
      }`}
    >
      <p className="text-sm font-black uppercase text-[#850E88]">{panel.eyebrow}</p>
      <h2 className="mt-3 text-2xl font-black leading-tight text-[#17111A] sm:text-3xl">
        {panel.title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#5F5A66]">{panel.text}</p>
      <ul className="mt-6 grid gap-3">
        {panel.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3 text-sm font-bold text-[#17111A]">
            <Check className="h-4 w-4 shrink-0 text-[#850E88]" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link
        href={panel.href}
        className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#850E88] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#6f0b72]"
      >
        {panel.cta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
