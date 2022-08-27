//import { useContext } from 'react'
//import { AppContext } from '../../state/'
import styled from 'styled-components'

import Wallet from './wallet'
import tucano from '../../static/tucano.png'

const Wrapper = styled.div`
    font-size: 2.5vw;
    background-color: #1B1B1B;
`

const MainDiv = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 15vw;
    @media (max-width: 480px ){
        gap: 10vw;
    }
`

const CustomImg = styled.img`
    width: 15vw;
    @media (max-width: 480px ){
        display: none;
    }
`
const SubWrapper = styled.div`
    gap: 8vh;
    display: flex;
    flex-direction: row;
    margin: auto 0;
`

const Navigation = styled.div`
    gap: 8vh;
    display: flex;
    flex-direction: row;
    margin: auto 0;
    @media (max-width: 480px ){
        display: none;
    }
`

export const Header = () => {
    //const { state } = useContext(AppContext)

    return(
        <Wrapper>
            <MainDiv>
            <SubWrapper>
                    <CustomImg src={tucano} />
            </SubWrapper>                
                <Navigation>
                    <span>Home</span>
                    <span>Nest</span>
                    <span>Hatch</span>
                </Navigation>
                <SubWrapper>
                    <Wallet />
                </SubWrapper>
            </MainDiv>
        </Wrapper>
    )
}