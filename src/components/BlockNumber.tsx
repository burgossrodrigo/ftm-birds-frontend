import { useWeb3React } from '@web3-react/core'
import React from 'react';
import styled from 'styled-components'

const BlockNumber = () => {

const StyledSpan = styled.span`

    cursor: pointer;
    margin-left: 80%;
    margin-bottom: 5%


`

  const { chainId, library } = useWeb3React()

  const [blockNumber, setBlockNumber] = React.useState<number>()
  React.useEffect((): any => {
    if (!!library) {
      let stale = false

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
              //@ts-ignore
            setBlockNumber(0)
          }
        })

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
  }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <StyledSpan>{blockNumber === null ? 'Error' : blockNumber ?? ' '}</StyledSpan>
    </>
  )
}

export default BlockNumber;