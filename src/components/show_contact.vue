<script setup>
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";
import CtxBG from "@/components/ctx_bg.vue";
import CtxTitles from "@/components/ctx_titles.vue";

message.config({
  top: `35vh`,
  duration: 2,
  maxCount: 3,
  rtl: true,
});

let bigTitle = ref("让我们开始对话");
let smTitle = ref("寻找优秀的前端工程师？或是想要交流技术？随时欢迎联系我！");
let contactList = reactive([
  { name: "微信", value: "123", className: "iconfont icon-weixin" },
  { name: "电话", value: "456", className: "iconfont icon-dianhua" },
  { name: "邮箱", value: "789", className: "iconfont icon-youxiang" },
]);
const copyText = async (text, name) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      message.success(`new 复制成功：「${text}」 `);
    } else {
      const input = document.createElement("input");
      input.style.position = "fixed";
      input.style.opacity = "0";
      input.value = text;
      document.body.appendChild(input);
      input.select();

      input.setSelectionRange(0, input.value.length);
      const result = document.execCommand("copy");
      document.body.removeChild(input);
    }
    message.success(`old 复制成功：「${text}」 `);
  } catch (err) {
    message.error("new 复制失败，请重试！");
    console.error(err);
  }
};
</script>

<template>
  <CtxBG>
    <div class="container">
      <div class="contact-inner">
        <CtxTitles :big-title="bigTitle" :sm-title="smTitle" />
        <div class="contact-btns">
          <div
            class="btn"
            v-for="(item, index) in contactList"
            :key="index"
            @click="() => copyText(item.value, item.name)"
          >
            <span :class="item.className"></span>
            <div>{{ item.name }}</div>
          </div>
        </div>
        <div class="contact-tip">
          <p class="tip">
            通常会在 <span class="gradient-text">24 小时内</span> 回复 ⚡
          </p>
        </div>
      </div>
    </div>
  </CtxBG>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.contact-inner {
  padding: 24px;
  background: #14142866;
  border: 1px solid #5050784d;
  border-radius: 1rem;
  box-shadow: 0 3px 24px 0 #8a2be280;
}

@media (max-width: 768px) {
  .contact-inner {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .contact-inner {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .contact-inner {
    width: 991px;
  }
}

.contact-btns {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

.btn {
  background: linear-gradient(90deg, #8a2be2, #00bfff);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 14px 60px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-btns .btn .iconfont {
  font-size: calc(0.25rem * 5);
}

/* 按钮hover霓虹效果 */
.btn:hover {
  box-shadow: 0 3px 24px 0 #8a2be280;
  transform: translateY(-2px);
}

.contact-tip {
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #a0a0b4;
}

.contact-tip .tip {
  font-size: 0.875rem;
}
</style>
