import {
  Button,
  NumberInput,
  Group,
  Stack,
  Box,
  Flex,
  Text,
  Title,
  Grid,
  Image,
  Modal,
} from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { CurrencyFormatter } from "../../components/currency/currencyFormatter";
import Markdown from "markdown-to-jsx";
import classes from "../css/index.module.css";
import { useAddItemToCart } from "../../hooks/useAppCart";
import { showNotification } from "@mantine/notifications";

interface ProductDetailSectionProps {
  opened: boolean;
  onClose: () => void;
  product: any;
}

export const ProductDetail: React.FC<ProductDetailSectionProps> = ({
  opened,
  onClose,
  product,
}) => {

  const addItem = useAddItemToCart()

  return (
    <Modal opened={opened} onClose={onClose} title="Product Details" size="80%">
      <Box py={{ base: "xl", md: "2xl" }}>
        <Grid gutter={{ base: "lg", lg: "xl" }}>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              bg="black"
              p={{ base: "lg", lg: "xl" }}
              display="flex"
              //align="center"
              //justify="center"
            >
              <Image
                src={product.imageSrc}
                alt="Gold Britannia Best Value"
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="lg">
              <Title
                order={2}
                fz={{ base: "1.875rem", md: "2.25rem" }}
                c="#2c3e50"
              >
                {product?.title?.toUpperCase()}
              </Title>
              <Text fz="xl" fw="bold" c="#2c3e50">
                TOTAL <CurrencyFormatter value={product.amount} />
              </Text>
              <Stack gap="md" c="dimmed">
                <Markdown options={{ forceBlock: true }}>
                  {product?.description!}
                </Markdown>
              </Stack>
              <Group gap="xs">
                <Button
                  variant="outline"
                  size="md"
                  radius="xl"
                  h={40}
                  w={40}
                  c="gray.7"
                  p={0}
                  styles={{
                    root: {
                      borderColor: "#9ca3af",
                      backgroundColor: "transparent",
                      "&:hover": { backgroundColor: "#f1f5f9" },
                    },
                  }}
                >
                  <IconMinus size={20} />
                </Button>
                <NumberInput
                  defaultValue={1}
                  min={1}
                  step={1}
                  hideControls
                  w={50}
                  classNames={{ input: classes.quantityInput }}
                />
                <Button
                  variant="outline"
                  size="md"
                  radius="xl"
                  h={40}
                  w={40}
                  c="gray.7"
                  p={0}
                  styles={{
                    root: {
                      borderColor: "#9ca3af",
                      backgroundColor: "transparent",
                      "&:hover": { backgroundColor: "#f1f5f9" },
                    },
                  }}
                >
                  <IconPlus size={20} />
                </Button>
              </Group>
              <Button
                w="100%"
                maw={250}
                size="lg"
                radius="md"
                color="#FFD700"
                onClick={() => { 
                  addItem(product)
                  onClose();
                  showNotification({
                    title: "Item Added",
                    message: `${product.title} has been added to your cart.`,
                    color: "blue",
                  })
                }}
              >
                ADD TO CART
              </Button>
              <Box mt="xl">
                <Title
                  order={3}
                  fz="xl"
                  fw="bold"
                  display="flex"
                  //align="center"
                  //gap="xs"
                >
                  OUR PRICING{" "}
                  <Text
                    bg="red.5"
                    c="white"
                    fz="xs"
                    px="xs"
                    py="0.125rem"
                    //radius="xl"
                  >
                    LIVE
                  </Text>
                </Title>
                <Stack gap="xs" mt="md">
                  <Flex
                    justify="space-between"
                    align="center"
                    bg="#FFD700"
                    c="white"
                    px="md"
                    py="xs"
                    //radius="sm"
                  >
                    <Text>QUANTITY</Text>
                    <Text>PRICE (PER ITEM)</Text>
                  </Flex>
                  <Flex
                    justify="space-between"
                    align="center"
                    px="md"
                    py="xs"
                    style={{ borderBottom: "1px solid #d1d5db" }}
                  >
                    <Text>1</Text>
                    <Text>£2,663.06</Text>
                  </Flex>
                  <Flex
                    justify="space-between"
                    align="center"
                    px="md"
                    py="xs"
                    style={{ borderBottom: "1px solid #d1d5db" }}
                  >
                    <Text>2 - 4</Text>
                    <Text>£2,655.07</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" px="md" py="xs">
                    <Text>5 - 9</Text>
                    <Text>£2,654.41</Text>
                  </Flex>
                </Stack>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </Modal>
  );
};
