<script setup>
import {ref, reactive} from 'vue'

let liList = reactive([
  {name: "首页", id: "show_home"},
  {name: "技能", id: "show_skills"},
  {name: "项目", id: "show_project"},
  {name: "经历 ", id: "show_exp"},
  {name: "联系", id: "show_contact"},
]);

const scrollToAnchor = (item) => {
  let element = document.getElementById(item.id);
  if (element) {
    element.scrollIntoView({behavior: "smooth"});
  }
}
</script>

<template>
  <div>
    <div id="show_home" class="container show-home">1</div>
    <div id="show_skills" class="container show-skills">2</div>
    <div id="show_project" class="container show-project">3</div>
    <div id="show_exp" class="container show-exp">4</div>
    <div id="show_contact" class="container show-contact">5</div>
  </div>
  <div class="navbar-box">
    <ul class="nav-bar">
      <li class="nav-item" v-for="item in liList" :key="item.id">
        <div class="nav-item-span" @click="()=>scrollToAnchor(item)">{{ item.name }}</div>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
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
</style>