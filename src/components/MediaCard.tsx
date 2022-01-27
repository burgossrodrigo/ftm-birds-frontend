import { Card, CardActions, CardMedia, Button } from '@mui/material';
import styled from 'styled-components'
import gif from '../static/gif.gif'

export default function MediaCard() {

  const StyledCard = styled(Card)`
  
    margin-top: 5vh;
    height: 65vh;
    background-color: #00C7DA;
    padding: 5vw;
    margin-left: 5vw;
    margin-bottom: 5vh;
    
    @media (max-width: 412px) {

      margin: 0 auto;
      height: 53vh;
      margin-bottom: 1vh;
    }

    @media (min-width: 413px) and (max-width: 830px){

      height: 40vh;

    }


  
  `

  const StyledCardActions = styled(CardActions)`
  
    margin-top: 1vh;
    border: 5px 5px 5px 5px solid;
  
  `

    return (
      <StyledCard sx={{ maxWidth: 500 }} color="primary">
        <CardMedia
          component="img"
          height="430"
          image={gif}
          alt="green iguana"
        />
        <StyledCardActions>
          <Button size="large" variant="contained">Approve</Button>
          <Button size="large" variant="contained">Mint</Button>
        </StyledCardActions>
      </StyledCard>
    );
}