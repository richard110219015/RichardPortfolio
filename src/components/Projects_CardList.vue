<template>
  <div class="CardList">
  <!-----card----->
    <swiper class="swiperBox" :options="swiperOption" @mouseover.native="showUp=true" @mouseleave.native="showUp=false">
      <swiper-slide class="slide1" @click.native="openContent1"><div class="text1">Bao VR Game</div></swiper-slide>
      <swiper-slide class="slide2" @click.native="openContent2"><div class="text2">Bao2 VR Game</div></swiper-slide>
      <swiper-slide class="slide3" @click.native="openContent3"><div class="text3">Giant Me VR Game</div></swiper-slide>
      <swiper-slide class="slide4" @click.native="openContent4"><div class="text4">Thesis</div></swiper-slide>
      <swiper-slide class="slide5" @click.native="openContent5"><div class="text5">Fire VR Game</div></swiper-slide>
      <swiper-slide class="slide6" @click.native="openContent6"><div class="text6">AUO Intern</div></swiper-slide>
      <swiper-slide class="slide7" @click.native="openContent7"><div class="text7">PACO</div></swiper-slide>
      <swiper-slide class="slide8" @click.native="openContent8"><div class="text8">Bao Focus</div></swiper-slide>
      <swiper-slide class="slide9" @click.native="openContent9"><div class="text9">DTD web</div></swiper-slide>
      <div class="swiper-pagination" slot="pagination" ></div>
      <div class="swiper-button-prev" slot="button-prev">
        <transition name="slide-fade-left">
          <svg viewBox="5 5 20 20" class="icon-chevron-left" v-if="showUp"> 
            <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/>
          </svg>
        </transition>
      </div>
      <div class="swiper-button-next" slot="button-next">
        <transition name="slide-fade-right">
          <svg viewBox="5 5 20 20" class="icon-chevron-right" v-if="showUp">
            <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/>
          </svg>
        </transition>
      </div>
    </swiper>
  <!-----cardEnd----->

  <!-----cardContent----->
  <Projects_CardContent v-if="ShowCard" v-bind:class="contentStyle" :closeContent="closeContent" :inputSlide="slideNumber" />
  <!-----cardContentEnd----->
  </div>
</template>

<script>
import Projects_CardContent from './Projects_CardContent'

export default {
  components: {
    Projects_CardContent,
    contentStyle: ""
  },
  data() {
    return {
      showUp: false,
      ShowCard: false,
      slideNumber: '',
      //-----swiper-----
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        grabCursor: true,
        //loop: true,
        autoplay: { 
          delay: 5000,
          disableOnInteraction: false,
        },
        //loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
        }
      }
    }
  },
  methods: {
    closeContent() {
      this.ShowCard = false;
    },
    //-----openContent-----
    openContent1() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "1"
    },
    openContent2() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "2"
    },
    openContent3() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "3"
    },
    openContent4() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "4"
    },
    openContent5() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "5"
    },
    openContent6() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "6"
    },
    openContent7() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "7"
    },
    openContent8() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "8"
    },
    openContent9() {
      this.ShowCard = true;
      this.contentStyle = "showContent";
      this.slideNumber = "9"
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./swiper.css";
.CardList {
  margin: 8em 4em 0em 4em;
}
.swiper {
  color: aliceblue
}
.swiper-slide {
  background-color: gray;
  border-radius: 20px;
  height: 300px;
  animation: swiperFadin 1.5s 1;
  &.slide1 {
    background-image:url('../assets/bao1.png');
    &:hover {
      cursor: pointer;
      .text1 {
        opacity: 1;
      }
    }
    .text1 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide2 {
    background-image:url('../assets/bao2.png');
    &:hover {
      cursor: pointer;
      .text2 {
        opacity: 1;
      }
    }
    .text2 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide3 {
    background-image:url('../assets/giantme.png');
    &:hover {
      cursor: pointer;
      .text3 {
        opacity: 1;
      }
    }
    .text3 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide4 {
    background-image:url('../assets/paper.jpg');
    &:hover {
      cursor: pointer;
      .text4 {
        opacity: 1;
      }
    }
    .text4 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide5 {
    background-image:url('../assets/feta.jpg');
    &:hover {
      cursor: pointer;
      .text5 {
        opacity: 1;
      }
    }
    .text5 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide6 {
    background-image:url('../assets/auo.jpg');
    &:hover {
      cursor: pointer;
      .text6 {
        opacity: 1;
      }
    }
    .text6 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide7 {
    background-image:url('../assets/paco.jpg');
    &:hover {
      cursor: pointer;
      .text7 {
        opacity: 1;
      }
    }
    .text7 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide8 {
    background-image:url('../assets/baofocus.png');
    &:hover {
      cursor: pointer;
      .text8 {
        opacity: 1;
      }
    }
    .text8 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  &.slide9 {
    background-image:url('../assets/dtd.jpg');
    &:hover {
      cursor: pointer;
      .text9 {
        opacity: 1;
      }
    }
    .text9 {
      position: absolute; 
      bottom: 0; 
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.5); /* Black see-through */
      color: #f1f1f1; 
      width: 100%;
      transition: .5s ease;
      opacity:0;
      color: white;
      font-size: 20px;
      padding: 20px;
      text-align: center;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
}
.swiper-button-prev, .swiper-button-next {
  background-image: none;
}
.icon-chevron-left, .icon-chevron-right {
  fill: #ffad1f ;
  filter:drop-shadow(-1px 1px 1px rgba(12, 12, 12, 0.5));
}
.swiper-slide {
  filter:drop-shadow(-3px 3px 3px rgba(12, 12, 12, 0.8));
}

//-----swiperRightTransition-----
.slide-fade-right-enter-active {
  transition: all .1s ease;
}
.slide-fade-right-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-right-enter, .slide-fade-right-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
//-----swiperLeftTransition-----
.slide-fade-left-enter-active {
  transition: all .1s ease;
}
.slide-fade-left-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-left-enter, .slide-fade-left-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

//-----swiperBackgroundAnimation-----
@keyframes swiperFadin {
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}
 //-----showContent-----
 .showContent {
   animation: swiperFadin 0.2s 1;
 }
</style>