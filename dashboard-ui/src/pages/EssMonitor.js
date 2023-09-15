import React, { useState } from "react";
import BatterySVG from "../components/BatterySVG";
import btnStyles from "../styles/Buttons.module.css";
import ContentContainer from "../components/ContentContainer";
import { Stack, Button } from "@mui/material";

function EssMonitor() {
  const [isCharging, setIsCharging] = useState(false);
  const charge = () => {
    setIsCharging(true);
  };

  const discharge = () => {
    setIsCharging(false);
  };
  return (
    <div>
      <BatterySVG
        isCharging={isCharging}
        radius={40}
        strokeWidth={10}
        progress={100}
      />
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
        <Button className={btnStyles.Btn} onClick={charge}>
          Charge
        </Button>
        <Button className={btnStyles.Btn}>Idle</Button>
        <Button className={btnStyles.Btn} onClick={discharge}>
          Discharge
        </Button>
      </Stack>
    </div>
  );
}

export default EssMonitor;
