import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { createGlobalStyle } from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import { usePreSaleContract } from 'hooks/useContract'
import Hero from './components/Hero'
import PresaleContribute from './components/PresaleContribute'
import Divider from './components/Divider'


const Presale = () => {
  const { account } = useWallet()
  // presale contract address
  const presaleContract = "0x77A10289F248B25EF2AD6ca3823Cc2d69a1ec219"
  // token address BUSD
  const currencyAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56"
  const contract = usePreSaleContract(presaleContract)

  const BackgroundImage = createGlobalStyle`
  body {
    background: url("/images/backgroundHome.png") no-repeat !important;
    background-size: cover !important;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }
`;


  return(
    <>
    <BackgroundImage />
      <Page>
      <Hero />
      <Divider />
      <PresaleContribute
        address = {presaleContract}
        currency = "BUSD"
        currencyAddress = {currencyAddress}
        tokenDecimals = {18}
        contract = {contract}
      />
      </Page>
    </>
  )
}

export default Presale
