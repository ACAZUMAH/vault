import {
  Anchor,
  Box,
  Burger,
  Container,
  Divider,
  Group,
  Title,
} from "@mantine/core";
import { navigations } from ".";
import { HeaderItems } from "./headerItems";
import React from "react";
import { Conditional } from "../../../components/conditional/Conditional";
import { useDisclosure } from "@mantine/hooks";
import { MainDrawer } from "./mainDrawer";

interface Props {
  scrolled: boolean;
}

export const MainHeader: React.FC<Props> = ({ scrolled }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Container px="md" h="100%" w="100%" maw={1300}>
        <Group justify="space-between" h="100%">
          <Anchor underline="never">
            <Title c="#FFD700" fs="italic">
              Lion Vault
            </Title>
          </Anchor>
          <Group gap={50} visibleFrom="xl">
            {navigations.map((navigate, index) => (
              <HeaderItems {...navigate} key={index} />
            ))}
          </Group>
          <Box hiddenFrom="xl">
            <Burger color="white" size="2rem" onClick={open} />
          </Box>
        </Group>
        <Conditional condition={!scrolled}>
          <Divider />
        </Conditional>
      </Container>
      <MainDrawer opened={opened} onClose={close} />
    </>
  );
};
