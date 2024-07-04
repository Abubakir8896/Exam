export const usePiniaStore = defineStore('pinia', {
    state(){
        return {
            likedProducts: [],
            basket: []
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
        addProductBasket(product){
            this.basket.push(product)
        }
    },
    persist: true
})