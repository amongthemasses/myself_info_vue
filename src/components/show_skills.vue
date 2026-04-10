<script setup>
import {ref, reactive} from "vue";
import CtxTitles from "@/components/ctx_titles.vue";
import CtxBG from "@/components/ctx_bg.vue";

let bigTitle = ref("技能图谱");
let smTitle = ref("掌握多项现代前端技术，持续学习与进步");
let ctxList = reactive(
  [
    {
      title: "前端技术",
      iconClass: "iconfont icon-html ",
      iconStyle: "linear-gradient(135deg, #9d20ff 0%, #00e0ff 100%)",
      lineStyle: {"0%": "#9d20ff", "100%": "#00e0ff"},
      list: [
        {leftTip: "Vue", value: 95,},
        {leftTip: "React", value: 95,},
        {leftTip: "Umi", value: 95,},
        {leftTip: "TypeScript", value: 95,},
        {leftTip: "HTML5", value: 95,},
      ]
    },
    {
      title: "后端技术",
      iconClass: "iconfont icon-shujuku_jurassic",
      iconStyle: "linear-gradient(135deg, #00e0ff 0%, #ff2e92 100%)",
      lineStyle: {"0%": "#00e0ff", "100%": "#ff2e92"},
      list: [
        {leftTip: "Nodejs", value: 95,},
        {leftTip: "Koa", value: 95,},
        {leftTip: "Express", value: 95,},
        {leftTip: "Mysql", value: 95,},
        {leftTip: "Redis", value: 95,},
      ]
    },
    {
      title: "开发工具",
      iconClass: "iconfont icon-banshou",
      iconStyle: "linear-gradient(135deg, #ff2e92 0%, #9d20ff 100%)",
      lineStyle: {"0%": "#ff2e92", "100%": "#9d20ff"},
      list: [
        {leftTip: "Git", value: 95,},
        {leftTip: "Docker", value: 95,},
        {leftTip: "Liunx", value: 95,},
        {leftTip: "VsCode", value: 95,},
      ]
    },
    {
      title: "软技能",
      iconClass: "iconfont icon-tuandui",
      iconStyle: "linear-gradient(135deg, #FFD600 0%, #00C483 100%)",
      lineStyle: {"0%": "#FFD600", "100%": "#00C483"},
      list: [
        {leftTip: "团队协作", value: 95,},
        {leftTip: "问题解决", value: 95,},
        {leftTip: "项目管理", value: 95,},
      ]
    }
  ]
)
</script>

<template>
  <CtxBG>
    <CtxTitles :big-title="bigTitle" :sm-title="smTitle"/>
    <div class="ctx">
      <div class="ctx-box">
        <div v-for="(item, key) in ctxList" :key="key" class="ctx-cart">
          <div class="ctx-cart-title">
            <div :style="{ background: item.iconStyle }" class="ctx-cart-title-icon-box">
              <i class=" ctx-cart-title-icon " :class="item.iconClass"></i>
            </div>
            <h3 class="ctx-cart-title-text">{{ item.title }}</h3>
          </div>
          <div>
            <div v-for="(it, ikey) in item.list" :key="ikey">
              <div class="cart-line-text-box">
                <span class="line-text-left">{{ it.leftTip }}</span>
                <span class="line-text-right">{{ it.value }}%</span>
              </div>
              <a-progress :percent="it.value" :stroke-color="item.lineStyle" :show-info="false"
                          class="custom-progress"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CtxBG>
</template>

<style scoped>
.ctx {
  width: 100%;
  display: flex;
  justify-content: center;
}


@media (min-width: 1149px) {
  .ctx-box {
    width: 1125px;

    .ctx-cart {
      width: calc(50% - 15px);
    }
  }
}

@media (min-width: 768px) and (max-width: 1148px) {
  .ctx-box {
    width: 100%;
  }

  .ctx-cart {
    width: calc(50% - 15px);
  }
}

@media (max-width: 767px) {
  .ctx-box {
    width: 100%;
  }

  .ctx-cart {
    width: 100%;
  }
}

.ctx-box {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.ctx-cart {
  border-radius: 1rem;
  background: #14142866;
  border: 1px solid #5050784d;
  box-shadow: 0 8px 24px 0 #8a2be24d;
  padding: calc(.25rem * 6);
}

.ctx-cart-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.ctx-cart-title-icon-box {
  width: calc(.25rem * 10);
  height: calc(.25rem * 10);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .75rem;
  background: linear-gradient(90deg, #7a20ff 0%, #9d4edd 20%, #b066ff 35%, #87cefa 50%, #00f0ff 70%, #00e0ff 85%, #00f5ff 100%);
}

.ctx-cart-title-icon {
  font-size: calc(.25rem * 6);
}

.ctx-cart-title-text {
  font-size: 1.25rem;
  font-weight: 600;
}

.cart-line-text-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.line-text-left {
  font-weight: 500;
  font-size: .875rem;
}

.line-text-right {
  color: #a0a0b4;
  font-size: .75rem;
}

:deep(.ant-progress-inner) {
  background-color: #28283c;
  height: 8px;
}
</style>