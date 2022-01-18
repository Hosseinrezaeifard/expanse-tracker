import React, { useContext } from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Divider } from '@material-ui/core'

import { ExpensesTrackerContext } from '../../context/context'
import useStyles from './styles'
import Form from '../form/Form'
import List from '../list/List'
import InfoCard from '../InfoCard'

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpensesTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Developed by Husein Rezaei Fard" />
            <CardContent>
                <Typography variant='h5' align="center">Total Balance ${balance}</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard/>
                </Typography>
                <Divider className={classes.divider}/>
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
