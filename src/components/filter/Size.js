import { ListItem,Checkbox,ListItemText } from '@mui/material'
import React from 'react'

const Size = () => {
  const sizeList = ['small','medium','large']
    const handleChange = (e,size) => {
console.log('size:::',e.target.checked)
    }
    return (
      sizeList.map( size => (
        <ListItem disablePadding>
            <Checkbox  edge="start" size='small' sx={{
          '&.Mui-checked': {
            color: '#0F0F0F',
          },
        }} onChange={(e)=>handleChange(e,size)} />
          <ListItemText  
            primary={size} 
            primaryTypographyProps={{
                fontSize:14,
                fontWeight:'medium',
                color:'gray'
            }}
            />
        </ListItem>
      ))
    )
}
export default Size