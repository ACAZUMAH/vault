import { Box, Group, Image, Modal, Stack, Text, Title } from "@mantine/core";
import React from "react";
import tick from "../../assets/images/SMALL ICON TICK.svg";

interface SafeAndSecureProps {
  opened: boolean;
  onClose: () => void;
}

export const SafeAndSecure: React.FC<SafeAndSecureProps> = ({
  opened,
  onClose,
}) => {
  return (
    <Modal opened={opened} onClose={onClose} size="80%">
      <Group gap="xl" align="flex-start" mb="lg">
        <Box w="100%" maw={500}>
          <Stack>
            <Group align="center" mb="lg">
              <Image src={tick} width={30} height={30} fit="contain" />
              <Title order={3} fw={500}>
                Safe and Secure Delivery
              </Title>
            </Group>
            <Text c="dimmed">
              At [Your Company Name], we go beyond standard courier services by
              offering end-to-end security, real-time tracking, and personalized
              delivery solutions. Whether you’re sending confidential documents,
              valuable assets, or sensitive packages, our dedicated team ensures
              that every shipment is handled with the highest level of care.
            </Text>
          </Stack>
        </Box>
        <Box w="100%" maw={500}>
          <Stack>
            <Group align="center" mb="lg">
              <Image src={tick} width={30} height={30} fit="contain" />
              <Title order={3} fw={500}>
                Why Choose Our Delivery Services?
              </Title>
            </Group>
            <Text c="dimmed">
              Our fleet of modern, GPS-enabled vehicles, combined with our 24/7
              monitoring systems, guarantees timely delivery across local and
              international routes. With insurance options, secure packaging,
              and professional handling, you can rest assured that your
              valuables are always in safe hands. Choose reliability.
            </Text>
          </Stack>
        </Box>
      </Group>
    </Modal>
  );
};
