Vue.component('child', {
    props: ['message'],
    template: '<span>{{ message }}</span>'
})

new Vue({
    el: "#example"
})