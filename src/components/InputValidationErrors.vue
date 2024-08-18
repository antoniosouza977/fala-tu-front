<template>
    <div v-if="errors">
        <p v-for="error in errors" class="text-red-400 font-bold mt-3">{{ error }}</p>
      </div>
</template>

<script>

export default {
    props: ['errors']
}

</script>