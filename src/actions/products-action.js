export function updateProduct(products) {
    return {
        type: 'updateProduct',
        payload: {
            products
        }
    }
}