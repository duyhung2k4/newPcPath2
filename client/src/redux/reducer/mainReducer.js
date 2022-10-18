import { combineReducers } from 'redux';

import { reducerSetAccessories } from './addAccessories';
import { reducerGetAccesspries } from './getAccessories';
import { reducerUpdateAccressories } from './updateAccessories';

const reducer = combineReducers({
    set: reducerSetAccessories,
    get: reducerGetAccesspries,
    update: reducerUpdateAccressories,
})

export default function reducers (state, action) { 
    return reducer(state, action);
}