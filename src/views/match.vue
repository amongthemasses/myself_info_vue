<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Background from "@/components/background.vue";

const $router = useRouter();
const $route = useRoute();

const onClickShow = () => {
  $router.push("/show");
};
const onClickSetting = () => {
  $router.push("/enter_code");
};
const goBack = () => {
  $router.back();
};
</script>

<template>
  <Background>
    <div class="body">
      <div class="bg-glow"></div>

      <div class="container">
        <div class="header">
          <h1>操作选项</h1>
          <p>请选择您需要的操作</p>
        </div>
        <div class="phone-info" id="phoneDisplay">
          当前手机号：<span id="phoneText">138****8888</span>
        </div>

        <div class="card">
          <div class="options-group">
            <a @click="onClickShow" class="option-btn view">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#06b6d4"
                stroke-width="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <div class="text">
                <div>查看简历</div>
                <div class="desc">查看完整的个人简历与技能图谱</div>
              </div>
            </a>
            <a @click="onClickSetting" class="option-btn edit">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ec4899"
                stroke-width="2"
              >
                <path
                  d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                ></path>
                <path
                  d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                ></path>
              </svg>
              <div class="text">
                <div>修改简历</div>
                <div class="desc">编辑更新个人简历信息</div>
              </div>
            </a>
          </div>
        </div>

        <div class="back-btn">
          <a @click="goBack">← 返回上一页</a>
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

/* 背景光效 */
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

/* 选项按钮组 */
.options-group {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  background: rgba(39, 39, 54, 0.6);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 12px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.option-btn:hover {
  background: rgba(39, 39, 54, 0.8);
  border-color: #a855f7;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.2);
  transform: translateX(4px);
}

.option-btn .icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.option-btn.view {
  border-left: 4px solid #06b6d4;
}

.option-btn.edit {
  border-left: 4px solid #ec4899;
}

.option-btn .text {
  flex: 1;
}

.option-btn .desc {
  font-size: 0.85rem;
  color: #a1a1aa;
  margin-top: 0.2rem;
}

/* 返回按钮 */
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
  color: #a855f7;
}

/* 底部导航 */
.nav-bar {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(23, 23, 35, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 20px;
  padding: 0.8rem 1.5rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.75rem;
  transition: all 0.3s ease;
}

.nav-item.active {
  color: #a855f7;
}

.nav-item svg {
  width: 20px;
  height: 20px;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }

  .container {
    padding: 1.5rem;
  }

  .card {
    padding: 2rem 1.5rem;
  }
}
</style>
