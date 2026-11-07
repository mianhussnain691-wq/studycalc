"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

// /embed/* routes are meant to be dropped into someone else's page via an
// <iframe> — they get none of the site chrome, analytics, or cookies that
// every other page gets. Everything else renders exactly as before.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isEmbed = pathname?.startsWith("/embed/");

  if (isEmbed) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />

      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "StudyCalc",
            url: "https://www.studycalc.co",
          }),
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TJYSYBE39F"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TJYSYBE39F');
        `}
      </Script>

      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xnb6cd7sa5");
        `}
      </Script>
    </>
  );
}
