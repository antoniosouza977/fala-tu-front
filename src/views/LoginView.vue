<template>
  <section class="h-screen">
    <div class="container h-full px-6 py-24">
      <div
          class="flex h-full flex-wrap items-center justify-center lg:justify-between">
        <!-- Left column container with background-->
        <div class="mb-12 md:w-8/12 lg:w-6/12">
          <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"/>
        </div>

        <!-- Right column container with form -->
        <div class="md:w-8/12 lg:ms-6 lg:w-5/12 border p-6 rounded-lg">
          <!-- Email input -->
          <div class="relative p-3 mb-6">
            <FloatLabel>
              <InputText class="w-full" type="email" id="email" v-model="form.email"/>
              <label for="email">E-mail</label>
            </FloatLabel>
          </div>

          <!-- Password input -->
          <div class="relative p-3 mb-6">
            <FloatLabel>
              <Password size="large" id="password" v-model="form.password" toggleMask
                        :feedback="false"/>
              <label for="password">Senha</label>
            </FloatLabel>
          </div>

          <!-- Remember me checkbox -->
          <div class="mb-6 flex items-center justify-between">
            <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem] flex items-center">
              <ToggleSwitch v-model="form.remember"/>
              <label
                  class="ml-1 inline-block ps-[0.15rem] hover:cursor-pointer"
                  for="exampleCheck3">
                Lembrar de mim
              </label>
            </div>

          </div>

          <!-- Submit button -->
          <Button
              @click.prevent="login"
              class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
            Logar
          </Button>


        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        remember: false
      }
    }
  },
  methods: {
    login() {
      console.log(this.form)
      // this.form.post(route('login.post'))
    }
  }
}
</script>