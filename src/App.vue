<template>
     <Nav
     class="bg-light"
     style="position: sticky; top: 1px; z-index: 1;"
     :titles="titles"/>
  <router-view/>
</template>
 <script>
 import Nav from "@/components/Nav"
 import SideNav from "@/components/SideNav"
  export default{
    components:{
      Nav,
      SideNav
    },
    data(){
      return{
        titles:"Daniel"
      }
    }
  }
 
 </script>
<style>

</style>
