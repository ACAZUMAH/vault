import React from "react";
import { Box, Group, Image, Modal, Stack, Text, Title } from "@mantine/core";
import tick from "../../assets/images/SMALL ICON TICK.svg";

interface MoneyAndTreasureProps {
  opened: boolean;
  onClose: () => void;
}

export const MoneyAndTreasure: React.FC<MoneyAndTreasureProps> = ({
  onClose,
  opened,
}) => {
  return (
    <Modal opened={opened} onClose={onClose} size="80%">
      <Group gap="xl" align="flex-start" mb="lg">
        <Box w="100%" maw={500}>
          <Stack>
            <Group align="center" mb="lg">
              <Image src={tick} width={30} height={30} fit="contain" />
              <Title order={3} fw={500}>
                Safe and Secure Deposit Boxes
              </Title>
            </Group>
            <Text c="dimmed">
              Our state-of-the-art deposit boxes are designed to give you
              maximum security and absolute confidentiality. Built with advanced
              locking systems and located in high-security vaults, they provide
              the perfect solution for storing cash, jewelry, gold, documents,
              and other precious assets.Choose trust. Choose security. Choose
              [Your Company Name] for safeguarding what matters most.
            </Text>
          </Stack>
        </Box>
        <Box w="100%" maw={500}>
          <Stack>
            <Group align="center" mb="lg">
              <Image src={tick} width={30} height={30} fit="contain" />
              <Title order={3} fw={500}>
                Why Choose Our Deposit Boxes?
              </Title>
            </Group>
            <Text c="dimmed">
              With round-the-clock surveillance, biometric access, and insurance
              options, we ensure that your valuables remain protected at all
              times. Whether for personal safekeeping or business use, our
              deposit boxes give you peace of mind knowing that your treasures
              are secured against theft, damage, and loss.
            </Text>
          </Stack>
        </Box>
      </Group>
    </Modal>
  );
};
