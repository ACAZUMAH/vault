import { combineReducers } from "@reduxjs/toolkit";
import authentication from './authentication/slice'
import cart from './cart/slice'

export const rootReducers = combineReducers({ authentication, cart });
