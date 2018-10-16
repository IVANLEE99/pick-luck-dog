<template>
  <div class="hello" v-if='luckydogs&&luckydogs.length'>
    <h1>{{ 'There are '+luckydogs.length+' lucky dogs!' }}</h1>
    <el-transfer v-model="selected_luckydogs"
    :data="data" 
    @change='handleChange'
    :titles="['Source', 'Target']"
    :button-texts="['到左边', '幸运儿']"
    ></el-transfer>

  </div>
</template>

<script>
export default {
  name: 'LuckyDogs',
  props:['luckydogs'],
  data () {
    return {
      selected_luckydogs:[]
    }
  },
    methods:{
        handleChange:function () {
            var s = []
            for (let ss = 0; ss < this.selected_luckydogs.length; ss++) {
                const element = this.selected_luckydogs[ss];
                s.push({
                    name:this.luckydogs[element]
                });
                
            }
            this.$emit('selected',s);
        }
    },
  computed:{
      data:function () {
        const data = [];
        for (let i = 0; i < this.luckydogs.length; i++) {
          data.push({
            key: i,
            label: `LuckyDogs ${ this.luckydogs[i] }`,
            disabled: false
          });
        }
        return data;
      }
  }
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
