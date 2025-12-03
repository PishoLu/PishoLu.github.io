import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import { withMermaid } from "vitepress-plugin-mermaid";

const customElements = ["mjx-container"];
// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "PishoLu Blog",
  description: "个人Blog站",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "2025",
        items: [
          {
            text: "关于内存在JS中的用法",
            link: "/2025/关于内存在JS中的用法.md",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/PishoLu" }],
    markdown: {
      config: (md) => {
        md.use(mathjax3);
      },
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag),
        },
      },
    },
    mermaid: {},
  },
});
