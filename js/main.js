Vue.component('task-list', {
    template: `
        <div>
            <h2>All Tasks</h2>
            <task v-for="task in tasks">{{ task.description }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { description: 'Go to the Work' },
                { description: 'Go to the Store' },
                { description: 'Go to the Laundry' },
                { description: 'Buy Milk' },
                { description: 'Study English' },
                { description: 'Study Javascript' },
                { description: 'Study Sass' }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#app'
});