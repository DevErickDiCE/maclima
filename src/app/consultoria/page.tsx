import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/consultoria-gratuita`,
  },
};

export { default } from "@/app/consultoria-gratuita/page";
