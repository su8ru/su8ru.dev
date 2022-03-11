module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "error",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { ignoreRestSiblings: true },
        ],
        "react/jsx-no-useless-fragment": "warn",
        "@next/next/no-img-element": "off",
      },
    },
  ],
};
