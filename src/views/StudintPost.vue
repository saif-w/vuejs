<template>
<div class="Studint-Post">
    <center>
        <div class="card border-primary mb-3" style="max-width: 50rem;">
            <div class="card-header"> {{ post.title }}</div>
            <div class="card-body text-primary">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">{{ post.body }}</p>
            </div>
            <div class="card-header">  <router-link :to="'/studint-view'">رجوع...</router-link></div>
           
        </div>
    </center>
</div>  
</template>

<script>
import axios from 'axios';

export default {
name:'studint-Post',
data(){
    return{
        id:'',
        post:''
    };
},
async created(){
        console.log(this.$route.params);
      this.id=this.$route.params;
      const URL='https://jsonplaceholder.typicode.com/posts/id';
      const URLREAL=URL.replace('id',this.id.id)
      console.log(URL);
      console.log(this.id);
      const Res = await axios.get(URLREAL);
       this.post=Res.data;
}
}
</script>

<style>

</style>