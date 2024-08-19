import axios from 'axios';
import {store} from "@/store.js";

const client = axios.create()

client.interceptors.response.use(function (response) {

    if (response.data && response.data.user) {
        store.setUser(response.data.user);
    }

    return response;
}, function (error) {

    return Promise.reject(error);
});

export default client;