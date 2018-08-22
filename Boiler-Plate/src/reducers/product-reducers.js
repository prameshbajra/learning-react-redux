export function productsReducer(state = 'Default State From - Product', action) {
    switch (action.type) {
        case 'updateProduct':
            return action.payload.products;
        default:
            return state;
    }
}

