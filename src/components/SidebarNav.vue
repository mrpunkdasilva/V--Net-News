<template>
  <aside
      :class="`fixed top-0 left-0 min-h-screen pt-12 z-40 w-full max-w-xs transform duration-300 bg-win-gray border-r-2 border-r-win-black ${
    menu_is_active?
      'translate-x-0'
        :
       '-translate-x-full'
  }`"
  >

    <div class="p-4">
      <h2 class="text-win-black text-sm font-bold uppercase mb-4">
        Menu
      </h2>

     <div class="-mx-4">
        <MenuItem to="/">
          <span class="material-icons mr-2">home</span> Home
        </MenuItem>

       <MenuItem to="/authors">
         <span class="material-icons mr-2">group</span> Authors
       </MenuItem>
     </div>
    </div>

  </aside>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import MenuItem from "@/components/MenuItem.vue";

export default {
  components: {
    MenuItem
  },
  setup() {
    const store = useStore();

    const menu_is_active = computed(() => store.state.menu_is_active);

    return {
      menu_is_active
    };
  }
}
</script>