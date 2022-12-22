import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({
    onClick,
    variant,
    children
}) => {
  return (
    <Button  onClick={onClick} variant={variant} >
        {children}
    </Button>
  )
}

export default CustomButton