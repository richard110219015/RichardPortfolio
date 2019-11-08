<template>
  <div>
    <Navbar />
    <h2 class="title">Projects</h2>
    <div class="Projects_CardList">
      <Projects_CardList />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Projects_CardList from '@/components/Projects_CardList.vue'

export default {
  components: {
    Navbar,
    Projects_CardList
  }

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

//-----Projects_CardList-----
.Projects_CardList{
  margin: auto;
  margin-top: -2em;
  max-width: 100%;
}
</style>
