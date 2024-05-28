<script setup lang="ts">
import many_images from "./components/many_images.vue";
import card from "./components/card.vue";
import title_header from "./components/title_header.vue";
import example from "./components/example.vue";
import abstract from "./components/abstract.vue";
import citation from "./components/citation.vue";
import images from "./components/image-example.vue";
</script>

<template>
  <title_header></title_header>
  <a-divider />
  <!-- 摘要 -->
  <abstract></abstract>
  <a-divider />
  <!-- 总图 -->
  <!-- <div class="flex center margin">
    <img src="./assets/big_all.png" width="65%" />
  </div> -->
  <!-- 例子 -->
  <!-- <example></example> -->
  <images></images>
  <a-divider />
  <!-- 引用 -->
  <citation></citation>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
html, body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* 禁止页面水平滚动，防止白边 */
}

#app {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}

.title-header, .abstract, .images, .citation {
  padding: 0 10px; /* 增加左右内边距 */
}

@media (max-width: 768px) {
  .title-header, .abstract, .images, .citation {
    padding: 0 5px; /* 移动设备上减少左右内边距 */
  }

  .title-header {
    margin-bottom: 20px; /* 添加底部外边距以避免重叠 */
  }
}
</style>
