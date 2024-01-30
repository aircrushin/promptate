<template>
    <PHeader></PHeader>
    <div class="container">
        <!-- <div class="top">
              <div class="input-box">
                <n-input type="text" class="search-input" placeholder="搜索..." />
                <div class="input-button">
                    <div class="close-icon"><CloseIcon/></div>
                    <div class="search-icon"><SearchIcon></SearchIcon></div>
                </div>
            </div>
        </div> -->
        <div class="feeds-page">
            <div class="channel-container">
                <div class="scroll-container channel-scroll-container">
                    <div class="content-container">
                        <div 
                            class="channel" 
                            :class="{ active: channel === activeChannel }"
                            v-for="channel in ['推荐', '写作辅助', 'IT/编程', '自助百科', '教育/学生', '语言/翻译', '学术/教师', '心理/社交']"
                            @click="setActiveChannel(channel)"
                        >
                            {{ channel }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="feeds-container">
                <Waterfall :list="filteredData" :width="320" :gutter="20" :hasAroundGutter="false" style="max-width: 1260px"
                    class="card-container">
                    <template #item="{ item, url, index }">
                        <div class="card">
                            <div class="footer">
                                <h2 class="title">{{ item.title }}</h2>
                                <p class="content"><span>{{ item.content }}</span></p>
                                <div class="author-wrapper">
                                    <a class="author">
                                        <img class="author-avatar" :src="url" />
                                        <span class="type">{{ item.type }}</span>
                                    </a>
                                    <span class="like-wrapper like-active" @click="copyToClipboard(item.content)">
                                        <CopyIcon style="width: 1em; height: 1em" />
                                        <span class="copy">
                                            复制
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </template>
                </Waterfall>
            </div>
            <div class="feeds-loading"></div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { Waterfall } from "vue-waterfall-plugin-next";
import PHeader from '../components/PHeader.vue'
import "vue-waterfall-plugin-next/dist/style.css";
import { ref, computed } from "vue";
import {
    CopyOutline as CopyIcon,
    CloseOutline as CloseIcon,
    SearchOutline as SearchOutline,
} from "@vicons/ionicons5";
import { comData } from '../data/community'
import copyToClipboard from '../utils/copy'

const activeChannel = ref('推荐'); 
const list = ref(comData) as any

const filteredData = computed(() => {
    if (activeChannel.value === '推荐') {
        return getRandomData();
    } else {
        return list.value.filter((item: { type: string; }) => item.type === activeChannel.value);
    }
});

function getRandomData() {
    const shuffled = list.value.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

function setActiveChannel(channel: string) {
    activeChannel.value = channel;
    // if (channel === '推荐') {
    //     filteredData.value = getRandomData();
    // }
}
</script>
  
<style lang="scss" scoped>
.icon {
    margin-left: 0;
    padding-left: 20px;
    font-size: 32px;
    cursor: pointer;
}

.container {
    max-width: 1728px;
    width: 100%;
    margin: auto;
    background-color: #fff;
    display: flex;
    overflow-x: hidden;

    .feeds-page {
        padding: 8px 24px;

        .channel-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            align-items: center;
            user-select: none;
            -webkit-user-select: none;

            .channel-scroll-container {
                backdrop-filter: blur(20px);
                background-color: transparent;
                width: calc(100vw - 24px);

                position: relative;
                overflow: hidden;
                display: flex;
                user-select: none;
                -webkit-user-select: none;
                align-items: center;
                font-size: 16px;
                color: rgba(51, 51, 51, 0.8);
                height: 40px;
                white-space: nowrap;
                height: 72px;

                .content-container::-webkit-scrollbar {
                    display: none;
                }

                .content-container {
                    gap: 10px;
                    display: flex;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                    color: rgba(51, 51, 51, 0.8);

                    .active {
                        font-weight: 600;
                        background: rgba(0, 0, 0, 0.03);
                        border-radius: 999px;
                        color: #333;
                    }

                    .channel {
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 0 16px;
                        cursor: pointer;
                        -webkit-user-select: none;
                        user-select: none;
                    }
                }
            }
        }

        .feeds-container {
            padding-top: 20px;
            position: relative;
            transition: width 0.5s;
            margin: 0 auto;

            .card {
                border: 1px solid #e0e0e0;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                margin: 1px;
            }

            .footer {
                padding: 12px;

                .title {
                    border-bottom: 1px solid black;
                }

                .content {
                    margin-bottom: 8px;
                    word-break: break-all;
                    display: -webkit-box;
                    overflow: hidden;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 140%;
                    padding: 5px;
                    color: #333;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 20; /* 指定显示的行数 */
                    margin-bottom: 100px;
                    text-align: left;
                }

                .author-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 20px;
                    color: rgba(51, 51, 51, 0.8);
                    font-size: 12px;
                    transition: color 1s;

                    .author {
                        display: flex;
                        align-items: center;
                        color: inherit;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-right: 12px;

                        .author-avatar {
                            margin-right: 6px;
                            width: 20px;
                            height: 20px;
                            border-radius: 20px;
                            border: 1px solid rgba(0, 0, 0, 0.08);
                            flex-shrink: 0;
                        }

                        .type {
                            font-size: 12px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }

                    .like-wrapper {
                        position: relative;
                        cursor: pointer;
                        display: flex;
                        align-items: center;

                        .copy {
                            margin-left: 2px;
                        }
                    }
                }
            }
        }
    }
}
</style>
  