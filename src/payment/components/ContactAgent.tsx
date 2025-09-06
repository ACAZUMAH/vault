import React from "react";
import {
  Paper,
  Button,
  Text,
  Group,
  Stack,
  Alert,
  Grid,
  Card,
  Title,
  Container,
  Modal,
} from "@mantine/core";
import { IconPhone, IconMail, IconInfoCircle } from "@tabler/icons-react";
import { CurrencyFormatter } from "../../components/currency/currencyFormatter";

interface PaymentData {
  paymentMethod: "Credit Card" | "bank" | "paypal";
  amountType: "full" | "partial";
  customAmount?: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  creditCardInfo?: {
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    cardholderName: string;
  };
}

interface ContactAgentProps {
  paymentData: PaymentData;
  totalAmountDue: number;
  opened: boolean;
  onClose: () => void;
}

export const ContactAgent: React.FC<ContactAgentProps> = ({
  paymentData,
  totalAmountDue,
  opened,
  onClose,
}) => {
  const getPaymentAmount = () => {
    return paymentData.amountType === "full"
      ? totalAmountDue
      : paymentData.customAmount || 0;
  };
  return (
    <Modal opened={opened} onClose={onClose} title="Contact Our Agent" size="xl">
      <Container size="md">
        <Paper shadow="md" p="xl" radius="md">
          <Stack gap="lg">
            <div style={{ textAlign: "center" }}>
              <Title order={2} mb="xs">
                Contact Our Agent
              </Title>
              <Text c="dimmed">
                Our payment specialist will help you complete your{" "}
                {paymentData.paymentMethod === "bank"
                  ? "bank transfer"
                  : "PayPal"}{" "}
                payment
              </Text>
            </div>

            <Alert icon={<IconInfoCircle size={16} />} color="blue">
              <Text fw={500}>
                Payment Amount: {<CurrencyFormatter value={getPaymentAmount()} />}
              </Text>
            </Alert>

            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group mb="md">
                    <IconPhone size={20} />
                    <Text fw={500}>Call Us</Text>
                  </Group>
                  <Text size="xl" fw={700} c="blue">
                    1-800-PAY-HELP
                  </Text>
                  <Text size="sm" c="dimmed" mt="xs">
                    Available Monday - Friday, 9 AM - 6 PM EST
                  </Text>
                </Card>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group mb="md">
                    <IconMail size={20} />
                    <Text fw={500}>Email Us</Text>
                  </Group>
                  <Text size="lg" fw={600}>
                    payments@company.com
                  </Text>
                  <Text size="sm" c="dimmed" mt="xs">
                    We'll respond within 2 business hours
                  </Text>
                </Card>
              </Grid.Col>
            </Grid>

            <Paper bg="gray.1" p="md" radius="md">
              <Text fw={500} mb="sm">
                Please have this information ready:
              </Text>
              <Stack gap="xs">
                <Text size="sm">
                  • Customer Name: {paymentData.customerInfo.name}
                </Text>
                <Text size="sm">• Email: {paymentData.customerInfo.email}</Text>
                <Text size="sm">• Phone: {paymentData.customerInfo.phone}</Text>
                <Text size="sm">
                  • Payment Amount: ${getPaymentAmount().toFixed(2)}
                </Text>
                <Text size="sm">
                  • Payment Method:{" "}
                  {paymentData.paymentMethod === "bank"
                    ? "Bank Transfer"
                    : "PayPal"}
                </Text>
              </Stack>
            </Paper>

            <Button
              variant="outline"
              onClick={() => onClose()}
              fullWidth
            >
              Back to Payment Options
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Modal>
  );
};
