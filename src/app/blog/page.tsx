import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";
import { formatDateEs, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Aerotermia, fotovoltaica y eficiencia energética",
  description:
    "Consejos sobre aerotermia, fotovoltaica, climatización y eficiencia energética para viviendas y negocios.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog de Maclima Soluciones Energéticas",
    description:
      "Consejos sobre aerotermia, fotovoltaica, climatización y eficiencia energética para viviendas y negocios.",
    url: `${SITE_URL}/blog`,
    locale: "es_ES",
    type: "website",
    images: [{ ...DEFAULT_OG_IMAGE, alt: "Blog de Maclima Soluciones Energéticas" }],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#F7F5FB]">
        {/* Hero */}
        <section className="border-b border-[#E6E0F5] bg-white">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9512A0]">
              Blog
            </p>
            <h1 className="mt-3 text-3xl font-bold text-[#17111A] sm:text-4xl lg:text-5xl">
              Blog de Maclima Soluciones Energéticas
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#4A4552] sm:text-lg">
              Consejos sobre aerotermia, fotovoltaica, climatización y eficiencia
              energética para viviendas y negocios.
            </p>
          </div>
        </section>

        {/* Lista */}
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-sm text-[#4A4552]">
              Próximamente publicaremos nuevos artículos. Vuelve pronto.
            </p>
          ) : (
            <ul className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6E0F5] bg-white shadow-[0_8px_24px_rgba(23,17,26,0.04)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#D3C5E5] hover:shadow-[0_14px_36px_rgba(23,17,26,0.08)]"
                    aria-label={`Leer artículo: ${post.title}`}
                  >
                    {post.image ? (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EAEAFF]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#EAEAFF] to-[#F7F5FB]" />
                    )}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-[#4A4552]">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAEAFF] px-2.5 py-1 text-[#9512A0]">
                          <Tag className="h-3 w-3" aria-hidden="true" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[#6B6275]">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          <time dateTime={post.date}>{formatDateEs(post.date)}</time>
                        </span>
                      </div>
                      <h2 className="mt-3 text-lg font-bold leading-snug text-[#17111A] sm:text-xl">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-[#4A4552]">
                        {post.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-[#9512A0] transition duration-200 ease-out group-hover:gap-3">
                        Leer artículo
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
