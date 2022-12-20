
<template>
    <div class="menu" style="direction: rtl;">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Saif Test Program</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active"><router-link to="/" ><a class="nav-link" >Home <span class="sr-only"></span></a></router-link>
                  
                </li>
                <li class="nav-item">
                    <router-link to="/about" ><a class="nav-link" >About</a></router-link>
                  
                </li>
              
                <li class="nav-item">
                    <router-link to="/studint-view" ><a class="nav-link disabled" >Studints</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/help-view" ><a class="nav-link disabled" >Help</a></router-link>
                </li>
              </ul>
              
            </div>
          </nav>
       
    </div>
</template>

<script>
export default {
    name:'menue-view'
}
</script>
<style scoped>
.main{
  direction: rtl;
}
</style>