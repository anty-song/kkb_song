var vm = new Vue({
    el: '#app',
    data: {
        isActive: true,
        error: null,
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        },
        styleObject: function () {
            return {
                color: 'red',
                fontSize: 20 + 'px'
            }
        }
    }
})