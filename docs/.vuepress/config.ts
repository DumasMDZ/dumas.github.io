import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Dumas's Blog",
  description: "Dumas's 的个人博客",

  base: "/",

  theme,
});
