import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import bg from "../assets/images/contact.jpg";
import { Confidentiality } from "../home/components/Confidential";
import { useBookAppointment } from "./hooks/useBookAppointment";

export const Contacts: React.FC = () => {
  const theme = useMantineTheme();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
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
    <>
      <BackgroundImage
        src={bg}
        h={{ base: "100vh", sm: "65vh", md: "60vh" }}
        style={{ position: "relative" }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
      </BackgroundImage>
      <Container w="100%" maw={1300} py={60}>
        <Group justify="space-between" align="flex-start" gap={50}>
          <Box>
            <Title order={2}>VISIT US IN STORE</Title>
          </Box>
          <Box maw={400}>
            <Text>
              We always value the opportunity to meet our customers in person.
              We encourage you to meet our team and see our products in store;
              we can answer any questions you may have and explore your
              investment opportunities. Knights Bullion is open 6 days a week.
            </Text>
            <Text mt="md">
              Book an appointment ahead of your visit to guarantee time with one
              of our experts.
            </Text>
          </Box>
          <Box maw={200}>
            <Text>42 Wood St Stratford-upon-Avon Warwickshire CV37 6JG</Text>
          </Box>
        </Group>
      </Container>
      <Box bg="gray.2" py={10}>
        <Container w="100%" maw={1300}>
          <Group mt={50} justify="space-between" align="flex-start" gap={50}>
            <Box>
              <Box mt="xl">
                <Text size="xl" fw={500}>
                  CALL US
                </Text>
                <Text>+44 1234 567890</Text>
              </Box>
              <Box mt="md">
                <Text size="xl" fw={500}>
                  EMAIL US
                </Text>
                <Text>..........................</Text>
              </Box>
              <Box mt="md">
                <Text size="xl" fw={500} mb="md">
                  OPENING & CLOSING TIMES
                </Text>
                <Group mb="xs" justify="space-between">
                  <Text size="lg">Monday</Text>
                  <Text size="lg">10:00 AM - 5:00 PM</Text>
                </Group>
                <Group mb="xs" justify="space-between">
                  <Text size="lg">Tuesday</Text>
                  <Text size="lg">10:00 AM - 5:00 PM</Text>
                </Group>
                <Group mb="xs" justify="space-between">
                  <Text size="lg">Wednesday</Text>
                  <Text size="lg">10:00 AM - 5:00 PM</Text>
                </Group>
                <Group mb="xs" justify="space-between">
                  <Text size="lg">Thursday</Text>
                  <Text size="lg">10:00 AM - 5:00 PM</Text>
                </Group>
                <Group mb="xs" justify="space-between">
                  <Text size="lg">Friday</Text>
                  <Text size="lg">10:00 AM - 5:00 PM</Text>
                </Group>
                <Group mb="xs" justify="space-between">
                  <Text size="lg">Saturday</Text>
                  <Text size="lg">10:00 AM - 7:00 PM</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="lg">Sunday</Text>
                  <Text size="lg">Closed</Text>
                </Group>
              </Box>
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
                  placeholder="Enter your message"
                  label="Comment or Message"
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  minRows={4}
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
                CONTACT US
              </Title>
            </Box>
          </Group>
        </Container>
      </Box>
      <Confidentiality />
    </>
  );
};
