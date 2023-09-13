import React from "react";
import styles from "../styles/Dashboard.module.css";
import ContentContainer from "../components/ContentContainer";
import { Stack } from "@mui/material";

function Dashboard() {
  return (
    <Stack spacing={2} direction="row" useFlexGap>
      <ContentContainer>
        <h5>Price Today</h5>
      </ContentContainer>
      <ContentContainer>
        <h5>Price Tomorrow</h5>
      </ContentContainer>
    </Stack>
  );
}

export default Dashboard;
