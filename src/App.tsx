import { Header } from './component/header'
import { chain, createClient, configureChains, Chain, WagmiConfig  } from "wagmi"
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import {
  RainbowKitProvider,
  connectorsForWallets, 
  wallet, 
  darkTheme
} from '@rainbow-me/rainbowkit'
import GlobalStyle from './style'

function App() {

  const { chains, provider } = configureChains(
    [chain.polygon],
    [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]

  )

  const connectors = connectorsForWallets([
    {
      groupName: 'Recommended',
      wallets: [
        wallet.metaMask({ chains }),
        wallet.walletConnect({ chains }),
        wallet.trust({ chains })
      ],
    },
  ])

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return (
    <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        <GlobalStyle />
        <Header />
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  );
}

export default App;
