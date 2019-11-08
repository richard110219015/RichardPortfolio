<template>
  <div>
    <Navbar />
    <h2 class="title">Personal Info</h2>
    <Personal_Info_Content />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Personal_Info_Content from '@/components/Personal_Info_Content.vue'

export default {
  components:{
    Navbar,
    Personal_Info_Content
  },
  
}
</script>

<style scoped lang="scss">
//-----title-----
.title{
  color: #e9f1ed;
  animation:　titleScale 1s 1;
}

@keyframes titleScale{
  0% {
    // transform-origin: center;
    // transform: scale(1, 0);
    color: #e9f1ed00;
  }
  100% {
    // transform-origin: center;
    // transform: scale(1, 1);
    color: #e9f1ed;
  }
}
</style>
