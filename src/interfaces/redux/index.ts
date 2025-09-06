import { PayloadAction } from "@reduxjs/toolkit";

export interface Setting {
    darkMode: boolean
}

export interface SettingActions extends PayloadAction<Partial<Setting>>{}

export interface Authentication {
    isAuthenticated: boolean,
    user?: any,
    token?: string
}

export interface AuthenticationActions extends PayloadAction<Partial<Authentication>>{}

export interface CartItem {
    item: any,
    quantity: number
}
export interface Cart {
    opened: boolean
    cartItems: CartItem[]
}

export interface CartActions extends PayloadAction<Partial<Cart>> {}