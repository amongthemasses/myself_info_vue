<script setup>
// import {defineProps} from "vue"

defineProps({
  "bigTitle": String,
  "smTitle": String
})
</script>

<template>
  <div class="big-title-box">
    <h2 class="big-title">{{ bigTitle }}</h2>
    <p class="sm-title">{{ smTitle }}</p>
  </div>
</template>

<style scoped>
.big-title-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;;
}

.big-title {
  color: aliceblue;
  font-size: 2.25rem;
  text-shadow: rgba(138, 43, 226, 0.8) 0px 0px 20px, rgba(138, 43, 226, 0.4) 0px 0px 40px;
  margin-bottom: 15px;
}

.sm-title {
  color: #a0a0b4;
  font-size: 1.125rem;
  text-align: center;
}
</style>