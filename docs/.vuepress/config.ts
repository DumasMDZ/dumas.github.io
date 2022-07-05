import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Dumas's Lib",
  description: "Dumas's 的个人知识库",

  base: "/",

  theme,
});
