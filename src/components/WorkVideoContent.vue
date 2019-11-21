<template>
  <div class="videos">
    <ul class="videos__list">
      <li v-for="(video, index) in videos" :key="index" class="videos__item">
        <LazyYoutubeVideo :url="video.url" :previewImageSize="video.previewImageSize"/>
        <p class="title">{{video.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import LazyYoutubeVideo from 'vue-lazy-youtube-video'

export default {
  components: {
    LazyYoutubeVideo
  },
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/watch?v=FiFeNJhjzsU",
          previewImageSize: "maxresdefault",
          title: "Bao Special Agent Bao"
        },
        {
          url: "https://www.youtube.com/watch?v=aI6jUY3I3GM",
          previewImageSize: "hqdefault",
          title: "VR FPS Test"
        },
        {
          url: "https://www.youtube.com/watch?v=Lhf1eB3MTMI",
          previewImageSize: "sddefault",
          title: "VR FPS Test _ Speech recognition"
        },
        {
          url: "https://www.youtube.com/watch?v=ONVxxeK6r1U",
          previewImageSize: "mqdefault",
          title: "The Village Bao"
        },
        {
          url: "https://www.youtube.com/watch?v=OtWsoi1Dovo",
          previewImageSize: "hqdefault",
          title: "Fire Experience VR"
        },
        {
          url: "https://www.youtube.com/watch?v=WG_8Btb_pKQ",
          previewImageSize: "sddefault",
          title: "Environment Baby"
        },
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.videos {
  margin: 3% 2% 0 2%;
  animation: fadin 1s 1;
  &__list {
    display: flex;
    flex-wrap: wrap;
    //justify-content: space-between;
    padding-left: 0px;
    margin: {
      top: 0;
      bottom: 0;
    }
    list-style: none;
  }

  &__item {
    width: 24%;
    filter:drop-shadow(-1.5px 1.5px 1.5px rgba(12, 12, 12, 0.9));
    margin: {
      left: 7%;
      top: 10px;
    }
  }
}
.title {
  margin-top: 10px;
  color: #e9f1ed;
}
@keyframes fadin {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
//-----RWD-----
@media (max-width: 1024px) { 
    
}
@media (max-width: 768px) { 
   
}
@media (max-width: 475px) { 
   
}

</style>