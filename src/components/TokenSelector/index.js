import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TokenSelector({tokens, token, handleChange}) {

  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Token</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={token}
          label="Age"
          onChange={handleChange}
        >
          {
              tokens.map((token, index)=>
                <MenuItem key = {index} value={token}>{token}</MenuItem>
              )
          }
        </Select>
      </FormControl>
    </Box>
  );
}