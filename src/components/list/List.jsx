import React, {useContext} from 'react'
import { Slide, List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import { MoneyOff, Delete } from '@material-ui/icons'

import useStyles from './styles'

import {ExpensesTrackerContext} from '../../context/context' 

const List = () => {
    const classes = useStyles()
    const {deleteTransaction, transactions} = useContext(ExpensesTrackerContext)
    // Step 4 of Context API
    // const globalState = useContext(ExpensesTrackerContext)

    // console.log(globalState)

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
