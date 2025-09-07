import {
  Avatar,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import React from "react";
import user1 from "../../assets/images/unnamedas1212.png";
import user2 from "../../assets/images/unnamedarun-kc.png";
import user3 from "../../assets/images/tamara-bellis-JJriiwCxutM-unsplash-300x300.jpg";

export const Testimonials: React.FC = () => {
  return (
    <Container w="100%" maw={1300} py={60}>
      <Title ta="center" order={5} fw={400}>
        TESTIMONIALS
      </Title>
      <Title ta="center" mt="xs" fw={500} fz={30}>
        Hear From Our Satisfied Customers –
      </Title>
      <Title ta="center" fw={500} fz={30}>
        Most Trusted Brand
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl" mb="xl">
        <Paper withBorder p="md" radius="xl" shadow="md">
          <Group mb="md" gap={2}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <IconStarFilled key={index} color="#FFD700" size={20} />
              ))}
          </Group>
          <Text size="xl">
            ” Buying and selling gold with Gold Vault was a seamless experience
            from start to finish. The entire process was quick, efficient, and
            completely hassle-free.”
          </Text>
          <Group mt="md">
            <Avatar src={user1} />
            <Stack>
              <Title>

              </Title>
              <Text>
                
              </Text>
            </Stack>
          </Group>
        </Paper>
        <Paper withBorder p="md" radius="xl" shadow="md">
          <Group mb="md" gap={2}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <IconStarFilled key={index} color="#FFD700" size={20} />
              ))}
          </Group>
          <Text size="xl">
            “I purchased a gold bar from here, and I’m very impressed with the
            product and its quality. The packaging was secure, and the delivery
            was prompt.”
          </Text>
          <Group mt="md">
            <Avatar src={user2} />
            <Stack>
              <Title></Title>
              <Text></Text>
            </Stack>
          </Group>
        </Paper>
        <Paper withBorder p="md" radius="xl" shadow="md">
          <Group mb="md" gap={2}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <IconStarFilled key={index} color="#FFD700" size={20} />
              ))}
          </Group>
          <Text size="xl">
            “Gold trading felt complicated before, but Gold Vault made it easy
            and stress-free. Their service is honest, fast, and very secure. I
            will be back for more”
          </Text>
          <Group mt="md">
            <Avatar src={user3} />
            <Stack>
              <Title></Title>
              <Text></Text>
            </Stack>
          </Group>
        </Paper>
      </SimpleGrid>
    </Container>
  );
};
