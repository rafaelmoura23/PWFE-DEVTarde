import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Router from 'vue-roter'
// import routes from'./routes'
// import vueConfig from 'vue.config'
// import router from './router'

// vue.config.productionTip = false

// vue.use(Router)


createApp(App).use(router).use(router).mount('#app')

// const router = new Router({
//     routes
// })

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app')