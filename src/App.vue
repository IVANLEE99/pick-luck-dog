<template>
  <el-container>
    
    <el-container>
      <el-header>
        <h1>Who is the lucky dog？</h1>
      </el-header>
      <el-main>
          <el-row :gutter="20">

            <el-col :span="12">
              <el-row :gutter="20">
                <el-col :span="24" class="info">
                  <span>
                    请输入Lucky dog：
                  </span>
                </el-col>
                <el-col :span="24" class="input">
                    <el-input
                      placeholder="添加 lucky dog"
                      v-model="newLuckDog"
                      clearable>
                    </el-input>
                </el-col>
                <el-col :span="24" class="add_btn">
                  <el-button @click="addLuckyDog" type="primary">Add LUCKY DOG</el-button>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <lucky-dogs :luckydogs='lucky_dogs' @selected='handleSelected'></lucky-dogs>
            </el-col>
          </el-row>
          <hr>
          <el-row :gutter="20">
              <el-col :span="8">
                请输入选择次数：
              </el-col>
              <el-col :span="16">
                <el-input
                  placeholder="请输入次数"
                  v-model="Times"
                  clearable>
                </el-input>
              </el-col>
          </el-row>
          <hr>
          <el-row :gutter="20">
              <el-col :span="8">
                选择模式：
              </el-col>
              <el-col :span="16">
                <el-radio v-model="Mode" label="auto">自动执行</el-radio>
                <el-radio v-model="Mode" label="hand">手动执行</el-radio>
              </el-col>
          </el-row>
          <hr>
          <el-row :gutter="20" v-if="Mode=='auto'">
              <el-button @click="autoGetResult" type="primary" :disabled="Times==clickTime&&clickTime!=0" > auto pick</el-button>

               <el-button @click="Reset" type="danger">Reset</el-button>
          </el-row>
          <el-row :gutter="20" v-else>
            <el-col :span="24">
              <el-button @click="getResult" type="primary" :disabled="Times==clickTime&&clickTime!=0&&Interval">pick</el-button>
               <el-button @click="Reset" type="danger">Reset</el-button>
            </el-col>
          </el-row>
          <hr>
          <el-row v-if='RESULTS.length'>
            <el-col>
              <h3 v-for="(r,i) in finalResult" :key="i">{{i}}的次数是：{{r.length}}</h3>
            </el-col>
            <el-col :span="24">
              <results :results='RESULTS'></results>
            </el-col>
          </el-row>

      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import LuckyDogs from './components/LuckyDogs'
import Results from './components/Results'
import _ from 'lodash'
export default {
  name: 'App',
  components:{
    'lucky-dogs':LuckyDogs,
    'results':Results
  },
  data:function () {
    return {
      'lucky_dogs':['国栋','蔡颖','李祥','伟耀','晓梅','婷婷','汝邈','熙哥'],
      'Mode':'hand',
      'Times':8,
      'RESULTS':[],
      'LUCKY_DOG':'',
      'selected':[],
      'clickTime':0,
      newLuckDog:'',
      Interval:'',
    }
  },
  methods:{
    addLuckyDog(){
      if (this.newLuckDog) {
        this.lucky_dogs.push(this.newLuckDog);
      }
    },
    handleSelected:function (selected,data) {
      console.log(selected,data)
      this.selected=selected;
    },
    getResult:function () {
      if (!this.selected.length) {
        alert('No lucky dog can be selected!')
        return;
      }
      var index = this.RandomNumBoth(0,this.selected.length-1);
      var r = {
        name:this.selected[index].name,
        time:new Date().toLocaleTimeString()
      };
      this.RESULTS.push(r)
    },
    autoGetResult:function () {
      var that = this;
        if (!this.selected.length) {
          alert('No lucky dog can be selected!')
          return;
        }
        that.clickTime=0;
        this.Interval = setInterval(function(){
          that.getResult();
          that.clickTime++;
          if (that.Times==that.clickTime) {
            clearInterval(that.Interval);
          }
        }, 1000);
    },
    Reset:function () {
      this.Mode='hand';
      this.Times=8;
      this.RESULTS=[];
      this.LUCKY_DOG='';
      this.clickTime=0;
      this.newLuckDog='';
      clearInterval(this.Interval);
      this.Interval='';
    },
    RandomNumBoth:function(Min,Max){
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            console.log(num);
            return num;
    }
  },
  computed:{
    finalResult:function(){
      return _.groupBy(this.RESULTS,function(r){
        return r.name;
      });
    }
  },
  watch:{
    'Mode':function (nv,ov) {
      this.clickTime=0;
      this.RESULTS=[];
      var that = this;
      if (nv=='auto') {
        
        // if (!this.selected.length) {
        //   alert('No lucky dog can be selected!')
        //   return;
        // }
        // let t =0;
        // this.Interval = setInterval(function(){
        //   that.getResult();
        //   t++;
        //   if (that.Times==t) {
        //     clearInterval(that.Interval);
        //   }
        // }, 1000);
      }
    }
  }
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
  .el-row {
    margin-bottom: 20px;
  }
  h1{
    text-align: center;
    font-size: 30px;
  }
  hr{
    border: 1px dashed grey;
  }
  .el-row .info{
    margin-bottom: 20px;
  }
  .el-row .input{
    margin-bottom: 20px;
  }
  .el-row .add_btn{
    margin-bottom: 20px;
  }
</style>
