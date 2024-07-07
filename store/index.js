export const usePiniaStore = defineStore('pinia', {
    state(){
        return {
            likedProducts: [],
            basket: [],
            orders: [],
        }
    },
    actions:{
        addProductLiked(product){
            const index = this.likedProducts.findIndex(item => product.id ==item.id )

            if(index == -1){

                this.likedProducts.push(product)
            }
            else{
                this.likedProducts.splice(index,1)
            }
        },
        addProductBasket(product, count){
            const index = this.basket.findIndex(item => product.id ==item.id )

            if(index == -1){
                this.basket.push({...product, count: count || 1})
            }
            else{
                this.basket.splice(index,1)
            }
        },
        addOrder(order){
            this.orders.push(order)
            this.basket = []
        }
    },
    persist: true
})