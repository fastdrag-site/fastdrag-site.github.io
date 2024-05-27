<template>
<a-typography-title class="title">Example</a-typography-title>
<div class="image-grid">
    <a-space direction="vertical" align="center">
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-03-05-2108-09.png" width="500" />
            <a-image src="../../public/image/2024-03-05-2314-35.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-03-05-2324-54.png" width="500" />
            <a-image src="../../public/image/2024-05-06-0857-43.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-05-06-0906-56.png" width="500" />
            <a-image src="../../public/image/2024-05-06-0912-46.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-05-06-0947-04.png" width="500" />
            <a-image src="../../public/image/2024-05-06-0953-23.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-05-06-0957-56.png" width="500" />
            <a-image src="../../public/image/2024-05-06-1002-09.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-05-06-1007-20.png" width="500" />
            <a-image src="../../public/image/2024-05-06-1010-37.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-05-06-1015-30.png" width="500" />
            <a-image src="../../public/image/2024-05-06-1025-11.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-05-06-1030-22.png" width="500" />
            <a-image src="../../public/image/2024-05-06-1037-08.png" width="500" />
        </a-space>
        <a-space justify="center" :gutter="20">
            <a-image src="../../public/image/2024-05-06-1045-09.png" width="500" />
            <a-image src="../../public/image/2024-05-08-1136-11.png" width="500" />
        </a-space>
    </a-space>
</div>
</template>

<style scoped>
.title {
    align-items: "center";
}
.image-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
/* 如果需要调整间距，可以在a-space的gutter属性中设置，这里已通过Vue绑定动态设置 */
</style>