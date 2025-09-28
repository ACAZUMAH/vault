import { useState, useEffect } from "react";
import { supabase } from "../../services/supaBase";

export function useBillingHistory(userId: string) {
  const [billingHistory, setBillingHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setBillingHistory([]);
      setLoading(false);
      return;
    }

    const fetchBillingHistory = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!supabase || typeof supabase === "string") {
          throw new Error("Supabase client is not initialized");
        }
        const { data, error } = await supabase
          .from("billing_history")
          .select("*")
          .eq("user_id", userId)
          .order("due_date", { ascending: false }); // newest first

        if (error) throw error;

        setBillingHistory(data || []);
      } catch (err: any) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBillingHistory();
  }, [userId]);

  return { billingHistory, loading, error };
}
