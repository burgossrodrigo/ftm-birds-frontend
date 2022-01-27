import './App.css';
import MediaCard from './components/MediaCard'
import Header from './components/Header'
import BlockNumber from './components/BlockNumber'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import tucano from './static/tucano.png'
import logo from './static/logo.png'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProvider } from './state/Context'
import { Web3Provider } from "@ethersproject/providers";

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



  return (
    
    <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeProvider theme={theme}>
      <AppProvider>     
        <div className="App">
          <img src={logo} alt="logo" width={200} style={{}} />
          <img src={tucano} alt="tucano" width={200} />
          <Header />
          <MediaCard />
          <BlockNumber />
        </div>    
      </AppProvider>
    </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
