<template>
  <div class="bg">
    <!-- 标题 -->
    <el-row justify="center">
      <el-col :span="24" class="margin">
        <div class="text-center title">
          FastDrag: Manipulate Anything in One Step
        </div>
      </el-col>
    </el-row>

    <!-- 作者 -->
    <el-row justify="center" class="margin" :gutter="20">
      <el-col :span="24">
        <div class="text-center link-text">
          <!-- Xuanjia Zhao and Jian Guan and Congyi Fan and Dongli Xu and Youtian Lin and Haiwei Pan and Pengming Feng -->
          <el-link :underline="false" href="" target="_blank" type="primary">Xuanjia Zhao<sup>1</sup></el-link>
          <el-link :underline="false" href="https://scholar.google.com/citations?hl=en&user=wf60G1sAAAAJ" target="_blank" type="primary">Jian Guan<sup>1*</sup></el-link>
          <el-link :underline="false" href="" target="_blank" type="primary">Congyi Fan<sup>1</sup></el-link>
          <el-link :underline="false" href="https://donglixu.site/" target="_blank" type="primary">Dongli Xu<sup>2</sup></el-link>
          <el-link :underline="false" href="https://linyou.github.io/" target="_blank" type="primary">Youtian Lin<sup>3</sup></el-link>
          <el-link :underline="false" href="" target="_blank" type="primary">Haiwei Pan<sup>1</sup></el-link>
          <el-link :underline="false" href="https://scholar.google.com/citations?hl=en&user=O51mMKgAAAAJ" target="_blank" type="primary">Pengming Feng<sup>4</sup></el-link>
        </div>
      </el-col>
    </el-row>
    <el-row justify="center" class="margin">
      <a-space size="large">
        <a-typography-text bold class="text-center"><sup>1</sup>Harbin Engineering University</a-typography-text>
        <a-typography-text bold class="text-center"><sup>2</sup>Independent Researcher</a-typography-text>
        <a-typography-text bold class="text-center"><sup>3</sup>Nanjing University</a-typography-text>
        <a-typography-text bold class="text-center"><sup>4</sup>SGIIT</a-typography-text>
      </a-space>
    </el-row>

    <!-- 跳转按钮 -->
    <el-row justify="center" class="margin">
      <div class="text-center">
        <a-space>
          <a-link :hoverable="false" href="https://arxiv.org/abs/2405.15769" target="blank">
            <a-button class="a-button">
            <template #icon>
              <icon-book />
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>Paper</template>
            </a-button>
          </a-link>
          <a-link :hoverable="false">
            <a-button class="a-button">
            <template #icon>
              <icon-github />
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>
              Code
            </template>
            </a-button> 
          </a-link> 
        </a-space>  
      </div>
    </el-row>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.mg5 {
  margin: 5px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.el-link {
  margin: 10px;
  font-size: 20px;
}
.a-button {
  width: 150px;
  height: 50px;
  font-size: 20px;
}
.text-center {
  text-align: center;
  font-size: 20px;
}
.title {
  font-weight: 700;
  font-size: 48px;
  color: #000;
  line-height: 1.125;
}
.margin {
  margin: 20px;
}
.border {
  border: 1px solid #000;
}
.link-text {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 50px;
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
.center {
  justify-content: center;
}
</style>
