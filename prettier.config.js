/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 *
 * https://github.com/tailwindlabs/prettier-plugin-tailwindcss
 */

const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  tailwindPreserveWhitespace: true,
  tailwindPreserveDuplicates: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
