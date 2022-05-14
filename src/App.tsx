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
    @media (max-width: 412px) {
      flex-direction: column;
    }
    @media (min-width: 700px) and (max-width: 830px){
      flex-direction: column;
    }



  
  `

  const ImgWrapper = styled.div`
  
    display:flex;
    flex-direction: row;
    margin: 0 auto;
    
  
  `

  const ImgTucano = styled.img`
  
    margin-left: 70%;
    @media (max-width: 412px) {
      margin-left: 8vw;
    }
    @media (min-width: 700px) and (max-width: 830px){
      margin-left: 40%;
    }
  
  `



  return (
    
    <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeProvider theme={theme}>
      <AppProvider>     
        <div className="App">
          <ImgWrapper>
            <img src={logo} alt="logo" width={200} style={{}} />
            <ImgTucano src={tucano} alt="tucano" width={200} />
          </ImgWrapper>
          <Header />
          <StyledWrapper>
          <MediaCard />
          </StyledWrapper>
          <BlockNumber />
        </div>    
      </AppProvider>
    </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
