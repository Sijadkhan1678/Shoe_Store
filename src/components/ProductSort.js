import React from 'react';
import {FormControl,Select, MenuItem,} from '@mui/material'

const ProductSort = () => {
    const [sort, setSort] = React.useState('');
    const sortOptions = [
        "Best Selling",
        "Alphabetically, A-Z",
        "Alphabetically, Z-A",
        "Price, low to high",
        "Price, high to low",
        "Date, old to new",
        "Date, new to old"]

    const handleChange = (event) => {
        console.log('Activesort::',event.target.value)
        setSort(event.target.value);
    };
    return (
        <FormControl size="small" sx={{ width:{sm:200,xs:120} }}  >
            <Select
                value={sort}
                onChange={handleChange}
                // sx={{'& .MuiInputBase-input':{color:'red'}}}
                displayEmpty
                inputProps={{ 'aria-label': 'shoe sort' }}>

                <MenuItem value=""> <em>Sort By</em></MenuItem>
                {sortOptions.map(option => <MenuItem value={option}>{option}</MenuItem>)}

            </Select>
        </FormControl>
    )
}
export default ProductSort