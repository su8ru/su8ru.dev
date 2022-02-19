import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/theme-tools/src/component";
import { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = {
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: Dict | StyleFunctionProps) => ({
      body: {
        bg: mode("white", "#131516")(props),
      },
    }),
  },
  colors: {},
});

export default theme;
