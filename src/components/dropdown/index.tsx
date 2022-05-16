import { useContext, useState } from 'react';
import { AppContext } from '../../state/Context'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import matic from '../../static/matic.svg'
import tether from '../../static/tether.png'

export function SelectCoin() {
  const { state, dispatch } = useContext(AppContext);
  const [coin, setCoin] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCoin(event.target.value as string);
    dispatch({type: 'MINT_ETH', payload: true})
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Coin</InputLabel>
        <Select
          labelId="coin"
          id="coin"
          value={coin}
          label="coin"
          onChange={handleChange}
        >
          <MenuItem value={1}><img src={matic} alt="matic" width={30}/></MenuItem>
          <MenuItem value={2}><img src={tether} alt="tether" width={30}/></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
