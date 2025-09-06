import { routesEndpoints } from "../../../constants";
import { navItems } from "../interfaces";

export const navigations: navItems[] = [
    {
      label: 'Home',
      route: routesEndpoints.HOME,
    },
    {
        label: 'Buy',
        route:  routesEndpoints.BUY_SELL
    },
    {
        label: 'Save Deposit',
        route: routesEndpoints.SAVE
    },
    {
        label: "About Us",
        route: routesEndpoints.ABOUT
    }, {
        label: "Contact",
        route: routesEndpoints.CONTACT
    }
]

export const menuItems = []