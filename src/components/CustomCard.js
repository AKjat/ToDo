import { Card } from '@mui/material'
import React from 'react'

const CustomCard = ({children, elevation}) => {
  return (
    <Card elevation={elevation}>
        {children}
    </Card>
  )
}

export default CustomCard