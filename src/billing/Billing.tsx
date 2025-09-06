import React, { useMemo, useState } from "react";
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
  Box,
  Title,
  useMantineTheme,
  Button,
  Center,
  Loader,
  Alert,
} from "@mantine/core";
import { IconSearch, IconDownload, IconArrowLeft } from "@tabler/icons-react";
import classes from "./styles/index.module.css";
import { useBillingHistory } from "./hooks/useGetBillingHistory";
import { useAppAuthentication } from "../hooks/useAppAuthentication";
import { CurrencyFormatter } from "../components/currency/currencyFormatter";
import { getInvoiceHtml } from "../components/pdf/BillingPdf";
import { showNotification } from "@mantine/notifications";
import { formatDate, getPreviousYearDate } from "../helpers/dates";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { routesEndpoints } from "../constants";
import { Conditional } from "../components/conditional/Conditional";

export const Billing: React.FC = () => {
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  //const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("most-recent");
  const theme = useMantineTheme();
  const { user } = useAppAuthentication();
  const navigateToPayment = useAppNavigation(routesEndpoints.PAYMENT);
  const navigateBack = useAppNavigation(routesEndpoints.USER);

  const { billingHistory, loading, error } = useBillingHistory(user.id);

  const totalPastOverdue = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return billingHistory.reduce((total, invoice) => {
      const invoiceDate = new Date(invoice.due_date);
      const invoiceYear = invoiceDate.getFullYear();
      if (invoice.status === "Overdue" && invoiceYear < currentYear) {
        return total + invoice.amount_due;
      }
      return total;
    }, 0);
  }, [billingHistory]);

  const totalAmountDue = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return billingHistory.reduce((total, invoice) => {
      const invoiceDate = new Date(invoice.due_date);
      const invoiceYear = invoiceDate.getFullYear();
      if (
        (invoice.status === "Pending" || invoice.status === "Overdue") &&
        invoiceYear === currentYear
      ) {
        return total + invoice.amount_due;
      }
      return total;
    }, 0);
  }, [billingHistory]);

  const handleDownloadInvoice = async (
    invoiceNumber: string,
    dueDate: string
  ) => {
    try {
      setLoadingPdf(true);
      const html = getInvoiceHtml({
        clientName: `${user.firstName} ${user.lastName}`,
        facilityName: "Lion Vault",
        billingPeriod: `${getPreviousYearDate(
          new Date(dueDate)
        )} - ${formatDate(new Date(dueDate))}`,
        invoiceNo: invoiceNumber,
        dateIssued: formatDate(new Date()),
        dueDate: formatDate(new Date(dueDate)),
      });
      const printWindow = window.open("", "_blank", "width=900,height=1200");
      if (printWindow) {
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.print();
        showNotification({
          title: "Download Successful",
          message: `Invoice ${invoiceNumber} downloaded successfully.`,
          color: "Blue",
        });
      }
      setLoadingPdf(false);
    } catch (error) {
      setLoadingPdf(false);
      console.error("Error downloading invoice:", error);
      showNotification({
        title: "Download Error",
        message: "Failed to download the invoice.",
        color: "red",
      });
    }
  };

  return (
    <>
      <Box bg={theme.colors.dark[7]} h={180}>
        <Container w="100%" maw={1300} pt={100}>
          <Group mt="lg">
            <ActionIcon size="lg" variant="subtle" onClick={navigateBack}>
              <IconArrowLeft size={30} stroke={1.5} />
            </ActionIcon>
            <Title order={2} c="white" fw={400}>
              Billing & Payment
            </Title>
          </Group>
        </Container>
      </Box>
      <Container size="md" py="xs" mt="md" mb="xl">
        <Paper withBorder p="md">
          <Text>My Bill</Text>
          <Group grow>
            <Paper p="md" mt="md" withBorder>
              <Text size="xs" fw={500} c="dark.9">
                Total Amount Due:
              </Text>
              <Title order={1} fw={500} c="dark.9">
                <CurrencyFormatter value={totalAmountDue} />
              </Title>
            </Paper>
            <Paper
              p="md"
              mt="md"
              withBorder
              bg="red.0"
              className={classes.paymentDue}
            >
              <Text size="xs" fw={500} c="red.6">
                Past Due Pay Immediately:
              </Text>
              <Title order={1} fw={500} c="red.6">
                <CurrencyFormatter value={totalPastOverdue} />
              </Title>
            </Paper>
          </Group>

          <Button mt="lg" color="blue" w={200} onClick={navigateToPayment}>
            Make Payment
          </Button>
        </Paper>

        <Text size="sm" c="dimmed" mt="3rem">
          Billing History
        </Text>
        <Group gap="sm" mt="md">
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
          <Conditional condition={loading}>
            <Center>
              <Loader type="dots" />
            </Center>
          </Conditional>
          <Conditional condition={Boolean(error)}>
            <Alert>
              there was an error loading your billing history. Please try again
              later.
            </Alert>
          </Conditional>
          <Conditional
            condition={!loading && !error}
          >
            {billingHistory.map((invoice) => (
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
                      //checked={selectedInvoices.includes(invoice.id)}
                      onChange={() => {}}
                    />
                    <Text fw={500} c="dark.9">
                      {invoice.invoice_number}
                    </Text>
                  </Group>

                  <Group gap="xl">
                    <Text size="sm" c="dimmed" w={100}>
                      {formatDate(new Date(invoice.due_date))}
                    </Text>
                    <Text size="sm" fw={500} c="dark.9" w={100}>
                      <CurrencyFormatter value={invoice.amount_due} />
                    </Text>
                    <Badge
                      variant="light"
                      color={invoice.status === "Paid" ? "green" : "red"}
                    >
                      {invoice.status.charAt(0).toUpperCase() +
                        invoice.status.slice(1)}
                    </Badge>
                    <ActionIcon
                      variant="subtle"
                      onClick={() =>
                        handleDownloadInvoice(
                          invoice.invoice_number,
                          invoice.due_date
                        )
                      }
                      disabled={loadingPdf}
                    >
                      <IconDownload size={16} />
                    </ActionIcon>
                  </Group>
                </Flex>
              </Paper>
            ))}
          </Conditional>
        </Stack>
      </Container>
    </>
  );
};
