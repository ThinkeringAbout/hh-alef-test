import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import EditPage from './components/EditPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name:'HomePage', component: HomePage},
        {path:'/edit', name: 'EditPage', component: EditPage}
    ]
})

export default router