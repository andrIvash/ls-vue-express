<template lang="pug">
  .todo
    todo-input(
      @addTodo="addNewTodo"
    )
    todo-list(
      :todos="todos"
      @checkTodo="checkTodo"
      @removeTodo="removeTodo"
    )

</template>
<script>
export default {
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addNewTodo(todo) {
      this.todos.push(todo);
    },
    checkTodo(todo) {
      this.todos = this.todos.map(item => item.id === todo.id ? todo : item);
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(item => item.id !== todoId);
    }
  },
  components: {
    todoInput: require("./todoInput"),
    todoList: require("./todoList")
  }
};
</script>
<style lang="scss" src="styles/todo.scss" scoped></style>