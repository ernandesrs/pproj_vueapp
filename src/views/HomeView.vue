<script>

import { ref } from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import VueCollapse from "../components/Content/Collapse/VueCollapse.vue";
import VueButton from "../components/Ui/Buttons/VueButton.vue";
import VueModal from "../components/Content/Modal/VueModal.vue";
import VueButtonConfirmation from "../components/Ui/Buttons/VueButtonConfirmation.vue";

export default {
	name: "HomeView",

	components: { VueCollapse, DefaultLayout, VueButton, VueModal, VueButtonConfirmation },

	setup(props) {
		let showModal = ref(false);

		return {
			showModal
		};
	},

	methods: {
		alert(a) {
			console.log(a);
		}
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

	<DefaultLayout>
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


				<div class="grid grid-cols-12 space-x-5 space-y-5 mb-4">
					<div class="col-span-12 mb-3">
						<h1 class="font-semibold text-xl">Buttons</h1>
					</div>

					<div class="col-span-12 space-x-2 space-y-4">
						<vue-button text="Botão padrão" icon="app" />
						<vue-button text="Botão dark" icon="app" variant="dark" />
						<vue-button text="Botão light" icon="app" as="a" variant="light" />
						<vue-button text="Botão success" icon="app" as="a"
							variant="success" />
						<vue-button text="Botão info" icon="app" as="a" variant="info" />
						<vue-button text="Botão warning" icon="app" as="a"
							variant="warning" />
						<vue-button text="Botão danger" icon="app" as="a"
							variant="danger" />
						<vue-button text="Botão link" icon="app" as="a" />
						<vue-button text="Botão sem arrendondamento" icon="app"
							variant="dark" no-rounded />
						<vue-button text="Botão full" icon="app" variant="dark" full />
						<vue-button text="Botão pequeno" icon="app" variant="dark"
							size="sm" />
						<vue-button text="Botão grande" icon="app" variant="dark"
							size="lg" />
						<vue-button text="Botão ícone no final" icon="app" variant="dark"
							icon-end />
						<vue-button text="Botão sem ícone" variant="dark" />
						<vue-button text="Botão desativado" variant="dark"
							icon="pieChartFill" disabled />
						<vue-button text="Botão carregando" variant="dark"
							icon="pieChartFill" loading disabled />
						<vue-button text="Botão padrão sem sombra" icon="pieChartFill"
							no-shadow />
						<vue-button-confirmation @confirmed="alert('Confirmado')"
							@canceled="alert('Cancelado')" text="Botão com confirmação"
							icon="app" variant="dark" />
					</div>
				</div>


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
	</DefaultLayout>
</template>
