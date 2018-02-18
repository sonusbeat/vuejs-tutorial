Vue.component('task', {
    template: '<li><slot></slot></li>',

    data() {
        return {
            message: 'This is a message from component'
        };
    }
});

let app = new Vue({
    el: '#app',

    data: {
        message: 'This is a root message'
    }
});