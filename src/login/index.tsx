import { Box, Container, Title, useMantineTheme } from "@mantine/core";
import React from "react";

export const Login: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Box bg={theme.colors.dark[7]} h={200}>
        <Container w="100%" maw={1300} pt={60}>
          <Title>Login</Title>
        </Container>
      </Box>
      <Container w="100%" maw={1300} pb={60}>
        <Title>Login</Title>
      </Container>
    </>
  );
};
