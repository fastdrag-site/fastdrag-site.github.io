<template>
    <a-typography-title class="title">Video</a-typography-title>
    <div id="video-container">
        <video-player
            src="program.mp4"
            autoplay="true"
            controls
            :volume="1.0"
        />
    </div>
</template>
<style scoped>
.title {
    text-align: center;
}

#video-container {
    width: 100%;
    margin: 0 auto; /* Center the video */
    display: flex;
    justify-content: center;
}

video-player {
    width: 100%;
    max-width: 100%;
}
</style>
<script>
export default {
    mounted() {
        this.setMaxWidth();
        window.addEventListener('resize', this.setMaxWidth);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setMaxWidth);
    },
    methods: {
        setMaxWidth() {
            const videoContainer = document.getElementById('video-container');
            videoContainer.style.maxWidth = `${window.innerWidth}px`;
        }
    }
}
</script>
