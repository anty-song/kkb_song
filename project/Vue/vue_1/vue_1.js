Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello ~',
        todos: [
            {id:0,text: 'one'},
            {id:1,text: 'two'},
            {id:2,text: 'three'}
        ]
    },
    methods: {
        reservemessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})