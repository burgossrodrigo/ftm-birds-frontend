import { Card, CardActions, CardMedia, Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { SelectCoin } from './dropdown'
import { mint } from '../constants'
import styled from 'styled-components'
import gif from '../static/gif.gif'

const StyledCard = styled(Card)`  
margin-top: 5vh;
height: 65vh;
background-color: #00C7DA;
padding: 5vw;
margin: 5vh auto;
@media (max-width: 412px) {
  margin: 0 auto;
  height: 65vh;
  margin-bottom: 1vh;
}

@media (min-width: 413px) and (max-width: 830px){
  height: 40vh;
}
`
const StyledButton = styled(Button)`
  margin-left: 2vw;
`

const StyledCardActions = styled(CardActions)`
margin: 1vh 0;
border: 5px 5px 5px 5px solid;
display: flex;
flex-direction: row;
gap: 2vw;
`

export default function MediaCard() {

    const { active, account } = useWeb3React()


    return (
      <StyledCard sx={{ maxWidth: 500 }} color="primary">
        <CardMedia
          component="img"
          height="430"
          image={gif}
          alt="green iguana"
        />
        <StyledCardActions>
          <SelectCoin />
          <StyledButton disabled={!active} onClick={() => { mint(account) }} size="large" variant="contained">Mint</StyledButton>
        </StyledCardActions>
      </StyledCard>
    );
}