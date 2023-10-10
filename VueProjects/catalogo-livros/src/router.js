import Vue from 'vue'
import Router from 'vue-router'

import CatalogoLivros from './components/CatalogoLivros.vue'

Vue.use(Router)

export default new Router({
routes: [
{ path: '/', component: CatalogoLivros }
]
})