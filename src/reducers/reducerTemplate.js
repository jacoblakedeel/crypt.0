
const initialState = {
    numberLikes: 10,
    currencies: [],
    individualCurrency: []
}

//purpose of reducer is to return a new global state
//reducer must be passed into store
const reducerTemplate = (state = initialState, action) => {
    
    switch(action.type){
        case "INCREMENT":   //must match name of action.type in actions
            return{
                ...state,
                numberLikes: state.numberLikes + action.data
            }
        case "ADDCURRENCIESTOSTATE":
            return{
                ...state,
                currencies: action.data
            }
        case "ADDCURRENCYTOGRAPH":
            return{
                ...state,
                individualCurrency: action.data
            }
        
        default:
            return state;
    }
}



export default reducerTemplate;