import * as IceCreamTypes from '../constants/Icecream-action.types';
const initila_data = [];

function reducer(state =initila_data,action){
    console.log(action.type);
    switch (action.type) {
     
        case IceCreamTypes.ADD_ICECREAM:
            return state;
    
        default:
            return state;
    }
}

export default reducer;