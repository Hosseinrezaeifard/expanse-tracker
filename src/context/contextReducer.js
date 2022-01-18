//Step 4 of the Context API

const contextReducer = (state, action) => {
    let transactions;
    // Step 6 of the Context API
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((transaction) => transaction.id !== action.payload);
            localStorage.setItem('transactions',JSON.stringify(transactions))
            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            localStorage.setItem('transactions',JSON.stringify(transactions))
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;