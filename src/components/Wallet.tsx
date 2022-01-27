import { useWeb3React } from "@web3-react/core"
import { injected } from "../constants/connectors"
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import styled from 'styled-components'
import ftm from '../static/ftm.png'


export default function Wallet() {

  const StyledCard = styled(Card)`
  
  margin-top: 5vh;
  height: 75vh;
  background-color: #FF9F24;
  padding: 5vw;
  margin-left: 5vw;
  margin-bottom: 5vh;

  @media (max-width: 412px) {
    margin-top: 10vh;
    margin: 0 auto;
    height: 58vh;
    margin-bottom: 5vh;
  }

`

const StyledCardActions = styled(CardActions)`

  margin-top: 100%;
  border: 5px 5px 5px 5px solid;

`

const StyledImg = styled.img`

  float: left;

`
const StyledSpan = styled.span`

  cursor: pointer;

`

  const { active, account, activate, deactivate } = useWeb3React()


  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <StyledCard color="primary" sx={{ maxWidth: 500 }}>
      <StyledImg src={ftm} alt="ftm" width={80} />
      <CardContent>
        <Typography>
        {active ? <StyledSpan onClick={() => {window.open('https://ftmscan.com/address/' + account)}}>Connected with <b>{account?.substring(0, 6)}...{account?.substring(account?.length - 4)}</b></StyledSpan> : 'No wallet connected'}
        </Typography>
      </CardContent>
      <CardContent>
        No transaction to be displayed
      </CardContent>
    <StyledCardActions>
    <Button variant="contained" onClick={() => {connect()}}>{ active ? 'Connected' : 'Connect'}</Button>
      <Button variant="contained" onClick={() => {disconnect()}}>Disconnect</Button>
    </StyledCardActions>
  </StyledCard>
  )
}