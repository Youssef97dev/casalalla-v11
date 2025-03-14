/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_black: "var(--black)",
        color_white: "var(--white)",

        text_color: "var(--text-color)",
        border_color: "var(--border-color)",
        white_color: "var(--white)",
        bg_intro: "var(--bg-intro)",
        bg_casa: "var(--bg-body)",
        bg_contact: "var(--bg-contact)",
        bg_navbar: "var(--bg-navbar)",

        carte_btn: "var(--carte-btn)",
        book_btn: "var(--book-btn-1)",
        book_btn_hover: "var(--book-btn-2)",
        text_color: "var(--text-color)",
        casa_bg: "var(--bg-color)",
      },
    },
  },
  plugins: [],
};
