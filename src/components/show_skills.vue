<script setup>
import { ref, reactive } from "vue";
let bigTitle = ref("技能图谱")
let obj = reactive({
  title: "掌握多项现代前端技术，持续学习与进步",
  list: [
    {
      title: "前端技术",
      iconClass: "iconfont icon-html",
      lineStyle: "",
      list: [
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" }
      ]
    },
    {
      title: "后端技术",
      iconClass: "iconfont icon-shujuku_jurassic",
      lineStyle: "",
      list: [
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" }
      ]
    },
    {
      title: "开发工具",
      iconClass: "iconfont icon-banshou",
      lineStyle: "",
      list: [
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" }
      ]
    },
    {
      title: "软技能",
      iconClass: "iconfont icon-tuandui",
      lineStyle: "",
      list: [
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" },
        { leftTip: "React", value: 0.95, rightTip: "95%" }
      ]
    }
  ]
})
</script>

<template>
  <div>
    <div>
      <span class="iconfont icon-7"></span>
      <h1>{{ bigTitle }}</h1>
    </div>
    <div>
      <h4></h4>
    </div>
    <div>
      <div>
        <p>
          <span></span>
        <h3></h3>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>