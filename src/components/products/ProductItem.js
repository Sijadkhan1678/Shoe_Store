import React,{useContext} from 'react';
import {Grid,Typography,Box,Rating,Button,Stack} from '@mui/material'
import context from '../../context/AppContext'

const ProductItem = ({product}) => {
  
  const {name,img,price,rating,brand} =product
  const {addToCart} = useContext(context);
  let shoeName = name.slice(0,14)
    return (
      
     <Grid item  >
        
      <img src={img} alt='shoe' width='166px' height='123px' style={style} />
            <Stack 
          direction='column'
          justifyContent='space-evenly'>
        
         <Box sx={sx}>
              <Typography variant='h6' fontWeight='300'
                fontSize='1rem'>
                 {shoeName }
                 </Typography>
 
                  <Typography
                  variant='p' 
                  color ='primary'>
                   $ {price}
                   </Typography>
             </Box>
             
            <Box sx={sx}>
                   <Rating value={rating}  precision={0.5} readOnly/>
                <Typography variant='span'  fontSize='12px' fontWeight='390' >
                    {brand}
                 </Typography>
                 </Box>
          {/*Add product into cart */}       
             <Box mt={1}>
         <Button 
               onClick={()=>addToCart(product)}
                 variant='contained' 
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
const style={
  borderRadius: '0.8rem'
}

export default ProductItem;