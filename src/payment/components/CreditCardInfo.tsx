import React from "react";
import { TextInput, Select, Text, Stack, Divider, Grid } from "@mantine/core";

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

interface CreditCardInfoProps {
  paymentData: PaymentData;
  handleCreditCardInfoChange: (
    field: keyof PaymentData["creditCardInfo"],
    value: string
  ) => void;
}

export const CreditCardInfo: React.FC<CreditCardInfoProps> = ({
  paymentData,
  handleCreditCardInfoChange,
}) => {
  return (
    <>
      <Divider />
      <Stack gap="md">
        <Text fw={500} size="lg">
          Credit Card Information
        </Text>
        <TextInput
          label="Cardholder Name"
          value={paymentData.creditCardInfo?.cardholderName || ""}
          onChange={(e) =>
            handleCreditCardInfoChange("cardholderName", e.target.value)
          }
          placeholder="Name on card"
        />
        <TextInput
          label="Card Number"
          value={paymentData.creditCardInfo?.cardNumber || ""}
          onChange={(e) =>
            handleCreditCardInfoChange("cardNumber", e.target.value)
          }
          placeholder="1234 5678 9012 3456"
        />
        <Grid>
          <Grid.Col span={4}>
            <Select
              label="Month"
              placeholder="MM"
              data={Array.from({ length: 12 }, (_, i) => ({
                value: String(i + 1).padStart(2, "0"),
                label: String(i + 1).padStart(2, "0"),
              }))}
              onChange={(value) =>
                handleCreditCardInfoChange("expiryMonth", value || "")
              }
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              label="Year"
              placeholder="YYYY"
              data={Array.from({ length: 10 }, (_, i) => ({
                value: String(new Date().getFullYear() + i),
                label: String(new Date().getFullYear() + i),
              }))}
              onChange={(value) =>
                handleCreditCardInfoChange("expiryYear", value || "")
              }
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="CVV"
              value={paymentData.creditCardInfo?.cvv || ""}
              onChange={(e) =>
                handleCreditCardInfoChange("cvv", e.target.value)
              }
              placeholder="123"
              maxLength={4}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
};
