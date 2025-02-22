import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurando o next para aceitar as imagens vindas desse host.
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },
};

export default nextConfig;
