<template>

  <div class="bg-gray-700 min-h-screen text-white">
     <HeaderNav/>
    <SidebarNav/>

    <router-view />
  </div>

</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import SidebarNav from "@/components/SidebarNav.vue";

export default {
  components: {
    HeaderNav,
    SidebarNav,
  }
}
</script>


<style>

</style>
