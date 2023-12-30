<template>
  <n-menu
    v-model:value="activeKey"
    mode="horizontal"
    :options="menuOptions"
    responsive
    class="menu"
  />
  <!-- <div class="IndexPage">
        <nav>
            <a class="logo" href="https://gitee.com/ultrav/promptate"><b>PROMPTATE</b>/FYH</a>
        </nav>
    </div> -->
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  BookOutline as BookIcon,
  GameControllerOutline as GameIcon,
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon,
} from "@vicons/ionicons5";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        "a",
        {
          href: "https://gitee.com/ultrav/promptate",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "Github"
      ),
    key: "Github",
    icon: renderIcon(BookIcon),
  },
  {
    label: "生成器",
    key: "generator",
    icon: renderIcon(GameIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/generator",
            },
            { default: () => "ChatGPT" }
          ),
        key: "ChatGPT",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: "/generator-mid",
            },
            { default: () => "Midjourney" }
          ),
        key: "Midjourney",
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/about",
          },
        },
        { default: () => "关于" }
      ),
    key: "about",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/main",
          },
        },
        { default: () => "工作区" }
      ),
    key: "main",
    icon: renderIcon(WorkIcon),
  },
];

export default defineComponent({
  setup() {
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
    };
  },
});
</script>

<style scoped lang="scss">
.IndexPage {
  float: right;
  > nav {
    font-size: 14px;
    padding-top: 11px;
    padding-bottom: 20px;
    padding-left: 23px;
    padding-right: 14px;
    .logo {
      font-family: "JetBrains Mono";
      color: #9f9f9f;
      text-shadow: 0 1px 1px #ffffff;
      place-items: center;
      font-weight: 200;
      place-content: flex-end;
      text-decoration: none;
    }
  }
}
.menu {
  cursor: pointer;
  float: right;
  width: 100%;
}
</style>
