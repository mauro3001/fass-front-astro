/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro"],
    trailingComma: "all",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    printWidth: 140,
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};