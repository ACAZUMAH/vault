import React from "react";
import {
  Paper,
  Button,
  Text,
  Group,
  Stack,
  Alert,
  Divider,
  Grid,
  Title,
  Container,
  Modal,
} from "@mantine/core";
import { IconPrinter, IconInfoCircle } from "@tabler/icons-react";
import { CurrencyFormatter } from "../../components/currency/currencyFormatter";
import { formatCurrencyGBP } from "../../helpers/currency";
import { PaymentPDf } from "../../components/pdf/BillingPdf";
import { useCreatePayment } from "../hooks/useMakePayment";
import { showNotification } from "@mantine/notifications";

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

interface InvoiceProps {
  paymentData: PaymentData;
  totalAmountDue: number;
  opened: boolean;
  onClose: () => void;
}

export const ShowInvoice: React.FC<InvoiceProps> = ({
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

  const { createPayment, loading, error } = useCreatePayment();

  const handlePrintInvoice = async () => {
    await createPayment({
      amount: getPaymentAmount(),
      full_name: paymentData.customerInfo.name,
      email: paymentData.customerInfo.email,
      phone_number: paymentData.customerInfo.phone,
      payment_method: paymentData.paymentMethod,
      cardholder_name: paymentData.creditCardInfo?.cardholderName,
      card_number: paymentData.creditCardInfo?.cardNumber,
      expiry_date: paymentData.creditCardInfo
        ? `${
            paymentData.creditCardInfo.expiryYear
          }-${paymentData.creditCardInfo.expiryMonth.padStart(2, "0")}-01`
        : "",
      cvv: paymentData.creditCardInfo?.cvv,
    });
    if (error) {
      showNotification({
        title: "Error",
        message: "Failed to create payment record.",
        color: "red",
      });
    }

    const printWindow = window.open("", "_blank", "width=800,height=600");
    const formattedAmount = formatCurrencyGBP(getPaymentAmount(), false);
    if (printWindow) {
      printWindow.document.write(
        PaymentPDf({
          name: paymentData.customerInfo.name,
          email: paymentData.customerInfo.email,
          phone: paymentData.customerInfo.phone,
          amount: formattedAmount,
        })
      );
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
  };
  return (
    <Modal opened={opened} onClose={onClose} title="Payment Invoice" size="lg">
      <Container size="md">
        <Paper shadow="md" p="xl" radius="md" className="print:shadow-none">
          <Stack gap="lg">
            <div style={{ textAlign: "center" }}>
              <Title order={2} mb="xs">
                Payment Invoice
              </Title>
              <Text c="dimmed">
                Please follow the instructions below to complete your payment
              </Text>
            </div>

            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text fw={500} mb="sm">
                  Customer Information
                </Text>
                <Stack gap="xs">
                  <Text size="sm">
                    <Text component="span" fw={500}>
                      Name:
                    </Text>{" "}
                    {paymentData.customerInfo.name}
                  </Text>
                  <Text size="sm">
                    <Text component="span" fw={500}>
                      Email:
                    </Text>{" "}
                    {paymentData.customerInfo.email}
                  </Text>
                  <Text size="sm">
                    <Text component="span" fw={500}>
                      Phone:
                    </Text>{" "}
                    {paymentData.customerInfo.phone}
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text fw={500} mb="sm">
                  Payment Details
                </Text>
                <Stack gap="xs">
                  <Text size="sm">
                    <Text component="span" fw={500}>
                      Amount:
                    </Text>{" "}
                    {<CurrencyFormatter value={getPaymentAmount()} />}
                  </Text>
                  <Text size="sm">
                    <Text component="span" fw={500}>
                      Method:
                    </Text>{" "}
                    Credit Card
                  </Text>
                  <Text size="sm">
                    <Text component="span" fw={500}>
                      Invoice Date:
                    </Text>{" "}
                    {new Date().toLocaleDateString()}
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>

            <Divider />

            <Alert color="yellow" icon={<IconInfoCircle size={16} />}>
              <Text fw={500} mb="sm">
                Credit Card Payment Instructions
              </Text>
              <Stack gap="xs">
                <Text size="sm">
                  <Text component="span" fw={500}>
                    Step 1:
                  </Text>{" "}
                  Call our secure payment line at{" "}
                  <Text component="span" fw={500}>
                    1-800-SECURE-PAY
                  </Text>
                </Text>
                <Text size="sm">
                  <Text component="span" fw={500}>
                    Step 2:
                  </Text>{" "}
                  Provide this invoice number:{" "}
                  <Text component="span" fw={500}>
                    INV-{Date.now().toString().slice(-8)}
                  </Text>
                </Text>
                <Text size="sm">
                  <Text component="span" fw={500}>
                    Step 3:
                  </Text>{" "}
                  Have your credit card ready for processing
                </Text>
                <Text size="sm">
                  <Text component="span" fw={500}>
                    Step 4:
                  </Text>{" "}
                  Confirm the payment amount of{" "}
                  <Text component="span" fw={500}>
                    <CurrencyFormatter value={getPaymentAmount()} />
                  </Text>
                </Text>
              </Stack>
            </Alert>

            <Alert color="blue" icon={<IconInfoCircle size={16} />}>
              <Text fw={500} mb="sm">
                Important Notes
              </Text>
              <Stack gap="xs">
                <Text size="sm">
                  • Payment must be completed within 7 business days
                </Text>
                <Text size="sm">• Keep this invoice for your records</Text>
                <Text size="sm">
                  • You will receive a confirmation email once payment is
                  processed
                </Text>
                <Text size="sm">
                  • For questions, contact support at info@imperiumvaultguard.com
                </Text>
              </Stack>
            </Alert>

            <Group grow className="print:hidden">
              <Button
                leftSection={<IconPrinter size={16} />}
                onClick={handlePrintInvoice}
                loading={loading}
              >
                Print Invoice
              </Button>
              <Button variant="outline" onClick={() => onClose()}>
                Back to Payment
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Modal>
  );
};
