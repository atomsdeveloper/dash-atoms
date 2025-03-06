import type { NextConfig } from "next";
import nextI18Next from "./next-i18next.config.js";

const nextConfig: NextConfig = {
  // Configurando o next para aceitar as imagens vindas desse host.
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },
  i18n: nextI18Next.i18n,
};

export default nextConfig;
