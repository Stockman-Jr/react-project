import React from "react";
import styles from "../styles/Dashboard.module.css";
import btnStyles from "../styles/Buttons.module.css";
import ContentContainer from "../components/ContentContainer";
import { Stack, Button, Box } from "@mui/material";
import Chart from "../components/Chart";

function Dashboard() {
  return (
    <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
      <ContentContainer>
        <h3>Price Today</h3>
        <Chart />
        <Stack
          spacing={2}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: 100,
          }}
        >
          <Button className={btnStyles.Btn}>Charge</Button>
          <Button className={btnStyles.Btn}>Idle</Button>
          <Button className={btnStyles.Btn}>Discharge</Button>
        </Stack>
      </ContentContainer>
      <ContentContainer>
        <h3>Price Tomorrow</h3>
        <Chart />
        <Stack
          spacing={2}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: 100,
          }}
        >
          <Button className={btnStyles.Btn}>Charge</Button>
          <Button className={btnStyles.Btn}>Idle</Button>
          <Button className={btnStyles.Btn}>Discharge</Button>
        </Stack>
      </ContentContainer>
    </Stack>
  );
}

export default Dashboard;
