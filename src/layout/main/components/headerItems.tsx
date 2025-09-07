import React from "react";

import { Anchor, Text } from "@mantine/core";
import { headerItems } from "../interfaces";
import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { useLocation } from "react-router-dom";
import { routesEndpoints } from "../../../constants";
import { useAppAuthentication } from "../../../hooks/useAppAuthentication";

export const HeaderItems: React.FC<headerItems> = ({ label, route }) => {
  const location = useLocation();
  const navigateToRoute = useAppNavigation(route || "/");
  const navigateToUser = useAppNavigation(routesEndpoints.USER);
  const { isAuthenticated } = useAppAuthentication();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (route === routesEndpoints.SAVE && isAuthenticated) {
      navigateToUser();
      return;
    }
    navigateToRoute();
  };

  return (
    <>
      <Anchor
        href={route}
        onClick={handleNavigate}
        underline="never"
        style={{
          padding: "35px 5px",
          color: "white",
          textDecoration: "none",
          borderBottom: "5px solid",
          borderBottomColor: isActive(route) ? "#FFD700" : "transparent",
          transition: "border-bottom-color 0.4s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderBottomColor = "#FFD700")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderBottomColor = isActive(route)
            ? "#FFD700"
            : "transparent")
        }
      >
        <Text size="md">{label}</Text>
      </Anchor>
    </>
  );
};
