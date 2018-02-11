<template lang="pug">
  #app
    .container
      todo

</template>

<script>
export default {
  name: 'app',
  components: {
    todo: require('./components/todo')
  }
}
</script>

<style lang="scss"></style>
