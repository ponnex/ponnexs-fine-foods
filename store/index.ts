import {  getAccessorType } from 'nuxt-typed-vuex'

import * as menu from './menu';

export const accessorType = getAccessorType({
  modules: {
    menu
  },
})
