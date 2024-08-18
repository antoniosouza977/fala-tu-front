<template>
  <div>
    <div class="w-full h-screen flex items-center justify-center">
      <div class="p-6 border rounded-lg" style="min-width: 600px;">

        <div class="w-full my-3">
          <label class="inline-block w-full mb-3" for="username">Usuário</label>
          <InputText class="w-full" v-model="form.username"></InputText>
          <InputValidadionErrors :errors="errors.validationErros.username"/>
        </div>

        <div class="w-full my-3">
          <label class="inline-block w-full mb-3" for="password">Senha</label>
          <Password class="w-full" v-model="form.password" :feedback="false"></Password>
          <InputValidadionErrors :errors="errors.validationErros.password"/>
          <InvalidCredentialsFeedback :error="errors.credentials"/>
        </div>

        <div class="flex justify-end">
          <Button @click.prevent="login" label="Login"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import InputValidadionErrors from "@/components/InputValidationErrors.vue"
import AuthService from "@/services/authService.js";
import InvalidCredentialsFeedback from "@/components/InvalidCredentialsFeedback.vue";
import router from "@/router/index.js";

export default {
  name: 'LoginView',
  components: {
    InvalidCredentialsFeedback,
    InputValidadionErrors
  },
  data: () => {
    return {
      AuthService: AuthService,
      form: {
        username: null,
        password: null
      },
      errors: {
        validationErros: {
          username: null,
          password: null
        },
        credentials: null
      },
    }
  },
  methods: {
    async login() {
      try {
        await AuthService.getNewToken(this.form);
        const redirectUrl = this.$route.query.redirect;
        if (redirectUrl) {
          return router.push(redirectUrl);
        }
        return router.push('/');
      } catch (error) {
        AuthService.handleErros(error, this.errors);
      }
    }
  }
}
</script>