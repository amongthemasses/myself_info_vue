<script setup>

</script>

<template>
  <div class="bg-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.bg-box {
  width: 100%;
  height: 100%;
  background: linear-gradient(125deg, #4c0344, #230b37, #1a022c, #4c0344);
  background-size: 600% 100%;
  animation: cyberGradient 15s ease infinite;
}

@keyframes cyberGradient {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 25% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 25% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>