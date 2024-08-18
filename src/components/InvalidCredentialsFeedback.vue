<template>
  <div v-if="error">
    <p class="text-red-400 font-bold mt-3">{{ error }}</p>
  </div>
</template>

<script>

export default {
  props: ['error']
}

</script>