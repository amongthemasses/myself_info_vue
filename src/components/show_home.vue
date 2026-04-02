<script setup>
import Background from "@/components/background.vue";
import {reactive, onMounted, ref, onDeactivated} from "vue";

let infos = reactive({
  imgUrl: "/show_head.jpg",
  name: "刘彬",
  titleOne: "Nodejs前端工程师",
  titleTwo: "5年前端开发经验，专注于构建高性能、可维护的 Web 应用。热衷于探索新技术，追求代码质量与用户体验的完美平衡。",
  address: "中国-重庆",
  emailAddress: "amongthemasses@163.com",
  phoneNumber: "15809210150",
  githubUrl: "https://github.com/amongthemasses/nodejs",
  websiteUrl: "https://github.com/amongthemasses/nodejs",
})

const headImg = ref();
let timer = ref();
let onTop = ref(true);
let createAtoA = (src) => {
  let a = document.createElement("a");
  a.href = src;
  a.target = "_blank";
  a.click();
  a.remove();
}
onMounted(() => {
  timer.value = setInterval(() => {
    if (headImg.value) {
      if (onTop.value) {
        headImg.value.style.top = "-50px";
        onTop.value = false;
      } else {
        headImg.value.style.top = "0px";
        onTop.value = true;
      }
    }
  }, 2000)
})
onDeactivated(() => {
  clearTimeout(timer.value);
})
</script>

<template>
  <Background>
    <div class="show-home">
      <div class="image-box">
        <img ref="headImg" class="image-img" :src="infos.imgUrl"/>
      </div>
      <div>
        <h1 class="infos-name">{{ infos.name }}</h1>
      </div>
      <div class="infos-title-one-box">
        <h2 class="infos-title-one">{{ infos.titleOne }}</h2>
      </div>
      <div class="infos-title-two-box">
        <h4 class="infos-title-two">{{ infos.titleTwo }}</h4>
      </div>
      <ul class="infos-call">
        <li class="infos-call-item">
          <p class="infos-call-item-p">
            <span></span>
            <span class="infos-call-item-text">{{ infos.address }}</span>
          </p>
        </li>
        <li class="infos-call-item">
          <p class="infos-call-item-p">
            <span></span>
            <span class="infos-call-item-text">{{ infos.emailAddress }}</span>
          </p>
        </li>
        <li class="infos-call-item">
          <p class="infos-call-item-p">
            <span></span>
            <span class="infos-call-item-text">{{ infos.phoneNumber }}</span>
          </p>
        </li>
      </ul>
      <ul class="infos-link">
        <li class="infos-link-item" @click="()=>{ createAtoA(infos.websiteUrl)}">
          <span class="infos-link-item-span">
          </span>
        </li>
        <li class="infos-link-item" @click="()=>{ createAtoA(infos.githubUrl)}">
          <span class="infos-link-item-span"></span>
        </li>
      </ul>
    </div>
  </Background>
</template>

<style scoped>
.show-home {
  width: 100%;
  height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.image-box {
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-img {
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 50%;
  border: 2px solid #4c1096;
  box-shadow: 0 5px 24px #8a2be24d,
  0 5px 24px #8a2be24d,
  0 5px 24px #8a2be24d;
  transition: all 2s linear;
}

.infos-name {
  color: #f0f0ff;
  font-size: 3.75rem;
  text-shadow: 0 0 20px #8a2be2cc, 0 0 40px #8a2be266;
}

.infos-title-one-box {
  background: #14142866;
  border: 1px solid #5050784d;
  padding: 10px 25px;
  border-radius: 999px
}

.infos-title-one {
  font-size: 1.5rem;
  color: #00bfff
}

.infos-title-two-box {
  margin-top: 15px;
}

.infos-title-two {
  font-size: 1.125rem;
  color: #a0a0b4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.infos-call {
  margin-top: 15px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.infos-call-item {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0;
}

@media (max-width: 480px) {
  .infos-call {
    width: 75vw;
  }

  .infos-call-item {
    width: 50%;
  }
}

@media (min-width: 481px) and (max-width: 991px) {
  .infos-call {
    gap: 25px;
  }
}

@media (min-width: 992px) {
  .infos-call {
    gap: 25px;
  }
}

.infos-call-item-p {
  background: #14142866;
  border: 1px solid #5050784d;
  border-radius: 10px;
  padding: 6px 15px;
}

.infos-call-item-text {
  text-align: center;
  color: #f0f0ff;
  font-size: .875rem;
}

.infos-link {
  margin-top: 15px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.infos-link-item {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: #14142866;
  border: 1px solid #5050784d;
}
</style>