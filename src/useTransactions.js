import { useContext } from 'react'

import { ExpensesTrackerContext } from './context/context'
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories'

const useTransaction = (title) => {

    resetCategories()

    const { transactions } = useContext(ExpensesTrackerContext)

    const transactionsByType = transactions.filter((tx) => tx.type === title)

    //reduce is good for the time wa want to sum some values in an array
    const total = transactionsByType.reduce((acc, currVal) => acc += currVal.amount, 0)

    const categories = title === 'Income' ? incomeCategories : expenseCategories

    transactionsByType.forEach((tx) => {
        const category = categories.find((c) => c.type === tx.category)
        if (category) category.amount += tx.amount
    })

    const filteredCategories = categories.filter((c) => c.amount > 0)

    const chartData = {
        datasets:[
            {
                data:filteredCategories.map((c) => c.amount),
                backgroundColor:filteredCategories.map((c) => c.color),
            }
        ],
        labels: filteredCategories.map((c) => c.type),
    }

    return {
        filteredCategories,
        total,
        chartData
    }

}

export default useTransaction