
<template>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" responsive class="menu" />
</template>

  
<script lang="ts">
import { defineComponent, h, ref, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
    BookOutline as BookIcon,
    GameControllerOutline as GameIcon,
    LaptopOutline as WorkIcon,
    LogOutOutline as HomeIcon
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                'a',
                {
                    href: 'https://gitee.com/ultrav/promptate',
                    target: '_blank',
                    rel: 'noopenner noreferrer'
                },
                'Github'
            ),
        key: 'Github',
        icon: renderIcon(BookIcon)
    },
    {
        label: '生成器',
        key: 'generator',
        icon: renderIcon(GameIcon),
        children: [
            {
                label: 'ChatGPT',
                key: 'ChatGPT'
            },
            {
                label: 'Midjourney',
                key: 'Midjourney'
            },
        ]
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/about'
                    }
                },
                { default: () => '关于' }
            ),
        key: 'about',
        icon: renderIcon(HomeIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/main'
                    }
                },
                { default: () => '工作区' }
            ),
        key: 'main',
        icon: renderIcon(WorkIcon)
    },
]

export default defineComponent({
    setup() {
        return {
            activeKey: ref<string | null>(null),
            menuOptions
        }
    }
})
</script>

<style scoped>
.menu {
    width: 100%;
}

.menu:hover {
    transition: all 0.5s ease-out;
    transform: scale(1.01);
    box-shadow: 0 1px 2px white
  }
</style>