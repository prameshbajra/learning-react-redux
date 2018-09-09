export const itemReducer = (state = [], action) => {
    switch (action.type) {
        case 'add_item':
            return [...state, action.item]
        case 'remove_item':
            const indexOfItemToBeDeleted = state.indexOf(action.item);
            return state.filter((item, index) => index !== indexOfItemToBeDeleted)
        default: return state;
    }
}