<script setup>
import { ref, reactive } from 'vue'
import ShowHome from '@/components/show_home.vue';
import ShowSkills from '@/components/show_skills.vue';

let liList = reactive([
  { name: "首页", id: "show_home" },
  { name: "技能", id: "show_skills" },
  { name: "项目", id: "show_project" },
  { name: "经历 ", id: "show_exp" },
  { name: "联系", id: "show_contact" },
]);

const scrollToAnchor = (item) => {
  let element = document.getElementById(item.id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div class="outside-box">
    <div id="show_home" class="container show-home">
      <ShowHome />
    </div>
    <div id="show_skills" class="container show-skills">
      <ShowSkills />
    </div>
    <div id="show_project" class="container show-project">3</div>
    <div id="show_exp" class="container show-exp">4</div>
    <div id="show_contact" class="container show-contact">5</div>
  </div>
  <div class="navbar-box">
    <ul class="nav-bar">
      <li class="nav-item" v-for="item in liList" :key="item.id">
        <div class="nav-item-span" @click="() => scrollToAnchor(item)">{{ item.name }}</div>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.container {
  width: 100%;
}

.navbar-box {
  width: 100%;
  position: fixed;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 25px;
}

.nav-item,
.nav-item-span {
  display: inline-block;
  cursor: pointer;
}

.outside-box {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

/* 滚动条容器 */
.outside-box::-webkit-scrollbar {
  width: 13px;
  height: 13px;
}

/* 滚动条轨道 */
.outside-box::-webkit-scrollbar-track {
  background: #1a1a2e;
  /* 深色轨道 */
}

/* 滚动条滑块 */
.outside-box::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #4c1096, #a115e8);
  /* 紫黑渐变 */
  border-radius: 10px;
  border: 2px solid #1a1a2e;
  /* 与轨道同色，形成凹槽感 */
}

/* 悬浮时的滑块 */
.outside-box::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #5a14b3, #b020f8);
}
</style>