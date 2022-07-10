import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Link, ResetCSS } from '@pancakeswap-libs/uikit'
import useToast from 'hooks/useToast'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import Image from 'views/Nft/components/Image'
import styled from 'styled-components'
import { ToastListener } from './contexts/ToastsContext'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'
import GlobalStyle from './style/Global'

const Presale = lazy(() => import('./views/Presale'))
const PublicPresale = lazy(() => import('./views/publicPresale'))
const NotFound = lazy(() => import('./views/NotFound'))

let didAskToJoinTelegram = false

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  const { toastSuccess } = useToast()
  const v = Math.random()
  // if (v < 0.3 && !didAskToJoinTelegram) {
  //   const action = { text: 'Join now', url: 'https://t.me/lemonswap' }
  //   toastSuccess('Join out Discord community now?', 'Come chat with us!', action)
  // }
  didAskToJoinTelegram = true

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
        <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Presale />
          </Route>
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
        </Suspense>
      {/* <NftGlobalNotification /> */}
      <ToastListener />
    </Router>
  )
}

export default React.memo(App)
