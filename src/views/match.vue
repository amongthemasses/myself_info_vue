<script setup>
import {ref} from "vue";
import {useRouter, useRoute} from "vue-router";
import Background from "@/components/background.vue";

const $router = useRouter();
const $route = useRoute();

let showText = ref("查看简历");
let settingText = ref("创改简历");

const onClickShow = () => {
  $router.push("/show")
}
const onClickSetting = () => {
  $router.push("/enter_code")
}
</script>

<template>
  <Background>
    <div class="box">
      <div class="match-box">
        <div class="mid-box">
          <div class="match-c match-show">
            <img class="match-image" src="/shows.png" alt="">
            <a-button type="primary" v-on:click="onClickShow">{{ showText }}</a-button>
          </div>
          <div class="match-c match-setting">
            <img class="match-image" src="/setting.png" alt="">
            <a-button type="primary" v-on:click="onClickSetting">{{ settingText }}</a-button>
          </div>
        </div>
      </div>
    </div>
  </Background>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.match-box {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.mid-box {
  width: 425px;
  display: flex;
  //justify-content: space-between;
  justify-content: space-around;
}

.match-c {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid #5050784d;
  box-shadow: 0 0 10px #8a2be280, /* 外层淡蓝光晕 */ 0 4px 15px #8a2be280, /* 中层浅青阴影 */ inset 0 1px 0 #8a2be280; /* 内层高光，增加立体感 */
  position: relative;
}

.match-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
}

.match-show {

}
</style>