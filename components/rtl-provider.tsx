import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtl from "stylis-plugin-rtl";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const options = {
  rtl: { key: "css-fa", stylisPlugins: [rtl] },
  ltr: { key: "css-en" },
};

export function RtlProvider({ children }: { children: ReactNode }) {
  const { locale } = useRouter();
  const cache = createCache(options["rtl"]);
  return <CacheProvider value={cache} children={children} />;
}
