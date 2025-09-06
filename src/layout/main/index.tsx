import { AppShell, useMantineTheme } from "@mantine/core";
import { MainHeader } from "./components/Header";
import { MainFooter } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const theme = useMantineTheme();
  const [ scroll ] = useWindowScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setScrolled(scroll.y > 50)
  }, [scroll.y])
  
  return (
    <>
      <AppShell header={{ height: 70 }}>
        <AppShell.Header
          style={{
            backgroundColor: scrolled ? theme.colors.dark[7] : "transparent",
            transition: "background-color 300ms ease",
            border: "none",
            zIndex: 100,
          }}
        >
          <MainHeader scrolled={scrolled} />
        </AppShell.Header>
        <AppShell.Main style={{ padding: 0 }}>
          <Outlet />
        </AppShell.Main>
        <AppShell.Footer pos="relative">
          <MainFooter />
        </AppShell.Footer>
      </AppShell>
    </>
  );
};

export default MainLayout;
