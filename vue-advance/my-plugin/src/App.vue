<template>
  <div id="app">
    <input v-model="name" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: 'zgr'
    }
  },
  rules: {
    name: {
      validate: value => value.length > 3,
      message: '名字长度需要大于3'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
