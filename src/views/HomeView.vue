<script>

import DefaultLayout from "../layouts/DefaultLayout.vue";
import Collapse from "../components/Content/Collapse/Collapse.vue";
import ButtonUi from "../components/Ui/Buttons/ButtonUi.vue";

export default {
	name: "HomeView",

	components: { Collapse, Collapse, DefaultLayout, ButtonUi },

}

</script>

<template>
	<DefaultLayout>
		<template v-slot:content>
			<main>

				<div class="grid grid-cols-12 space-x-5 space-y-5 mb-4">
					<div class="col-span-12 mb-3">
						<h1 class="font-semibold text-xl">Collapses</h1>
					</div>

					<div class="col-span-12 md:col-span-6">
						<Collapse text="Collapse light" icon="pieChartFill" light>
							<h1>Lorem ipsum dolor sit</h1>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Sunt
								animi eos
								deleniti quas sequi facilis a fugit assumenda error porro,
								necessitatibus quis
								itaque beatae! Aspernatur laudantium hic explicabo? Nemo,
								quae?</p>
						</Collapse>
					</div>

					<div class="col-span-12 md:col-span-6">
						<Collapse text="Collapse dark" dark hide-arrow>
							<h1>Lorem ipsum dolor sit2</h1>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Sunt
								animi eos
								deleniti quas sequi facilis a fugit assumenda error porro,
								necessitatibus quis
								itaque beatae! Aspernatur laudantium hic explicabo? Nemo,
								quae?</p>
						</Collapse>
					</div>
				</div>


				<div class="grid grid-cols-12 space-x-5 space-y-5 mb-4">
					<div class="col-span-12 mb-3">
						<h1 class="font-semibold text-xl">Buttons</h1>
					</div>

					<div class="col-span-12 space-x-2 space-y-2">
						<ButtonUi text="Botão padrão" icon="app" />
						<ButtonUi text="Botão dark" icon="app" variant="dark" />
						<ButtonUi text="Botão light" icon="app" as="a" variant="light" />
						<ButtonUi text="Botão success" icon="app" as="a" variant="success" />
						<ButtonUi text="Botão info" icon="app" as="a" variant="info" />
						<ButtonUi text="Botão warning" icon="app" as="a" variant="warning" />
						<ButtonUi text="Botão danger" icon="app" as="a" variant="danger" />
						<ButtonUi text="Botão link" icon="app" as="a" />
						<ButtonUi text="Botão sem arrendondamento" icon="app" variant="dark" no-rounded />
						<ButtonUi text="Botão full" icon="app" variant="dark" full />
						<ButtonUi text="Botão pequeno" icon="app" variant="dark" size="sm" />
						<ButtonUi text="Botão grande" icon="app" variant="dark" size="lg" />
						<ButtonUi text="Botão ícone no final" icon="app" variant="dark" icon-end />
						<ButtonUi text="Botão sem ícone" variant="dark" />
						<ButtonUi text="Botão desativado" variant="dark" disabled />
					</div>
				</div>

			</main>
		</template>
	</DefaultLayout>
</template>
