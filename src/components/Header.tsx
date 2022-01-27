import { useContext } from 'react'
import { useWeb3React } from '@web3-react/core'
import Account from './Account'
import styled from 'styled-components'
import { Button, Backdrop } from '@mui/material'
import { AppContext } from '../state/Context';
import Wallet from './Wallet'



export default function Header() {


  const AccountDiv = styled.div`
 
	position: relative;
	float: right;
  margin: 2vh;
 
  `

  const StyledNavbar = styled.div`
 
	background-color: #FF9F24;
	width: 100%
  display: flex;
  flex-direction: row;
  height: 10vh;
 
  `

  const StyledButton = styled(Button)`
  
	width: max-content;
	height: 5vh;
  position: relative;
  margin: 2vh;
  margin-left: 85vw;
  `

  const { active, chainId } = useWeb3React();

        const { state, dispatch } = useContext(AppContext);
        console.log(state.openWallet)

  async function setNetwork(){
    try {
      //@ts-ignore
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: 250 }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      //@ts-ignore
      if (window.switchError.code === 4902) {
        try {
          //@ts-ignore
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{ chainId: 250, rpcUrl: 'https://rpc.ftm.tools/' }],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }

  }

  console.log(active)
  console.log(chainId)

  return (
    <>

      <StyledNavbar>
      <AccountDiv>
        { 
        
        active 
        
        ?
        
        chainId !== 250

        ?

        <StyledButton 
        color="secondary" 
        variant="contained" 
        onClick={() => { setNetwork(); dispatch({type: 'OPEN_WALLET', payload: true}); }}
        >Connect to right network
        </StyledButton>        
      

        :
        
        <Account />

        :
        
        <StyledButton 
        color="secondary" 
        variant="contained" 
        onClick={() => { dispatch({type: 'OPEN_WALLET', payload: true}); console.log(state.openWallet)}}
        >No wallet connected
        </StyledButton>
          
        }

      </AccountDiv>		
      </StyledNavbar>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.openWallet}
        onClick={() => { dispatch({type: 'CLOSE_WALLET', payload: false})}}
      >
        <Wallet />
      </Backdrop>
    </>
  )
}