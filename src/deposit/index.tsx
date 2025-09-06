import {
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { Conditional } from "../components/conditional/Conditional";
import { useLogin, useVerifyVaultNumber } from "./hooks/useLoginUser";

export const SaveDeposit = () => {
  const theme = useMantineTheme();
  const [vaultNumber, setVaultNumber] = useState("");
  const [showVerifyVaultNumber, setShowVerifyVaultNumber] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login, } = useLogin();
  const { verifyVaultNumber, loading: verifyLoading } = useVerifyVaultNumber();

  const handleLogin = async () => {
    const data = await login({ email, password });
    if(data) {
      setShowVerifyVaultNumber(true);
      setEmail("");
      setPassword("");
    }
  };

  const handleVerifyVaultNumber = async () => {
    const data = await verifyVaultNumber(vaultNumber);
    if (data) {
      setShowVerifyVaultNumber(false);
    }
  };

  return (
    <>
      <Box bg={theme.colors.dark[7]} h={200}>
        <Container w="100%" maw={1300} pt={100}>
          <Title c="white" mt="lg" fw={400}>
            Login
          </Title>
        </Container>
      </Box>
      <Container w="100%" maw={1300} pb={60}>
        <Conditional condition={!showVerifyVaultNumber}>
          <Container size="xs" mt={80}>
            <Paper>
              <TextInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <PasswordInput
                label="Password"
                mt="md"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <Checkbox label="Keep me signed in" mt="md" />
              <Group grow>
                <Button mt="md" onClick={handleLogin} loading={loading}>
                  Login
                </Button>
                <Button mt="md" variant="default" color="gray">
                  Register
                </Button>
              </Group>
            </Paper>
          </Container>
        </Conditional>
        <Conditional condition={showVerifyVaultNumber}>
          <Container size="xs" mt={80}>
            <Paper>
              <TextInput
                label="Enter Vault Number"
                withAsterisk
                value={vaultNumber}
                onChange={(e) => setVaultNumber(e.currentTarget.value)}
              />
              <Button mt="md" color="blue" fullWidth onClick={handleVerifyVaultNumber} loading={verifyLoading}>
                Verify Code
              </Button>
            </Paper>
          </Container>
        </Conditional>
      </Container>
    </>
  );
};
