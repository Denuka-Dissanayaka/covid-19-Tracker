import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Select, MenuItem, InputLabel, FormControl, Box} from '@mui/material'


function Countries(props) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://covid19.mathdro.id/api/countries')
    .then(response => {
        
       const countries = response.data.countries.map((item) => {
           return item.name;
       })
       setCountries(countries);
       
    }).catch((err) => {console.log(err.message)})
    }, [])

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Choose a Country</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" name="country" label="Choose a Country"  onChange = {(e) => { props.countryData(e.target.value)}}>
          {/* <option value="" disabled selected hidden>Choose a Country</option> */}
          {
              countries.map((item) => {
               return <MenuItem value={item}  >{item}</MenuItem> 
              })
          }
      </Select>
      </FormControl>
    </Box>
  )
}

export default Countries
