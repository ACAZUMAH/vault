import { useState } from "react";
import {
  Container,
  Group,
  TextInput,
  Select,
  Checkbox,
  Paper,
  Stack,
  Flex,
  Text,
  ActionIcon,
  Badge,
  Modal,
} from "@mantine/core";
import { IconSearch, IconDownload } from "@tabler/icons-react";

interface Invoice {
  id: string;
  number: string;
  date: string;
  amount: string;
  status: string;
}

const invoices: Invoice[] = [
  {
    id: "1",
    number: "Invoice 0012",
    date: "12 Apr 2025",
    amount: "USD $10.00",
    status: "paid",
  },
  {
    id: "2",
    number: "Invoice 0011",
    date: "12 Mar 2025",
    amount: "USD $10.00",
    status: "paid",
  },
  {
    id: "3",
    number: "Invoice 0010",
    date: "12 Feb 2025",
    amount: "USD $10.00",
    status: "unpaid",
  },
  {
    id: "4",
    number: "Invoice 0009",
    date: "12 Jan 2025",
    amount: "USD $10.00",
    status: "unpaid",
  },
  {
    id: "5",
    number: "Invoice 0008",
    date: "12 Dec 2024",
    amount: "USD $10.00",
    status: "paid",
  },
  {
    id: "6",
    number: "Invoice 0007",
    date: "12 Nov 2024",
    amount: "USD $10.00",
    status: "paid",
  },
  {
    id: "7",
    number: "Invoice 0006",
    date: "12 Oct 2024",
    amount: "USD $10.00",
    status: "paid",
  },
];

interface BillingProps {
  opened: boolean;
  onClose: () => void;
}

export const Billing: React.FC<BillingProps> = ({ opened, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("most-recent");

  const handleInvoiceSelect = (invoiceId: string, checked: boolean) => {
    if (checked) {
      setSelectedInvoices([...selectedInvoices, invoiceId]);
    } else {
      setSelectedInvoices(selectedInvoices.filter((id) => id !== invoiceId));
    }
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.number.toLowerCase().includes(searchQuery.toLowerCase())
    //invoice.plan.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Modal opened={opened} onClose={onClose} title="Billing" size="xl">
      <Container size="lg" py="xs">
        <Group gap="sm">
          <TextInput
            flex={1}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
            w={250}
          />
          <Select
            value={sortBy}
            onChange={(value) => setSortBy(value || "most-recent")}
            data={[
              { value: "most-recent", label: "Most recent" },
              { value: "oldest", label: "Oldest" },
              { value: "amount-high", label: "Amount (High)" },
              { value: "amount-low", label: "Amount (Low)" },
            ]}
            w={130}
          />
        </Group>

        <Stack gap="xs" mt="xl">
          {filteredInvoices.map((invoice) => (
            <Paper
              key={invoice.id}
              p="md"
              withBorder
              style={{
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              styles={{
                root: {
                  "&:hover": {
                    backgroundColor: "var(--mantine-color-gray-0)",
                  },
                },
              }}
            >
              <Flex justify="space-between" align="center">
                <Group gap="md">
                  <Checkbox
                    checked={selectedInvoices.includes(invoice.id)}
                    onChange={(event) =>
                      handleInvoiceSelect(
                        invoice.id,
                        event.currentTarget.checked
                      )
                    }
                  />
                  <Text fw={500} c="dark.9">
                    {invoice.number}
                  </Text>
                </Group>

                <Group gap="xl">
                  <Text size="sm" c="dimmed" w={100}>
                    {invoice.date}
                  </Text>
                  <Text size="sm" fw={500} c="dark.9" w={100}>
                    {invoice.amount}
                  </Text>
                  <Badge
                    variant="light"
                    color={invoice.status === "paid" ? "green" : "red"}
                  >
                    {invoice.status.charAt(0).toUpperCase() +
                      invoice.status.slice(1)}
                  </Badge>
                  <ActionIcon variant="subtle">
                    <IconDownload size={16} />
                  </ActionIcon>
                </Group>
              </Flex>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Modal>
  );
};
