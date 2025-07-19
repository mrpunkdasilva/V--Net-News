<script>
export default {
  props: ["to"]
}
</script>

<template>
  <router-link
    :to="to"
    class="menu-item"
  >
    <slot />
  </router-link>
</template>

<style scoped>
.menu-item {
  @apply flex items-center p-2 border-2 border-transparent bg-win-gray text-win-black;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  border-bottom-color: #000000;
  border-right-color: #000000;
}

.menu-item:hover {
  @apply bg-win-dark-gray text-win-white;
}

.router-link-exact-active {
  @apply bg-win-gray;
  border-top-color: #000000;
  border-left-color: #000000;
  border-bottom-color: #ffffff;
  border-right-color: #ffffff;
}
</style>