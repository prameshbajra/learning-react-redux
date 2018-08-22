export function usersReducer(state = 'Default State From - User', action) {
    switch (action.type) {
        case 'updateUser':
            return action.payload.name;
        default:
            return state;
    }
}