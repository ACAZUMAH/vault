import {
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconNotebook,
  IconTruckDelivery,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";
import React from "react";
import CountUp from "react-countup";

export const Delivery: React.FC = () => {
  return (
    <Box bg="#FFD700" mt="xl">
      <Container w="100%" maw={1300} py={30}>
        <SimpleGrid cols={{ base: 2, md: 3, lg: 4 }} spacing="xl" p="xl">
          <Box>
            <Group>
              <IconNotebook size={80} stroke={1.5} color="white" />
              <Stack gap={3}>
                <Title order={1} c="black" fw={500}>
                  <CountUp end={1000} duration={2} />+
                </Title>
                <Text c="black" size="md">
                  Safe Deposit Vaults
                </Text>
              </Stack>
            </Group>
          </Box>
          <Box>
            <Group>
              <IconWorld size={80} stroke={1.5} color="white" />
              <Stack gap={3}>
                <Title order={1} c="black" fw={500}>
                  <CountUp end={150} duration={2}  />+
                </Title>
                <Text c="black" size="md">
                  Clients
                </Text>
              </Stack>
            </Group>
          </Box>
          <Box>
            <Group>
              <IconTruckDelivery size={80} stroke={1.5} color="white" />
              <Stack gap={3}>
                <Title order={1} c="black" fw={500}>
                  <CountUp end={5} />+
                </Title>
                <Text c="black" size="md">
                  Delivery points
                </Text>
              </Stack>
            </Group>
          </Box>
          <Box>
            <Group>
              <IconUsersGroup size={80} stroke={1.5} color="white" />
              <Stack gap={3}>
                <Title order={1} c="black" fw={500}>
                  <CountUp end={10} />+
                </Title>
                <Text c="black" size="md">
                  People in team
                </Text>
              </Stack>
            </Group>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
