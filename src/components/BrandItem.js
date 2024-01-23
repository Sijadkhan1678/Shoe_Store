import React, { useContext } from 'react';
import { Stack, Button } from '@mui/material';
import context from '../context/AppContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const BrandItem = () => {
    
    const { selectedBrand, getBrandProducts } = useContext(context)

    const [value, setValue] = React.useState(0);

    const brandList = [
        
        'All',
        'Nike',
        'Addidas',
        'Fila',
        'Puma',
        'Reebok',
        'Jordan'
    ]
    
    const handleChange = (event, newValue) => {

        getBrandProducts(brandList[newValue])
        setValue(newValue);

    };

    return (

        <Box sx={{ width: '100%', mb: 6, mt: 2 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                indicatorColor="secondary"
                textColor='secondary'
                centered
                >
                    
                {brandList.map((brand, index) => (<Tab key={index} label={brand} />))}

            </Tabs>
        </Box>


    )
}

export default BrandItem;
