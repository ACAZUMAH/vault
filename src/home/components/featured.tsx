import {
  Box,
  Card,
  Center,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import confidential from "../../assets/images/confidential.jpg";
import { useMediaQuery } from "@mantine/hooks";
import signature from "../../assets/images/signature.png";
import delivery from "../../assets/images/Untitled-design-1-1.png";
import storage from "../../assets/images/image-2.png";
import certification from "../../assets/images/image-3-1.png";
import secure from "../../assets/images/image-1.png";
import { motion } from "framer-motion";

export const Featured = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <Container size="xl" py={isMobile ? 40 : 70}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mt="1rem">
          <Card withBorder shadow="md" p="xs" radius="lg">
            <Center>
              <Image src={delivery} h={80} w={80} mb="xs" />
            </Center>
            <Title ta="center" order={4} fw={490}>
              FAST DELIVERY
            </Title>
            <Text ta="center" size="xs" mt="xs">
              Enjoy fast & Free delivery on all orders.
            </Text>
          </Card>
          <Card withBorder shadow="md" p="md" radius="lg">
            <Center>
              <Image src={storage} h={80} w={80} mb="xs" />
            </Center>
            <Title ta="center" order={4} fw={490}>
              SECURE ORDERING
            </Title>
            <Text ta="center" size="xs" mt="xs">
              We ensure you secure ordering.
            </Text>
          </Card>
          <Card withBorder shadow="md" p="md" radius="lg">
            <Center>
              <Image src={certification} h={80} w={80} mb="xs" />
            </Center>
            <Title ta="center" order={4} fw={490}>
              CERTIFIED PRODUCTS
            </Title>
            <Text ta="center" size="xs" mt="xs">
              Certified products guarantee authenticity.
            </Text>
          </Card>
          <Card withBorder shadow="md" p="md" radius="lg">
            <Center>
              <Image src={secure} h={80} w={80} mb="xs" />
            </Center>
            <Title ta="center" order={5} fw={490}>
              100% GUARANTIED
            </Title>
            <Text ta="center" size="xs" mt="xs">
              We guarantee 100% satisfaction.
            </Text>
          </Card>
        </SimpleGrid>
        <Group
          align="flex-start"
          gap={isMobile ? "xl" : rem(45)}
          wrap="wrap"
          mt="7rem"
        >
          {/* Text Content */}
          <Box w={isMobile ? "100%" : "48%"} maw={isMobile ? "100%" : 600}>
            <Divider size="xl" w={60} color="#FFD700" mb="lg" />

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
              <Title
                fw={500}
                size={isMobile ? rem(28) : isTablet ? rem(35) : rem(40)}
                lh={1.2}
                mb="lg"
              >
                BEST PLACE TO STORE GOLD & DIAMOND!
              </Title>
            </motion.div>
            <Text size={isMobile ? "md" : "lg"} lh={1.6} c="dimmed" mb="xl">
              Lion Vault Holdings, and its subsidiaries offer private and
              business safe deposit, private business deposit and private wealth
              management, including investment, trust and brokerage services.
              Imperium Vault Guard Holdings specializes in delivering
              exceptional, relationship-based service, with a solid contingent
              staffing agencies in the United Kingdom and commitment to
              responsiveness and action.
            </Text>
            <Paper
              p="md"
              radius="md"
              withBorder
              style={{ backgroundColor: theme.colors.gray[0] }}
            >
              <Group
                justify="space-between"
                align="flex-end"
                wrap="wrap"
                gap="sm"
              >
                <Stack gap={5}>
                  <Title order={3} size={isMobile ? "lg" : "xl"}>
                    MATT GARDNER
                  </Title>
                  <Text c="dimmed" size={isMobile ? "sm" : "md"}>
                    Chairman & Chief Executive Officer
                  </Text>
                </Stack>

                <Image src={signature} h="80" w="100" />
              </Group>
            </Paper>
          </Box>

          <Box w={isMobile ? "100%" : "48%"} maw={isMobile ? "100%" : 700}>
            <Image
              ml={isMobile ? "" : isTablet ? "md" : "lg"}
              radius="md"
              src={confidential}
              alt="Confidential vault services"
              fit="cover"
              h={isMobile ? 300 : isTablet ? 450 : 450}
              style={{
                boxShadow: theme.shadows.xl,
              }}
            />
          </Box>
        </Group>
      </Container>
    </>
  );
};
