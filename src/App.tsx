import './App.css';
import MediaCard from './components/MediaCard'
import Header from './components/Header'
import BlockNumber from './components/BlockNumber'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import tucano from './static/tucano.png'
import logo from './static/logo.png'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProvider } from './state/Context'
import { Web3Provider } from "@ethersproject/providers"
import Countdown from 'react-countdown';
import { Typography } from '@mui/material'
import styled from 'styled-components'

const getLibrary = (provider: any, connector: any) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
}

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant',
        'Inter var',
      ].join(','),
    },
    palette:{
      primary:{
        main: '#FF9F24'
      },
      secondary:{
        main: '#00C7DA'
      }
    }

  });

function App() {

  const StyledWrapper = styled.div`
  
    display: flex;
    flex-direction: row;
  
  `

  const CountdownWrapper = styled.div`
  
    height: min-content;
    margin: 10vh auto;
    margin-top: 5vh;
  
  `



  return (
    
    <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeProvider theme={theme}>
      <AppProvider>     
        <div className="App">
          <img src={logo} alt="logo" width={200} style={{}} />
          <img src={tucano} alt="tucano" width={200} />
          <Header />
          <StyledWrapper>
          <MediaCard />
          <CountdownWrapper>
            <Typography variant='h5'>
              Countdown
            </Typography>
            <Typography variant='h1'>
              <Countdown date={Date.parse('2022-02-04T21:00:00Z')} />
            </Typography>
          </CountdownWrapper>
          </StyledWrapper>
          <BlockNumber />
        </div>    
      </AppProvider>
    </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
