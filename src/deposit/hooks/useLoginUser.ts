import { useState } from "react";
import { supabase } from "../../services/supaBase";
import { showNotification } from "@mantine/notifications";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { routesEndpoints } from "../../constants";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";

interface LoginInput {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async ({ email, password }: LoginInput) => {
    setLoading(true);
    try {
      if (!supabase || typeof supabase === "string") {
        throw new Error("Supabase client is not initialized");
      }
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        showNotification({
          title: "Login Error",
          message: error.message,
          color: "red",
        });
        return null;
      }
      if (data) {
        showNotification({
          title: "Login",
          message: "Login successful, verify your vault number",
          color: "blue",
        });
        return data;
      }
    } catch (err: any) {
      showNotification({
        title: "Login Error",
        message: "Invalid email or password",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export const useVerifyVaultNumber = () => {
  const [loading, setLoading] = useState(false);
  const navigateToUser = useAppNavigation(routesEndpoints.USER);
  const { loginUser } = useAppAuthentication();

  const verifyVaultNumber = async (vaultNumber: string) => {
    setLoading(true);
    try {
      if (!supabase || typeof supabase === "string") {
        throw new Error("Supabase client is not initialized");
      }

      const { data, error } = await supabase
        .from("user")
        .select("*")
        .eq("vault_number", vaultNumber)
        .single();

      if (error) {
        showNotification({
          title: "Verification Error",
          message: error.message,
          color: "red",
        });
        console.error("Error verifying vault number:", error);
        return null;
      }
      if (data) {
        showNotification({
          title: "Verification",
          message: "Vault number verified successfully",
          color: "blue",
        });
        loginUser({ user: data });
        navigateToUser();
        return data;
      }
    } catch (err: any) {
      showNotification({
        title: "Verification Error",
        message: "An error occurred while verifying the vault number",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return { verifyVaultNumber, loading };
};
