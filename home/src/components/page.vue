<template>
  <div class="row">

    <ul class="pagination" >
      <li @click="changePage(curr-1)"><a href="#" >&laquo;</a></li>
      <li v-for="n in pageNum" v-bind:class="[n==curr?'active':'']" @click="changePage(n)"><a href="#">{{n}}</a></li>
      <li><a href="#" @click="changePage(curr+1)">&raquo;</a></li>
    </ul>
  </div>

</template>

<script>

  export default {
    name: 'page',
    data () {
      return {
        pageNum : 0
      }
    },
    props:['page','total','curr'],
    methods:{
        showPages(){
          this.pageNum = Number(this.total)/Number(this.page);
        },
        changePage:function(page){
            if(page >0 && page <= this.pageNum){
              this.$emit('changepage',page);
            }
        }
    },
    mounted(){
        this.showPages();
    },
    watch:{
      total(currval,oldval){
        this.showPages();
      }
    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
