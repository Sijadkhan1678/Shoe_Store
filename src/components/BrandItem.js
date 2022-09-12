import React from 'react';
import {Stack,Button} from '@mui/material'


const BrandItem = () => {
  const brandList = [
       'All',
      'Nike',
      'Addidas',
      'Fila',
      'Puma',
      'Reebok',
      'Jordan'
    ]
    return (
      
       <Stack  spacing={4} direction="row"
         mt={5} ml={8} mb={8} >
   
        {brandList.map(brand=>
          (<Button variant="" style={{color:'gray'}}>
            {brand}
          </Button>))}
       </Stack>
         )
}

export default BrandItem;