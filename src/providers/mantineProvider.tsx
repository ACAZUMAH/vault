import { MantineProvider } from "@mantine/core";
import React from "react";
import { Notifications } from "@mantine/notifications";

interface Props {
  children: React.ReactNode;
}

export const MantineThemeProvider: React.FC<Props> = ({ children }) => {

  return (
    <MantineProvider>
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
};
