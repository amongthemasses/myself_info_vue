<script setup>
import {ref} from "vue";
import {useRouter, useRoute} from "vue-router";
import Background from "@/components/background.vue";

let $router = useRouter();
let $route = useRoute();
let value = ref();
const onSearch = () => {
  $router.push("/match",)
}
</script>

<template>
  <Background>
    <div class="enter-box">
      <div class="enter-height-box">
        <div class="enter-input">
          <a-input-search
            v-model:value="value"
            placeholder="请输入手机号码"
            enter-button="查看简历"
            size="large"
            @search="onSearch"
          />
        </div>
      </div>
    </div>
  </Background>
</template>

<style scoped>
.enter-box {
  width: 100vw;
  height: 100vh;
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
}
</style>