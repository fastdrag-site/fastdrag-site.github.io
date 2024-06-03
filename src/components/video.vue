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

<script lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        const setMaxWidth = () => {
            const videoContainer = document.getElementById('video-container');
            if (videoContainer) {
                videoContainer.style.maxWidth = `${window.innerWidth}px`;
            }
        };

        onMounted(() => {
            setMaxWidth();
            window.addEventListener('resize', setMaxWidth);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', setMaxWidth);
        });

        return {};
    }
}
</script>
