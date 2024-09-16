import {useState} from 'react'
import {ListItem,Checkbox, ListItemText,ListItemIcon} from '@mui/material' 
import { yellow,pink } from '@mui/material/colors';



export const BrandList = () => {
    const [brand,setBrand] = useState('')
    const brandList = [ 'All', 'Nike','Addidas','Fila','Puma','Reebok','Jordan']

    // const { currentBrand, getBrandProducts } = useProductContext()

    // const [value, setValue] = React.useState(0);

    
    // const handleChange = (event, newValue) => {

    //     getBrandProducts(brandList[newValue])
    //     setValue(newValue);

    // };
    const handleChange = (e,value) => {
        console.log(e.target.checked)
        console.log(value)

    }
    
    return (
        brandList.map( brand => (
        <ListItem key={brand} disablePadding>
            <Checkbox edge="start" size='small' sx={{
        //   color: pink[400],
          '&.Mui-checked': {
            color: '#0F0F0F',
          },
        }} onChange={(e)=>handleChange(e,brand)}/> 
            <ListItemText  
            primary={brand} 
            primaryTypographyProps={{
                fontSize:14,
                fontWeight:'medium',
                color:'gray'
            }}
            />
        </ListItem>
    )))
}
