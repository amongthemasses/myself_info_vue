<script setup>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import Background from "@/components/background.vue";

const $router = useRouter();
const $route = useRoute();

let value = ref();
let regCode = ref(true);
const onButton = () => {
  $router.push("/setting");
}
const goBack = () => {
  $router.back()
}
</script>

<template>
  <Background>
    <div class="body">
      <div class="bg-glow"></div>
      <div class="container">
        <div class="header">
          <h1>{{ regCode ? "修改验证" : "初次设置编码" }}</h1>
          <p>{{ regCode ? "请输入修改编码，验证通过后可编辑简历" : "请设置修改编码，设置成功后可编辑简历" }}</p>
        </div>

        <div class="phone-info" id="phoneDisplay">
          当前手机号：<span id="phoneText">138****8888</span>
        </div>

        <div class="card">
          <div class="form-group">
            <label for="editCode">修改编码</label>
            <div class="input-wrapper">
              <input
                type="text"
                id="editCode"
                placeholder="请输入6位修改编码"
                maxlength="6"
                required
              >
            </div>
          </div>
          <button class="btn-primary">{{ regCode ? "确认验证" : "确认设置" }}</button>
        </div>
        <div class="back-btn">
          <a @click="goBack">← 返回选项页</a>
        </div>
      </div>
    </div>
  </Background>
</template>

<style scoped>
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow-x: hidden;
}

.bg-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
  radial-gradient(circle at 80% 70%, rgba(255, 0, 127, 0.15) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 500px;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #a855f7, #ec4899, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
  text-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.header p {
  font-size: 1rem;
  color: #a1a1aa;
  line-height: 1.6;
}

.phone-info {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #a855f7;
  font-size: 1rem;
}

.card {
  background: rgba(23, 23, 35, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
  0 0 30px rgba(168, 85, 247, 0.2);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
  0 0 40px rgba(168, 85, 247, 0.3);
  transform: translateY(-2px);
}

.form-group {
  margin-bottom: 1.8rem;
}

.form-group label {
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: #d4d4d8;
  margin-bottom: 0.6rem;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 1rem 1.2rem;
  background: rgba(39, 39, 54, 0.6);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
}

.input-wrapper input::placeholder {
  color: #71717a;
}

.input-wrapper input:focus {
  border-color: #ec4899;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.2);
  background: rgba(39, 39, 54, 0.8);
}

.btn-primary {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #ec4899, #a855f7);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
}

.back-btn {
  margin-top: 2rem;
  text-align: center;
}

.back-btn a {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.back-btn a:hover {
  color: #ec4899;
}

.tip {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #71717a;
}
</style>