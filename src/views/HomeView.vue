<script>

import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
	name: "HomeView",

	components: { DefaultLayout }
}

</script>

<template>
	<default-layout>
		<template v-slot:content>
			<main>

				<div class="grid grid-cols-12 space-x-5 space-y-5 mb-4">
					<div class="col-span-12 mb-3">
						<h1 class="font-semibold text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit
						</h1>
					</div>

					<div class="col-span-12 md:col-span-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
						illum quidem facilis commodi qui eveniet repellendus tempora
						numquam saepe assumenda! Corporis suscipit nemo quod, vel sint
						fugit? Fuga, eaque vitae!
					</div>
				</div>

			</main>
		</template>
	</default-layout>
</template>
