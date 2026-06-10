import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, MessageCircle, Tag } from "lucide-react";
import { BenDualLaunchSection } from "@/components/blog/ben-dual-launch-section";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { CONTACT_INFO } from "@/lib/contact-info";

const BEN_DUAL_SLUG = "ben-dual-air-aerotermia-sin-unidad-exterior";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site-config";
import {
  formatDateEs,
  getAllPosts,
  getPostBySlug,
  renderMarkdown,
} from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Artículo no encontrado",
      robots: { index: false, follow: false },
    };
  }
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image ? `${SITE_URL}${post.image}` : DEFAULT_OG_IMAGE.url;
  const metaTitle = post.seoTitle ?? post.title;
  return {
    title: metaTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: post.description,
      url,
      locale: "es_ES",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.contentMd);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image ? `${SITE_URL}${post.image}` : DEFAULT_OG_IMAGE.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Maclima Soluciones Energéticas",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Maclima Soluciones Energéticas",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white">
        <article>
          {/* Encabezado */}
          <header className="border-b border-[#E6E0F5] bg-[#F7F5FB]">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#9512A0] transition duration-200 ease-out hover:gap-2"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Volver al blog
              </Link>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAEAFF] px-2.5 py-1 text-[#9512A0]">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#6B6275]">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDateEs(post.date)}</time>
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-[#17111A] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              {post.description ? (
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#4A4552] sm:text-lg">
                  {post.description}
                </p>
              ) : null}
            </div>
          </header>

          {/* Imagen destacada */}
          {post.image ? (
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="relative -mt-1 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E6E0F5] bg-[#EAEAFF] shadow-[0_14px_40px_rgba(23,17,26,0.07)] sm:-mt-2">
                <Image
                  src={post.image}
                  alt="BEN Dual-Air sistema de aerotermia interior sin unidad exterior"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                />
              </div>
            </div>
          ) : null}

          {/* Sección de lanzamiento (solo BEN Dual-Air) */}
          {post.slug === BEN_DUAL_SLUG ? (
            <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
              <BenDualLaunchSection />
            </div>
          ) : null}

          {/* Contenido */}
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div
              className="prose prose-neutral max-w-none"
              // Renderizado servidor: el markdown lo controlamos nosotros (no input usuario).
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* CTA final */}
            <div className="mt-12 rounded-2xl border border-[#E6E0F5] bg-[#F7F5FB] p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9512A0]">
                ¿Hablamos?
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#17111A] sm:text-2xl">
                Te ayudamos a valorar la mejor solución para tu vivienda
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#4A4552] sm:text-base">
                Revisamos las condiciones reales de tu inmueble y te recomendamos
                el sistema que mejor encaja, sin compromiso.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/consultoria-gratuita"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(149,18,160,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81]"
                >
                  Pedir consultoría gratuita
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D3C5E5] bg-white px-5 py-3 text-sm font-bold text-[#17111A] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#9512A0]"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
