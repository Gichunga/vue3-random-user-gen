// create an instance of Vue
const app = Vue.createApp({
    //add a data property which is a function
    // which returns an object
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'I really loved thos socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            inventory: 10,

            details: ['50% cotton', '30% niron', '20% wool'],

            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],

            sizes: [38, 39, 40, 41, 42, 43],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        decrementCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})