<template>
	<div class="bg-win-blue min-h-screen text-white">
		<Header />
		<Sidebar />
		<router-view />
	</div>
</template>

<script>
// Components
import Header from './components/HeaderNav.vue'
import Sidebar from './components/SidebarNav.vue'

export default {
	name: 'App',
	components: {
		Header,
		Sidebar
	}
}
</script>

<style>
.btn {
  @apply bg-win-gray text-win-black px-4 py-2 border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black text-sm;
}
.btn:active {
  @apply border-t-win-black border-l-win-black border-b-win-white border-r-win-white;
}
</style>
