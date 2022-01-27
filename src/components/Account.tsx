import { useWeb3React } from '@web3-react/core'
import { Button } from '@mui/material'
import styled from 'styled-components'

const Account = () => {

  const StyledButton = styled(Button)`
  
	width: max-content;
	height: 5vh;
  position: relative;
  margin: 2vh;
  margin-left: 85vw;
  `


  const { account } = useWeb3React()

  return (
    <>
      
      <StyledButton color="secondary" variant="contained" >
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


