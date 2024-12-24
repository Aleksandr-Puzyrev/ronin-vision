import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { montserrat } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./styles.module.css";
import { Suspense } from "react";
import Loading from "./loading";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <Script id="qoopler-script" strategy="afterInteractive">
        	{`
				(function (d, w) {
					const firstScript = d.getElementsByTagName("script")[0];
					if (!firstScript || !firstScript.parentNode) return;

					const script = d.createElement("script");
					script.type = "text/javascript";
					script.async = true;
					script.src = "https://qoopler.ru/index.php?ref=" + encodeURIComponent(d.referrer) + "&page=" + encodeURIComponent(w.location.href);

					firstScript.parentNode.insertBefore(script, firstScript);
				})(document, window);
			`}
        </Script>
        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
				(function(m,e,t,r,i,k,a) {
					m[i] = m[i] || function() {(m[i].a = m[i].a || []).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {
						if (document.scripts[j].src === r) { return; }
					}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
				})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

				ym(98503395, "init", {
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
				});
			`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98503395"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Header />
            <Suspense fallback={<Loading />}>
              <main className={styles.main}>{children}</main>
            </Suspense>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
