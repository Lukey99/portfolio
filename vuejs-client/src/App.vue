<template>
<body>
  <div id="app">
    <router-view class="router-view"/>
    <Main/>
  </div>
</body>
</template>

<script>
// import Menu from "./components/menu/menu.vue"
import Main from "./components/main/main"

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-view{
  position: absolute;
  overflow-y: auto;
  left: 200px;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  transition: all 1s;
}
</style>
