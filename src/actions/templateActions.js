
//this is an action creator and it returns an object
export const increment = (n) => {
    
    return{
        type: "INCREMENT",
        data: n,
    }
}

export const addCurrenciesToState = (currencies) => {
    
    return{
        type: "ADDCURRENCIESTOSTATE",
        data: currencies
    }
}




