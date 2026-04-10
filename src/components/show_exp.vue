<script setup>
import {ref, reactive} from "vue";
import CtxBG from "@/components/ctx_bg.vue";
import CtxTitles from "@/components/ctx_titles.vue";

let bigTitle = ref("经历时光");
let smTitle = ref("从菜鸟到工程师的成长之路");
let timeline = ref([
  {
    position: "高级前端工程师",
    company: "办公厅",
    datetime: "2020-7 - 至今",
    address: "北海",
    groundWork: [
      "带领 8 人前端团队，负责公司核心业务线的技术架构设计与实施",
      "主导前端工程化体系建设，推动代码质量和开发效率提升",
      "参与技术选型和规范制定，建立完善的前端技术栈",
      "指导团队成员技术成长，开展定期技术分享",
    ],
    aboutWork: [
      "成功交付 3 个重点项目，用户满意度 95%+",
      "主导的性能优化使首屏加载速度提升 60%",
      "获得年度最佳团队奖",
      "培养 2 名初级工程师晋升为中级",
    ]
  },
  {
    position: "高级前端工程师",
    company: "办公厅",
    datetime: "2020-7 - 至今",
    address: "北海",
    groundWork: [
      "带领 8 人前端团队，负责公司核心业务线的技术架构设计与实施",
      "主导前端工程化体系建设，推动代码质量和开发效率提升",
      "参与技术选型和规范制定，建立完善的前端技术栈",
      "指导团队成员技术成长，开展定期技术分享",
    ],
    aboutWork: [
      "成功交付 3 个重点项目，用户满意度 95%+",
      "主导的性能优化使首屏加载速度提升 60%",
      "获得年度最佳团队奖",
      "培养 2 名初级工程师晋升为中级",
    ]
  },
  {
    position: "高级前端工程师",
    company: "办公厅",
    datetime: "2020-7 - 至今",
    address: "北海",
    groundWork: [
      "带领 8 人前端团队，负责公司核心业务线的技术架构设计与实施",
      "主导前端工程化体系建设，推动代码质量和开发效率提升",
      "参与技术选型和规范制定，建立完善的前端技术栈",
      "指导团队成员技术成长，开展定期技术分享",
    ],
    aboutWork: [
      // "成功交付 3 个重点项目，用户满意度 95%+",
      // "主导的性能优化使首屏加载速度提升 60%",
      // "获得年度最佳团队奖",
      // "培养 2 名初级工程师晋升为中级",
    ]
  },
  {
    position: "高级前端工程师",
    company: "办公厅",
    datetime: "2020-7 - 至今",
    address: "北海",
    groundWork: [
      "带领 8 人前端团队，负责公司核心业务线的技术架构设计与实施",
      "主导前端工程化体系建设，推动代码质量和开发效率提升",
      "参与技术选型和规范制定，建立完善的前端技术栈",
      "指导团队成员技术成长，开展定期技术分享",
    ],
    aboutWork: [
      "成功交付 3 个重点项目，用户满意度 95%+",
      "主导的性能优化使首屏加载速度提升 60%",
      "获得年度最佳团队奖",
      "培养 2 名初级工程师晋升为中级",
    ]
  },

]);
</script>

<template>
  <CtxBG>
    <CtxTitles :big-title="bigTitle" :sm-title="smTitle"/>
    <div class="timeline">
      <a-timeline>
        <a-timeline-item v-for="(item,key) in timeline" :key="key">
          <template #dot>
            <div class="timeline-dot"></div>
          </template>
          <div class="line-item-box">
            <div class="line-item-inner">
              <div class="lineitem-title">
                <div class="lineitem-title-icon">
                  <span class="iconfont icon-gongwenbao"></span>
                </div>
                <div class="lineitem-title-text">
                  <h4>{{ item.position }}</h4>
                  <p>{{ item.company }}</p>
                </div>
              </div>
              <div class="item-position-info">
                <div class="position-datetime">
                  <div class="position-datetime-inner">
                    <span class="iconfont icon-rili"></span>
                    <span>{{ item.datetime }}</span>
                  </div>
                  <div class="position-datetime-inner">
                    <span class="iconfont icon-dingwei"></span>
                    <span>{{ item.address }}</span>
                  </div>
                </div>
                <ul class="position-ground-list">
                  <li v-for="(it,ikey) in item.groundWork" :key="ikey">{{ it }}</li>
                </ul>
              </div>
              <div class="item-about-work" v-show="item.aboutWork.length > 0">
                <p class="title">主要成就:</p>
                <ul>
                  <li v-for="(at,akey) in item.aboutWork" :key="akey">{{ at }}</li>
                </ul>
              </div>
            </div>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </CtxBG>
