import { useState } from 'react'; 
import { supabase } from '../../services/supaBase';

export function useCreatePayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  /**
   * Creates a payment record in the 'payment' table
   * @param  paymentData - Payment fields matching your table schema
   */
  const createPayment = async (paymentData: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

  try {
      if (!supabase || typeof supabase === 'string') {
        throw new Error('Supabase client is not initialized');
      }

      const { data, error } = await supabase.from('payment').insert([paymentData]).select();

      if (error) {
        setError(error.message);
        return null;
      }

      setSuccess(true);
      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createPayment, loading, error, success };
}
