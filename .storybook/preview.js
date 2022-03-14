import React from "react";
import theme from "libs/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};

export const decorators = [
  (Story) => (
    <div style={{ maxWidth: "768px", margin: "auto" }}>
      <Story />
    </div>
  ),
];
