import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react'
import { useFormContext } from 'react-hook-form'

const Review = () => {
  const { getValues } = useFormContext();
  
  return (
    <Stack spacing={2} sx={{mb:3}} divider={<Divider/>}>
    <Box>
      <Typography
        variant='subtitle2'
        gutterBottom
      >
        Teslimat Bilgileri
      </Typography>
      <Typography
        gutterBottom
      >
        {getValues("firstname")} {getValues("lastname")}
      </Typography>
      <Typography
        gutterBottom
      >
        {getValues("phone")}
      </Typography>
      <Typography
        gutterBottom
      >
        {getValues("adress")}/{getValues("city")}
      </Typography>
    </Box>
    <Box>
      <Typography
        variant='subtitle2'
        gutterBottom
      >
        Ödeme Bilgileri
      </Typography>
      <Typography
        gutterBottom
      >
        {getValues("cardname")}
      </Typography>
      <Typography
        gutterBottom
      >
        {getValues("cardnumber")}
      </Typography>
      <Typography
        gutterBottom
      >
        {getValues("expirydate")}
      </Typography>
    </Box>
    </Stack>
  )
}

export default Review
