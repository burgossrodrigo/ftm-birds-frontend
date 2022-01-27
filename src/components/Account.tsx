import { useWeb3React } from '@web3-react/core'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { AppContext } from '../state/Context'
import { useContext } from 'react'

const Account = () => {

  const StyledButton = styled(Button)`
  
	width: max-content;
	height: 5vh;
  position: relative;
  margin: 2vh;
  margin-left: 85vw;
  `


  const { account } = useWeb3React()
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      
      <StyledButton color="secondary" variant="contained" onClick={() => { dispatch({type: 'OPEN_WALLET', payload: true}); console.log(state.openWallet)}} >
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
    </StyledButton>
    </>
  )
}

export default Account;


