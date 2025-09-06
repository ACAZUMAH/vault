import { Box, Group, Image, Modal, Stack, Text, Title } from "@mantine/core";
import React from "react";
import tick from "../../assets/images/SMALL ICON TICK.svg";

interface MoreAboutStorageProps {
  opened: boolean;
  onClose: () => void;
}

export const MoreAboutStorage: React.FC<MoreAboutStorageProps> = ({
  opened,
  onClose,
}) => {
  return (
    <Modal opened={opened} onClose={onClose} size="80%">
      <Title mb="lg" order={3} fw={500}>
        STORAGE COMPETITIVELY PRICED AT 1%
      </Title>
      <Group gap="xl" align="flex-start">
        <Box w="100%" maw={500}>
          <Stack>
            <Group align="center">
              <Image src={tick} width={30} height={30} fit="contain" />
              <Title order={3} fw={450}>
                LOCATED OFF-SITE
              </Title>
            </Group>
            <Text c="dimmed">
              Your allocated gold is securely kept off-site in an undisclosed
              location. Access to the storage facility is strictly limited to
              members of our trusted Knights team.
            </Text>
          </Stack>
          <Stack mt="lg">
            <Group align="center">
              <Image src={tick} width={30} height={30} fit="contain" />
              <Title order={3} fw={450}>
                COMPETITIVE PRICING
              </Title>
            </Group>
            <Text c="dimmed">
              We charge a competitive rate of 1% (plus VAT) for fully insured
              storage per year. Billing occurs monthly on a pro-rata basis,
              ensuring fair and transparent fees. Our storage fees fluctuate to
              reflect the insured value of your gold.
            </Text>
          </Stack>
        </Box>
        <Box w="100%" maw={500}>
          <Group align="center"  mb="lg">
            <Image src={tick} width={30} height={30} fit="contain" />
            <Title order={3} fw={450}>
              ACCESS TO YOUR ASSETS
            </Title>
          </Group>
          <Text mb="lg" c="dimmed">
            If you wish to withdraw your gold, we ask for 72 hours notice during
            our operating hours (Monday to Friday). To protect you against fraud
            we insist on photographic ID for verification when collecting from
            us.
          </Text>
          <Text c="dimmed">
            If you are interested in investing in precious metals but do not
            want to hold them in custody or pay for allocated storage enquire
            about our digital gold, silver, platinum and palladium. Low premiums
            and no storage fees, giving you an option which can be liquidated
            quickly and easily back into GBP. Backed by physical metals in the
            UK through Metalor, adding the flexibility to convert your holdings
            into investment grade bars in the future, at a time that suits you.
          </Text>
        </Box>
      </Group>
    </Modal>
  );
};
