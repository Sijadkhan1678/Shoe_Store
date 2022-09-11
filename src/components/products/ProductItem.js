import React from 'react';
import {Paper,Grid,Typography,Box,Rating,Button,Stack} from '@mui/material'
import ItemImage from './product.jpeg'

const ProductItem = () => {
  
    return (
      
     <Grid item  >
        
      <img src={ItemImage} alt='shoe' width='166px' height='123px' style={img} />
            <Stack 
          direction='column'
          justifyContent='space-evenly'>
        
         <Box sx={sx}>
              <Typography varaint='h3' fontWeight='bold'>
                 air nike jordan 
                 </Typography>
 
                  <Typography varaint='h6' color ='primary'>
                  $159
                   </Typography>
             </Box>
             
            <Box sx={sx}>
                   <Rating value={3.4}  precision={0.5} readOnly/>
                <Typography variant='span'  fontSize='13px' fontWeight='390' >
                    Nike
                 </Typography>
                 </Box>
          {/*Add product into cart button */}       
             <Box mt={1}>
         <Button variant='contained' 
                 size='small' 
                 style={{backgroundColor:'orange',
                   width:'100%'}}>
                Add to cart
           </Button>
           </Box>
           </Stack>
  
     </Grid>
        
      )
}
const sx = {
   mt: '0.4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
}
const img={
  borderRadius: '0.8rem'
}

export default ProductItem;