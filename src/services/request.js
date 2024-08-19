import client from "@/http/client.js";

class Request {

    token;

    constructor() {
        this.token = localStorage.getItem("token");
    }

    get(url) {
        return client.get(url, {
            headers: this.defaultHeaders()
        })
    }

    defaultHeaders() {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ` + this.token
        }
    }
}

export default new Request();