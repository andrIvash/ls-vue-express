<template lang="pug">
  .todo-list(v-if="todos.length")
    .content
      ul.list
        li.item(v-for="todoItem in filteredTodos")
          todo-item(
            :todo="todoItem"
            @checkTodo="checkTodo"
            @removeTodo="removeTodo"
          )
    .footer
      .footer-content
        .counter
          | Кол-во заданий: {{filteredTodos.length}}
        .filter
          button(type="button" @click="applyFilter('all')" :class="{active: filter === 'all'}") All
          button(type="button" @click="applyFilter('active')" :class="{active: filter === 'active'}") Active
          button(type="button" @click="applyFilter('compleated')" :class="{active: filter === 'compleated'}") Compleated
</template>
<script>
export default {
  props: {
    todos: Array
  },
  data: () => ({
    filter: 'all'
  }),
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'all' : 
          return this.todos
        case 'active' : 
          return this.todos.filter(item => !item.checked)
        case 'compleated' :
          return this.todos.filter(item => item.checked)
      } 
    }
  },
  methods: {
    applyFilter(filter) {
      this.filter = filter
    },
    checkTodo(todo) {
      this.$emit('checkTodo', todo);
    },
    removeTodo(todoId) {
      this.$emit('removeTodo', todoId);
    }
  },
  components: {
    todoItem: require('./todoItem')
  }
}
</script>
<style src="styles/todoList.scss" lang="scss" scoped></style>