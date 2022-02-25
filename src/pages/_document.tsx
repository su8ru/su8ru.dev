import { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { config as themeConfig } from "libs/theme";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
        <Main />
        <div id="modal-portal" />
        <NextScript />
      </body>
    </Html>
  );
}
