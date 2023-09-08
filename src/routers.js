import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/LoginPage.vue"
import AddPage from "./components/AddPage.vue"
import UpdatePage from "./components/UpdatePage.vue"

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'HomeVue',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddPage',
        component: AddPage,
        path: '/add'
    },
    {
        name: 'UpdatePage',
        component: UpdatePage,
        path: '/update'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;