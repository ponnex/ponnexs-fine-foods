<template>
  <v-app class="body-background">
    <div :class="{'home-background': $route.path === '/'}">
      <v-navigation-drawer app disable-resize-watcher height="100vh" fixed v-model="isOpen">
        <v-list nav>
          <v-list-item-group active-class="amber lighten-1 text--darken-4">
            <v-list-item nuxt exact to="/" exact-active-class="nav-selected">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item nuxt to="/menu" exact exact-active-class="nav-selected">
              <v-list-item-title>Menu</v-list-item-title>
            </v-list-item>

            <v-list-item nuxt to="/about" exact exact-active-class="nav-selected">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>

            <v-list-item nuxt to="/contact" exact exact-active-class="nav-selected">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        elevate-on-scroll
        height="98px"
        :light="isScrolled"
        :color="isScrolled ? '#F7BE33' : 'rgba(0, 0, 0, 0)'"
      >
        <v-app-bar-nav-icon class="d-flex d-md-none" @click.stop="isOpen = !isOpen"></v-app-bar-nav-icon>
        <v-container fluid class="pa-xs-4 pa-sm-10">
          <v-row>
            <v-col col="8" md="2" class="text-center">
              <span class="font-logo majjang" :class="{'light': isScrolled}">Majjang's</span>
            </v-col>
            <v-col col="12" md="4" class="d-none d-md-block" align-self="center">
              <v-row>
                <v-col>
                  <n-link
                    to="/"
                    class="menu"
                    :class="{'light': isScrolled}"
                    exact
                    exact-active-class="selected"
                  >Home</n-link>
                </v-col>
                <v-col>
                  <n-link
                    to="/menu"
                    class="menu"
                    :class="{'light': isScrolled}"
                    exact
                    exact-active-class="selected"
                  >Menu</n-link>
                </v-col>
                <v-col>
                  <n-link
                    to="/about"
                    class="menu"
                    :class="{'light': isScrolled}"
                    exact
                    exact-active-class="selected"
                  >About</n-link>
                </v-col>
                <v-col>
                  <n-link
                    to="/contact"
                    class="menu"
                    :class="{'light': isScrolled}"
                    exact
                    exact-active-class="selected"
                  >Contact</n-link>
                </v-col>
              </v-row>
            </v-col>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-col col="4" sm="2" class="hidden-xs-only" align-self="center" align-content="end">
              <span>Search bar</span>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>

      <v-content id="main">
        <v-container v-scroll="onScroll" fluid>
          <v-card light tile class="social-media-bar pa-2 d-none d-sm-block">
            <v-responsive height="30vh">
              <v-col>
                <v-row>
                  <n-link to="/contact">FB</n-link>
                </v-row>
                <v-row>
                  <n-link to="/contact">IG</n-link>
                </v-row>
                <v-row>
                  <n-link to="/contact">VB</n-link>
                </v-row>
              </v-col>
            </v-responsive>
          </v-card>
          <nuxt />
        </v-container>
      </v-content>

      <v-footer v-if="$route.path !== '/'" app absolute>
        <!-- -->
        Footer data here
      </v-footer>
    </div>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class Default extends Vue {
  isOpen: boolean = false;
  isScrolled: boolean = false;

  onScroll(event: any) {
    let scrollY = event.currentTarget.scrollY;
    if (scrollY >= 20) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  position: relative;
  text-decoration: none;
  &.light {
    color: black;
  }
}
.selected {
  color: white;
  &.light {
    color: white;
  }
}
.selected::after {
  content: "";
  display: block;
  width: 50%;
  height: 2px;
  background: white;
  position: absolute;
  left: 25%;
}
.nav-selected {
  background-color: #f7be33;
}
.social-media-bar {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 50%;
  margin-top: calc(-30vh / 2);
}
.body-background {
  background: rgb(53, 57, 68);
  background: -moz-linear-gradient(
    90deg,
    rgba(53, 57, 68, 1) 0%,
    rgba(22, 22, 22, 1) 46%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(53, 57, 68, 1) 0%,
    rgba(22, 22, 22, 1) 46%
  );
  background: linear-gradient(
    90deg,
    rgba(53, 57, 68, 1) 0%,
    rgba(22, 22, 22, 1) 46%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#353944",endColorstr="#161616",GradientType=1);
}

.home-background {
	background: none;
}

@media (min-width: 960px) {
	.home-background {
		height: 100vh;
		background-image: url("/images/svg/home-background.svg?inline");
		background-size: contain;
		background-repeat: no-repeat;
		background-position: right;
	}
}
</style>