import {
  BackgroundImage,
  Box,
  Container,
  Divider,
  Group,
  Image,
  List,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import React from "react";
import bg from "../assets/images/hero.png";
import tick from "../assets/images/SMALL ICON TICK.svg";
import invest from "../assets/images/invest.jpg";
import secure from "../assets/images/secure.jpg";
import { useMediaQuery } from "@mantine/hooks";
import { IconCircleCheck } from "@tabler/icons-react";
import { Confidentiality } from "../home/components/Confidential";

export const About: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <BackgroundImage
        src={bg}
        h={{ base: "100vh", sm: "95vh", md: "90vh" }}
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
            <Box
              ta={{ base: "center", md: "left" }}
              pt={isMobile ? rem(100) : rem(180)}
            >
              <Title
                order={1}
                c="white"
                fw={500}
                size={isMobile ? rem(40) : isTablet ? rem(48) : rem(64)}
                lh={1.1}
                mb="xs"
              >
                About Us
              </Title>
              <Divider
                size="xl"
                w={60}
                color="#FFD700"
                mb="md"
                visibleFrom="md"
              />
              <Text
                c="white"
                maw={{ base: "100%", md: 600 }}
                mb="xl"
                size="lg"
                mt="lg"
                ta={{ base: "center", md: "left" }}
              >
                Established in 2005, "Knights Bullion" is a family operated gold
                bullion and precious metals merchant. Combining experience and
                expertise with exceptional customer service, we take the time to
                find out what matters most to our customers and offer tailored
                packages to suit individual requirements.
              </Text>
              <Text
                c="white"
                maw={{ base: "100%", md: 600 }}
                mb="xl"
                size="lg"
                ta={{ base: "center", md: "left" }}
              >
                At [Your Company Name], we believe that true wealth deserves
                uncompromising protection. Established in the United Kingdom,
                our company was founded on a single guiding principle: to
                safeguard the world’s most enduring asset with the highest
                standards of security, discretion, and integrity.
              </Text>
              {/* <Text
                c="white"
                maw={{ base: "100%", md: 600 }}
                mb="xl"
                size="lg"
                ta={{ base: "center", md: "left" }}
              >
                We provide secure storage, bullion management, and bespoke
                protection solutions to private investors, financial
                institutions, and international clients. Our services are
                designed not only to protect assets but to preserve them with
                the utmost professionalism and transparency for future
                generations.
              </Text> */}
            </Box>
          </Container>
        </Box>
      </BackgroundImage>
      <Container w="100%" maw={1300} py={70}>
        <SimpleGrid
          cols={{ base: 1, md: 3 }}
          spacing="xl"
          verticalSpacing={{ base: "xl", md: 0 }}
        >
          <Paper>
            <Image src={tick} width={50} height={50} fit="contain" mb="lg" />
            <Title order={2} ta="center" fw={450} mb="lg">
              DEDICATED
            </Title>
            <Text ta="center">
              Committed to securing only the best for you, we treat your
              investment opportunity as if it were our own.
            </Text>
          </Paper>
          <Paper>
            <Image src={tick} width={50} height={50} fit="contain" mb="lg" />
            <Title order={2} ta="center" fw={450} mb="lg">
              PROFESSIONAL
            </Title>
            <Text ta="center">
              A consistently reliable expert service from an extremely
              knowledgeable team.
            </Text>
          </Paper>
          <Paper>
            <Image src={tick} width={50} height={50} fit="contain" mb="lg" />
            <Title order={2} ta="center" fw={450} mb="lg">
              UNCOMPLICATED
            </Title>
            <Text ta="center">
              Precious metals are our area of expertise, we’ll do the work and
              keep you informed every step of the way.
            </Text>
          </Paper>
        </SimpleGrid>
      </Container>
      <Box bg="whiteSmoke">
        <Container w="100%" maw={1300}>
          <Group align="flex-start" gap="xl">
            <Image src={invest} w={600} />
            <Stack gap="md" maw={600} mt="lg">
              <Title>Why Choose Us?</Title>
              <Divider size="xl" w={60} color="#FFD700" mb="md" />
              <List
                spacing="xl"
                size="lg"
                icon={
                  <ThemeIcon color="#FFD700" size={24} radius="xl">
                    <IconCircleCheck size={16} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <Title order={4}>Trust & Transparency</Title>
                  <Text size="lg">
                    We operate in strict compliance with UK regulations and
                    uphold the highest ethical and professional standards in all
                    our activities.
                  </Text>
                </List.Item>
                <List.Item>
                  <Title order={4}>Heritage & Prestige</Title>
                  <Text size="lg">
                    Based in one of the world’s most respected financial
                    centers, we combine British heritage with an international
                    outlook, serving clients across the globe.
                  </Text>
                </List.Item>
                <List.Item>
                  <Title order={4}>Innovation in Security</Title>
                  <Text size="lg">
                    We invest continuously in advanced technologies and
                    practices, ensuring that our security infrastructure remains
                    at the forefront of global standards.
                  </Text>
                </List.Item>
              </List>
            </Stack>
          </Group>
        </Container>
      </Box>
      <Container w="100%" maw={1300} py={10}>
        <Group align="flex-start" gap="3rem">
          <Stack gap="md" maw={600} mt="lg">
            <Title>Our Commitment to Security</Title>
            <Divider size="xl" w={60} color="#FFD700" mb="md" />
            <List
              spacing="xl"
              size="lg"
              icon={
                <ThemeIcon color="#FFD700" size={24} radius="xl">
                  <IconCircleCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Title order={4}>Fortified Facilities</Title>
                <Text size="lg">
                  Our vaults are constructed to meet the most rigorous
                  international standards. They feature multi-layered defense
                  systems, biometric access controls, and continuous 24/7
                  monitoring.
                </Text>
              </List.Item>
              <List.Item>
                <Title order={4}>Elite Protection</Title>
                <Text size="lg">
                  Our security personnel are drawn from backgrounds in defense,
                  intelligence, and private security, ensuring a level of
                  expertise and vigilance that is second to none.
                </Text>
              </List.Item>
              <List.Item>
                <Title order={4}>Guaranteed Discretion</Title>
                <Text size="lg">
                  We regard confidentiality as paramount. All transactions and
                  access to assets are conducted under the strictest levels of
                  privacy.
                </Text>
              </List.Item>
            </List>
          </Stack>
          <Image src={secure} w={600} />
        </Group>
      </Container>
      <Box bg="whiteSmoke">
        <Confidentiality />
      </Box>
    </>
  );
};
