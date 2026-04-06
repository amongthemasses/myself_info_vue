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
  background: linear-gradient(135deg,
      #2d1b55 0%,
      #1a3a5a 30%,
      #3a1a3a 100%);
  animation: bg-breathe 3s ease-in-out infinite;
}

@keyframes bg-breathe {

  0%,
  100% {
    filter: brightness(0.9);
  }

  50% {
    filter: brightness(1.15);
  }
}
</style>