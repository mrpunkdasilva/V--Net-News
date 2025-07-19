<template>
	<main class="post-page">
		<section v-if="post" class="container mx-auto p-5 bg-win-gray border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black">
			<img :src="CreateURL(post.image, 1280, 300)" class="w-full mb-8 border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black">

			<button
				@click="$router.back()"
				class="btn flex items-center text-lg mb-4">
				&lt;&lt; Back
			</button>

			<h1 class="text-3xl md:text-5xl my-8 text-win-black">{{ post.title }}</h1>

			<p class="text-win-black italic mb-8">{{ post.excerpt }}</p>

			<p v-html="TextToHTML(post.content)" class="text-base mb-8 text-win-black leading-relaxed"></p>

			<div class="flex items-center mb-4" v-if="post.author">
				<img
					:src="CreateURL(post.author.avatar, 300, 300)"
					class="inline-block w-10 h-10 mr-4 border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black"  />

				<h1 class="text-win-black">
					{{ post.author.full_name }}
				</h1>
			</div>
		</section>
	</main>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import sanity from '../../client'
import { CreateURL, TextToHTML } from '../../utils'

export default {
	setup () {
		const route = useRoute()
		const id = ref(route.params.id)
		const post = ref(null)

		onMounted(() => {
			const query = '*[_type == "post" && _id == $id][0] { ..., author-> }'
			const params = { id: id.value }

			sanity.fetch(query, params).then(data => {
				post.value = data
			})
		})

		return {
			post,
			CreateURL,
			TextToHTML
		}
	}
}
</script>
