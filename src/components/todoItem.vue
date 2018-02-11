<template lang="pug">
  .todo-item
    label.label(:class="{checked: todo.checked}")
      .input-block
        input(
          type="checkbox" 
          @change="checkTodo"
          :checked="todo.checked"
        ).input
      .title {{todo.name}}
    .button
      button(
        type="button"
        @click="removeTodo"
      ).remove
        | x
</template>
<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    checkTodo(e) {
      const todoItem = {
        ...this.todo,
        checked: e.target.checked
      }

      this.$emit('checkTodo', todoItem)
    },
    removeTodo() {
      this.$emit('removeTodo', this.todo.id)
    }
  }
}
</script>
<style src="styles/todoItem.scss" lang="scss" scoped></style>