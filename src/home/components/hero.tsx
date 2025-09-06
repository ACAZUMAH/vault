import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Container,
  rem,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import {
  IconCashBanknote,
  IconLockFilled,
  IconPlane,
  IconTruck,
} from "@tabler/icons-react";
import bg from "../../assets/images/bgblur.jpg";
import { useMediaQuery } from "@mantine/hooks";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { routesEndpoints } from "../../constants";
import { useState } from "react";

export const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [hover, setHover] = useState(false);
  const navigateToAbout = useAppNavigation(routesEndpoints.ABOUT);

  return (
    <>
      <BackgroundImage
        src={bg}
        h={{ base: "100vh", sm: "90vh", md: "85vh" }}
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

        <Container
          size="xl"
          h="100%"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Stack
            justify="center"
            h="100%"
            gap={isMobile ? "xl" : rem(50)}
            pt={isMobile ? rem(80) : rem(120)}
          >
            <Box ta={{ base: "center", md: "left" }}>
              <Title
                order={1}
                c="white"
                fw={500}
                size={isMobile ? rem(40) : isTablet ? rem(48) : rem(64)}
                lh={1.1}
                mb="md"
              >
                Secured Vaults of
              </Title>
              <Title
                order={1}
                c="white"
                fw={500}
                size={isMobile ? rem(40) : isTablet ? rem(48) : rem(64)}
                lh={1.1}
                mb="xl"
              >
                Golds & Diamonds
              </Title>
              <Button
                variant="outline"
                color="#FFD700"
                size={isMobile ? "md" : "lg"}
                radius="xl"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                  borderColor: "#FFD700",
                  backgroundColor: hover ? "#FFD700" : "transparent",
                  color: hover ? "#000" : "#FFD700",
                  transition: "background-color .2s ease, color .2s ease",
                }}
                onClick={navigateToAbout}
              >
                Learn More
              </Button>
            </Box>
            <SimpleGrid
              cols={{ base: 2, sm: 4 }}
              spacing={{ base: "md", sm: "lg", md: "xl" }}
              mt={{ base: "xl", md: "50px" }}
            >
              <Stack align="center" gap="sm">
                <Center
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "50%",
                    padding: "1rem",
                  }}
                >
                  <IconTruck
                    size={isMobile ? 60 : 100}
                    stroke={1.5}
                    color="#FFD700"
                  />
                </Center>
                <Title
                  hiddenFrom="sm"
                  order={6}
                  c="white"
                  size={isMobile ? "xs" : ""}
                  ta="center"
                >
                  Safe Vault
                </Title>
              </Stack>

              <Stack align="center" gap="sm">
                <Center
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "50%",
                    padding: "1rem",
                  }}
                >
                  <IconPlane
                    size={isMobile ? 60 : 100}
                    stroke={1.5}
                    color="#FFD700"
                  />
                </Center>
                <Title
                  hiddenFrom="sm"
                  order={6}
                  c="white"
                  size={isMobile ? "xs" : ""}
                  ta="center"
                >
                  Fast Delivery Services
                </Title>
              </Stack>

              <Stack align="center" gap="sm">
                <Center
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "50%",
                    padding: "1rem",
                  }}
                >
                  <IconCashBanknote
                    size={isMobile ? 60 : 100}
                    stroke={1.5}
                    color="#FFD700"
                  />
                </Center>
                <Title
                  hiddenFrom="sm"
                  order={6}
                  c="white"
                  size={isMobile ? "xs" : ""}
                  ta="center"
                >
                  Money Deposit Boxes
                </Title>
              </Stack>

              <Stack align="center" gap="sm">
                <Center
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "50%",
                    padding: "1rem",
                  }}
                >
                  <IconLockFilled
                    size={isMobile ? 60 : 100}
                    stroke={1.5}
                    color="#FFD700"
                  />
                </Center>
                <Title
                  hiddenFrom="sm"
                  order={6}
                  c="white"
                  size={isMobile ? "xs" : ""}
                  ta="center"
                >
                  Secure Storage
                </Title>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </BackgroundImage>
    </>
  );
};
