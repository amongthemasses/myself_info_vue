<script setup>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';

const $router = useRouter();
const $route = useRoute();

let value = ref();
let showInput = ref(false);
const onButton = () => {
  $router.push("/setting");
}
</script>

<template>
  <div class="enter-box">
    <div class="enter-height-box">
      <div class="enter-input" v-if="showInput">
        <a-input-search
          v-model:value="value"
          placeholder="请输入修改编码"
          enter-button="确认编码"
          size="large"
          @search="onButton"
        />
      </div>
      <div class="enter-input" v-if="!showInput">
        <a-input-search
          v-model:value="value"
          placeholder="请设置修改编码"
          enter-button="设置编码"
          size="large"
          @search="onButton"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.enter-box {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(125deg, #0c090c, #1c061c, #2a0330);
}

.enter-height-box {
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.enter-input {
  width: 300px;
  box-shadow: #2a0330 1px 1px 1px 1px;
}
</style>