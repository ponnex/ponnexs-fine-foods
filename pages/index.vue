<template>
	<div id="home-container">
		<v-container fluid class="pa-xs-4 px-sm-10">
			<v-row dense class="first-row">
				<v-col cols="12" md="6" class="section-container">
					<div class="section-1">
						<span class="line-1">Are You Hungry ?</span>
						<span class="line-2">Don't Wait !</span>
						<span class="line-3">Let start to order food now</span>
						<n-link tag="button" to="/menu" class="line-4">Check Our Menu</n-link>
					</div>
				</v-col>
				<v-col cols="12" md="5">
					<v-img :max-height="getImageHeight()" :position="getImagePositon()" contain :src="require('@/assets/images/featured-menu.png')"></v-img>
				</v-col>
			</v-row>

			<v-row dense class="second-row pt-4">
				<v-col cols="12" md="6">
					<product-scroller></product-scroller>
				</v-col>
				<v-spacer></v-spacer>
				<v-col cols="12" md="4">
					<v-card v-if="false" flat class="card-layout pa-2" outlined tile>Banner</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Vuetify from 'vuetify';
import ProductScroller from "@/components/product-scroller.vue";
declare var _: any;

@Component({
	components: {
		ProductScroller
	}
})
export default class HomePage extends Vue {
	
	getHeight(section) {
		switch(section) {
			case 'first-row': {
				switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '300px'
          case 'sm': return '400px'
          case 'md': return '380px'
          case 'lg': return '450px'
          case 'xl': return '700px'
        }
			}
			case 'second-row': {
				switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '220px'
          case 'sm': return '220px'
          case 'md': return '120px'
          case 'lg': return '160px'
          case 'xl': return '300px'
        }
			}
		}
	}

	getImageHeight() {
		switch (this.$vuetify.breakpoint.name) {
			case 'xs': return '300px'
			case 'sm': return '400px'
			case 'md': return '400px'
			case 'lg': return '450px'
			case 'xl': return '700px'
		}
	}

	getImagePositon() {
		return this.$vuetify.breakpoint.mdAndDown ? 'center' : 'right'
	}
	
}
</script>

<style lang="scss" scoped>
.card-layout {
  background-color: rgba(0, 0, 0, 0);
}

.section-container {
	margin: auto 0 auto 0;
	.section-1 {
		margin-left: 5%;
		span {
			position: relative;
			display: block;
			line-height: 1.2em;
		}
		.line-1 {
			font-size: 25px;
			font-style: italic;
		}
		.line-2 {
			font-size: 80px;
			font-weight: 700;
		}
		.line-3 {
			color: #f7be33;
			font-weight: 600;
			font-size: 18px;
			font-style: italic;
		}
		.line-4 {
			margin: 25px 0 0 0;
			font-size: 12px;
			font-weight: 500;
			border-radius: 25px;
			border: 1px solid white;
			padding: 1px 8px 1px 8px;
		}
	}
}

@media (min-width: 480px) {
	.section-container {
		margin: auto 0 auto 0;
		.section-1 {
			margin-left: 5%;
			span {
				position: relative;
				display: block;
				line-height: 1.2em;
			}
			.line-1 {
				font-size: 35px;
				font-style: italic;
			}
			.line-2 {
				font-size: 100px;
				font-weight: 700;
			}
			.line-3 {
				color: #f7be33;
				font-weight: 600;
				font-size: 30px;
				font-style: italic;
			}
			.line-4 {
				margin: 25px 0 0 0;
				font-size: 12px;
				font-weight: 400;
				border-radius: 25px;
				border: 1px solid white;
				padding: 1px 8px 1px 8px;
			}
		}
	}
}
</style>