import { useState, useEffect, useLayoutEffect } from 'react';
import { ListItem, Checkbox, ListItemText } from '@mui/material';
import { useProductContext } from '../../context/product';

export const BrandList = () => {
    const [brandsState, setBrandsState] = useState([
        { name: 'All', isSelected: false },
        { name: 'Nike', isSelected: false },
        { name: 'Addidas', isSelected: false },
        { name: 'Fila', isSelected: false },
        { name: 'Puma', isSelected: false },
        { name: 'Reebok', isSelected: false },
        { name: 'Jordan', isSelected: false }
    ]);

    const { filterBrand, activeFilters, removeFilter } = useProductContext();

    const toggleBrandSelection = (checkboxEvent, brandIndex) => {
        const updatedBrands = [...brandsState];
        const selectedBrand = updatedBrands[brandIndex];

        // Toggle the isSelected property based on the checkbox state
        selectedBrand.isSelected = checkboxEvent.target.checked;

        // Update the brands state
        setBrandsState(updatedBrands);

        // Handle filter logic
        if (selectedBrand.isSelected) {
            // If the brand is selected, add it to the filters
            filterBrand(selectedBrand.name);
        } else {
            // If the brand is deselected, remove it from the filters
            removeFilter(selectedBrand.name);
        }
    };
    useEffect(() => {
        if (activeFilters) {
            const activeBrandFilters = activeFilters.filter(filter => !filter.includes(" - "))
            const updatedBrands = brandsState.map((brandState) => {
                const currentBrandFilter = activeBrandFilters.find((brandFilter) => brandFilter == brandState.name)
                if (currentBrandFilter) {
                    brandState.isSelected = true
                    return brandState
                } else {
                    brandState.isSelected = false
                    return brandState
                }
            })

            setBrandsState(updatedBrands)
            console.log("brandState====%%=>>>", updatedBrands)

            

        }
    }, [activeFilters])

    return (
        <>
            {brandsState.map((brand, brandIndex) => (
                <ListItem key={brand.name} disablePadding>
                    <Checkbox
                        edge="start"
                        size='small'
                        checked={brand.isSelected}
                        onChange={(checkboxEvent) => toggleBrandSelection(checkboxEvent, brandIndex)}
                        sx={{
                            '&.Mui-checked': {
                                color: '#0F0F0F',
                            },
                        }}
                    />
                    <ListItemText
                        primary={brand.name}
                        primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: 'medium',
                            color: 'gray'
                        }}
                    />
                </ListItem>
            ))}
        </>
    );
};


