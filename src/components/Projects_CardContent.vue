<template>
    <div class="cardBackground">
        <div class="cardContent">
            <div v-bind:class="cardImage">
                <button @click="closeContent"></button>
               
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
    created: function() {
        this.setImage();
    },
    data() {
        return{
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
    }
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
//-----RWD-----
@media (max-width: 843px) { 
    .cardContent {
        background-color: #fff;
        border-radius: 15px;
        margin: auto;
        margin-top: 1%;
        width: 601px;
        height: 425px;
        margin-top: 16%;
    }
}
@media (max-width: 608px) { 
    .cardContent {
        background-color: #fff;
        border-radius: 15px;
        margin: auto;
        margin-top: 1%;
        width: 435px;
        height: 308px;
        margin-top: 30%;
    }
}
@media (max-width: 440px) { 
    .cardContent {
        background-color: #fff;
        border-radius: 15px;
        margin: auto;
        margin-top: 1%;
        width: 333px;
        height: 236px;
        margin-top: 60%;
    }
}
</style>