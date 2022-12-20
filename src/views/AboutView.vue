<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SchoolFile />
    
  </div>
</template>
<script>
// @ is an alias to /src
import SchoolFile from '@/components/SchoolFile.vue'

// import axios from '../axios'

// axios.get('posts')
export default {
  name: "AboutUs",
  components: {
    SchoolFile
  }
};
</script>
