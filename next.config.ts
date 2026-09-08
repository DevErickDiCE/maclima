import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El apex y el www servían los dos con 200: la web entera era alcanzable en
  // dos direcciones, repartiendo la autoridad de los enlaces entre ambas y
  // gastando rastreo por duplicado. El canónico es www, como en el resto de
  // proyectos, y el apex redirige aquí de forma permanente.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "maclimasolucionesenergeticas.com" }],
        destination: "https://www.maclimasolucionesenergeticas.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
