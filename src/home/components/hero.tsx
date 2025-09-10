import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Group,
  Image,
  rem,
  Stack,
  Title,
  Text,
  Badge,
  SimpleGrid,
} from "@mantine/core";
import bg from "../../assets/images/bgblur.jpg";
import { useMediaQuery } from "@mantine/hooks";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { routesEndpoints } from "../../constants";
import { useState } from "react";
import goldBar1 from "../../assets/images/Gold-bars-COINS-9asasas2323.png";
import goldBar2 from "../../assets/images/Gold-bars-COINS-9asasasa.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [hover, setHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);
  const navigateToAbout = useAppNavigation(routesEndpoints.ABOUT);
  const navigateToSave = useAppNavigation(routesEndpoints.SAVE);
  const { scrollYProgress } = useScroll();
  const rotate1 = useTransform(scrollYProgress, [0, 0.5], [-10, 80]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-5, 80]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [5, 40]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [10, -30]);
  const r1 = useSpring(rotate1, { stiffness: 80, damping: 14 });
  const r2 = useSpring(rotate2, { stiffness: 80, damping: 14 });
  const r3 = useSpring(rotate3, { stiffness: 80, damping: 14 });
  const r4 = useSpring(rotate4, { stiffness: 80, damping: 14 });

  return (
    <>
      <BackgroundImage
        src={bg}
        h={{ base: "100vh", sm: "90vh", md: "95vh" }}
        style={{
          position: "relative",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            zIndex: 1,
          }}
        />

        <Container
          size="xl"
          h="100%"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Group
            justify="space-between"
            pt={isMobile ? rem(80) : rem(150)}
            align="flex-start"
          >
            <Stack
              justify="center"
              h="100%"
              gap={isMobile ? "xl" : rem(40)}
              maw={isMobile ? "100%" : "60%"}
            >
              <Box ta={{ base: "center", md: "left" }}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge
                    variant="light"
                    color="#FFD700"
                    size="lg"
                    radius="xl"
                    mb="md"
                    style={{
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      color: "#FFD700",
                      border: "1px solid rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    🔒 Bank-Grade Security Since 2005
                  </Badge>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Title
                    order={1}
                    c="white"
                    fw={600}
                    size={isMobile ? rem(36) : isTablet ? rem(48) : rem(64)}
                    lh={1.1}
                    mb="md"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    Secured Vaults of
                  </Title>
                  <Title
                    order={1}
                    c="#FFD700"
                    fw={600}
                    size={isMobile ? rem(36) : isTablet ? rem(48) : rem(64)}
                    lh={1.1}
                    mb="lg"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      background: "linear-gradient(135deg, #FFD700, #FFA500)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Golds & Diamonds
                  </Title>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Text
                    size={isMobile ? "md" : "lg"}
                    c="rgba(255, 255, 255, 0.9)"
                    mb="xl"
                    maw={isMobile ? "100%" : rem(500)}
                    lh={1.6}
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                  >
                    Protect your most valuable assets with our state-of-the-art
                    vault facilities. Featuring 24/7 monitoring, biometric
                    access, and insurance coverage up to $10M.
                  </Text>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Group gap="md" justify={isMobile ? "center" : "flex-start"}>
                    <Button
                      variant="filled"
                      color="#FFD700"
                      size={isMobile ? "md" : "lg"}
                      radius="xl"
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      style={{
                        backgroundColor: "#FFD700",
                        color: "#000",
                        fontWeight: 600,
                        transform: hover ? "translateY(-2px)" : "translateY(0)",
                        boxShadow: hover
                          ? "0 8px 25px rgba(255, 215, 0, 0.4)"
                          : "0 4px 15px rgba(255, 215, 0, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                      onClick={navigateToSave}
                    >
                      Secure Your Vault
                    </Button>
                    <Button
                      variant="outline"
                      color="white"
                      size={isMobile ? "md" : "lg"}
                      radius="xl"
                      onMouseEnter={() => setSecondaryHover(true)}
                      onMouseLeave={() => setSecondaryHover(false)}
                      style={{
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        backgroundColor: secondaryHover
                          ? "rgba(255, 255, 255, 0.1)"
                          : "transparent",
                        color: "white",
                        transition: "all 0.3s ease",
                      }}
                      onClick={navigateToAbout}
                    >
                      Learn More
                    </Button>
                  </Group>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <SimpleGrid cols={isMobile ? 2 : 3} mt="xl" spacing="md">
                    <Box ta="center">
                      <Text size="xl" fw={700} c="#FFD700" mb={4}>
                        $2.5B+
                      </Text>
                      <Text size="xs" c="rgba(255, 255, 255, 0.7)">
                        Assets Protected
                      </Text>
                    </Box>
                    <Box ta="center">
                      <Text size="xl" fw={700} c="#FFD700" mb={4}>
                        25,000+
                      </Text>
                      <Text size="xs" c="rgba(255, 255, 255, 0.7)">
                        Satisfied Clients
                      </Text>
                    </Box>
                    <Box
                      ta="center"
                      style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}
                    >
                      <Text size="xl" fw={700} c="#FFD700" mb={4}>
                        99.9%
                      </Text>
                      <Text size="xs" c="rgba(255, 255, 255, 0.7)">
                        Security Uptime
                      </Text>
                    </Box>
                  </SimpleGrid>
                </motion.div>
              </Box>
            </Stack>

            <Box style={{ position: "relative" }} visibleFrom="md">
              <Stack gap="xl" style={{ position: "relative" }}>
                <motion.div
                  style={{ rotate: r1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={goldBar1}
                    h={100}
                    w={100}
                    style={{
                      filter: "drop-shadow(0 10px 20px rgba(255, 215, 0, 0.3))",
                      cursor: "pointer",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{ rotate: r2, marginLeft: rem(40) }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={goldBar2}
                    h={80}
                    w={80}
                    style={{
                      filter: "drop-shadow(0 8px 16px rgba(255, 215, 0, 0.3))",
                      cursor: "pointer",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{ rotate: r3, marginLeft: rem(-20) }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={goldBar1}
                    h={60}
                    w={60}
                    style={{
                      filter: "drop-shadow(0 6px 12px rgba(255, 215, 0, 0.3))",
                      cursor: "pointer",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{ rotate: r4, marginLeft: rem(30) }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={goldBar2}
                    h={50}
                    w={50}
                    style={{
                      filter: "drop-shadow(0 5px 10px rgba(255, 215, 0, 0.3))",
                      cursor: "pointer",
                    }}
                  />
                </motion.div>
              </Stack>
            </Box>
          </Group>
        </Container>
      </BackgroundImage>
    </>
  );
};
