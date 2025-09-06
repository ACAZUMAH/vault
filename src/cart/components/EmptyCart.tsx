import { Flex, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import React from "react";

export const EmptyCart: React.FC = () => {
  return (
    <Flex direction="column" align="center" p="sm">
      <IconShoppingCart stroke={1.5} size={50} color="#FFD700" />
      <Text ta="center" size="lg" c="dimmed" mt="md">
        Your cart is empty, add products
      </Text>
    </Flex>
  );
};
