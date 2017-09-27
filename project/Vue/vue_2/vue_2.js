var vm = new Vue({
    el: '#app',
    data: {
        msg: 'TAG span',
        rawHTML: '<span>v-html</span>',
        isButtonDisabled: false
    },
    computed: {
        reverseMsg: function () {
            return this.msg.split('').reverse().join('');
        }
    }
})

var _vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Song',
        lastName: 'Peng'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})