import { About } from "../about";
import { Billing } from "../billing/Billing";
import { BuyingAndSelling } from "../buy";
import { routesEndpoints } from "../constants";
import { Contacts } from "../contacts";
import { SaveDeposit } from "../deposit";
import { Home } from "../home";
import MainLayout from "../layout/main";
import { Payment } from "../payment/makePayment";
import GoldTrackingUSPS from "../tracking";
import { User } from "../user";
import { routesProtector } from "./route-protector";

export const routes = [
  {
    path: routesEndpoints.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routesEndpoints.SAVE,
        element: <SaveDeposit />,
      },
      {
        path: routesEndpoints.BILLING, 
        loader: routesProtector().requireLoggedIn(),
        element: <Billing />,
      },
      {
        path: routesEndpoints.PAYMENT,
        loader: routesProtector().requireLoggedIn(),
        element: <Payment />
      },
      {
        path: routesEndpoints.BUY_SELL,
        element: <BuyingAndSelling />,
      },
      {
        path: routesEndpoints.TRACKING,
        element: <GoldTrackingUSPS />
      },
      {
        path: routesEndpoints.ABOUT,
        element: <About />
      },
      {
        path: routesEndpoints.CONTACT,
        element: <Contacts />
      },
      {
        path: routesEndpoints.USER,
        loader: routesProtector().requireLoggedIn(),
        element: <User />,
      },
    ],
  },
];
