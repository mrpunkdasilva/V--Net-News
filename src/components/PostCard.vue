<template>
	<div class="bg-win-gray border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black p-4 sm:p-6 flex flex-col md:flex-col">
		<img v-if="post.image" :src="CreateURL(post.image, 480, 320)" class="block w-full md:w-1/3 flex-shrink-0 object-cover mb-4 md:mb-0 md:mr-6 border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black" />
		<div class="flex-1 flex flex-col flex-grow">
			<h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold my-4 text-win-black">{{ post.title }}</h3>

			<p class="text-sm sm:text-base md:text-lg lg:text-xl mb-4 text-win-black">
				{{ post.excerpt }}
			</p>

			<div class="flex flex-col sm:flex-row justify-between items-start sm:items-end">
				<div class="flex items-center mb-4 sm:mb-0">
					<img v-if="post.author.avatar" :src="CreateURL(post.author.avatar, 300, 300)" class="mr-4 w-12 h-12 border-2 border-t-win-white border-l-win-white border-b-win-black border-r-win-black" />
					<div>
						<p class="text-sm sm:text-base md:text-lg text-win-black mr-4">{{ post.author.full_name }}</p>
						<p class="text-xs sm:text-sm md:text-base text-win-dark-gray">{{ FormatDate(post._createdAt) }}</p>
					</div>
				</div>

				<router-link :to="`/post/${ post._id }`" class="btn text-sm md:text-base">Read more</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { CreateURL, FormatDate } from '@/utils'

export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	setup () {
		return {
			CreateURL,
			FormatDate
		}
	}
}
</script>
