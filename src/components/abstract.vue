<template>
    <div
        class="flex center column border f-start"
        style="width: 50%; margin: 0 auto"
      >
        <div class="text-center h">Abstract</div>
        <div class="border p-text margin text-justify">
            <a-typography-text >
                We present the first method capable of photorealistically
                reconstructing a non-rigidly deforming scene using photos/videos
                captured casually from mobile phones. Our approach augments neural
                radiance fields (NeRF) by optimizing an additional continuous
                volumetric deformation field that warps each observed point into a
                canonical 5D NeRF. We observe that these NeRF-like deformation fields
                are prone to local minima, and propose a coarse-to-fine optimization
                method for coordinate-based models that allows for more robust
                optimization. By adapting principles from geometry processing and
                physical simulation to NeRF-like models, we propose an elastic
                regularization of the deformation field that further improves
                robustness. We show that Nerfies can turn casually captured selfie
                photos/videos into deformable NeRF models that allow for
                photorealistic renderings of the subject from arbitrary viewpoints,
                which we dub "nerfies". We evaluate our method by collecting data
                using a rig with two mobile phones that take time-synchronized photos,
                yielding train/validation images of the same pose at different
                viewpoints. We show that our method faithfully reconstructs
                non-rigidly deforming scenes and reproduces unseen views with high
                fidelity.
            </a-typography-text>
            
        </div>
      </div>
</template>
<style scoped>
.bg-padding {
  padding: 20px 0 0px;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.title {
  font-weight: 550;
  font-size: 50px;
  color: #8b53d5;
  margin: 50px auto 0;
}
.p-text {
  font-size: 20px;
  font: "Helvetica Neue";
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
</style>