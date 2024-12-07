import { FILTER_BRAND, FILTER_PRICE, FILTER_SIZE, REMOVE_FILTER, OPEN_DRAWER, CLOSE_DRAWER } from './types';

const reducer = (state, action) => {

    switch (action.type) {

        case FILTER_BRAND:
            // When brand filter is applied, update the filterProducts list based on the selected brand
            const priceFilterApplied = state.activeFilters.some(filter => filter.includes(" - "));
            if (priceFilterApplied) {

                // Check if price filter exists and combine it with brand filter
                const [minPrice, maxPrice] = state.activeFilters.find(filter => filter.includes(" - ")).split(" - ").map(Number);

                return {
                    ...state,
                    filterProducts: state.products.filter(product => {
                        const appliedBrandFilters = state.activeFilters.filter((filter) => !filter.includes(' - '))
                        // console.log("appliedBrandFilters=>>>",appliedBrandFilters)
                        const brand = appliedBrandFilters.find(brand => brand === product.brand)
                        // console.log("brand::",brand)
                        // console.table(product.brand === brand || product.brand === action.payload && product.price >= minPrice && product.price <= maxPrice  && product)
                        return (product.brand === action.payload || brand === product.brand) && product.price >= minPrice && product.price <= maxPrice;
                    }),
                    activeFilters: [...state.activeFilters.filter(filter => !filter.includes(action.payload)), action.payload]  // Prevent duplicates
                }

            } else {

                return {
                    ...state,
                    filterProducts: [...state.filterProducts, ...state.products.filter(product => product.brand === action.payload)],
                    activeFilters: [...state.activeFilters.filter(filter => !filter.includes(action.payload)), action.payload]  // Prevent duplicates
                };
            }


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
            const currentPriceFilter = state.activeFilters.find(filter => filter.includes(" - "))
            const brandFilters = state.activeFilters.filter(filter => !filter.includes(" - "))
            const updatedBrandFilter = brandFilters.filter(filter => filter !== action.payload)
            if (brandFilters.length && currentPriceFilter) {
                const [min, max] = currentPriceFilter.split(" - ").map(Number)

                return {
                    ...state,
                    filterProducts: state.products.filter(product => {
                        if (!action.payload.includes(" - ") && brandFilters.length === 1) {
                            return product.price >= min && product.price <= max
                        } else {
                            const brandFilter = updatedBrandFilter.find(filter => filter === product.brand)
                            return brandFilter && product.price >= min && product.price <= max
                        }
                    }),
                    activeFilters: state.activeFilters.filter(filter => filter !== action.payload)
                }

            }else{

        return {
            ...state,
            filterProducts: state.filterProducts.filter(product => product.brand !== action.payload),
            activeFilters: state.activeFilters.filter(filter => filter !== action.payload)
        }
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
