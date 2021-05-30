import {compose, createStore} from 'redux';
import { devToolsEnhancer} from "redux-devtools-extension";
import {carReducer} from "./reducers/carReducer";

export const store = createStore(carReducer, devToolsEnhancer() )