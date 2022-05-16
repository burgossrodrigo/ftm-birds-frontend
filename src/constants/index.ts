import Web3 from 'web3'
import { Birds } from '../types/web3-v1-contracts/Birds'
import { AbiItem, toWei } from 'web3-utils'
import abi from '../contracts/Birds.json'

//@ts-ignore
export const web3 = new Web3(window.ethereum)
const web3Call = new Web3('https://polygon-mainnet.g.alchemy.com/v2/AyUA199NY-DlVjm3kb-BnB1BtdA4Yp8n')
const birdsCall = new web3Call.eth.Contract(abi.abi as unknown as AbiItem [], '0x4412683eE6E4B7E511C54c78b49762cd099Ac05B') as any as Birds
const birds = new web3.eth.Contract(abi.abi as unknown as AbiItem [], '0x4412683eE6E4B7E511C54c78b49762cd099Ac05B') as any as Birds
const ethPrice = toWei('200', 'ether');
const usdPrice = toWei('200', 'tether')

export const mint = async (_address: any) => {
    try {
        birds.methods.mintBird(_address).send({from: _address, value: ethPrice, gasPrice: 45000000000})    
    } catch (error) {
        console.log(Error)
    }   
}

export const mintUSD = async (_address: any) => {
    try {
        birds.methods.minBirdForUSD(_address, usdPrice).send({from: _address, gasPrice: 45000000000})    
    } catch (error) {
        console.log(Error)
    }   
}

export const getMaticPrice = async () => {
    try {
        return birdsCall.methods.getLatestPrice().call()   
    } catch (error) {
        console.log(Error)
    }       
}

getMaticPrice().then((res) => console.log(res))
