import * as IceCreamTypes from '../constants/Icecream-action.types';


// returns a action and payload
export const addIceCreams = payload =>({
    type : IceCreamTypes.ADD_ICECREAM,
    payload,
});


