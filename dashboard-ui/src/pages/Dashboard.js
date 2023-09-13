import React from "react";
import styles from "../styles/Dashboard.module.css";
import ContentContainer from "../components/ContentContainer";
import { Stack, Button, Box } from "@mui/material";
import Chart from "../components/Chart";

function Dashboard() {
  return (
    <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
      <ContentContainer>
        <h3>Price Today</h3>
        <Chart />
        <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
          <Button>Charge</Button>
          <Button>Idle</Button>
          <Button>Discharge</Button>
        </Stack>
      </ContentContainer>
      <ContentContainer>
        <h3>Price Tomorrow</h3>
        <Chart />
        <Box
          sx={{
            height: 100,
          }}
        >
          <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
            <Button>Charge</Button>
            <Button>Idle</Button>
            <Button>Discharge</Button>
          </Stack>
        </Box>
      </ContentContainer>
    </Stack>
  );
}

export default Dashboard;
