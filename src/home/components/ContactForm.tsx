import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconForklift,
  IconPackageImport,
  IconShip,
  IconTruckDelivery,
} from "@tabler/icons-react";
import React from "react";
import { useBookAppointment } from "../hooks/useBookAppointment";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const theme = useMantineTheme();
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const { addAppointment, loading } = useBookAppointment();

  const handleSubmit = async () => {
    const res = await addAppointment({
      first_name: firstName,
      last_name: lastName,
      email,
      message,
    });
    if (res === 201) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <Container w="100%" maw={1300} pb={60}>
      <Group align={"flex-start"} justify={isTablet ? "center" : ""} gap={60}>
        <Box p="xl" pt={80} w="100%" maw={500}>
          <Divider size="xl" w={60} color="#FFD700" />
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="animate"
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Title fw="normal" mt="xl">
              WHAT MAKES US SPECIAL?
            </Title>
          </motion.div>
          <Text mt="xl" c="dimmed" size="md">
            Over 5,000 dedicated employees, working in 17 regional clusters
            around the globe, deliver operational excellence.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="xl">
            <Group>
              <IconPackageImport size={90} stroke={1.5} color="#FFD700" />
              <Stack gap={0}>
                <Text>SECURED</Text>
                <Text>STORAGE</Text>
              </Stack>
            </Group>
            <Group>
              <IconForklift size={90} stroke={1.5} color="#FFD700" />
              <Stack gap={0}>
                <Text>SECURED</Text>
                <Text>WAREHOUSE</Text>
              </Stack>
            </Group>
            <Group>
              <IconTruckDelivery size={90} stroke={1.5} color="#FFD700" />
              <Stack gap={0}>
                <Text>PROMPT</Text>
                <Text>COURIER</Text>
                <Text> SERVICES</Text>
              </Stack>
            </Group>
            <Group>
              <IconShip size={90} stroke={1.5} color="#FFD700" />
              <Stack gap={0}>
                <Text>DETAILED </Text>
                <Text>TRACKING</Text>
              </Stack>
            </Group>
          </SimpleGrid>
        </Box>
        <Box bg={theme.colors.dark[7]} p="xl" pt={80} w="100%" maw={700}>
          <Stack>
            <Group grow>
              <TextInput
                c="dimmed"
                size="lg"
                radius="xl"
                placeholder="Enter your first name"
                label="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
              <TextInput
                c="dimmed"
                size="lg"
                radius="xl"
                placeholder="Enter your last name"
                label="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </Group>
            <TextInput
              c="dimmed"
              size="lg"
              radius="xl"
              placeholder="Enter your email"
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Textarea
              c="dimmed"
              size="lg"
              radius="xl"
              minRows={4}
              placeholder="Enter your message"
              label="Comment or Message"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </Stack>
          <Button
            mt="xl"
            radius="xl"
            w="100"
            size="md"
            onClick={handleSubmit}
            loading={loading}
          >
            Submit
          </Button>

          <Title mt="xl" c="dimmed" fw="normal">
            BOOK APPOINTMENT
          </Title>
        </Box>
      </Group>
    </Container>
  );
};
