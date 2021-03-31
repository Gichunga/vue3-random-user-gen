app.component('product-details', {
   props: {
       details : {
           type: Array,
           required: true
       }
   },
   template: 
       /* html */
       `
        <li v-for="detail in details">{{ detail }}</li>
       `    
})