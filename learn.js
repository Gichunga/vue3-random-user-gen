// create an instance of Vue
const app = Vue.createApp({
    //add a data property which is a function
    // which returns an object
    data() {
        return {
            cart: [],
            premium: true,
            details: ['50% ekjke']
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeById(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1) /* at position (index) remove 1 item */
                }
        }
    }
    })