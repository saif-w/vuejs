<template>
    <div>
      <div class="container" v-for="item in list" v-bind:key="item.id">
        <div class="col-sm-9">
                <div class="card trycolor" style="width: 70rem;height: 40erm">
                    {{ item.id }}
                    <div class="card-body try-titel">
                      <h5 class="card-title">{{item.title}}</h5>
                      <br>
                      <h6 class="card-subtitle mb-2 text-muted" style="font-weight: bold;"><strong>{{item.body}}</strong>
                        </h6>
                      <p class="card-text"></p>
                       <router-link :to="`/studint-view/${item.id}`">المزيد...</router-link>
                      
                    </div>
                  </div>
        </div>
      </div>
    </div>
    
</template>
<style scoped>
.trycolor{
    background: mediumseagreen;
}
.try-titel{
    background: rgb(245, 201, 176);
    margin: 1px;
    background: hsl(147, 62%, 80%);
}
</style>
<script>
    import axios from "axios";
export default {

   name:'UnitTest',
   data(){
    return{
        skill:['Js','Css','Html'],
        Fname:'saif',
        list:[]
    }
   },
   methods: {
    async getData () {
        let result =await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.warn(result);
        this.list=result.data
    }
   },
   mounted(){
        this.getData()
   }
};
</script>