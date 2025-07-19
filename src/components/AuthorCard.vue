<template>
	<div class="bg-win-gray border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black p-4 text-center">
		<img :src="CreateURL(author.avatar, 300, 300)" class="inline-block w-32 h-32 mb-4 border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black" />
		<h3 class="text-xl font-bold mb-4 text-win-black">{{ author.full_name }}</h3>
		<p class="text-win-black mb-4">{{ author.short_bio }}</p>
		<router-link :to="`/author/${author._id}`" class="btn">Profile</router-link>
	</div>
</template>

<script>
import { CreateURL } from '../utils'

export default {
	props: {
		author: {
			type: Object,
			required: true
		}
	},
	setup () {
		return {
			CreateURL
		}
	}
}
</script>
