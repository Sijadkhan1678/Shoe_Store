import { useState } from 'react'
import { ListItem, Checkbox, ListItemText, ListItemIcon } from '@mui/material'
import { useProductContext } from '../../context/product'



export const BrandList = () => {
    const [brand, setBrand] = useState('')
    const { filterBrand, activeFilters,removeFilter } = useProductContext()
    const brandList = ['All', 'Nike', 'Addidas', 'Fila', 'Puma', 'Reebok', 'Jordan']

    // const { currentBrand, getBrandProducts } = useProductContext()

    // const [value, setValue] = useState(0);


    // const handleChange = (event, newValue) => {

    //     getBrandProducts(brandList[newValue])
    //     setValue(newValue);

    // };
    const handleChange = (e, brand) => {
        let filterActive = activeFilters.find(filter => filter === brand)
        if (filterActive) {
            removeFilter(filterActive)
        } else {
            filterBrand(brand)
            console.log('Check::', e.target.checked)

            console.log('Check value::', brand)
        }


    }

    return (
        brandList.map(brand => (
            <ListItem key={brand} disablePadding>
                <Checkbox edge="start" size='small' 
                sx={{
                    //   color: pink[400],
                    '&.Mui-checked': {
                        color: '#0F0F0F',
                    },
                }} onChange={(e) => handleChange(e, brand)} />
                <ListItemText
                    primary={brand}
                    primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 'medium',
                        color: 'gray'
                    }}
                />
            </ListItem>
        )))
}
