import React from "react";
import { Container, Stack } from "@mui/material";
import styles from "../styles/ContentContainer.module.css";

const ContentContainer = ({ children }) => {
  return (
    <Container className={styles.Content} maxWidth="sm">
      <Stack
        spacing={2}
        direction="column"
        useFlexGap
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Stack>
    </Container>
  );
};

export default ContentContainer;
