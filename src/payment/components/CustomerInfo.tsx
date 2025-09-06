import { Grid, Stack, Text, TextInput } from "@mantine/core";
import React from "react";

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

interface CustomerInfoProps {
  paymentData: PaymentData;
  handleCustomerInfoChange: (
    field: keyof PaymentData["customerInfo"],
    value: string
  ) => void;
}

export const CustomerInfo: React.FC<CustomerInfoProps> = ({
  paymentData,
  handleCustomerInfoChange,
}) => {
  return (
    <Stack gap="md">
      <Text fw={500} size="lg">
        Customer Information
      </Text>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="Full Name"
            value={paymentData.customerInfo.name}
            onChange={(e) => handleCustomerInfoChange("name", e.target.value)}
            placeholder="Please enter your full name"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="Email"
            type="email"
            value={paymentData.customerInfo.email}
            onChange={(e) => handleCustomerInfoChange("email", e.target.value)}
            placeholder="Please enter your email address"
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label="Phone Number"
            type="tel"
            value={paymentData.customerInfo.phone}
            onChange={(e) => handleCustomerInfoChange("phone", e.target.value)}
            placeholder="Please enter your phone number"
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
