import { Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { CurrencyFormatter } from "../../components/currency/currencyFormatter";
import { useDisclosure } from "@mantine/hooks";
import { ProductDetail } from "./productDetail";

interface CategoriesProps {
  imageSrc?: string;
  title: string;
  amount?: number;
  description?: string;
  id: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  imageSrc,
  title,
  amount,
  description,
  id,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Stack gap="xs" onClick={open} style={{ cursor: "pointer" }}>
        <Box
          bg="black"
          p="md"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          h={300}
          w={400}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            style={{
              objectFit: "contain",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Box>
        <Group w={400} justify="space-between" align="center">
          <Text c="black">{title}</Text>
          <Title fz={{ base: "1.25rem", md: "1.5rem" }} c="black">
            <CurrencyFormatter value={amount!} />
          </Title>
        </Group>
      </Stack>
      <ProductDetail
        opened={opened}
        onClose={close}
        product={{ imageSrc, title, amount, description, id }}
      />
    </>
  );
};
