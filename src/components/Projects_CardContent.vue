<template>
    <div class="cardBackground">
        <div class="cardContent">
            <div v-bind:class="cardImage"></div>
            <div>
                <a @click="closeContent">
                    <span class="left">
                        <span class="circle-left"></span>
                        <span class="circle-right"></span>
                    </span>
                    <span class="right">
                        <span class="circle-left"></span>
                        <span class="circle-right"></span>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        closeContent: Function,
        inputSlide: String,
        required: true,
    },
    components: {
        cardImage: "",
    },
    data() {
        return {
            setImage() {
                let slideNumber = this.inputSlide;
                if(slideNumber === '1') {
                    this.cardImage = "cardImage1";
                };
                if(slideNumber === '2') {
                    this.cardImage = "cardImage2";
                };
                if(slideNumber === '3') {
                    this.cardImage = "cardImage3";
                };
                if(slideNumber === '4') {
                    this.cardImage = "cardImage4";
                };
                if(slideNumber === '5') {
                    this.cardImage = "cardImage5";
                };
                if(slideNumber === '6') {
                    this.cardImage = "cardImage6";
                };
                if(slideNumber === '7') {
                    this.cardImage = "cardImage7";
                };
                if(slideNumber === '8') {
                    this.cardImage = "cardImage8";
                };
                if(slideNumber === '9') {
                    this.cardImage = "cardImage9";
                };
            }
        }
    },
    created: function() {
        this.setImage();
    },
}
</script>

<style lang="scss" scoped>
//-----cardContentStyle-----
.cardBackground {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(29, 29, 29, 0.7);
    z-index: 20;
}
.cardContent {
    background-color: #fff;
    border-radius: 15px;
    margin: auto;
    margin-top: 1%;
    width: 842px;
    height: 595px;
}
button {
    margin-left: 80%;
    width:50px;
    height:20px;
}

//-----allContentImage-----
.cardImage1 {
    background-image: url('../assets/bao_content_1.gif');
    background-size: contain;
    height: 100%;
}
.cardImage2 {
    background-image: url('../assets/bao_content_2.gif');
    background-size: contain;
    height: 100%;
}
.cardImage3 {
    background-image: url('../assets/giantme_content.gif');
    background-size: contain;
    height: 100%;
}
.cardImage4 {
    background-image: url('../assets/paper_content.gif');
    background-size: contain;
    height: 100%;
}
.cardImage5 {
    background-image: url('../assets/feta_content.gif');
    background-size: contain;
    height: 100%;
}
.cardImage6 {
    background-image: url('../assets/auo_content.gif');
    background-size: contain;
    height: 100%;
}
.cardImage7 {
    background-image: url('../assets/paco_content.gif');
    background-size: contain;
    height: 100%;
}
.cardImage8 {
    background-image: url('../assets/baofcous_content.gif');
    background-size: contain;
    height: 100%;
}
.cardImage9 {
    background-image: url('../assets/dtd_content.gif');
    background-size: contain;
    height: 100%;
}

//-----closeButtonStyle-----
@mixin transition() {
    transition: all .4s cubic-bezier(.215,.61,.355,1);
}

div {
  a {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 91%;
    top: 3%;
    background-color: #ffffff;
    border-radius: 50px;
    opacity: 1;
    @include transition();
    -webkit-box-shadow: 0px 0px 30px 0px rgba(247,149,29,0.5);
    -moz-box-shadow: 0px 0px 30px 0px rgba(247,149,29,0.5);
    box-shadow: 0px 0px 30px 0px rgba(247,149,29,0.5);
    
    & > span {
      background-color: #f5a700;
      display: block;
      height: 6px;
      border-radius: 6px;
      position: relative;
      @include transition();
      position: absolute;
      top: 50%;
      margin-top: -3px;
      left: 9px;
      width: 32px;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -moz-justify-content: space-between;
      -ms-justify-content: space-between;

      span {
        display: block;
        background-color: #ed7f00;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        @include transition();
        position: absolute;
        left: 0;
        top: 0;
      }

      &.left {
        transform: rotate(45deg);
        transform-origin: center;

        .circle-left {
          @include transition();
          margin-left: 0;
        }

        .circle-right {
          @include transition();
          margin-left: 26px;
        }
      }

      &.right {
        transform: rotate(-45deg);
        transform-origin: center;

        .circle-left {
          @include transition();
          margin-left: 0;
        }

        .circle-right {
          @include transition();
          margin-left: 26px;
        }
      }
    }

    &:hover {
      & > span {
        background-color: #2faee0;
        @include transition();

        span {
          @include transition();
          background-color: #008ac9;
        }

        &.left {

          .circle-left {
            @include transition();
            margin-left: 26px;
          }

          .circle-right {
            @include transition();
            margin-left: 0;
          }
        }

        &.right {

          .circle-left {
            @include transition();
            margin-left: 26px;
          }

          .circle-right {
            @include transition();
            margin-left: 0;
          }
        }
      }
    }
  }
}

//-----RWD-----
@media (max-width: 968px) { 
    .cardContent {
        width: 601px;
        height: 425px;
        margin-top: 16%;
    }
    div {
        a {
            left: 92%;
        }
    }
}
@media (max-width: 645px) { 
    .cardContent {
        margin-top: 1%;
        width: 435px;
        height: 308px;
        margin-top: 30%;
    }
    div {
        a {
            left: 89%;
        }
    }
}
@media (max-width: 486px) { 
    .cardContent {
        margin-top: 1%;
        width: 333px;
        height: 236px;
        margin-top: 45%;
    }
    div {
        a {
            left: 88%;
        }
    }
}
@media (max-width: 455px) {
    div {
        a {
            left: 86%;
        }
    }
}
@media (max-width: 376px) {
    div {
        a {
            left: 83%;
        }
    }
}
</style>