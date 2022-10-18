import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducer/mainReducer";

const middelware = [thunk];

export const store = createStore(
    reducers,
    applyMiddleware(...middelware),
)