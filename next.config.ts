import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El apex y el www servían los dos con 200: la web entera era alcanzable en
  // dos direcciones, repartiendo la autoridad de los enlaces entre ambas y
  // gastando rastreo por duplicado.
  //
  // Se consolida en el apex, que es lo que esta web ya declara en su canonical
  // y lo que Google tiene indexado. Mover el canónico a www habría sido una
  // migración de dominio sobre un sitio posicionado, sin ninguna ganancia.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.maclimasolucionesenergeticas.com" }],
        destination: "https://maclimasolucionesenergeticas.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
