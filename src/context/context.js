import React, { createContext, useReducer } from 'react'

import contextReducer from './contextReducer'

//Step 1 of Context API

const initialState = JSON.parse(localStorage.getItem('transactions')) || []

export const ExpensesTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {

    /* 
        reducer is a single function that specifies how we want to change our global state 
        in Other words it takes an action, and the old state and returns the new action
        action specifies how we want to change the old state
        dispatch is a function that sends the action to the reducer
        useReducer is a hook which is an alternative to useState, but for more complex states we want to manage
        in our case "transactions" are gonna be the actual 
    */

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Step 5 of the Context API => start
    // Action Creators 
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })

    const addTransaction = (tx) => dispatch({ type: 'ADD_TRANSACTION', payload: tx })
    // Step 5 of the Context API => finish

    const balance = transactions.reduce((acc, currVal) => { 
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0)

    // Everything that is wrapped inside of this component is going to have access to the app context
    return (
        // Anything (which is going to be this children), that is wrapped inside of Provider component is going to be wrapped inside of the <ExpensesTrackerContext.Provider> as well
        <ExpensesTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpensesTrackerContext.Provider>
    )
}