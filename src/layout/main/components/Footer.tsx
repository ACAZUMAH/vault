import {
  Anchor,
  Box,
  Container,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import logo from "../../../assets/images/logo1.png";

export const MainFooter = () => {
  const theme = useMantineTheme();
  return (
    <Box
      pt={80}
      bg={theme.colors.dark[7]}
      style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
    >
      <Container size="xl" p={40}>
        <Group justify="space-between" pb="xl">
          <Stack>
            <Text c="dimmed">
              Address: 7th floor, 3 Shortlands, London W6 8DA, United Kingdom
            </Text>
            <Anchor underline="never" href="mailto:info@imperiumvaultguard.com">
              <Text c="dimmed">Email: info@imperiumvaultguard.com</Text>
            </Anchor>
            <Text c="dimmed">Phone: +44 (736) 706-8134</Text>
          </Stack>
          <Anchor href="/" underline="never">
            <Image src={logo} h={85} w={120} />
          </Anchor>
        </Group>
      </Container>
      <Divider size="xs" />
      <Container w="100%" maw={1300} p={20}>
        <Group justify="space-between">
          <Text ta="center" c="dimmed">
            Copyright &copy; {new Date().getFullYear()} . All rights reserved
          </Text>
        </Group>
      </Container>
    </Box>
  );
};
