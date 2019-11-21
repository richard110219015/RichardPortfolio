<template>
    <div class="content">
        <div v-bind:class="textStyle1">
            <p style="color:#ffad1f">Name : </p>
            <p>陳彥樺 / Chen,Yan-Hua</p>
        </div>
        <div v-bind:class="textStyle2">
            <p style="color:#ffad1f">Academic Background : </p>
            <p>國立臺北教育大學 數位科技設計學系
                (含玩具與遊戲設計碩士班) 108 碩士生 /<br />
                National Taipei University of Education
                Department of Digital Technology Design
                <br />(Master Program in Toy and Game Design)
                108 Master Degree Student
            </p>
        </div>
        <div v-bind:class="textStyle3">
            <p style="color:#ffad1f">Skill : </p>
            <p>Unreal Engine 4 , Unity , 3ds Max , V-ray , 
                Adobe Photoshop , Adobe Illustrator ,
                <br /> C++ , C# , Vue , HTML , CSS , JavaScript ,
                DaVinci Resolve
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textStyle1: "beginner",
            textStyle2: "beginner",
            textStyle3: "beginner",
        }
    },
    created() {
        setTimeout(()=>{
            this.textStyleChange1();
        },3000);
        setTimeout(()=>{
            this.textStyleChange2();
        },3500);
        setTimeout(()=>{
            this.textStyleChange3();
        },4000);
    },
    methods: {
        textStyleChange1() {
            this.textStyle1 = "ending1";
        },
        textStyleChange2() {
            this.textStyle2 = "ending2";
        },
        textStyleChange3() {
            this.textStyle3 = "ending3";
        }
    }
}
</script>

<style lang="scss" scoped>
.beginner {
    text-align: left;
    color: aliceblue;
    opacity: 0;
    margin-left: 50%;
    margin-top:  100px;
}
.ending1 {
    text-align: left;
    color: aliceblue;
    opacity: 1;
    margin-left: 50%;
	position: relative;
	animation: slideInBounce1 1s 1;
    animation-fill-mode: forwards;
}
.ending2 {
    text-align: left;
    color: aliceblue;
    opacity: 1;
    margin-left: 50%;
	position: relative;
	animation: slideInBounce2 1s 1;
    animation-fill-mode: forwards;
}
.ending3 {
    text-align: left;
    color: aliceblue;
    opacity: 1;
    margin-left: 50%;
	position: relative;
	animation: slideInBounce3 1s 1;
    animation-fill-mode: forwards;
}
@keyframes slideInBounce1 {
    0%{
        margin-top:  100px;
        opacity: 0;
    }
    100%{
        margin-top: -120px;
        opacity: 1;
    }
}
@keyframes slideInBounce2 {
    0%{
        margin-top:  100px;
        opacity: 0;
    }
    100%{
        margin-top: 20px;
        opacity: 1;
    }
}
@keyframes slideInBounce3 {
    0%{
        margin-top:  100px;
        opacity: 0;
    }
    100%{
        margin-top: 20px;
        opacity: 1;
    }
}
</style>