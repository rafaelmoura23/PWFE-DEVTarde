import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-roter'
import routes from'./routes'
import vueConfig from 'vue.config'

vue.config.productionTip = false

vue.use(Router)


createApp(App).mount('#app')

const router = new Router({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')