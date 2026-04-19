<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import Background from "@/components/background.vue";

let $router = useRouter();

message.config({
  top: `100px`,
  duration: 2,
  maxCount: 3,
  rtl: true,
  // prefixCls: 'my-message',
});
let phoneNumber = ref();
const submit = () => {
  const phone = phoneNumber.value;
  // 简单手机号校验
  if (!/^1[3-9]\d{9}$/.test(phone)) {
    // message.warning('请输入正确的11位手机号码');
    message.warning({
      content: () => "请输入正确的11位手机号码",
      class: "custom-class",
      style: {
        marginTop: "6vh",
      },
    });
  } else {
    $router.push({ path: "/match" });
  }
};
</script>

<template>
  <Background>
    <div class="body">
      <div class="bg-glow"></div>

      <div class="container">
        <div class="header">
          <h1>个人简历</h1>
          <p>请输入手机号码，查看我的完整简历</p>
        </div>
        <div class="card">
          <div class="form-group">
            <label for="phone">手机号码</label>
            <div class="input-wrapper">
              <input
                v-model="phoneNumber"
                type="tel"
                id="phone"
                placeholder="请输入11位手机号码"
                maxlength="11"
                required
              />
            </div>
          </div>
          <button @click="submit" type="submit" class="btn-primary">
            查看简历
          </button>
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
  background:
    radial-gradient(
      circle at 20% 30%,
      rgba(138, 43, 226, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(255, 0, 127, 0.15) 0%,
      transparent 50%
    );
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
  margin-bottom: 2.5rem;
}

.header h1 {
  font-size: 2.5rem;
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

/* 玻璃拟态卡片 */
.card {
  background: rgba(23, 23, 35, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(168, 85, 247, 0.2);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(168, 85, 247, 0.3);
  transform: translateY(-2px);
}

/* 表单样式 */
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
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
  background: rgba(39, 39, 54, 0.8);
}

.input-wrapper::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  transition: width 0.3s ease;
  border-radius: 0 0 12px 12px;
}

.input-wrapper input:focus + ::after {
  width: 100%;
}

/* 按钮样式 */
.btn-primary {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}
</style>
