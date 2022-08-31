import React, { useState, useEffect } from 'react'
import { useModal, Button, Heading, Card, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Contract } from 'web3-eth-contract'
import { useERC20 } from 'hooks/useContract'
import { IfoStatus } from 'config/constants/types'
import UnlockButton from 'components/UnlockButton'
import { usePreSaleApprove } from 'hooks/useApprove'
import { usePreSaleAllowance } from 'hooks/useAllowance'
import { getBalanceNumber, getBalance } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import CardValue from 'views/Home/components/CardValue'
import Spacer from 'components/Spacer'
import LabelButton from './LabelButton'
import ContributeModal from './ContributeModal'

const StyledPreSaleCard = styled(Card)`
  padding: 32px 16px 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
  border-radius: 16px;
  margin-top: 16px;
  boxShadow: inset 0 5px 9px -5px hsl(0deg 0% 100% / 70%), inset 0 28px 38px -4px hsl(0deg 0% 100% / 20%), inset 0 4px 40px rgb(37 27 11 / 25%), inset 0 4px 20px rgb(37 27 11 / 25%);
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px 16px 16px;
    margin-left: auto;
    margin-right: auto;
    max-width: 437px;
    width: 100%;
    border-radius: 16px;
  }
`
const Row = styled.div`
  display: block;
  padding-top: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
  }
`
const RowItem = styled.div`
  display: flex;
  padding-top: 16px;
`

export interface Props {
  address: string
  currency: string
  currencyAddress: string
  contract: Contract
  status?: IfoStatus
  raisingAmount?: BigNumber
  tokenDecimals: number
}

