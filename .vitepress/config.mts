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
        items: [{ text: "日本行log", link: "/2025/日本行log.md" }],
      },
      {
        text: "2026",
        items: [
          {
            text: "记录一下插件里面的坑",
            link: "/2026/记录一下插件里面的坑.md",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/PishoLu" }],
    markdown: {
      config: (md: any) => {
        md.use(mathjax3);
      },
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: any) => customElements.includes(tag),
        },
      },
    },
    mermaid: {},
  },
});