</template>

<style scoped>
.timeline {
  display: flex;
  justify-content: center;
}

/* 全局时间轴容器样式 */
.ant-timeline {
  /* 深色背景，适配科技风 */
  background: #0a0a12;
  padding: 20px;
}

/* 覆盖 Ant Design 默认的时间轴竖线 */
.ant-timeline :deep(.ant-timeline-item-tail) {
  /* 紫蓝渐变竖线，从紫到蓝，垂直渐变 */
  background: linear-gradient(180deg,
  #2d1b55 0%,
  #1a3a5a 30%,
  #3a1a3a 100%);
  width: 2px;
  border-radius: 2px;
  border: none;
}

/* 自定义时间轴圆点 */
.timeline-dot {
  /* 圆形基础样式 */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* 紫蓝渐变背景，和竖线呼应 */
  background: linear-gradient(90deg, #9d27ff 0%, #00e0ff 100%);
  /* 发光光晕，模拟原图效果 */
  box-shadow: 0 0 15px 3px rgba(157, 39, 255, 0.6), 0 0 25px 5px rgba(0, 224, 255, 0.4);
  /* 居中对齐 */
  position: relative;
  top: 2px;
  opacity: .7;
  animation: huahuahua 2s ease-in-out infinite;
}
@keyframes huahuahua {
  0% {
    opacity: .7;
  }
  50% {
    opacity: .6;
  }
  50% {
    opacity: .5;
  }
}
.ant-timeline :deep(.ant-timeline-item-head) {
  background: transparent;
  border: none;
  padding: 0;
}

.ant-timeline :deep(.ant-timeline-item:last-child .ant-timeline-item-tail) {
  display: none;
}

.line-item-box {
  color: #f0f0ff;
  padding-left: 20px;
  list-style-position: inside;
}

.line-item-inner {
  padding: 24px;
  background: #14142866;
  border: 1px solid #5050784d;
  border-radius: 1rem;
  box-shadow: 0 3px 24px 0 #8a2be280;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.line-item-inner:hover {
  transform: translateY(-4px) scale(1.02);
}

@media (min-width: 992px) {
  .line-item-inner {
    width: 816px;
  }

}

@media (min-width: 769px) and (max-width: 991px) {
  .line-item-inner {
    width: calc(100vw - 128px);
  }
}

@media (max-width: 768px) {
  .line-item-inner {
    width: calc(100vw - 128px);
  }
}

.line-item-inner .lineitem-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: calc(.25rem * 4);
}

.line-item-inner .lineitem-title-icon {
  height: calc(.25rem * 10);
  width: calc(.25rem * 10);
  background: linear-gradient(90deg, #9d27ff 0%, #00e0ff 100%);
  border-radius: .75rem;
  display: flex;
  align-content: center;
  justify-content: center;
}

.line-item-inner .lineitem-title-icon span {
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: calc(.25rem * 6.5);
}

.line-item-inner .lineitem-title-text h4 {
  font-weight: 700;
  font-size: 1.125rem;
}

.line-item-inner .lineitem-title-text p {
  color: #00bfff;
  font-weight: 500;
  font-size: 0.875rem;
}

.line-item-inner .item-position-info {
  font-size: .875rem;
  color: #a0a0b4;
  //padding: 16px 0;
}

.item-position-info .position-datetime {
  gap: 20px;
}

.item-position-info .position-datetime .position-datetime-inner,
.item-position-info .position-datetime {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-position-info .position-datetime .position-datetime-inner {
  gap: 3px;
}

.item-position-info li::marker {
  color: #ff1493;
  margin-right: 15px;
}

.item-position-info .position-ground-list {
  padding: calc(.25rem * 4) 0;
  list-style-type: disc;
}

.line-item-inner .item-about-work {
  border-top: calc(.1rem) solid #5050784d;
  padding-top: calc(.25rem * 4);
}

.line-item-inner .item-about-work .title {
  color: #a0a0b4;
  font-size: .75rem;
  margin-bottom: calc(.25rem * 2);
}

.line-item-inner .item-about-work ul {
  list-style-type: disc;
}

.line-item-inner .item-about-work li {
  list-style-type: disc;
  color: #f0f0ff;
  font-size: .875rem;
}

.line-item-inner .item-about-work li::marker {
  color: gold;
}
</style>