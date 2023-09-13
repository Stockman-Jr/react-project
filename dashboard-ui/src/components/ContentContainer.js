import React from "react";
import { Container } from "@mui/material";
import styles from "../styles/ContentContainer.module.css";

const ContentContainer = ({ children }) => {
  return (
    <Container className={styles.Content} maxWidth="lg">
      {children}
    </Container>
  );
};

export default ContentContainer;
