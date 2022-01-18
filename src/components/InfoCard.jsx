import React from 'react'

const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{textAlign:'center', padding:'0 10%'}}>
            Try saying: 
            Add {isIncome? 'income ' : 'Expense '} for {isIncome? '$100 ' : '$50 '} 
            in category {isIncome?  'Investments ' : 'Entertainment '} 
            for {isIncome? 'monday ': 'sunday '}
        </div>
    )
}

export default InfoCard
