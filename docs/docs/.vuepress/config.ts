import { defaultTheme, defineUserConfig } from 'vuepress'

export default {
    theme: defaultTheme({// 主题设置
        logo: '/images/logo.png',
        repo: 'https://github.com/bobo456123/VuepressDoc.git',
        repoLabel: 'GitHub',
        editLink: false,
        editLinkText: "编辑此页",
        editLinkPattern: "",
        sidebarDepth: 2,
        lastUpdated: true,
        lastUpdatedText: "更新时间",
        contributors: false,
        contributorsText: "贡献者",
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        //@ts-ignore
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
    }),
    config: defineUserConfig({
        lang: 'zh-CN',
        title: '你好， VuePress ！',
        description: '这是我的第一个 VuePress 站点',
      })
}
