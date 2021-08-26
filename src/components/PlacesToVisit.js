import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { classExpression } from '@babel/types'
import ImageCard from './ImageCard'

const useStyles = makeStyles((theme) => ({
root:{
height:"100vh"
}
}))
const PlacesToVisit = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ImageCard />
        </div>
    )
}

export default PlacesToVisit
