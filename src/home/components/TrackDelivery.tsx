import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import deliveryTruck from "../../assets/images/truck1.png";
import { useMediaQuery } from "@mantine/hooks";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { routesEndpoints } from "../../constants";

export const TrackDelivery: React.FC = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const navigateToTracking = useAppNavigation(routesEndpoints.TRACKING);
  return (
    <Box bg="whiteSmoke">
      <Container w="100%" maw={1300} py={50}>
        <Group align="center" justify={isTablet ? "center" : "space-between"}>
          <Stack gap="xl" maw={700}>
            <Title fw={500}>SECURED DELIVERY 100% GUARANTEED</Title>
            <Text mt="xs">
              Because of our specialty as far as safe vault keeping and
              delivering systems are concerned, you can rest assured of a proper
              tracking system from this website. We deliver as a solid
              contingent staffing agencies in Auckland, United Kingdom.
            </Text>
            <Button
              mt="xs"
              radius="xl"
              size="lg"
              color="#FFD700"
              w={250}
              rightSection={<IconArrowRight />}
              onClick={navigateToTracking}
            >
              Track Your Delivery
            </Button>
          </Stack>
          <div>
            <Image src={deliveryTruck} w={500} />
          </div>
        </Group>
      </Container>
    </Box>
  );
};
