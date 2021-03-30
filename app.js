// ####################################
// EVENT LISTENERS (V-ON)
//####################################
const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: "Hello World guys",
            loaded: "You loaded this page on"+new Date().toLocaleString(),
            seen: false,

            todos: [
                {test: "complete my assignments"},
                {test: "complete the tutorials"},
                {test: "clean the utensils"},
            ],

           
        }
    },
    methods: {
        reverseMessage(){
            this.message = this.message.split(' ').reverse().join(' ');
        }
    },
    mounted() {
        setInterval(() => {this.counter++}, 1000);
    }
})


// #########################################
// V-MODEL DECLARATIVE
// #########################################
/* const app = Vue.createApp({
    data() {
        return {
            message: "two way binding b2n input and vue state"
        }
    }
}) */


app.component('todo-item', {
    props: ["todo"],
    template: '<div class="container"><li>{{ todo.text }}</li></div>'
})


app.mount("#app");

