export default function dishReducer(state, action) {
    switch (action.type) {
        case "increase": {
            return state.map(item => {
                if (item.id === action.id) {
                    item.quantity = action.quantity + 1;
                    item.sum = item.quantity * action.price;
                }
                return item;
            })
        }


        case "set-data":
            return action.data.map(dish => {
                dish.sum = 0;
                dish.quantity = 0;

                return dish
            })

        default:
            throw new Error("Непонятное событие")
    }
} 