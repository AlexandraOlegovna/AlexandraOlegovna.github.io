<template>
  <div id="app">

    <div class="suggestion">
      <h1> {{suggestions[0].title}}</h1>
      <p> {{suggestions[0].post}} </p>
      <p> You should sign in to vote</p>
      <div>
        👍 10  👎 20
      </div>

      <div class="arrows">
        <div> ← </div>
        <div> → </div>
        <!-- {{msg}} -->
      </div>

    </div>
    <!-- <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul> -->
    <!-- <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    suggestions: [{
      title: "My Suggestion",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue risus turpis, sed facilisis ex efficitur at. Morbi quis euismod metus, nec rhoncus lorem. Quisque imperdiet erat sed aliquet auctor. Cras quam ligula, lobortis eget turpis ac, porta vestibulum leo. Suspendisse ac tortor porta, pellentesque eros quis, iaculis nunc. Suspendisse sit amet enim in sem malesuada feugiat. Sed ultricies semper lorem, sit amet mollis erat feugiat at. Praesent lacinia ornare sapien quis lacinia. Vestibulum eleifend pulvinar consectetur."}
    ]
  })
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
.arrows {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.arrows div{
  cursor: pointer;
}

.suggestion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50vw;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
