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
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_54%,#EAEAFF_100%)] py-14 sm:py-16">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(133,14,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(133,14,136,0.06)_1px,transparent_1px)] [background-size:46px_46px]" />
          <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-[#D9D9FF]/80 blur-3xl" />
          <div className="absolute bottom-[-18%] left-[-8%] h-64 w-64 rounded-full bg-[#F2B84B]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
            <div className="rounded-[30px] border border-white/80 bg-white/[0.82] p-6 shadow-[0_24px_80px_rgba(133,14,136,0.12)] backdrop-blur-xl sm:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#850E88]/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#850E88] shadow-sm">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {eyebrow}
              </span>
              <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#17111A] sm:text-4xl lg:text-[2.8rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#5F5A66] sm:text-lg">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <HeroChip icon={Building2} label={LEGAL_COMPANY.brand} />
                <HeroChip icon={ShieldCheck} label={LEGAL_COMPANY.scope} />
                <HeroChip
                  icon={CalendarDays}
                  label={`Ultima actualizacion: ${LEGAL_COMPANY.lastUpdated}`}
                />
              </div>
            </div>

            <aside className="rounded-[30px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-6 shadow-[0_24px_80px_rgba(23,17,26,0.08)] sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#850E88] text-white shadow-[0_14px_34px_rgba(133,14,136,0.18)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#850E88]">
                    Datos legales base
                  </p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-[#17111A]">
                    Campos listos para completar
                  </h2>
                </div>
              </div>

              <dl className="mt-6 grid gap-3">
                <InfoRow label="Titular" value={LEGAL_COMPANY.holder} />
                <InfoRow label="Nombre comercial" value={LEGAL_COMPANY.brand} />
                <InfoRow label="Actividad" value={LEGAL_COMPANY.activity} />
                <InfoRow label="Email" value={LEGAL_COMPANY.email} />
                <InfoRow label="Telefono" value={LEGAL_COMPANY.phone} />
                <InfoRow label="Domicilio social" value={LEGAL_COMPANY.address} />
                <InfoRow label="CIF / NIF" value={LEGAL_COMPANY.taxId} />
              </dl>

              <div className="mt-6 rounded-2xl border border-[#850E88]/12 bg-white p-4">
                <p className="flex items-start gap-2 text-sm font-semibold leading-6 text-[#5F5A66]">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#850E88]" aria-hidden="true" />
                  {LEGAL_COMPLETION_NOTE}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[28px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFBFF_100%)] p-6 shadow-[0_18px_50px_rgba(23,17,26,0.06)] sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAEAFF] text-[#850E88]">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-2xl font-black leading-tight text-[#17111A] sm:text-[1.75rem]">
                        {section.title}
                      </h2>
                      <div className="mt-4 grid gap-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base leading-8 text-[#5F5A66]"
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

        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[30px] border border-[#D9D9FF]/80 bg-white p-6 shadow-[0_24px_80px_rgba(133,14,136,0.08)] sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#850E88]">
                Navegacion legal
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-[#17111A] sm:text-3xl">
                Otras paginas legales de la web
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F5A66]">
                Estas paginas estan conectadas entre si para que el usuario pueda revisar
                con facilidad la informacion legal esencial del sitio.
              </p>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {LEGAL_RELATED_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-[24px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#850E88]/18 hover:shadow-[0_18px_40px_rgba(133,14,136,0.08)]"
                  >
                    <p className="text-lg font-black text-[#17111A]">{link.label}</p>
                    <p className="mt-3 text-sm leading-6 text-[#5F5A66]">
                      {link.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#850E88]">
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
    <span className="inline-flex items-center gap-2 rounded-full border border-[#850E88]/12 bg-white px-4 py-2 text-sm font-semibold text-[#5F5A66] shadow-sm">
      <Icon className="h-4 w-4 text-[#850E88]" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#D9D9FF]/80 bg-white px-4 py-3">
      <dt className="text-xs font-black uppercase tracking-[0.12em] text-[#850E88]">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold leading-6 text-[#17111A]">{value}</dd>
    </div>
  );
}
