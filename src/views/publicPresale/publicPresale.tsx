import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import { usePreSaleContract } from 'hooks/useContract'
import Hero from './components/Hero'
import PresaleContribute from './components/PresaleContribute'
import Divider from './components/Divider'


const Presale = () => {
  const { account } = useWallet()
  // presale contract address
  const presaleContract = "0x9bdb78fbeaedf543ac7c6682972da444de970804"
  // token address
  const currencyAddress = "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"
  const contract = usePreSaleContract(presaleContract)
  return(
    <>
      <Page>
      <Hero />
      <Divider />
      <PresaleContribute
        address = {presaleContract}
        currency = "DAI"
        currencyAddress = {currencyAddress}
        tokenDecimals = {18}
        contract = {contract}
      />
      </Page>
    </>
  )
}

export default Presale
