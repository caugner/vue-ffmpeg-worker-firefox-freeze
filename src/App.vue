<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-if="isLoaded">Loading...</div>
    <div v-else>Ready.</div>
    <div v-if="time">{{ time }}</div>
  </div>
</template>

<script>
import Worker from "worker-loader!./Worker";

export default {
  name: 'app',
  data() {
    return {
      isLoaded: false,
      time: "",
      interval: null
    }
  },
  mounted() {
    window.clearInterval(this.interval);
    this.interval = window.setInterval(() => this.time = new Date(), 100);

    this.worker = new Worker();
    this.worker.addEventListener('message', () => this.isLoaded = true);
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
