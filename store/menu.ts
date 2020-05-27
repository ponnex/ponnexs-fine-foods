import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';
declare const _: any;
const ENDPOINTS = {
  GETMENU: '/json/menu.json',
};

export const state = () => ({
  menu: [] as any[],
})

export const getters = getterTree(state, {

})

export const mutations = mutationTree(state, {
  setMenu(state, menu) {
		state.menu = menu;
	}
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    getMenu({ commit }) {
      return new Promise((resolve, reject) => {
        this.$axios.get(ENDPOINTS.GETMENU).then((response) => {
          commit('setMenu', response.data.data);
          resolve(response.data.data);
        });
      });
		}
	}
)
