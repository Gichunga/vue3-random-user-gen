app.component('product-display', {
    template: 
    /* html */
    `

    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :class="{ 'out-of-stock-img' : !inStock}"  :src="image">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>

                <!-- <p v-if="inStock">In Stock</p>
                <P v-else>Out of Stock</P> -->
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost Out of Stock</p>
                <p v-else>Out of Stock</p>

                <p v-if="onSale">{{ isOnSale }}</p>

                <p>Shipping: {{ shipping }}</p>

                <product-details :details="details"></product-details>

                <div class="color-circle" v-for="(variant, index) in variants" :key="variant.id" :style="{ backgroundColor: variant.color}" @mouseover="updateVariant(index)"></div>

                <button class="button" :disabled="!inStock" :class="{ disabledButton: !inStock }" @click="addToCart">Add to Cart</button>
                <button class="button" :disabled="!inStock" @click="decrementCart" :class="{ disabledButton: !inStock }">Remove Cart</button>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div> 
    `,

    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            description: 'I really loved thos socks',
            // image: './assets/images/socks_blue.jpg',
            // inStock: false,
            onSale: false,
            inventory: 10,

            details: ['50% cotton', '30% niron', '20% wool'],

            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:1},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:50},
            ],
            selectedVariant: 0,

            reviews: []

        }
    },
    methods: {
        addToCart() {
            this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
        },
        decrementCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        isOnSale() {
            return this.brand + ' ' + this.product + ' is on sale';
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return 150
        },
    },
    props: {
        premium: {
            required: true,
            type: Boolean
        },
    },
})