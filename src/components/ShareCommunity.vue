<template>
    <n-modal v-model:show="showModal" class="custom-card" preset="card" :style="bodyStyle" title="分享你的提示词" size="huge"
        :bordered="false" :segmented="segmented">
        <n-form ref="formRef" :model="model" :rules="rules">
            <n-form-item label="标题" path="title">
                <n-input v-model:value="model.title" placeholder="请输入标题" />
            </n-form-item>
            <n-form-item label="类型" path="type">
                <n-select v-model:value="model.type" placeholder="请选择..." :options="options" />
            </n-form-item>
            <n-form-item label="内容" path="content">
                <n-input type="textarea" placeholder="请输入提示词内容" v-model:value="model.content" />
            </n-form-item>
            <n-row :gutter="20">
                <n-col :span="12">
                    <n-button type="primary" block @click="submitClick">提交</n-button>
                </n-col>
                <n-col :span="12">
                    <n-button block @click="resetForm">重置</n-button>
                </n-col>
            </n-row>
        </n-form>
    </n-modal>
    <button class="add-data-btn" @click="showModal = true">🙏 分享提示词</button>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { addShareData } from '../api'
import { useToast } from 'vue-toast-notification';

const bodyStyle = {
    width: '600px'
}

const segmented = {
    content: 'soft',
    footer: 'soft'
} as const

const toast = useToast();
const showToast = () => {
    toast.open({
        message: '分享成功，请等待管理员审核!',
        type: 'info',
        position: 'top',
        duration: 2000
    });
};

const showModal = ref(false)

const formRef = ref()

const model = reactive({
    type: '写作辅助',
    content: "",
    title: ''
})

const options = [
    {
        "value": "写作辅助",
        "label": "写作辅助"
    },
    {
        "value": "IT/编程",
        "label": "IT/编程"
    },
    {
        "value": "自助百科",
        "label": "自助百科"
    },
    {
        "value": "教育/学生",
        "label": "教育/学生"
    },
    {
        "value": "语言/翻译",
        "label": "语言/翻译"
    },
    {
        "value": "学术/教师",
        "label": "学术/教师"
    },
    {
        "value": "心理/社交",
        "label": "心理/社交"
    }
]


const rules = {
    content: [
        { required: true, message: '请输入标题', trigger: 'blur' }
    ],
    title: [
        { required: true, message: '请输入提示词内容', trigger: 'blur' }
    ]
};

function submitClick() {
    formRef.value.validate((errors: any) => {
        if (!errors) {
            addShareData(model.title, model.content, model.type)
            console.log('表单提交', model);
            showToast()
            showModal.value = false
        } else {
            console.log('验证失败', errors);
        }
    });
}
function resetForm() {
    model.type = "写作辅助"
    model.content = ''
    model.title = ''
}
</script>

<style scoped>
.add-data-btn {
    margin-left: 10px;
    color: black;
    background-color: #eee;
}
</style>