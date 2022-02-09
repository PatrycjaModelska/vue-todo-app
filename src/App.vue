<template>
  <div id="nav">
<!-- router-link - special tag which does not send new request to the server -->
<!-- router-link has special behavior to intercepting the request -->
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Todos'}">Todos</router-link>
<!-- a href send new request to the server -->
    <!-- <a href="/about">About</a> -->
  </div>
<p>Navigation:</p>
  <button @click="redirect">Redirect</button> 
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

<!-- Vue component will be injected right here -->
  <router-view/> 
</template>


<script>
export default {
  // In that way we can easily programmatic navigation through page. It works like arrows in browser.
  methods: {
    redirect() {
      this.$router.push({name: 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.simple {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    color: #444;
    text-align: justify;
}   
</style>
