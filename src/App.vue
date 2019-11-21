<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body{
  height: 100%;
  //background-color: #2d2d2d;
  background: radial-gradient(ellipse at bottom, #39393a 0%, #090a0f 100%);
  overflow-y: hidden;
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
