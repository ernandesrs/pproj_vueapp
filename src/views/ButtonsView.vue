<script>

import DefaultLayout from "../layouts/DefaultLayout.vue";
import VueButton from "../components/Ui/Buttons/VueButton.vue";
import VueButtonConfirmation from "../components/Ui/Buttons/VueButtonConfirmation.vue";
import VueLink from "../components/VueLink.vue";

export default {
	name: "ButtonsView",

	components: { DefaultLayout, VueButton, VueButtonConfirmation, VueLink },

	methods: {
		alert(a) {
			console.log(a);
		}
	}

}

</script>

<template>
	<default-layout>
		<template v-slot:content>
			<main>

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
						<vue-link text="VueLink com ícone" :href="{name: 'home'}" icon="pieChartFill" />
						<vue-link text="VueLink é RouterLink" :href="{name: 'home'}" />
						<vue-link text="VueLink é link normal" href="https://www.google.com.br" target="_blank" external />
					</div>
				</div>

			</main>
		</template>
	</default-layout>
</template>
