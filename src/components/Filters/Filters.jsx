import React from 'react';
import { Grid, FormControl, Select, MenuItem } from '@material-ui/core';

const Filter = ({ handleGender, handlePayment, data }) => {
  return (
    <Grid className='my-3' justify='space-between' container spacing={5}>
      <Grid item xs={12} sm={6}>
        <FormControl style={{ width: '100%' }}>
          <Select
            value={data.PaymentMethod}
            onChange={handlePayment}
            displayEmpty
          >
            <MenuItem value={''} selected>
              Payment Method
            </MenuItem>
            <MenuItem value={'cc'}>CC</MenuItem>
            <MenuItem value={'paypal'}>PayPal</MenuItem>
            <MenuItem value={'check'}>Check</MenuItem>
            <MenuItem value={'money order'}>Money Order</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl style={{ width: '100%' }}>
          <Select value={data.Gender} onChange={handleGender} displayEmpty>
            <MenuItem value={''} selected>
              Gender
            </MenuItem>
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
            <MenuItem value={'Prefer to skip'}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filter;
