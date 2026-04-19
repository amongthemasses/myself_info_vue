<script setup>
import { ref, reactive } from "vue";
import CtxBg from "@/components/ctx_bg.vue";
import CtxTitles from "@/components/ctx_titles.vue";

let bigTitle = ref("精选项目");
let smTitle = ref("从构思到上线，每个项目都是一次技术与创意的碰撞");
let proList = reactive([
  {
    imgUrl: "/pj.png",
    tips: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    proName: "智能电商平台",
    proText:
      "基于 React + Next.js 构建的现代化电商解决方案，集成了 AI 推荐系统、实时库存管理和智能客服功能。",
    shows: [
      " 实现了完整的微前端架构",
      "首屏加载时间优化至 1.2s",
      "集成 AI 推荐引擎，转化率提升 35%",
      "日均处理 50 万+ 订单",
    ],
    proAddress: "www.baidu.com",
    githubUrl: "www.baidu.com",
  },
  {
    imgUrl: "/pj.png",
    tips: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    proName: "智能电商平台",
    proText:
      "基于 React + Next.js 构建的现代化电商解决方案，集成了 AI 推荐系统、实时库存管理和智能客服功能。",
    shows: [
      " 实现了完整的微前端架构",
      "首屏加载时间优化至 1.2s",
      "集成 AI 推荐引擎，转化率提升 35%",
      "日均处理 50 万+ 订单",
    ],
    proAddress: "www.baidu.com",
    githubUrl: "www.baidu.com",
  },
  {
    imgUrl: "/pj.png",
    tips: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    proName: "智能电商平台",
    proText:
      "基于 React + Next.js 构建的现代化电商解决方案，集成了 AI 推荐系统、实时库存管理和智能客服功能。",
    shows: [
      " 实现了完整的微前端架构",
      "首屏加载时间优化至 1.2s",
      "集成 AI 推荐引擎，转化率提升 35%",
      "日均处理 50 万+ 订单",
    ],
    proAddress: "www.baidu.com",
    githubUrl: "www.baidu.com",
  },
  {
    imgUrl: "/pj.png",
    tips: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "React",
      "Next.js",
      "TypeScript",
    ],
    proName: "智能电商平台",
    proText:
      "基于 React + Next.js 构建的现代化电商解决方案，集成了 AI 推荐系统、实时库存管理和智能客服功能。",
    shows: [
      " 实现了完整的微前端架构",
      "首屏加载时间优化至 1.2s",
      "集成 AI 推荐引擎，转化率提升 35%",
      "日均处理 50 万+ 订单",
    ],
    proAddress: "www.baidu.com",
    githubUrl: "www.baidu.com",
  },
]);
</script>

<template>
  <CtxBg>
    <CtxTitles :big-title="bigTitle" :sm-title="smTitle" />
    <div class="projects">
      <div class="projects-box">
        <div v-for="(item, key) in proList" :key="key" class="project">
          <div class="image-box">
            <img class="image-img" :src="item.imgUrl" />
            <ul class="image-tips">
              <li v-for="(it, ikey) in item.tips" :key="ikey" class="image-tip">
                <span>{{ it }}</span>
              </li>
            </ul>
          </div>
          <div class="info-box">
            <h3 class="info-title">{{ item.proName }}</h3>
            <p class="info-text">{{ item.proText }}</p>
            <ul class="info-tips">
              <li
                class="info-tip"
                v-for="(text, tkey) in item.shows"
                :key="tkey"
              >
                {{ text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CtxBg>
</template>

<style scoped>
.projects {
  width: 100%;
  display: flex;
  justify-content: center;
}

.projects-box {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 1149px) {
  .projects-box {
    width: 1125px;
    gap: 30px;
  }

  .project {
    width: calc(33% - 17px);
  }
}

@media (min-width: 768px) and (max-width: 1148px) {
  .projects-box {
    width: 100%;
    gap: 30px;
  }

  .project {
    width: calc(50% - 15px);
  }
}

@media (max-width: 767px) {
  .projects-box {
    width: 100%;
    gap: 30px;
  }

  .project {
    width: 100%;
  }
}

.project {
  border-radius: 1rem;
  background: #14142866;
  border: 1px solid #5050784d;
  box-shadow: 0 8px 24px 0 #8a2be24d;
  overflow: hidden;
  /* //padding: calc(.25rem * 6); */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.project:hover {
  transform: translateY(-6px) scale(1.02);
}

.image-box {
  width: 100%;
  height: 192px;
  overflow: hidden;
  position: relative;
}

.image-img {
  width: 100%;
}

.image-tips {
  width: 100%;
  /* //height: 100%; */
  list-style: none;
  gap: 10px;
  padding: 15px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
}

.image-tip {
  font-size: 0.75rem;
  font-weight: 500;
  background: #8a2be2;
  border-radius: 50px;
  padding: 4px 15px;
}

.info-box {
  padding: 24px;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.info-text {
  margin-bottom: 15px;
  color: #a0a0b4;
  font-size: 0.875rem;
}

.info-tips {
  list-style-position: inside;
}

.info-tip {
  margin-bottom: 8px;
  color: #a0a0b4;
  font-size: 0.875rem;
}

.info-tip::marker {
  color: #ff1493;
}
</style>
