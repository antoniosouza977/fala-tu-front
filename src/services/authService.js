import axios from "axios";
import {ROUTES} from "@/api/routes.js";

class AuthService {

    getNewToken(credentials) {
        return axios.post(ROUTES.LOGIN, credentials).then(resp => {
            const data = resp.data.data;
            localStorage.setItem("token", data.token);
            localStorage.setItem('tokenExpiration', data.expires_at)
        })
    }

    isAuthenticated() {
        const token = localStorage.getItem("token");
        const tokenExpiration = new Date(localStorage.getItem("tokenExpiration"));
        const now = new Date();

        return token && (tokenExpiration > now);
    }

    handleErros(error, loginViewErrorBag) {
        const resp = error.request

        if (resp.status === 422) {
            const respJSON = JSON.parse(resp.response)
            loginViewErrorBag.validationErros = {...respJSON.errors}
        }

        if (resp.status === 401) {
            loginViewErrorBag.credentials = 'Usuário ou senha inválidos.';
        }
    }
}

export default new AuthService();