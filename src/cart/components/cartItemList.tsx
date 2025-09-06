import {
  ActionIcon,
  Badge,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CurrencyFormatter } from "../../components/currency/currencyFormatter";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import {
  useDecreaseCartItemQuantity,
  useIncreaseCartItemQuantity,
} from "../../hooks/useAppCart";
import { CartItem } from "../../interfaces/redux";

export const CartItemList: React.FC<CartItem> = (cartItem) => {
  const { item, quantity } = cartItem;
  const increaseQuantity = useIncreaseCartItemQuantity();
  const decreaseQuantity = useDecreaseCartItemQuantity();

  return (
    <Paper withBorder radius="md" p="md" shadow="0">
      <Flex direction="row" gap="xs">
        <Image
          src={item.imageSrc}
          alt={item.title}
          width={130}
          height={130}
          style={{ objectFit: "contain" }}
        />
        <Stack justify="space-between" flex={8}>
          <Group justify="space-between">
            <Title order={3} fw={500} maw={200}>{item.title}</Title>
            <Badge size="xl">
              <CurrencyFormatter value={item.amount} />
            </Badge>
          </Group>
          <Group justify="space-between">
            <Group gap="sm">
              <ActionIcon
                variant="default"
                radius="xl"
                size="lg"
                onClick={() => decreaseQuantity(cartItem)}
              >
                <IconMinus stroke={1.5} size={12} />
              </ActionIcon>
              <Text>{quantity}</Text>
              <ActionIcon
                variant="default"
                radius="xl"
                size="lg"
                onClick={() => increaseQuantity(cartItem)}
              >
                <IconPlus stroke={1.5} size={12} />
              </ActionIcon>
            </Group>
          </Group>
        </Stack>
      </Flex>
    </Paper>
  );
};
