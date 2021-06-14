import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        blackHoodie: {
            name: "Black Hoodie",
            price: 1400,
            numbers: 0,
            inCart: false
        },
        redHoodie: {
            name: "Red Hoodie",
            price: 1600,
            numbers: 0,
            inCart: false
        },
        whiteHoodie: {
            name: "White Hoodie",
            price: 2000,
            numbers: 0,
            inCart: false

        },
        blueHoodie: {
            name: "Blue Hoodie",
            price: 1800,
            numbers: 0,
            inCart: false
        }
    } 
}               

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }    
        default:
            return state;
    }

}