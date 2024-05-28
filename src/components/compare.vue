<template>
    <a-typography-title class="title">Comparison with other methods</a-typography-title>
    <div class="image-container">          
        <el-image src="image/table1.png" class="table-image" />
    </div>
    <div class="container flex center column border f-start">
      <div class="border p-text margin text-justify">
        <a-typography-text>
          Quantitative comparison with state-of-art methods on DragBench. Here, lower MD indicates more precise drag results, while higher 1-LPIPS reflects greater similarity between the generated and original images. The time metric represents the average time required per point based on RTX 3090. Preparation denotes LoRA training. † means FastDrag without LCM-equipped U-Net.
        </a-typography-text>
      </div>
    </div>
  </template>
  
  <style scoped>
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .title {
    text-align: center;
  }
  .table-image {
    width: 45%; /* 宽度设为屏幕宽度的80% */
  }
  .container {
    width: 50%;
    margin: 0 auto;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-justify {
    text-align: justify;
  }
  
  .p-text {
    font-size: 20px;
    font-family: "Helvetica Neue";
  }
  
  .h {
    font-size: 36px;
  }
  
  .margin {
    margin: 20px;
  }
  
  .link-text {
    font-size: 20px;
  }
  
  .card-padding {
    padding: 0 auto;
  }
  
  .flex {
    display: flex;
  }
  
  .row {
    flex-direction: row;
  }
  
  .column {
    flex-direction: column;
  }
  
  .center {
    justify-content: center;
  }
  
  .f-start {
    justify-content: flex-start;
  }
  
  @media (max-width: 768px) {
    .container {
      width: 90%;
    }
  
    .p-text {
      font-size: 16px;
    }
  
    .h {
      font-size: 28px;
    }
  
    .margin {
      margin: 10px;
    }
  }
  </style>
  