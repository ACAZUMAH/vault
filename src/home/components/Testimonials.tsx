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
import { motion } from "framer-motion";
export const Testimonials: React.FC = () => {
  return (
    <Container w="100%" maw={1300} py={100}>
      <Title ta="center" order={5} fw={400}>
        TESTIMONIALS
      </Title>
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
        <Title ta="center" mt="xs" fw={500} fz={30} mb="lg">
          Hear From Our Satisfied Customers – <br /> Most Trusted Brand
        </Title>
      </motion.div>
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
            <Stack gap={3}>
              <Title fw={500} fz={13} order={4}>
                MICHEAL SMITH
              </Title>
              <Text size="sm">London, UK</Text>
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
            <Stack gap={3}>
              <Title fw={500} fz={13} order={4}>
                SAJAN K C
              </Title>
              <Text size="sm">Kathmandu, Nepal</Text>
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
            <Stack gap={3}>
              <Title fw={500} fz={13} order={4}>
                TAMARA BELLIS
              </Title>
              <Text size="sm">New York, USA</Text>
            </Stack>
          </Group>
        </Paper>
      </SimpleGrid>
    </Container>
  );
};
