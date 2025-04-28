import {
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Info from "./Info";
import AdressForm from "./AdressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

const steps = ["Teslimat Bilgileri", "Ödeme", "Sipariş Özeti"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AdressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Bilinmeyen adım");
  }
};

const CheckOut = () => {
  const [activeStep, setActiveStep] = useState(0);

  function handlePrevious() {
    setActiveStep(activeStep - 1);
  }

  function handleNext() {
    setActiveStep(activeStep + 1);
  }

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid
          size={4}
          sx={{ p: 3, borderRight: "1px solid", borderColor: "divider" }}
        >
          <Info />
        </Grid>
        <Grid size={8}>
          <Stepper activeStep={activeStep} sx={{ height: 40, mb: 4 }}>
            {steps.map((label) => (
              <Step key={label} sx={{ color: "secondary" }}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Typography variant="h5">Siparişinizi aldık</Typography>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{
                display: "flex",
                justifyContent: activeStep !== 0 ? "space-between" : "flex-end"
              }}>
                { activeStep != 0 &&
                  <Button
                    onClick={handlePrevious}
                    startIcon={<ChevronLeftRounded />}
                    variant="contained"
                    color="secondary"
                  >
                    Geri
                  </Button>
                }
                <Button
                  onClick={handleNext}
                  startIcon={<ChevronRightRounded />}
                  variant="contained"
                  color="secondary"
                >
                  İleri
                </Button>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CheckOut;
