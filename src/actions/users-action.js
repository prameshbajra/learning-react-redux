export function updateUser(name) {
    return {
        type: 'updateUser',
        payload: {
            name
        }
    }
} 