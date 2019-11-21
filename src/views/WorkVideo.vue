<template>
  <div>
    <Navbar />
    <h2 class="title">Work & Video</h2>
    <WorkVideoContent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import WorkVideoContent from '@/components/WorkVideoContent.vue'

export default {
  components:{
    Navbar,
    WorkVideoContent
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
