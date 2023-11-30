import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2T6VQ7F67C"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-2T6VQ7F67C');`,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
