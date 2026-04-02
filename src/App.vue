<script setup>
import {RouterView} from "vue-router";
</script>

<template>
  <RouterView></RouterView>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 767px) {
  html {
    font-size: 12px;
  }
}


@media (min-width: 768px) and (max-width: 991px) {
  html {
    font-size: 14px;
  }
}


@media (min-width: 992px) {
  html {
    font-size: 16px;
  }
}
</style>
