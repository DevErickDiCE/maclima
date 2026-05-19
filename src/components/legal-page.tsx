import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  FileText,
  Info,
  LucideIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import {
  LEGAL_COMPANY,
  LEGAL_COMPLETION_NOTE,
  LEGAL_RELATED_LINKS,
} from "@/lib/legal-content";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  sections: readonly LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#17111A]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_54%,#EAEAFF_100%)] py-9 sm:py-16">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(149,18,160,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(149,18,160,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-[#D9D9FF]/80 blur-3xl" />
          <div className="absolute bottom-[-18%] left-[-8%] h-64 w-64 rounded-full bg-[#F2B84B]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
            <div className="rounded-[24px] border border-white/80 bg-white/[0.82] p-4 shadow-[0_18px_56px_rgba(149,18,160,0.1)] backdrop-blur-xl sm:rounded-[30px] sm:p-8 sm:shadow-[0_24px_80px_rgba(149,18,160,0.12)] lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9512A0]/25 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#9512A0] shadow-sm sm:px-4 sm:py-2 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {eyebrow}
              </span>
              <h1 className="mt-3 max-w-4xl text-[1.65rem] font-black leading-tight text-[#17111A] sm:mt-4 sm:text-4xl lg:text-[2.8rem]">
                {title}
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4A4552] sm:mt-5 sm:text-lg sm:leading-8">
                {description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                <HeroChip icon={Building2} label={LEGAL_COMPANY.brand} />
                <HeroChip icon={ShieldCheck} label={LEGAL_COMPANY.scope} />
                <HeroChip
                  icon={CalendarDays}
                  label={`Ultima actualizacion: ${LEGAL_COMPANY.lastUpdated}`}
                />
              </div>
            </div>

            <aside className="rounded-[24px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-4 shadow-[0_18px_56px_rgba(23,17,26,0.06)] sm:rounded-[30px] sm:p-8 sm:shadow-[0_24px_80px_rgba(23,17,26,0.08)]">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#9512A0] text-white shadow-[0_14px_34px_rgba(149,18,160,0.18)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#9512A0]">
                    Datos legales base
                  </p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-[#17111A]">
                    Campos listos para completar
                  </h2>
                </div>
              </div>

              <dl className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3">
                <InfoRow label="Titular" value={LEGAL_COMPANY.holder} />
                <InfoRow label="Nombre comercial" value={LEGAL_COMPANY.brand} />
                <InfoRow label="Actividad" value={LEGAL_COMPANY.activity} />
                <InfoRow label="Email" value={LEGAL_COMPANY.email} />
                <InfoRow label="Telefono" value={LEGAL_COMPANY.phone} />
                <InfoRow label="Domicilio social" value={LEGAL_COMPANY.address} />
                <InfoRow label="CIF / NIF" value={LEGAL_COMPANY.taxId} />
              </dl>

              <div className="mt-6 rounded-2xl border border-[#9512A0]/12 bg-white p-4">
                <p className="flex items-start gap-2 text-sm font-semibold leading-6 text-[#4A4552]">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9512A0]" aria-hidden="true" />
                  {LEGAL_COMPLETION_NOTE}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-9 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[22px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFBFF_100%)] p-4 shadow-[0_14px_40px_rgba(23,17,26,0.05)] sm:rounded-[28px] sm:p-8 sm:shadow-[0_18px_50px_rgba(23,17,26,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAEAFF] text-[#9512A0] sm:flex">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-[1.35rem] font-black leading-tight text-[#17111A] sm:text-[1.75rem]">
                        {section.title}
                      </h2>
                      <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-6 text-[#4A4552] sm:text-base sm:leading-8"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.bullets?.length ? (
                        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-2xl border border-[#D9D9FF]/80 bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#17111A]"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] pb-10 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[24px] border border-[#D9D9FF]/80 bg-white p-4 shadow-[0_18px_56px_rgba(149,18,160,0.06)] sm:rounded-[30px] sm:p-8 sm:shadow-[0_24px_80px_rgba(149,18,160,0.08)]">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9512A0]">
                Navegacion legal
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-[#17111A] sm:text-3xl">
                Otras paginas legales de la web
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#4A4552]">
                Estas paginas estan conectadas entre si para que el usuario pueda revisar
                con facilidad la informacion legal esencial del sitio.
              </p>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {LEGAL_RELATED_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-[24px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#9512A0]/28 hover:shadow-[0_18px_40px_rgba(149,18,160,0.08)]"
                  >
                    <p className="text-lg font-black text-[#17111A]">{link.label}</p>
                    <p className="mt-3 text-sm leading-6 text-[#4A4552]">
                      {link.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#9512A0]">
                      Ver pagina
                      <ArrowRight
                        className="h-4 w-4 transition duration-200 ease-out group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function HeroChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#9512A0]/12 bg-white px-3 py-1.5 text-xs font-semibold text-[#4A4552] shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
      <Icon className="h-3.5 w-3.5 text-[#9512A0] sm:h-4 sm:w-4" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#D9D9FF]/80 bg-white px-3.5 py-3 sm:rounded-2xl sm:px-4">
      <dt className="text-xs font-black uppercase tracking-[0.12em] text-[#9512A0]">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold leading-6 text-[#17111A]">{value}</dd>
    </div>
  );
}
