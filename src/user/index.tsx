import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Menu,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconLogout, IconMenu2 } from "@tabler/icons-react";
import React from "react";
import { useAppAuthentication } from "../hooks/useAppAuthentication";
import { CurrencyFormatter } from "../components/currency/currencyFormatter";
import { convertToTitleCase } from "../helpers";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { routesEndpoints } from "../constants";

export const User: React.FC = () => {
  const theme = useMantineTheme();
  const { user, logoutUser } = useAppAuthentication();
  const navigateToBilling = useAppNavigation(routesEndpoints.BILLING);
  const navigateToHome = useAppNavigation(routesEndpoints.HOME);

  return (
    <>
      <Box bg={theme.colors.dark[7]} h={200}>
        <Container w="100%" maw={1300} pt={100}>
          <Title c="white" mt="lg" fw={400}>
            User
          </Title>
        </Container>
      </Box>
      <Container w="100%" maw={1300} pb={60} mt={25} mb="xl">
        <Group justify="flex-end" mb="xs">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon size="lg" variant="subtle">
                <IconMenu2 size={30} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={navigateToBilling}>
                Payment & Billing
              </Menu.Item>
              <Menu.Item
                onClick={() => { 
                  logoutUser()
                  navigateToHome();
                }}
                c="red"
                leftSection={<IconLogout stroke={1.5} />}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Divider />
        <Container size="md" mt={40}>
          <Grid gutter="xl">
            <Grid.Col span={5}>
              <Image src={user?.image_url!} h={250} mb="md" mr="md" />
              <Title order={3} fw={500} c="gray.7">
                FIRST NAME
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.first_name.toUpperCase()}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                LAST NAME
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.last_name.toUpperCase()}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                Phone Number
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.phone_number || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                VAULT NUMBER
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.vault_number || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                Reference Number
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.reference_number || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                COMMODITY
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.commodity.toUpperCase() || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                FORM
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.form.toUpperCase() || "N/A"}
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Title order={3} fw={500} c="gray.7">
                NUMBER OF PIECES
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {user?.number_of_pieces || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                NET QUANTITY
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {`${user?.net_quantity} KG` || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                PURITY
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} mb="md" c="dimmed">
                {`${user?.purity}%` || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                DECLARED VALUE
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} c="dimmed" mb="md">
                <CurrencyFormatter value={user?.declared_value} />
              </Text>
              <Title order={3} fw={500} c="gray.7">
                address
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} c="dimmed" mb="md">
                {user?.address || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                ID TYPE
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} c="dimmed" mb="md">
                {convertToTitleCase(user?.id_type).toUpperCase() || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                NEXT OF KIN
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} c="dimmed" mb="md">
                {user?.next_of_kin.name || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                FEES PER DAY
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} c="dimmed" mb="md">
                <CurrencyFormatter value={user?.fees_per_day} />
              </Text>
              <Title order={3} fw={500} c="gray.7">
                DATE OF DEPOSIT
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} c="dimmed" mb="md">
                {new Date(user?.date_of_deposit).toLocaleDateString() || "N/A"}
              </Text>
              <Title order={3} fw={500} c="gray.7">
                COMMENTS
              </Title>
              <Divider />
              <Text mt="xs" size="lg" fw={450} c="dimmed" mb="md">
                {user?.comments || "N/A"}
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
