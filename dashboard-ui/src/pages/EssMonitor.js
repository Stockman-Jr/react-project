import React, { useState } from "react";
import BatterySVG from "../components/BatterySVG";
import btnStyles from "../styles/Buttons.module.css";
import styles from "../styles/EssMonitor.module.css";
import { Stack, Button } from "@mui/material";
import { InfoRect } from "../components/InfoRect";

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
      <div className={styles.BoxLeft}>
        <span>
          <strong>Current:</strong> xx A
        </span>
        <span>
          <strong>Voltage:</strong> xx V
        </span>
      </div>
      <BatterySVG
        isCharging={isCharging}
        radius={40}
        strokeWidth={10}
        progress={100}
      />
      <InfoRect text="L1: xxx" top={500} left={785} />
      <div className={styles.BoxRight}>
        <span>System OK</span>
      </div>

      <div>
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
    </div>
  );
}

export default EssMonitor;
