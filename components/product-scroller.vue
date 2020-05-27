<template>
  <v-slide-group light show-arrows class="slider-container">
    <v-slide-item :key="menuIndex" v-for="(menu, menuIndex) in menuData">
      <div class="category-container px-4">
        <v-img class="category-image" position="center" contain :src="menu.image"></v-img>
        <div class="category-details pl-2">
					<span class="category-name" v-html="menu.name"></span>
          <p class="category-description pl-2" v-html="menu.description"></p>
        </div>
      </div>
    </v-slide-item>
  </v-slide-group>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ProductScroller extends Vue {
  menuData: any = [];

  created() {
    this.$accessor.menu.getMenu().then((responseData: any) => {
      this.menuData = responseData;
    });
  }
}
</script>

<style lang="scss" scoped>
.slider-container {
	width: 50vw;
}
.category-container {
  display: inline-flex;
	width: 300px;
}
.category-image {
  display: inline-block;
  max-width: 80px;
	margin-top: auto;
  margin-bottom: auto;
}
.category-details {
	margin-top: auto;
  margin-bottom: auto;
}
.category-name {
	font-size: 14px;
  font-weight: 500;
}
.category-description {
  font-size: 10px;
	word-wrap: break-word;
	white-space: normal;
}
</style>