import {
  Box,
  Center,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import confidential from "../../assets/images/confidential.jpg";
import { useMediaQuery } from "@mantine/hooks";

export const Featured = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {/* Services Banner */}
      <Box bg={theme.colors.dark[7]} py="lg" visibleFrom="sm">
        <Container size="xl">
          <Group justify="space-around" wrap="wrap" gap="md">
            <Center>
              <Text
                c="white"
                size={isTablet ? "lg" : "xl"}
                fs="italic"
                ta="center"
              >
                Safe Vault
              </Text>
            </Center>
            <Center>
              <Text
                c="white"
                size={isTablet ? "lg" : "xl"}
                fs="italic"
                ta="center"
              >
                Fast Delivery Services
              </Text>
            </Center>
            <Center>
              <Text
                c="white"
                size={isTablet ? "lg" : "xl"}
                fs="italic"
                ta="center"
              >
                Money Deposit Boxes
              </Text>
            </Center>
            <Center>
              <Text
                c="white"
                size={isTablet ? "lg" : "xl"}
                fs="italic"
                ta="center"
              >
                Secure Storage
              </Text>
            </Center>
          </Group>
        </Container>
      </Box>

      <Container size="xl" py={isMobile ? 60 : 100}>
        <Group align="flex-start" gap={isMobile ? "xl" : rem(30)} wrap="wrap">
          {/* Text Content */}
          <Box w={isMobile ? "100%" : "48%"} maw={isMobile ? "100%" : 600}>
            <Divider size="xl" w={60} color="#FFD700" mb="xl" />

            <Title
              fw={500}
              size={isMobile ? rem(28) : isTablet ? rem(35) : rem(40)}
              lh={1.2}
              mb="xl"
            >
              BEST PLACE TO STORE GOLD & DIAMOND!
            </Title>

            <Text size={isMobile ? "md" : "lg"} lh={1.6} c="dimmed" mb="xl">
              Lion Vault Holdings, and its subsidiaries offer private and
              business safe deposit, private business deposit and private wealth
              management, including investment, trust and brokerage services.
              Lion Vault Holdings specializes in delivering exceptional,
              relationship-based service, with a solid [contingent] staffing
              agencies in the United Kingdom and commitment to responsiveness
              and action.
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
                <Title
                  order={3}
                  fw="lighter"
                  fs="italic"
                  c="dimmed"
                  size={isMobile ? "lg" : "xl"}
                >
                  Signature
                </Title>
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
