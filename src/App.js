import axios from "axios";
import { useEffect, useState } from "react";
import {Typography, Box, Stack} from '@mui/material';
import DataBox from "./components/databox/DataBox";
import Countries from "./components/countries/Countries";

import Chart from "./components/chart/Chart";

import style from './App.module.css';

function App() {
  const [deaths, setDeath] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [country, setCountry] = useState('Worldwide');

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api')
      .then(response => {
        
        setDeath(response.data.deaths.value);
        setConfirmed(response.data.confirmed.value);
        if (response.data.recovered.value) {
          setRecovered(response.data.recovered.value);
        } else {
          setRecovered('No Data')
        }

      }).catch((err) => { console.log(err.message) })
  }, [])

  function countryData(countryName) {
    setCountry(countryName);
    
  }

  useEffect(() => {
    axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
      .then(response => {
      

        setDeath(response.data.deaths.value);
        setConfirmed(response.data.confirmed.value);
        if (response.data.recovered.value) {
          setRecovered(response.data.recovered.value);
        } else {
          setRecovered('No Data')
        }
      }).catch((err) => { console.log(err.message) })
  }, [country])

  
  return (
    <>
      <Typography variant="h1" color={'#424242'} align="center" mt={6} mb={7} sx={{fontWeight:'600', letterSpacing:'10px'}}>COVID <span className={style.spantag}>19</span></Typography>
      <Typography variant="h4" color={'#424242'} align="center" mt={6} mb={7} sx={{fontWeight:'500'}}>{country}</Typography>
      <Stack className={style.container} direction={{ xs: "column", sm: "row" }} mb={6} >
        <DataBox title='Confirmed' value={confirmed} bgColor='#24c0d1' />
        <DataBox title='Recovered' value={recovered} bgColor='#45ba53' />
        <DataBox title='Deaths' value={deaths} bgColor='#ba5449' />

      </Stack>
      <Box className={style.container}>
        <Countries countryData = {countryData} />
      </Box>
    </>
  );
}

export default App;
