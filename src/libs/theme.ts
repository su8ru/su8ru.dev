import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/theme-tools/src/component";
import { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = {
  useSystemColorMode: true,
};

const _fontFamily =
  "Inter,'Helvetica Neue',Arial,'Hiragino Kaku Gothic ProN','Hiragino Sans',Meiryo,sans-serif";

const theme = extendTheme({
  config,
  styles: {
    global: (props: Dict | StyleFunctionProps) => ({
      body: {
        bg: mode("white", "#131516")(props),
      },
    }),
  },
  fonts: {
    heading: _fontFamily,
    body: _fontFamily,
  },
});

export default theme;
