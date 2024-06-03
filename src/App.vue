<script setup lang="ts">
import title_header from "./components/title_header.vue";
import example from "./components/example.vue";
import abstract from "./components/abstract.vue";
import citation from "./components/citation.vue";
import images from "./components/image-example.vue";
import approach from "./components/approach.vue";
import compare from "./components/compare.vue"
import vedio from "./components/vedio.vue";
</script>

<template>
  <title_header></title_header>
  <a-divider />
  <!-- 摘要 -->
  <abstract></abstract>
  <a-divider />
  <!-- 总图 -->
  <approach></approach>
  <a-divider />
  <vedio></vedio>
  <a-divider />
  <!-- 例子图片 -->
  <images></images>
  <a-divider />
  <!-- 对比 -->
  <compare></compare>
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

.title-header, .abstract, .images, .citation .approach {
  padding: 0 10px; /* 增加左右内边距 */
}

@media (max-width: 768px) {
  .title-header, .abstract, .images, .citation .approach {
    padding: 0 5px; /* 移动设备上减少左右内边距 */
  }

  .title-header {
    margin-bottom: 20px; /* 添加底部外边距以避免重叠 */
  }
}
</style>
