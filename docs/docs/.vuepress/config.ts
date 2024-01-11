import { defaultTheme, defineUserConfig } from "vuepress";
import { Sidebar } from './sidebar'

export default defineUserConfig({
  theme: defaultTheme({
    // ...其他配置...
    repo: "https://gitee.com/ultrav/promptate",
    repoLabel: "Gitee",
    editLink: false,
    editLinkText: "编辑此页",
    editLinkPattern: "",
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: "更新时间",
    contributors: false,
    contributorsText: "贡献者",
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    backToHome: "返回首页",

    // a11y
    openInNewWindow: "在新窗口打开",
    //@ts-ignore
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
    // sidebar 配置
    // @ts-ignore
    sidebar: Sidebar
    // ...其他配置...
  }),
  title: "PROMPTATE",
  
});
