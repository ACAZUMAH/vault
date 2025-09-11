import React from "react";

import { Divider, Drawer, NavLink } from "@mantine/core";
import { DrawerProps } from "../interfaces";
import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { routesEndpoints } from "../../../constants";

export const MainDrawer: React.FC<DrawerProps> = ({ opened, onClose }) => {
  const navigateToHome = useAppNavigation(routesEndpoints.HOME);
  const navigateToSave = useAppNavigation(routesEndpoints.SAVE);
  const navigateToBuy = useAppNavigation(routesEndpoints.BUY_SELL);
  const navigateToAbout = useAppNavigation(routesEndpoints.ABOUT);
  const navigateToContact = useAppNavigation(routesEndpoints.CONTACT);

  return (
    <>
      <Drawer opened={opened} onClose={onClose} position="right">
        <div>
          <NavLink
            p={15}
            label="Home"
            onClick={() => {
              navigateToHome();
              onClose();
            }}
          />
          <Divider />
          <NavLink p={15} label="Buy"onClick={() => {
            navigateToBuy();
            onClose();
          }} />
          <Divider />
          <NavLink
            p={15}
            label="Save Deposit"
            onClick={() => {
              navigateToSave();
              onClose();
            }}
          />
          <Divider />
          <NavLink p={15} label="About Us" onClick={() => {
            navigateToAbout();
            onClose();
          }}/>
          <Divider />
          <NavLink p={15} label="Contact" 
          onClick={() => {
            navigateToContact();
            onClose();
          }}/>
        </div>
      </Drawer>
    </>
  );
};
