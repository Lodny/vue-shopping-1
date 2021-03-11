<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/shop">Shop</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
html {
  font-size: 70%;
  box-sizing: border-box;
}

body,
#app {
  height: 100vh;
  margin: 0;
}

body,
input,
select,
button,
textarea {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
}

#nav {
  padding: 30px 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a:hover {
  color: #ff8000;
}
</style>
