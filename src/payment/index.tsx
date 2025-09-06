import { Modal, SegmentedControl, TextInput } from "@mantine/core";
import React from "react";
import { Conditional } from "../components/conditional/Conditional";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const MakePayment: React.FC<Props> = ({ opened, onClose }) => {
  const [paymentMethod, setPaymentMethod] = React.useState("credit-card");

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Make Payment" size="lg">
      <SegmentedControl
        data={[
          { label: "Credit Card", value: "credit-card" },
          { label: "Bank Transfer", value: "bank-transfer" },
          { label: "PayPal", value: "paypal" },
        ]}
        value={paymentMethod}
        onChange={handlePaymentMethodChange}
      />

      <Conditional condition={paymentMethod === "credit-card"}>
        <TextInput
          withAsterisk
          label="Cardholder Name"
          mt="md"
          placeholder="Enter your name as on card"
        />
        <TextInput
          withAsterisk
          label="Card Number"
          mt="md"
          placeholder="Enter your card number"
        />
        <TextInput
          withAsterisk
          label="Expiry Date"
          mt="md"
          placeholder="MM/YY"
        />
        <TextInput
          withAsterisk
          label="CVV"
          mt="md"
          placeholder="Enter your CVV"
        />
      </Conditional>
      
    </Modal>
  );
};
