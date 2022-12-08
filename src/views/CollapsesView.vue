<script>

import DefaultLayout from "../layouts/DefaultLayout.vue";
import VueCollapse from "../components/Content/Collapse/VueCollapse.vue";

export default {
	name: "COllapsesView",

	components: { DefaultLayout, VueCollapse },

}

</script>

<template>
	<default-layout>
		<template v-slot:content>
			<main>

				<div class="grid grid-cols-12 space-x-5 space-y-5 mb-4">
					<div class="col-span-12 mb-3">
						<h1 class="font-semibold text-xl">Collapses</h1>
					</div>

					<div class="col-span-12 md:col-span-4">
						<vue-collapse text="Collapse light" icon="pieChartFill" light>
							<h1>Lorem ipsum dolor sit</h1>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Sunt
								animi eos
								deleniti quas sequi facilis a fugit assumenda error porro,
								necessitatibus quis
								itaque beatae! Aspernatur laudantium hic explicabo? Nemo,
								quae?</p>
						</vue-collapse>
					</div>

					<div class="col-span-12 md:col-span-4">
						<vue-collapse text="Collapse dark" dark hide-arrow>
							<h1>Lorem ipsum dolor sit2</h1>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Sunt
								animi eos
								deleniti quas sequi facilis a fugit assumenda error porro,
								necessitatibus quis
								itaque beatae! Aspernatur laudantium hic explicabo? Nemo,
								quae?</p>
						</vue-collapse>
					</div>

					<div class="col-span-12 md:col-span-4">
						<vue-collapse text="Collapse transparent" icon="pieChartFill" light transparent>
							<h1>Lorem ipsum dolor sit2</h1>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Sunt
								animi eos
								deleniti quas sequi facilis a fugit assumenda error porro,
								necessitatibus quis
								itaque beatae! Aspernatur laudantium hic explicabo? Nemo,
								quae?</p>
						</vue-collapse>
					</div>
				</div>

			</main>
		</template>
	</default-layout>
</template>
