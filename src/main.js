import {CONSTANTS} from "@/const.js";
import './index.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


// Components
import Button from "primevue/button"
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import ToggleSwitch from "primevue/toggleswitch";
import AuthService from "@/services/authService.js";


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});
app.use(router)

app.component('Button', Button)
app.component('FloatLabel', FloatLabel)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('ToggleSwitch', ToggleSwitch)


router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !AuthService.isAuthenticated()) {
        return {
            path: '/login',
            query: { redirect: to.fullPath },
        }
    }
})

app.mount('#app')
