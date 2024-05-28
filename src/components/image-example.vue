<template>
    <a-typography-title class="title">Example</a-typography-title>
    <div class="image-grid">
      <a-space direction="vertical" align="center">
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[0]" :width="imageWidth" />
          <a-image :src="imageSrc[1]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[2]" :width="imageWidth" />
          <a-image :src="imageSrc[3]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[4]" :width="imageWidth" />
          <a-image :src="imageSrc[5]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[6]" :width="imageWidth" />
          <a-image :src="imageSrc[7]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[8]" :width="imageWidth" />
          <a-image :src="imageSrc[9]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[10]" :width="imageWidth" />
          <a-image :src="imageSrc[11]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[12]" :width="imageWidth" />
          <a-image :src="imageSrc[13]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[14]" :width="imageWidth" />
          <a-image :src="imageSrc[15]" :width="imageWidth" />
        </a-space>
        <a-space justify="center" :gutter="20">
          <a-image :src="imageSrc[16]" :width="imageWidth" />
          <a-image :src="imageSrc[17]" :width="imageWidth" />
        </a-space>
      </a-space>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        imageSrc: [
          "image/2024-03-05-2108-09.png",
          "image/2024-03-05-2314-35.png",
          "image/2024-03-05-2324-54.png",
          "image/2024-05-06-0857-43.png",
          "image/2024-05-06-1010-37.png",
          "image/2024-05-06-0912-46.png",
          "image/2024-05-06-0947-04.png",
          "image/2024-05-06-0953-23.png",
          "image/2024-05-06-0957-56.png",
          "image/2024-05-06-1002-09.png",
          "image/2024-05-06-1007-20.png",
          "image/2024-05-06-0906-56.png",
          "image/2024-05-06-1015-30.png",
          "image/2024-05-06-1025-11.png",
          "image/2024-05-06-1030-22.png",
          "image/2024-05-06-1037-08.png",
          "image/2024-05-06-1045-09.png",
          "image/2024-05-08-1136-11.png",
        ],
      };
    },
    computed: {
      imageWidth(): number {
        return window.innerWidth <= 768 ? 200 : 500;
      },
    },
    mounted() {
      window.addEventListener("resize", this.updateWidth);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.updateWidth);
    },
    methods: {
      updateWidth(): void {
        this.$forceUpdate();
      },
    },
  });
  </script>
  
  <style scoped>
  .title {
    align-items: center;
  }
  .image-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  