//import React from 'react'

import {
  //Anchor,
  Box,
  Container,
  Divider,
  //Flex,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
// import {
//   IconBrandFacebook,
//   IconBrandLinkedin,
//   IconBrandX,
//   IconBrandYoutube,
// } from "@tabler/icons-react";

export const MainFooter = () => {
    const theme = useMantineTheme();
  return (
    <Box bg={theme.colors.dark[7]}>
      <Container size="xl" p={40}>
        <Stack>
          <Text c="dimmed">Address: </Text>
          <Text c="dimmed">Email: </Text>
          <Text c="dimmed">Phone: </Text>
        </Stack>
      </Container>
      <Divider />
      <Container w="100%" maw={1300} p={20}>
        <Group justify="space-between">
          <Text ta="center" c="dimmed">
            Copyright &copy; {new Date().getFullYear()} . All rights reserved
          </Text>
          {/* <Flex justify="flex-end" align="center" gap={5}>
            <Anchor>
              <IconBrandLinkedin size={35} stroke={1.5} />
            </Anchor>
            <Anchor>
              <IconBrandFacebook size={35} stroke={1.5} />
            </Anchor>
            <Anchor>
              <IconBrandX size={35} stroke={1.5} />
            </Anchor>
            <Anchor>
              <IconBrandYoutube size={35} stroke={1.5} />
            </Anchor>
          </Flex> */}
        </Group>
      </Container>
    </Box>
  );
};