const PresaleContribute: React.FC<Props> = ({
  address,
  currency,
  currencyAddress,
  contract,
  status,
  raisingAmount,
  tokenDecimals,
}) => {
  const [pendingTx, setPendingTx] = useState(false)
  const [claimTokenBalance, setClaimTokenBalance] = useState(new BigNumber(0))

  const [claimed, setClaimed] = useState(false)
  const [amount, setAmount] = useState(new BigNumber(0))
  const [isActive, setActive] = useState(true)
  const { account } = useWallet()
  const [total, setTotal] = useState(new BigNumber(0))
  const [unclaimToken, setUnclaimToken] = useState(new BigNumber(0))
  const [ownToken, setOwnToken] = useState(new BigNumber(0))
  const [totalSoldToken, setTotalSoldToken] = useState(new BigNumber(0))
  const [leftToken, setLeftToken] = useState(new BigNumber(0))
  const contractRaisingToken = useERC20(currencyAddress)
  const allowance = usePreSaleAllowance(contractRaisingToken, address, pendingTx)
  const onApprove = usePreSaleApprove(contractRaisingToken, address)
  const [onPresentContributeModal] = useModal(
    <ContributeModal currency={currency} contract={contract} currencyAddress={currencyAddress} />,
  )

  const TranslateString = useI18n()

  useEffect(() => {
    const fetchV = async () => {
      const _claimed = await contract.methods.claimActive().call()
      const _active = await contract.methods.saleActive().call()
      const _total = await contract.methods.getLIONTokensLeft().call()
      
      const _totalSoldToken = await contract.methods.getTotalTokensSold().call()
      console.log('debug->_totalSoldToken', _totalSoldToken)
      console.log('debug->_total', _total/1e18)

      const _leftToken = new BigNumber(_total).minus(_totalSoldToken)
      console.log('debug->_leftToken', _leftToken.toString())
      setClaimed(_claimed)
      setActive(_active)
      setLeftToken(_leftToken)
      setTotalSoldToken(_totalSoldToken)
      setTotal(_total)
    }

    const fetch = async () => {
      const balance = new BigNumber(await contract.methods.getTokensUnclaimed(account).call())

      const _claimed = await contract.methods.claimActive().call()
      const _amount = await contract.methods.getTokensOwned(account).call()
      const _active = await contract.methods.saleActive().call()
      const _total = await contract.methods.getLIONTokensLeft().call()

      const _unclaimToken = await contract.methods.getTokensUnclaimed(account).call()
      const _ownToken = await contract.methods.getTokensOwned(account).call()
      const _totalSoldToken = await contract.methods.getTotalTokensSold().call()
      const _leftToken = new BigNumber(_total).minus(new BigNumber(_totalSoldToken))

      console.log('debug->_total', _leftToken, _ownToken, _totalSoldToken, _total)

      setClaimed(_claimed)
      setClaimTokenBalance(balance)
      setAmount(_amount)
      setActive(_active)
      setLeftToken(_leftToken)
      setUnclaimToken(_unclaimToken)
      setOwnToken(_ownToken)
      setTotalSoldToken(_totalSoldToken)
      setTotal(_total)
    }

    if (account) {
      fetch()
    }
    fetchV()
  }, [account, contract.methods, pendingTx])
  // console.log('debug-allow', allowance)

  // if (allowance === null) {
  //   return null
  // }

  // const { onClaim } = useClaim()
  const claim = async () => {
    setPendingTx(true)
    await contract.methods.claimTokens().send({ from: account })
    setPendingTx(false)
  }

  const isFinished = false

  return (
    <>
      {!isActive && (
        <Heading color="#fff" size="lg" style={{ textAlign: 'center' }}>
          Presale is not active
        </Heading>
      )}
      <Row>
        <StyledPreSaleCard>
          <Heading color="#ddd" size="lg" mb="24px" style={{ textAlign: 'center' }}>
            Buy{' '}
          </Heading>
          {account && allowance <= 0 && (
            <Button
              fullWidth
              disabled={pendingTx || isFinished}
              onClick={async () => {
                try {
                  setPendingTx(true)
                  await onApprove()
                  setPendingTx(false)
                } catch (e) {
                  setPendingTx(false)
                  console.error(e)
                }
              }}
            >
              Approve
            </Button>
          )}
          {!account && <UnlockButton fullWidth />}
          {account && allowance > 0 && (
            <LabelButton
              disabled={pendingTx || !(isActive || isFinished)}
              buttonLabel="Contribute"
              label={isFinished ? 'Your tokens to claim' : `Your contribution (LION)`}
              value={
                // eslint-disable-next-line no-nested-ternary
                isFinished
                  ? claimed
                    ? 'Claimed'
                    : getBalance(claimTokenBalance).toFixed(2)
                  : getBalance(new BigNumber(amount).times(1)).toFixed(2)
              }
              onClick={onPresentContributeModal}
            />
          )}
        </StyledPreSaleCard>
        <Spacer size="sm" />
        <StyledPreSaleCard>
          <Heading color="#ddd" size="lg" mb="24px" style={{ textAlign: 'center' }}>
            Claim{' '}
          </Heading>

          {!account && <UnlockButton fullWidth />}
          {account && (
            <LabelButton
              disabled={pendingTx || unclaimToken <= new BigNumber(0) || !(isActive || isFinished)}
              buttonLabel="Claim"
              label="Your tokens to claim (LION)"
              value={
                // eslint-disable-next-line no-nested-ternary
                isFinished
                  ? claimed
                    ? 'Claimed'
                    : getBalance(unclaimToken).toFixed(2)
                  : getBalance(new BigNumber(unclaimToken)).toFixed(2)
              }
              onClick={claim}
            />
          )}
        </StyledPreSaleCard>
      </Row>
      <Row>
        <StyledPreSaleCard>
          <Heading color="#ddd" size="lg" mb="24px" style={{ textAlign: 'center' }}>
            Info{' '}
          </Heading>
          <hr />
          <RowItem>
            <Text color="#ddd" mr="16px">Purchased LION:</Text>
            <CardValue value={getBalance(ownToken)} decimals={0} fontSize="16px"/>
          </RowItem>
          <RowItem>
            <Text color="#ddd" mr="16px">Unclaimed LION:</Text>
            <CardValue value={getBalance(unclaimToken)} decimals={0} fontSize="16px" />
          </RowItem>
          <hr />
          <RowItem>
            <Text color="#ddd" mr="16px">Total LION:</Text>
            <CardValue value={getBalanceNumber(total, 18)} decimals={0} fontSize="16px" />
          </RowItem>
          <RowItem>
            <Text color="#ddd" mr="16px">Total LION Sold:</Text>
            <CardValue value={getBalance(totalSoldToken)} decimals={0} fontSize="16px" />
          </RowItem>
          <hr />
          {/* <RowItem>
            <Text color="#ddd" mr="16px">
              LION Left:
            </Text>
            <CardValue value={getBalance(leftToken)} decimals={0} fontSize="18px" />
          </RowItem> */}
        </StyledPreSaleCard>
        <Spacer size="sm" />
        <StyledPreSaleCard>
          <Heading color="#ddd" size="lg" mb="24px" style={{ textAlign: 'center' }}>
            PreSale{' '}
          </Heading>
          <RowItem>
            <Text color="#ddd" fontSize="18px" mr="16px">
              LION Presale Price:{' '}
            </Text>
            <CardValue fontSize="18px" value={1} decimals={2} prefix="$" />
          </RowItem>
          {/* <RowItem>
            <Text color="#ddd" fontSize="18px" mr="16px">
              - LION Presale Price:{' '}
            </Text>
            <CardValue fontSize="18px" value={7} decimals={2} prefix="$" />
          </RowItem>
          <RowItem>
            <Text color="#ddd" fontSize="18px" mr="16px">
              - LION Launch Price:{' '}
            </Text>
            <CardValue fontSize="18px" value={10} decimals={2} prefix="$" />
          </RowItem> */}

          <RowItem>
            <Text color="#ddd" fontSize="15px" mr="16px">
              - Minimum Contribution - 1 DAI(1 LION)
            </Text>
          </RowItem>
          <RowItem>
            <Text color="#ddd" fontSize="15px" mr="16px">
              - Maximum Contribution - 50,000 DAI (50,000 LION)
            </Text>
          </RowItem>
          <RowItem>
            <Text color="#ddd" fontSize="15px" mr="16px">
              - HardCap - 300,000 DAI (300,000 LION)
            </Text>
          </RowItem>
          <RowItem>
            <Text color="#ddd" fontSize="15px" mr="16px">
            Contract Address - 0x9bdb78fbeaedf543ac7c6682972da444de970804
            </Text>
          </RowItem>
        </StyledPreSaleCard>
      </Row>
    </>
  )
}

export default PresaleContribute
