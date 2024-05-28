<template>
  <div class="container flex center column border f-start">
    <div class="text-center h">Abstract</div>
    <div class="border p-text margin text-justify">
      <a-typography-text>
        Drag-based image editing using generative models provides precise control over image contents, enabling users to manipulate anything in an image with a few clicks. However, prevailing methods typically adopt n-step iterations for latent semantic optimization to achieve drag-based image editing, which is time-consuming and limits practical applications. In this paper, we introduce a novel one-step drag-based image editing method, i.e., FastDrag, to accelerate the editing process. Central to our approach is a latent warpage function (LWF), which simulates the behavior of a stretched material to adjust the location of individual pixels within the latent space. This innovation achieves one-step latent semantic optimization and hence significantly promotes editing speeds. Meanwhile, null regions emerging after applying LWF are addressed by our proposed bilateral nearest neighbor interpolation (BNNI) strategy. This strategy interpolates these regions using similar features from neighboring areas, thus enhancing semantic integrity. Additionally, a consistency-preserving strategy is introduced to maintain the consistency between the edited and original images by adopting semantic information from the original image, saved as key and value pairs in self-attention module during diffusion inversion, to guide the diffusion sampling. Our FastDrag is validated on the DragBench dataset, demonstrating substantial improvements in processing time over existing methods, while achieving enhanced editing performance. 
      </a-typography-text>
    </div>
  </div>
</template>

<style scoped>
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
