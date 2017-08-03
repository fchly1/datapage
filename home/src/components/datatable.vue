<template>
  <div class="row">
    <table class="table table-striped">
      <caption class="text-center">数据展示</caption>
      <thead>
        <tr >
          <th class="text-center">姓名</th>
          <th class="text-center">年龄</th>
          <th class="text-center">性别</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in currData">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.sex}}</td>
      </tr>

      </tbody>
    </table>
    <Page :page = "page" :total="total" :curr = "curr" @changepage= "changePage"></Page>

  </div>


</template>

<script>
  import Page from "./page";
  export default {
    components: {Page},
    name: 'datatable',
    data () {
      return {
        list:[],
        page:2,
        total:0,
        curr:1,
        currData:[]
      }
    },
    methods:{
        fetch(){
            fetch('http://localhost:3000/getData')
              .then(response=>response.json())
              .then(items=>{
                  this.list = items.data;
                  this.total = this.list.length;
                  var currpages = this.curr*this.page;
                  var prevpages = (this.curr-1)*this.page;
                  for(var i= prevpages;i<this.curr*this.page;i++){
                      this.currData.push(this.list[i])
                  }
              })
        },
        changePage(page){
          this.curr = page;
          this.currData = [];
          var currpages = this.curr*this.page;
          var prevpages = (this.curr-1)*this.page;
          for(var i= prevpages;i<this.curr*this.page;i++){
            this.currData.push(this.list[i])
          }
        }
    },
    mounted(){
        this.fetch();
    }
  }
</script>

<style>

</style>
