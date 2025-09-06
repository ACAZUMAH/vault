import { Drawer, Stack } from "@mantine/core";
import React from "react";
import { useCartClose, useCartItems, useCartOpened } from "../hooks/useAppCart";
import { Conditional } from "../components/conditional/Conditional";
import { CartItemList } from "./components/cartItemList";
import { EmptyCart } from "./components/EmptyCart";


export const Cart: React.FC = () => {
  const close = useCartClose()
  const opened = useCartOpened()
  const cartItems = useCartItems();
  console.log("Cart Items:", cartItems);
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Your Cart"
      size="lg"
      padding="xl"
      position="right"

    >
        <Stack>
            <Conditional condition={cartItems.length > 0}>
                {cartItems.map((item, index) => (
                    <CartItemList key={index} {...item} />
                ))}
            </Conditional>
            <Conditional condition={cartItems.length === 0}>
             <EmptyCart />
            </Conditional>
        </Stack>
    </Drawer>
  );
};
