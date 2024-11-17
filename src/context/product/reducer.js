import { FILTER_BRAND, FILTER_PRICE, FILTER_SIZE, REMOVE_FILTER, OPEN_DRAWER, CLOSE_DRAWER } from './types';

const reducer = (state, action) => {

    switch (action.type) {

        case FILTER_BRAND:
            // When brand filter is applied, update the filterProducts list based on the selected brand
            return {
                ...state,
                filterProducts: [...state.filterProducts,...state.products.filter(product => {
                    // Check if price filter exists and combine it with brand filter
                    const priceFilterApplied = state.activeFilters.some(filter => filter.includes(" - "));
                    if (priceFilterApplied) {
                        const [minPrice, maxPrice] = state.activeFilters.find(filter => filter.includes(" - ")).split(" - ").map(Number);
                        return product.brand === action.payload && product.price >= minPrice && product.price <= maxPrice;
                    } else {
                        return product.brand === action.payload;
                    }
                })],
                activeFilters: [...state.activeFilters.filter(filter => !filter.includes(action.payload)), action.payload]  // Prevent duplicates
            };

        case FILTER_PRICE:
            // When price range is applied, filter the products based on price
            return {
                ...state,
                filterProducts: state.products.filter(product => {
                    const brandFilterApplied = state.activeFilters.some(filter => !filter.includes(" - "));
                    if (brandFilterApplied) {
                        const brands = state.activeFilters.filter(filter => !filter.includes(" - "))
                        console.log('brands===>>>', brands)
                        const brand = brands.find(brand => product.brand === brand)
                        console.log('brand===>>>', brand)

                        return brand && product.price >= action.payload.min && product.price <= action.payload.max

                    } else {
                        return product.price >= action.payload.min && product.price <= action.payload.max
                    }

                }),
                activeFilters: [
                    ...state.activeFilters.filter(filter => !filter.includes(" - ")), // Remove any old price filters
                    `${action.payload.min} - ${action.payload.max}`
                ]
            };
        case FILTER_SIZE:
            return {
                ...state,
                // filterProducts:
            }
        case REMOVE_FILTER:
            return {
                ...state,
                filterProducts: state.filterProducts.filter(product => product.brand !== action.payload),
                activeFilters: state.activeFilters.filter(filter => filter !== action.payload)
            }
        case OPEN_DRAWER:
            return {
                ...state,
                open: true
            }

        case CLOSE_DRAWER:
            return {
                ...state,
                open: false
            }

        default:
            return state
    }

}

export default reducer;
