<template>
  <!--  <div>-->
  <!--    <div class="w-full h-screen flex items-center justify-center">-->
  <!--      <div class="p-6 border rounded-lg" style="min-width: 600px;">-->

  <!--        <div class="w-full my-3">-->
  <!--          <label class="inline-block w-full mb-3" for="username">Usuário</label>-->
  <!--          <InputText class="w-full" v-model="form.username"></InputText>-->
  <!--          <InputValidadionErrors :errors="errors.validationErros.username"/>-->
  <!--        </div>-->

  <!--        <div class="w-full my-3">-->
  <!--          <label class="inline-block w-full mb-3" for="password">Senha</label>-->
  <!--          <Password class="w-full" v-model="form.password" :feedback="false"></Password>-->
  <!--          <InputValidadionErrors :errors="errors.validationErros.password"/>-->
  <!--          <InvalidCredentialsFeedback :error="errors.credentials"/>-->
  <!--        </div>-->

  <!--        <div class="flex justify-end">-->
  <!--          <Button @click.prevent="login" label="Login"/>-->
  <!--        </div>-->

  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <section class="h-screen">
    <div class="container h-full px-6 py-24">
      <div
          class="flex h-full flex-wrap items-center justify-center lg:justify-between">
        <!-- Left column container with background-->
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"/>
        </div>

        <!-- Right column container with form -->
        <div class="md:w-8/12 lg:ms-6 lg:w-5/12 border border-green-400 rounded-lg p-6">
          <form @submit.prevent="login">
            <!-- Username input -->
            <div class="relative mb-6" data-twe-input-wrapper-init>
              <InputText
                  v-model="form.username"
                  type="text"
                  class="w-full"
                  required
                  :invalid="Boolean(errors.validationErros.username)"
                  placeholder="Username"/>
              <InputValidadionErrors :errors="errors.validationErros.username"/>
            </div>

            <!-- Password input -->
            <div class="relative mb-6" data-twe-input-wrapper-init>
              <InputText
                  v-model="form.password"
                  type="password"
                  class="w-full"
                  required
                  :invalid="Boolean(errors.validationErros.password)"
                  placeholder="Password"/>
              <InputValidadionErrors :errors="errors.validationErros.password"/>
              <InvalidCredentialsFeedback :error="errors.credentials"/>
            </div>

            <!-- Submit button -->
            <Button
                type="submit"
                class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light">
              Login
            </Button>

          </form>

        </div>
      </div>
    </div>
  </section>
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