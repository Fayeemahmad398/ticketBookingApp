import { combineReducers, createStore } from "redux";
import ticketReducer from "./reducers/ticketReducer";


const allReducers = combineReducers({ ticketReducer: ticketReducer });
export const store = createStore(allReducers);
