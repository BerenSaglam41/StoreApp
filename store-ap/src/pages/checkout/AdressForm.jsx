import { Grid, TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

const AdressForm = () => {
  const { register,formState :{errors} } = useFormContext()
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("firstname", {
            required: "FirstName Zorunlu Alan",
          })}
          label="Enter firstname"
          size="small"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          error={!!errors.firstname}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("lastname", {
            required: "Lastname Zorunlu Alan",
          })}
          label="Enter lastname"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.lastname}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("phone", {
            required: "phone Zorunlu Alan",
          })}
          label="Enter phone"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.phone}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("city", {
            required: "city Zorunlu Alan",
          })}
          label="Enter city"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.city}
        />
      </Grid>
      <Grid size={{ xs: 12}}>
        <TextField
          {...register("adress", {
            required: "adress Zorunlu Alan",
          })}
          label="Enter adress"
          size="small"
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
          error={!!errors.adress}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}></Grid>
    </Grid>
  );
};

export default AdressForm;
