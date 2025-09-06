import { Box, Container, Group, Image } from "@mantine/core";
import React from "react";

import naj from "../../assets/images/naj.png";
import metalor from "../../assets/images/metalor.svg";
import royalmint from "../../assets/images/royalmint.png";
import cooksGold from "../../assets/images/cooksongold.png";
import umicore from "../../assets/images/umicore.png";
import footer from "../../assets/images/footer-bg.png";

export const Confidentiality: React.FC = () => {
  return (
    <>
      <Box bg="whiteSmoke">
        <Container w="100%" maw={1300} py={35}>
          <Group align="center" justify="center" mb="xl" gap="3rem">
            <Image src={metalor} alt="Metalor Logo" width={150} height={50} />
            <Image
              src={cooksGold}
              alt="Cooks on Gold Logo"
              width={150}
              height={50}
            />
            <Image src={umicore} alt="Umicore Logo" width={170} height={70} />
            <Image src={naj} alt="NAJ Logo" width={180} height={80} />
            <Image
              src={royalmint}
              alt="Royal Mint Logo"
              width={180}
              height={80}
            />
          </Group>
        </Container>
      </Box>
      <Image src={footer} w="100%" h={15} />
    </>
  );
};
