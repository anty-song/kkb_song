<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(todo, index) in todos"
        :class="{'checked': todo.done}">
        <label>{{ index + 1 }}.{{ todo.value }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: "vue-todos",
      todos: [{
        value: "阅读一本关于前端开发的书",
        done: false
      },{
        value: "补充范例代码",
        done: true
      },{
        value: "写心得",
        done: false
      }]
    }
  }
}
</script>

<style>
  @import 'assets/todos.css';
</style>
