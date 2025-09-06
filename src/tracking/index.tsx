import { useState } from "react";
import {
  TextInput,
  Button,
  Loader,
  Title,
  Text,
  Badge,
  Group,
  Box,
  useMantineTheme,
  Container,
  Accordion,
  Paper,
  Timeline,
  ThemeIcon,
  Progress,
} from "@mantine/core";
import { useTracking } from "./hooks/useGetTrackingData";
import { formatDate } from "../helpers/dates";
import { Conditional } from "../components/conditional/Conditional";
import {
  IconAlertTriangle,
  IconCheck,
  IconPackage,
  IconTruckDelivery,
} from "@tabler/icons-react";

export default function GoldTrackingUSPS() {
  const theme = useMantineTheme();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState("");

  const { data, loading } = useTracking(submittedNumber);

  const fetchTracking = () => { 
    setSubmittedNumber(trackingNumber);
    setTrackingNumber("");
  }

  const events = data
    ? [
        ...(data.history ?? []),
        ...(data.currentStatus ? [data.currentStatus] : []),
      ].sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];

  const getColor = (status: string) => {
    const s = status?.toLowerCase() || "";
    if (s.includes("delivered")) return "green";
    if (s.includes("vehicle") || s.includes("in transit")) return "blue";
    if (s.includes("delay") || s.includes("held") || s.includes("exception"))
      return "yellow";
    return "gray";
  };

  const getIcon = (status: string) => {
    const s = status?.toLowerCase() || "";
    if (s.includes("delivered")) return <IconCheck size={12} />;
    if (s.includes("vehicle") || s.includes("in transit"))
      return <IconTruckDelivery size={12} />;
    if (s.includes("delay") || s.includes("held") || s.includes("exception"))
      return <IconAlertTriangle size={12} />;
    return <IconPackage size={12} />;
  };

  const PROGRESS_STEPS = [
    { key: "info", match: ["shipment information sent", "label created"] },
    { key: "picked", match: ["picked up"] },
    {
      key: "left_origin",
      match: ["left origin", "left fedex origin facility", "origin facility"],
    },
    {
      key: "arrived_hub",
      match: ["arrived at fedex hub", "arrived at facility", "arrived at hub"],
    },
    { key: "departed_hub", match: ["departed fedex hub", "departed hub"] },
    {
      key: "local_facility",
      match: ["at local fedex facility", "local facility"],
    },
    {
      key: "out_for_delivery",
      match: ["on fedex vehicle", "out for delivery", "vehicle for delivery"],
    },
    { key: "delivered", match: ["delivered"] },
  ] as const;

  const computeProgress = (evts: any[]) => {
    if (!evts?.length) return { value: 0, color: "gray" as const };
    const statuses = evts.map((e) => (e?.status || "").toLowerCase());
    let highest = -1;
    PROGRESS_STEPS.forEach((step, idx) => {
      const hit = step.match.some((m) => statuses.some((s) => s.includes(m)));
      if (hit) highest = idx;
    });
    const pct = Math.max(
      0,
      Math.min(100, Math.round(((highest + 1) / PROGRESS_STEPS.length) * 100))
    );
    const color = highest === PROGRESS_STEPS.length - 1 ? "green" : "blue";
    return { value: pct, color };
  };

  const progress = computeProgress(events);

  return (
    <>
      <Box bg={theme.colors.dark[7]} h={200}>
        <Container w="100%" maw={1300} pt={100}>
          <Title c="white" mt="lg" fw={400}>
            Consignment Tracking
          </Title>
        </Container>
      </Box>
      <Container size="md" py="xs" mt="md" mb="xl">
        <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
          <TextInput
            label="Tracking Number"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <Button mt="md" onClick={fetchTracking} disabled={loading}>
            {loading ? <Loader size="sm" /> : "Track"}
          </Button>

          {data && (
            <>
              {/* Current Status */}
              <Paper withBorder p="lg" mt="lg">
                <Group justify="space-between">
                  <div>
                    <Title order={4}>{data.currentStatus.status}</Title>
                    <Text size="sm" color="dimmed">
                      {data.currentStatus.description}
                    </Text>
                    <Text size="sm" mt={4}>
                      {data.currentStatus.location}
                    </Text>
                    <Text size="xs" color="dimmed">
                      {formatDate(data.currentStatus.date)}
                    </Text>
                  </div>
                  <Badge
                    color={
                      data.currentStatus.status
                        .toLowerCase()
                        .includes("delivered")
                        ? "green"
                        : data.currentStatus.status
                            .toLowerCase()
                            .includes("delay")
                        ? "yellow"
                        : "blue"
                    }
                    size="lg"
                  >
                    {data.currentStatus.status}
                  </Badge>
                </Group>
              </Paper>
              <Paper withBorder mt="xl" p="lg">
                <Title order={4} mb="md">
                  Tracking History
                </Title>
                <Progress
                  value={progress.value}
                  color={progress.color}
                  size="lg"
                  radius="xl"
                  mt="sm"
                  striped
                  animated={progress.value < 100}
                />
                <Timeline bulletSize={18} lineWidth={2} mt="xl">
                  {events.map(
                    (
                      ev: {
                        date: string;
                        status: string;
                        location: string;
                        description: string;
                      },
                      idx: number
                    ) => (
                      <Timeline.Item
                        key={idx}
                        title={ev.status}
                        bullet={
                          <ThemeIcon
                            color={getColor(ev.status)}
                            radius="xl"
                            size={18}
                          >
                            {getIcon(ev.status)}
                          </ThemeIcon>
                        }
                      >
                        <Text size="sm">{ev.description}</Text>
                        <Text size="sm" mt={2}>
                          {ev.location}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {formatDate(new Date(ev.date))}
                        </Text>
                      </Timeline.Item>
                    )
                  )}
                </Timeline>
              </Paper>
            </>
          )}
          <Conditional condition={!data}>
            <Accordion variant="separated" mt="xl">
              <Accordion.Item value="tracking-number-look">
                <Accordion.Control>
                  What does my tracking number look like?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" mb="xs">
                    Here are examples of tracking numbers you might see:
                  </Text>
                  <ul style={{ lineHeight: "1.8" }}>
                    <li>Gold Storage Tracking: 9400 1000 0000 0000 0000 00</li>
                    <li>Secure Transport: 9205 5000 0000 0000 0000 00</li>
                    <li>Registered Shipment: 9270 1000 0000 0000 0000 00</li>
                    <li>International Secure Transfer: EC 000 000 000 US</li>
                  </ul>
                </Accordion.Panel>
              </Accordion.Item>

              {/* FAQ 2 */}
              <Accordion.Item value="find-tracking-number">
                <Accordion.Control>
                  Where do I find my tracking number?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" mb="xs">
                    Your tracking number can be found in the following places:
                  </Text>
                  <ul style={{ lineHeight: "1.8" }}>
                    <li>On your storage facility handover receipt</li>
                    <li>In your sales receipt if you purchased insurance</li>
                    <li>In your email confirmation from our system</li>
                    <li>
                      In the shipping confirmation email from your gold dealer
                    </li>
                    <li>On the peel-off portion of your consignment label</li>
                  </ul>
                </Accordion.Panel>
              </Accordion.Item>

              {/* FAQ 3 */}
              <Accordion.Item value="tracking-statuses">
                <Accordion.Control>
                  What do the tracking statuses mean?
                </Accordion.Control>
                <Accordion.Panel>
                  <ul style={{ lineHeight: "1.8" }}>
                    <li>
                      <b>Request Submitted:</b> Your consignment is being
                      prepared.
                    </li>
                    <li>
                      <b>Shipment Label Created:</b> A label has been generated,
                      but the package has not yet been picked up.
                    </li>
                    <li>
                      <b>In Transit:</b> Your shipment is moving between
                      facilities.
                    </li>
                    <li>
                      <b>Held at Facility:</b> There is an issue; please contact
                      support.
                    </li>
                    <li>
                      <b>Delivered to Storage:</b> Your gold has arrived at the
                      secure storage location.
                    </li>
                  </ul>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Conditional>
        </div>
      </Container>
    </>
  );
}
