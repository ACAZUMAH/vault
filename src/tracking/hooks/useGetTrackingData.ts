import { useState, useEffect } from "react";
import { supabase } from "../../services/supaBase";

export const useTracking = (trackingNumber: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!trackingNumber) return;

    const fetchTracking = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch the shipment
        const { data: shipment, error: shipmentError } = await supabase
          .from("shipments")
          .select("*")
          .eq("tracking_number", trackingNumber)
          .single();

        if (shipmentError) throw shipmentError;
        if (!shipment) throw new Error("Shipment not found");

        // Fetch events (tracking history)
        const { data: events, error: eventsError } = await supabase
          .from("shipment_events")
          .select("*")
          .eq("shipment_id", shipment.id)
          .order("event_time", { ascending: false });

        if (eventsError) throw eventsError;

        // Format into USPS-style structure
        const formattedData = {
          trackingNumber: shipment.tracking_number,
          currentStatus: {
            status: shipment.current_status,
            location: shipment.current_location,
            description: shipment.current_description,
            date: shipment.last_updated
          },
          contactSupport: shipment.contact_support,
          origin: shipment.origin_location,
          destination: shipment.destination_location,
          history: events.map((e) => ({
            status: e.status,
            location: e.location,
            description: e.description,
            event_type: e.event_type,
            date: e.event_time
          }))
        };

        setData(formattedData);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      }

      setLoading(false);
    };

    fetchTracking();
  }, [trackingNumber]);

  return { data, loading, error };
}
