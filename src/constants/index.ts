import Web3 from 'web3'
import { Birds } from '../types/web3-v1-contracts/Birds'
import { AbiItem, toWei } from 'web3-utils'
import abi from '../contracts/Birds.json'

//@ts-ignore
export const web3 = new Web3(window.ethereum)
const birds = new web3.eth.Contract(abi.abi as unknown as AbiItem [], '0xB0EE6eb9cAf4173A87CDFf5CD16E720e07F0C5ec') as any as Birds
const ethPrice = toWei('200', 'ether');

export const mint = async (_address: any) => {
    try {
        birds.methods.mintBird(_address).send({from: _address, value: ethPrice})    
    } catch (error) {
        console.log(Error)
    }   
}

