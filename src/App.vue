<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fira+Code&display=swap");

#app {
  font-family: Fira Code, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 1rem;
  height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  box-sizing: border-box;
  border: 4px solid white;
}

#nav {
  padding: 30px;

  a {
    //any styling on routerlink needs to be done here
    font-weight: bold;
    text-decoration: none;
    // Simply on hover, will change upon need
    &:hover {
      color: #42b983;
    }
  }
}
</style>
