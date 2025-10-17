export const filterReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        
        case "PRODUCT_LIST":
            return {...state, productList: payload.products}

        case "MAIN_CATEGORY":
            return {...state, mainCategory: payload.mainCategory, subCategory: null, filterCategory: null}

        case "SUB_CATEGORY":
            return {...state, mainCategory: payload.mainCategory, subCategory: payload.subCategory, filterCategory: null}

        case "FILTER_CATEGORY":
            return {...state, mainCategory: payload.mainCategory, subCategory: payload.subCategory, filterCategory: payload.filterCategory}

        case "COLOR":
            return {...state, color: payload.color}

        case "FABRIC":
            return {...state, fabric: payload.fabric}

        case "DESIGNER":
            return {...state, designer: payload.designer}

        case "SIZE":
            return {...state, size: payload.size}

        case "OCCASION":
            return {...state, occasion: payload.occasion}

        case "SORT_BY":
            return {...state, sortBy: payload.sortBy}

        case "NEW_ARRIVAL":
            return {...state, newIn: payload.newIn}

        case "READY_TO_SHIP":
            return {...state, readyToShip: payload.readyToShip}

        case "ON_SALE":
            return {...state, onSale: payload.onSale}

        case "CSTM_FIT":
            return {...state, cstmFit: payload.cstmFit}

        case "REST_FILTER":
            return {
                ...state,
                mainCategory: null,
                subCategory: null,
                filterCategory: null,
                color: null,
                fabric: null,
                designer: null,    
                size: null,
                occasion: null,
                sortBy: null,
                newIn: false,
                readyToShip: null,
                onSale: false,
                cstmFit: false
            }

        default:
            throw new Error("No product found!");
    }
}