import { useMemo, useState } from "react";
import {
  Paper,
  Button,
  TextInput,
  Radio,
  Text,
  Group,
  Stack,
  Divider,
  Grid,
  Card,
  Title,
  Container,
  useMantineTheme,
  Box,
  ActionIcon,
  Loader,
  Center,
} from "@mantine/core";
import {
  IconCreditCard,
  IconBuilding,
  IconBrandPaypal,
  IconArrowLeft,
} from "@tabler/icons-react";
import { Conditional } from "../components/conditional/Conditional";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { routesEndpoints } from "../constants";

import { ShowInvoice } from "./components/Invoice";
import { ContactAgent } from "./components/ContactAgent";
import { CustomerInfo } from "./components/CustomerInfo";
import { CreditCardInfo } from "./components/CreditCardInfo";
import { useBillingHistory } from "../billing/hooks/useGetBillingHistory";
import { useAppAuthentication } from "../hooks/useAppAuthentication";
import { CurrencyFormatter } from "../components/currency/currencyFormatter";

interface PaymentData {
  paymentMethod: "Credit Card" | "bank" | "paypal";
  amountType: "full" | "partial";
  customAmount?: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  creditCardInfo: {
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    cardholderName: string;
  };
}

export const Payment = () => {
  const [openedInvoice, setOpenedInvoice] = useState(false);
  const [openedContact, setOpenedContact] = useState(false);
  const [paymentData, setPaymentData] = useState<PaymentData>({
    paymentMethod: "Credit Card",
    amountType: "full",
    customerInfo: {
      name: "",
      email: "",
      phone: "",
    },
    creditCardInfo: {
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      cardholderName: "",
    },
  });
  const theme = useMantineTheme();
  const navigateBack = useAppNavigation(routesEndpoints.BILLING);
  const { user } = useAppAuthentication();

  const { billingHistory, loading } = useBillingHistory(user.id);

  const totalAmountDue = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return billingHistory.reduce((total, invoice) => {
      const invoiceDate = new Date(invoice.due_date);
      const invoiceYear = invoiceDate.getFullYear();
      if (invoice.status === "Overdue" && invoiceYear < currentYear) {
        return total + invoice.amount_due;
      }
      return total;
    }, 0);
  }, [billingHistory]);

  const handlePaymentMethodChange = (
    method: "Credit Card" | "bank" | "paypal"
  ) => {
    setPaymentData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const handleAmountTypeChange = (type: "full" | "partial") => {
    setPaymentData((prev) => ({
      ...prev,
      amountType: type,
      customAmount: type === "full" ? totalAmountDue : prev.customAmount,
    }));
  };

  const handleCustomerInfoChange = (
    field: keyof PaymentData["customerInfo"],
    value: string
  ) => {
    setPaymentData((prev) => ({
      ...prev,
      customerInfo: { ...prev.customerInfo, [field]: value },
    }));
  };

  const handleCreditCardInfoChange = (field: string, value: string) => {
    setPaymentData((prev) => ({
      ...prev,
      creditCardInfo: {
        cardNumber: prev.creditCardInfo?.cardNumber ?? "",
        expiryMonth: prev.creditCardInfo?.expiryMonth ?? "",
        expiryYear: prev.creditCardInfo?.expiryYear ?? "",
        cvv: prev.creditCardInfo?.cvv ?? "",
        cardholderName: prev.creditCardInfo?.cardholderName ?? "",
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    if (paymentData.paymentMethod === "Credit Card") {
      setOpenedInvoice(true);
    } else {
      setOpenedContact(true);
    }
  };

  return (
    <>
      <Box bg={theme.colors.dark[7]} h={180}>
        <Container w="100%" maw={1300} pt={100}>
          <Group mt="lg">
            <ActionIcon size="lg" variant="subtle" onClick={navigateBack}>
              <IconArrowLeft size={30} stroke={1.5} />
            </ActionIcon>
            <Title order={2} c="white" fw={400}>
              Billing & Payment
            </Title>
          </Group>
        </Container>
      </Box>
      <ContactAgent
        paymentData={paymentData}
        totalAmountDue={totalAmountDue}
        opened={openedContact}
        onClose={() => setOpenedContact(!openedContact)}
      />
      <ShowInvoice
        paymentData={paymentData}
        totalAmountDue={totalAmountDue}
        opened={openedInvoice}
        onClose={() => setOpenedInvoice(!openedInvoice)}
      />
      <Container size="md" py="xs" mb="xl">
        <Paper shadow="md" p="xl" radius="md" mt="md">
          <Stack gap="lg">
            <div>
              <Title order={2} mb="xs">
                Make Payment
              </Title>
              <Text c="dimmed">Choose your payment method and amount</Text>
            </div>

            <Conditional condition={loading}>
              <Center>
                <Loader type="dots" />
              </Center>
            </Conditional>
            <Conditional condition={!loading}>
              <Stack gap="md">
                <Text fw={500} size="lg">
                  Payment Amount
                </Text>
                <Paper bg="gray.1" p="md" radius="md" withBorder shadow="0">
                  <Text size="lg" fw={600}>
                    Total Amount Due:{" "}
                    {<CurrencyFormatter value={totalAmountDue} />}
                  </Text>
                </Paper>
                <Radio.Group
                  value={paymentData.amountType}
                  onChange={(value: string) =>
                    handleAmountTypeChange(value as "full" | "partial")
                  }
                >
                  <Stack gap="sm">
                    <Radio
                      value="full"
                      label={
                        <Text>
                          Pay full amount due (
                          {<CurrencyFormatter value={totalAmountDue} />})
                        </Text>
                      }
                    />
                    <Radio value="partial" label="Pay custom amount" />
                  </Stack>
                </Radio.Group>

                <Conditional condition={paymentData.amountType === "partial"}>
                  <div style={{ marginLeft: "24px" }}>
                    <TextInput
                      label="Enter amount"
                      type="number"
                      placeholder="0.00"
                      min={0}
                      max={totalAmountDue}
                      step={0.01}
                      value={paymentData.customAmount || ""}
                      onChange={(e) =>
                        setPaymentData((prev) => ({
                          ...prev,
                          customAmount: parseFloat(e.target.value) || 0,
                        }))
                      }
                      style={{ width: "150px" }}
                    />
                  </div>
                </Conditional>
              </Stack>

              <Divider />

              {/* Payment Method Selection */}
              <Stack gap="md">
                <Text fw={500} size="lg">
                  Payment Method
                </Text>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Card
                      shadow="xs"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{
                        cursor: "pointer",
                        border:
                          paymentData.paymentMethod === "Credit Card"
                            ? "2px solid #228be6"
                            : undefined,
                      }}
                      onClick={() => handlePaymentMethodChange("Credit Card")}
                    >
                      <Stack align="center" gap="sm">
                        <IconCreditCard size={32} />
                        <Text fw={500}>Credit Card</Text>
                      </Stack>
                    </Card>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Card
                      shadow="xs"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{
                        cursor: "pointer",
                        border:
                          paymentData.paymentMethod === "bank"
                            ? "2px solid #228be6"
                            : undefined,
                      }}
                      onClick={() => handlePaymentMethodChange("bank")}
                    >
                      <Stack align="center" gap="sm">
                        <IconBuilding size={32} />
                        <Text fw={500}>Bank Transfer</Text>
                      </Stack>
                    </Card>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Card
                      shadow="xs"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{
                        cursor: "pointer",
                        border:
                          paymentData.paymentMethod === "paypal"
                            ? "2px solid #228be6"
                            : undefined,
                      }}
                      onClick={() => handlePaymentMethodChange("paypal")}
                    >
                      <Stack align="center" gap="sm">
                        <IconBrandPaypal size={32} />
                        <Text fw={500}>PayPal</Text>
                      </Stack>
                    </Card>
                  </Grid.Col>
                </Grid>
              </Stack>

              <Divider />

              {/* Customer Information */}
              <CustomerInfo
                paymentData={paymentData}
                handleCustomerInfoChange={handleCustomerInfoChange}
              />

              {/* Credit Card Information */}
              <Conditional
                condition={paymentData.paymentMethod === "Credit Card"}
              >
                <CreditCardInfo
                  paymentData={paymentData}
                  handleCreditCardInfoChange={handleCreditCardInfoChange}
                />
              </Conditional>

              <Button onClick={handleSubmit} fullWidth size="md" mt="md">
                {paymentData.paymentMethod === "Credit Card"
                  ? "Generate Payment Invoice"
                  : "Contact Agent for Payment"}
              </Button>
            </Conditional>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
