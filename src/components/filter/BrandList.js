import {useState} from 'react'
import {ListItem,Checkbox, ListItemText,ListItemIcon} from '@mui/material' 

export const BrandList = () => {
    const [brand,setBrand] = useState('')
    const brandList = [ 'All', 'Nike','Addidas','Fila','Puma','Reebok','Jordan']

    // const { currentBrand, getBrandProducts } = useProductContext()

    // const [value, setValue] = React.useState(0);

    
    // const handleChange = (event, newValue) => {

    //     getBrandProducts(brandList[newValue])
    //     setValue(newValue);

    // };
    const handleChange = () => {

    }
    
    return (
        brandList.map( brand => (
        <ListItem key={brand} disablePadding>
            
            <Checkbox edge="start" size='small' color='secondary' onChange={handleChange}/>
            
            
            <ListItemText  primary={brand} 
            primaryTypographyProps={{
                fontSize:14,
                fontWeight:'medium',
                color:'gray'
            }}
            />
        </ListItem>
    )))
}
