import {
  ActionIcon,
  Badge,
  Box,
  Container,
  Group,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { categoriesTestData } from "./test";
import { Categories } from "./components/Categories";
import { IconShoppingBag } from "@tabler/icons-react";
import { Cart } from "../cart";
import { useCartItemsCount, useToggleCart } from "../hooks/useAppCart";

export const BuyingAndSelling: React.FC = () => {
  const theme = useMantineTheme();
  const toggleCart = useToggleCart();
  const cartItemsCount = useCartItemsCount();
  console.log("Cart Items Count:", cartItemsCount);

  return (
    <>
      <Box bg={theme.colors.dark[7]} h={200}>
        <Container w="100%" maw={1300} pt={100}>
          <Group justify="space-between" mt="lg">
            <Text size="xl" c="white">
              BUY GOLD
            </Text>

            <Box pos="relative">
              <ActionIcon
                variant="subtle"
                size="4rem"
                p="md"
                w={50}
                onClick={toggleCart}
              >
                <IconShoppingBag size={30} stroke={1.5} color="white" />
                <Badge pos="absolute" right={5} top={5} circle size="sm">
                  {cartItemsCount}
                </Badge>
              </ActionIcon>
            </Box>
          </Group>
        </Container>
      </Box>
      <Container w="100%" maw={1300} py={100}>
        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
          {categoriesTestData.map((cat, index) => (
            <Categories
              key={index}
              title={cat.title}
              imageSrc={cat.imageSrc}
              amount={cat.amount}
              description={cat.description}
              id={cat.id}
            />
          ))}
        </SimpleGrid>
      </Container>
      <Cart />
    </>
  );
};
