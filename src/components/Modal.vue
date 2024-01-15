<template>
    <div class="container">
        <n-modal v-model:show="showModal" title="登录/注册">
            <div class="form">
                <p>欢迎使用Promptate</p>
                <n-form ref="formRef" :model="formState" :rules="rules">
                    <n-form-item label="用户名" path="username">
                        <n-input v-model:value="formState.username" placeholder="请输入用户名" />
                    </n-form-item>
                    <n-form-item label="密码" path="password">
                        <n-input v-model:value="formState.password" placeholder="请输入密码" type="password" />
                    </n-form-item>
                    <!-- 注册时添加重复密码字段 -->
                    <n-form-item v-if="isRegistering" label="重复密码" path="repeatPassword">
                        <n-input v-model:value="formState.repeatPassword" placeholder="请再次输入密码" type="password" />
                    </n-form-item>
                    <div class="btnGroup">
                        <n-button @click="handleSubmit">{{ isRegistering ? '注册' : '登录' }}</n-button>
                    </div>
                </n-form>
                <div class="toggle-action" @click="toggleForm">
                    {{ isRegistering ? '已有账号？登录' : '没有账号？注册' }}
                </div>
            </div>
        </n-modal>
        <n-button @click="showModal = true" class="btn">登录</n-button>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { login, register } from '../api'

const showModal = ref(false);
const isRegistering = ref(false); // 新增状态
const formRef = ref();
const formState = ref({
    username: '',
    password: '',
    repeatPassword: '' // 仅在注册时使用
});

function checkPassword(value: string, callback: any) {
    if (value === formState.value.password) {
        callback();
    } else {
        callback(new Error('两次输入的密码不一致'));
    }
}

const rules = ref({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 12, message: '用户名长度必须在3到12个字符之间', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, message: '密码长度必须大于六位', trigger: 'blur' }
    ],
    repeatPassword: isRegistering.value ? [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: checkPassword, trigger: 'blur' }
    ] : []
});

const handleSubmit = () => {
    if (formRef.value) {
        formRef.value.validate((errors: any) => {
            if (!errors) {
                console.log('提交的数据', formState.value);
                let username = formState.value.username
                let password = formState.value.password
                if (!isRegistering.value) {
                    login(username, password).then((res) => {
                        console.log(res)
                        //@ts-ignore
                        window.onmessage!.success("登陆成功！");
                        setTimeout(() => {
                            showModal.value = false
                        }, 1000);
                    }).catch((err) => {
                        console.log(err.code)
                        //@ts-ignore
                        window.onmessage!.warning("账号或密码错误");
                    }
                    )
                } else {
                    register(username, password).then((res) => {
                        console.log(res)
                        //@ts-ignore
                        window.onmessage!.success("注册成功");
                        setTimeout(() => {
                            showModal.value = false
                        }, 1000);
                    }).catch((err) => {
                        console.log(err.code)
                        //@ts-ignore
                        window.onmessage!.warning("此账号已被注册");
                    }
                    )
                }

            }
            // 在这里添加提交表单的逻辑
        });
    } else {
        console.error('表单数据不存在');
    }
};

const toggleForm = () => {
    isRegistering.value = !isRegistering.value;
};
</script>

<style scoped lang="scss">
.btn {
    margin-left: 20px;
}

.container {
    display: flex;
    align-items: center;
    text-align: center;
}

p {
    text-align: center;
    font-size: 20px;
}

.form {
    background-color: white;
    width: 400px;
    padding: 20px 50px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btnGroup {
    display: flex;
    justify-content: center;
    gap: 16px;
    /* 这会在按钮之间创建16px的间隙 */
    button {
        width: 100px;
    }
}

.toggle-action {
    margin-top: 20px;
    text-align: center;
    color: #409eff;
    cursor: pointer;
}
</style>