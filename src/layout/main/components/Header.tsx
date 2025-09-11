import {
  Anchor,
  Box,
  Burger,
  Container,
  Divider,
  Group,
  Image,
  //Title,
} from "@mantine/core";
import { navigation } from ".";
import { HeaderItems } from "./headerItems";
import React from "react";
import { Conditional } from "../../../components/conditional/Conditional";
import { useDisclosure } from "@mantine/hooks";
import { MainDrawer } from "./mainDrawer";
import logo from "../../../assets/images/logo1.png";

interface Props {
  scrolled: boolean;
}

export const MainHeader: React.FC<Props> = ({ scrolled }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Container px="md" h="100%" w="100%" maw={1300}>
        <Group justify="space-between" h="100%">
          <Anchor href="/" underline="never">
              <Image src={logo} h={85} w={120} />
          </Anchor>
          <Group gap={50} visibleFrom="xl">
            {navigation.map((navigate, index) => (
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
