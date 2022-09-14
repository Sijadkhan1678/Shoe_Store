import React,{useContext} from 'react';
import {Stack,Button} from '@mui/material';
import context from '../context/AppContext';


const BrandItem = () => {
  const {selectedBrand,getBrandProducts} = useContext(context)
  console.log('brand',selectedBrand)
  
  const brandList = [
     {name: 'All',
     active: selectedBrand === 'All' || selectedBrand === 'Home' ? 'contained' : 'outlined'},
     { name:'Nike', active:selectedBrand === 'Nike' ? 'contained': 'outlined'},
     { name:'Addidas',active: selectedBrand === 'Addidas' ? 'contained':'outlined'},
      {name:'Fila', active: selectedBrand === 'Fila' ? 'contained' : 'outlined'
      },
      {name:'Puma', active : selectedBrand==='Puma' ? 'contained' : 'outlined'},
      {name:'Reebok',active:selectedBrand ==='Reebok' ? 'contained': 'outlined'},
     { name:'Jordan',active: selectedBrand === 'Jordan' ? 'contained' : 'outlined'}
    ]
    return (
      
       <Stack  spacing={4} direction="row"
         mt={5} ml={8} mb={8} >
   
        {brandList.map((brand,index)=>
          (<Button key={index} variant={brand.active} onClick={()=>getBrandProducts(brand.name)} /*style={{color:'gray'}}*/>
             {brand.name}
          </Button>))}
       </Stack>
         )
}

export default BrandItem;