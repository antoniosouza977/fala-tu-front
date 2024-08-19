import { reactive } from 'vue'

export const store = reactive({
    user: {
        id: null,
        name: null,
        email: null,
    },
    setUser(userData) {
        let { id, name, email } = userData;
        this.user = {...this.user, id, name, email};
    }
})