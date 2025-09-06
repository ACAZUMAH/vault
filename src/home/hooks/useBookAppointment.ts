import { useState } from "react";
import { supabase } from "../../services/supaBase";
import { showNotification } from "@mantine/notifications";

type MessageInput = {
  first_name: string;
  last_name: string;
  email: string;
  message?: string;
};

export const useBookAppointment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addAppointment = async (data: MessageInput) => {
    setLoading(true);
    setError(null);
    try {
      const { error, status } = await supabase
        .from("appointments")
        .insert([data]);

      if (status === 201) {
        showNotification({
          title: "Success",
          message: "Appointment booked successfully",
          color: "green",
        });
      } else if (error) {
        showNotification({
          title: "Error",
          message: error.message || "Failed to book appointment",
          color: "red",
        });
        setError(error.message);
      }
      return status;
    } catch (error) {
      console.error("Error adding appointment:", error);
      showNotification({
        title: "Error",
        message: "Failed to book appointment",
        color: "red",
      });
      setError("Failed to book appointment");
    }

    setLoading(false);
  };
  return { addAppointment, loading, error };
};
