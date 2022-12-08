<script>

import { ref } from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import VueButton from "../components/Ui/Buttons/VueButton.vue";
import VueModal from "../components/Content/Modal/VueModal.vue";

export default {
	name: "ModalsView",

	components: { DefaultLayout, VueButton, VueModal },

	setup(props) {
		let showModal = ref(false);

		return {
			showModal
		};
	}

}

</script>

<template>
	<vue-modal title="Top example modal" icon="pieChartFill" top :show="showModal"
		@hiddenModal="showModal = false" size="lg">
		<template v-slot:content>
			<h1>Lorem, ipsum dolor.</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores
				perspiciatis, numquam alias, velit voluptas accusamus magnam, nostrum
				eveniet architecto aliquid eum dolorem rerum. Consequuntur, distinctio
				magni. Assumenda, ratione excepturi?
			</p>

			<div class="pt-3">
				<vue-button icon="xCircle" text="Lorem ipsum dolor" variant="dark" />
			</div>
		</template>
	</vue-modal>

	<default-layout>
		<template v-slot:content>
			<main>

				<div class="grid grid-cols-12 space-x-5 space-y-5 mb-4">
					<div class="col-span-12 mb-3">
						<h1 class="font-semibold text-xl">Modal</h1>
					</div>

					<div class="col-span-12 mb-3">
						<vue-button @click="showModal = true" text="Abrir modal" />
					</div>
				</div>

			</main>
		</template>
	</default-layout>
</template>
