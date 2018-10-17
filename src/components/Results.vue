<template>
  <div class="hello">
      <h3 v-for="(r,i) in results" :key="i">
         {{i+1+':'}} Congratulations, {{r.name}}, You are the Lucky Dog!  {{r.time}}.
      </h3>
  </div>
</template>

<script>
export default {
  name: 'Results',
  data () {
    return {
      msg: 'Welcome to LuckyDogs Results'
    }
  },
  props:['results']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
