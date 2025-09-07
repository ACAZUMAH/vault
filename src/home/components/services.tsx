import {
  Anchor,
  Box,
  Card,
  Container,
  Divider,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import vault from "../../assets/images/vault.jpg";
import van from "../../assets/images/van.jpg";
import safe from "../../assets/images/safe.jpg";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { MoreAboutStorage } from "../modals/MoreAboutStorage";
import { SafeAndSecure } from "../modals/SafeAndSecure";
import { MoneyAndTreasure } from "../modals/MoneyAndTreasure";
import { motion } from "framer-motion";

export const Services: React.FC = () => {
  const theme = useMantineTheme();
  //const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [openedStorage, { open: openStorage, close: closeStorage }] =
    useDisclosure(false);
  const [openedCourier, { open: openCourier, close: closeCourier }] =
    useDisclosure(false);
  const [openedDeposit, { open: openDeposit, close: closeDeposit }] =
    useDisclosure(false);
  return (
    <>
      <Box bg={theme.colors.dark[7]}>
        <Container w="100%" maw={1300} py={100}>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
            <Box maw={isTablet ? "100%" : 250}>
              <Divider size="xl" w={60} color="#FFD700" />
              <div style={{ paddingTop: "40px", width: "100%" }}>
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Title fw="normal" c="white">
                    SPECIAL SERVICES
                  </Title>
                </motion.div>
              </div>
              <div style={{ paddingTop: "30px", width: "100%" }}>
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 100 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Text c="white" fw="lighter">
                    We provide a range of services to ensure the safety and
                    security of your valuables. Our offerings include secure
                    storage solutions, fast delivery services, money deposit
                    boxes, and confidential vaults for gold and diamonds.
                  </Text>
                </motion.div>
              </div>
            </Box>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -100 },
                animate: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="animate"
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card radius="md">
                <Card.Section>
                  <Image src={vault} h={210} />
                </Card.Section>
                <Stack p="md">
                  <Title order={4} fw={500}>
                    STORAGE OF GOLD AND SILVER
                  </Title>
                  <Text fw="normal">
                    Our secure storage solutions are designed to keep your
                    valuables safe and protected at all times.
                  </Text>
                  <Anchor c="#FFD700" onClick={openStorage}>
                    <Text size="lg">Read More →</Text>
                  </Anchor>
                </Stack>
              </Card>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -100 },
                animate: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="animate"
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <Card.Section>
                  <Image src={van} h={210} />
                </Card.Section>
                <Stack p="md">
                  <Title order={4} fw={500}>
                    SAFE & SECURE COURIER SERVICES
                  </Title>
                  <Text fw="normal">
                    Our fast delivery services ensure that your valuables reach
                    their destination safely and securely.
                  </Text>
                  <Anchor c="#FFD700" onClick={openCourier}>
                    <Text size="lg">Read More →</Text>
                  </Anchor>
                </Stack>
              </Card>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="animate"
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card>
                <Card.Section>
                  <Image src={safe} h={210} />
                </Card.Section>
                <Stack p="md">
                  <Title order={4} fw={500}>
                    MONEY & TREASURE DEPOSIT BOXES
                  </Title>
                  <Text fw="normal">
                    Our money deposit boxes provide a secure way to store your
                    cash and valuables, giving you peace of mind.
                  </Text>
                  <Anchor c="#FFD700" onClick={openDeposit}>
                    <Text size="lg">Read More →</Text>
                  </Anchor>
                </Stack>
              </Card>
            </motion.div>
          </SimpleGrid>
        </Container>
      </Box>
      <MoreAboutStorage opened={openedStorage} onClose={closeStorage} />
      <SafeAndSecure opened={openedCourier} onClose={closeCourier} />
      <MoneyAndTreasure opened={openedDeposit} onClose={closeDeposit} />
    </>
  );
};
