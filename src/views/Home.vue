<template>
  <div class="home">
    <!-----Navbar----->
    <Navbar />
    <!---------->
    <main class="main">
      <!-----Logo----->
      <div class="logoset"> 
        <LogoSvgMain />
        <LogoSvgSide />
        <LogoSvgSide1 />
      </div>
      <!---------->
      <p v-if="main__subtitle_visible" v-bind:class="main__subtitle">Welcome to my web.</p>
      <div class="main__social">
        <a v-if="main__link_visible" href="https://www.facebook.com/profile.php?id=100002170611333" v-bind:class="main__link" target="_blank" rel="noopener">
          <svg class="main__svg" viewBox="0 0 512 512">
            <title>Follow me on Facebook</title>
            <path fill="currentColor" d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
          </svg>
        </a>
        <a v-if="main__link_visible" href="https://www.instagram.com/r____ichard/" v-bind:class="main__link" target="_blank" rel="noopener">
          <svg class="main__svg" viewBox="0 0 496 512">
            <title>Follow me on Instagram</title>
            <path fill="currentColor" d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
            <path fill="currentColor" d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/>
            <circle fill="currentColor" cx="351.5" cy="160.5" r="21.5" />
          </svg>
        </a>
        <a v-if="main__link_visible" href="https://www.youtube.com/channel/UCcUtaNft5oNqVJRLyPZdaGw?view_as=subscriber" v-bind:class="main__link" target="_blank" rel="noopener">
          <svg class="main__svg" viewBox="0 0 496 512">
            <title>Follow me on Youtube</title>
            <path fill="currentColor" d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z" />
          </svg>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import LogoSvgSide from '@/components/logo/LogoSvgSide.vue'
import LogoSvgSide1 from '@/components/logo/LogoSvgSide1.vue'
import LogoSvgMain from '@/components/logo/LogoSvgMain.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    LogoSvgMain,
    LogoSvgSide,
    LogoSvgSide1
  },
  data() {
    return{
      main__subtitle_visible: false,
      main__link_visible: false,
      main__subtitle: "main__subtitle",
      main__link: "main__link"
    }
  },
  created() {
    setTimeout(() => {
      this.msv();
    }, 1501);
    setTimeout(() => {
      this.mlv();
    }, 2001);
  },
  methods: {
    msv: function() {
      this.main__subtitle_visible = true;
      this.main__subtitle = "titleStyle"
    },
    mlv: function() {
      this.main__link_visible = true;
      this.main__link = "linkStyle"
    }
  }
}
</script>


<style scoped lang="scss">

.main {
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__subtitle {
    color: #e9f1ed;
    font-weight: 100;
    margin-bottom: 2rem;
  }
  &__link {
    margin-right: 1.5rem;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
  }
  &__svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.6;
    color: #94a2b0;
    &:hover {
      color: #ffad1f;
    }
  }
}

.logoset {
  margin-top: 3em;
  margin-bottom: 4em;
}
//-----title-----
.titleStyle{
  color: #e9f1ed;
  font-weight: 100;
  margin-bottom: 2rem;
  animation: titleScale 0.5s 1;
}
.linkStyle{
  margin-right: 1.5rem;
  display: inline-block;
  &:last-child {
    margin-right: 0;
  }
  animation: titleScale 0.5s 1;
}
@keyframes titleScale{
  0% {
    transform-origin: center;
    transform: scale(0, 1);
  }
  100% {
    transform-origin: center;
    transform: scale(1, 1);
  }
}
</style>
