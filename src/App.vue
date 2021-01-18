<template>
  <div id="app">
    <div v-if="$route.name === 'Main'">
      <router-link
        :to="{
          name: 'History'
        }"
        >История</router-link
      >
      |
      <router-link
        :to="{
          name: 'History',
          params: {
            show: 'adding'
          }
        }"
        >История добавлений</router-link
      >
      |
      <router-link
        :to="{
          name: 'History',
          params: {
            show: 'removing'
          }
        }"
        >История удалений</router-link
      >
    </div>
    <div v-else>
      <router-link
        :to="{
          path: '/'
        }"
        >На главную</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
