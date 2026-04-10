<script setup>
import {reactive, ref, onUnmounted, onMounted, watch} from 'vue'
import CtxBG from "@/components/ctx_bg.vue";
import ShowHome from '@/components/show_home.vue';
import ShowSkills from '@/components/show_skills.vue';
import ShowProject from '@/components/show_project.vue';
import ShowExp from '@/components/show_exp.vue';
import ShowContact from "@/components/show_contact.vue"

let liList = reactive([
  {name: "首页", id: "show_home", icon: "iconfont icon-home"},
  {name: "技能", id: "show_skills", icon: "iconfont icon-html "},
  {name: "项目", id: "show_project", icon: "iconfont icon-xunzhang"},
  {name: "经历 ", id: "show_exp", icon: "iconfont icon-gongwenbao"},
  {name: "联系", id: "show_contact", icon: "iconfont icon-youjian"},
]);
let copyright = ref("刘彬")

const scrollToAnchor = (item) => {
  let element = document.getElementById(item.id);
  if (element) {
    element.scrollIntoView({behavior: "smooth"});
  }
}
let scrollTop = ref(0);
let scrollBox = ref();
const currentAnchor = ref('show_home');

const onScroll = () => {
  scrollTop.value = scrollBox.value.scrollTop;
}

watch(scrollTop, (val) => {
  for (const item of liList) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    const top = el.offsetTop;
    const height = el.offsetHeight;
    if (val >= top - 100 && val < top + height - 100) {
      currentAnchor.value = item.id;
      break;
    }
  }

})

onMounted(() => {
  scrollBox.value.addEventListener('scroll', onScroll);
  onScroll();
})

onUnmounted(() => {
  scrollBox.value.removeEventListener('scroll', onScroll);
})
</script>

<template>
  <div ref="scrollBox" class="outside-box">
    <div id="show_home" class="container show-home">
      <ShowHome/>
    </div>
    <div id="show_skills" class="container show-skills">
      <ShowSkills/>
    </div>
    <div id="show_project" class="container show-project">
      <ShowProject/>
    </div>
    <div id="show_exp" class="container show-exp">
      <ShowExp/>
    </div>
    <div id="show_contact" class="container show-contact">
      <ShowContact/>
    </div>
    <div style="color: #a0a0b4;">
      <CtxBG>
        <p
          style="display: flex; justify-content: center;font-size: .875rem"
        >© 2026 {{ copyright }}. Made with ❤️ using Vue + Nodejs</p>
      </CtxBG>
    </div>
  </div>
  <div class="navbar-box">
    <ul class="nav-bar">
      <li class="nav-item" v-for="item in liList" :key="item.id">
        <div
          class="nav-item-span"
          @click="() => scrollToAnchor(item)"
          :class="currentAnchor === item.id?'nav-item-span-active ':''"
        >
          <span :class="item.icon"></span>
          <span v-show="currentAnchor === item.id">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.outside-box {
  color: #f0f0ff;
}

.container {
  width: 100%;
}

.navbar-box {
  width: 100%;
  position: fixed;
  bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  list-style: none;
  padding: .5rem 1.5rem;
  border-radius: 500px;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  color: #a0a0b4;
  font-weight: 600;
  font-size: .875rem;
  background: #14142866;
  border: 1px solid #5050784d;
  box-shadow: 0 3px 24px 0 #8a2be280;
}

.nav-item-span {

  //height: 2.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .2rem;
  border: none;

}

.nav-item-span-active {
  color: #fff;
  background: linear-gradient(90deg, #8A2BE2, #00BFFF);
  padding: .5rem 1.5rem;
  border-radius: 50px;
}

.nav-item {
  display: inline-block;
  cursor: pointer;
}

.nav-item-span .iconfont {
  font-size: calc(.25rem * 6);
}

.outside-box {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

/* 滚动条容器 */
.outside-box::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* 滚动条轨道 */
.outside-box::-webkit-scrollbar-track {
  background: #1a1a2e;
  /* 深色轨道 */
}

/* 滚动条滑块 */
.outside-box::-webkit-scrollbar-thumb {
  background: #8a2be280;
  /* 紫黑渐变 */
  border-radius: 10px;
  border: 2px solid #1a1a2e;
  /* 与轨道同色，形成凹槽感 */
}
</style>