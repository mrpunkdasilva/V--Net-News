<template>
<header class="flex w-full items-center justify-center p-2 bg-win-gray border-2 border-win-white border-b-win-black border-r-win-black">

  <button
      class="btn absolute top-2 left-2"
      @click="ToggleMenu"
  >
    Menu
  </button>
  <img src="/logo.svg" alt="logo" class="w-8 h-8 mr-2">
  <h1 class="text-center text-lg uppercase font-bold tracking-widest text-win-black">
    V-Net
  </h1>

</header>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';

export default {
  setup() {
    const store = useStore();
    const ToggleMenu = () => {
      store.dispatch("ToggleMenu");
    };

    return {
      menu_is_active: computed(() => store.state.menu_is_active),
      ToggleMenu
    }
  }
}
</script>

<style scoped>

</style>