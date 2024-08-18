<template>
  <div >
    <div class="w-full h-screen flex items-center justify-center">
        <div class="p-6 border rounded-lg" style="min-width: 600px;">
                teste
<!--            <div class="w-full my-3">-->
<!--                <label class="inline-block w-full mb-3" for="username">Usuário</label>-->
<!--                <InputText class="w-full" v-model="form.username"> </InputText>-->
<!--            </div>-->

<!--            <div class="w-full my-3">-->
<!--                <label class="inline-block w-full mb-3" for="password">Senha</label>-->
<!--                <Password class="w-full" v-model="form.password"> </Password>-->
<!--            </div>-->

<!--            <div class="flex justify-end">-->
<!--                <Button @click.prevent="login" label="Login"</Button>-->
<!--            </div>-->

        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ROUTES} from "@/api/routes"

export default {
  name: 'RegisterView',
  data: () => {
    return {
        form: {
            username: null,
            password: null
        }
    }
  },
  methods: {
    login() {
        axios.post(ROUTES.LOGIN, this.form).then(resp => {
            console.log(resp);
            
        })
        
    }
  }
}
</script>