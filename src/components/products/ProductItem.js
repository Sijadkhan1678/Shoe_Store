import React,{useContext} from 'react';
import {Grid,Typography,Box,Rating,Button,Stack} from '@mui/material'
import context from '../../context/AppContext'

const ProductItem = ({product}) => {
  
  const {name,img,price,rating,brand} = product
  const {addToCart} = useContext(context);
  let shoeName = name.slice(0,14)
    return (
      
     <Grid item lg={4} md={4} sm={4} xs={12}>
      <Box width="100%" style={{'&:hover':{transform:'scale(1.5)'}}}>  
       <img src={img} alt='shoe' width='100%' height={250}  style={style} />
        </Box>
        <Stack  direction='column' justifyContent='space-evenly'>
        
         <Box sx={productsx}>
              <Typography variant='h6' color="#1c1c1c" fontWeight='500' fontSize='1rem'>
                 {shoeName }
                 </Typography>
 
                  <Typography
                  variant='p' 
                  color ='primary'>
                   $ {price}
                   </Typography>
             </Box>
             
            <Box sx={star$brand_sx}>
                   <Rating value={rating}  precision={0.5} readOnly/>
                <Typography variant='span'  fontSize='14px' fontWeight='300' >
                    {brand}
                 </Typography>
                 </Box>
          {/*Add product into cart */}       
             <Box mt={3}>
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
const productsx = {
   pt: '1.5rem',
   pb: '1rem',
   pr: '0.4rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
}
const star$brand_sx = {
  pt: '0rem',
  pb: '0.5rem',
  pr: '0.4rem',
  ml: '-0.23rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const style={
  borderRadius: '0.8rem',
  objectFit: 'cover',
  
}

export default ProductItem;
