const redux = require('redux');
const createStore = redux.createStore;

const BUY_PIZZA = 'BUY_PIZZA';

// Action creator
function buyPizza() {
    console.log("In The Buy Pizza method")
    return {
        type: BUY_PIZZA,
        info: 'Action for buy pizza'
    }
}


const initialState = {
    numOfPizzas: 20 
}


// reducer
const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PIZZA:
            return {
                ...state,
                numOfPizzas: state.numOfPizzas - 1
            }
        default:
            return state
    }
}



const store = createStore(pizzaReducer);
console.log("Initial State=11=> ,", store.getState())
store.dispatch(buyPizza());
const unsubscribe = store.subscribe(() => console.log("UPDATE STATE==>", store.getState()))
store.dispatch(buyPizza());

unsubscribe()