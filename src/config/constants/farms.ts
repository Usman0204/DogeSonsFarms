import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CANDY',
    lpAddresses: {
      97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
      56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
    },
    tokenSymbol: 'PUDD',
    tokenAddresses: {
      97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
      56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Dogeson-bnb LP',
    lpAddresses: {
      97: '0xeeacDfBC337BF3CaFecF7b6726DD21fB4e8abD74',
      56: '0xeeacDfBC337BF3CaFecF7b6726DD21fB4e8abD74',
    },
    tokenSymbol: 'CANDY',
    tokenAddresses: {
      97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
      56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'Dogeson-busd LP',
    lpAddresses: {
      97: '0xa5cbDE5C188165Bcd8E292422Eb91a864E9575d7',
      56: '0xa5cbDE5C188165Bcd8E292422Eb91a864E9575d7',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'CANDY-BUSD LP',
  //   lpAddresses: {
  //     97: '0xF52be08D8a3ee7A7C1d8591D3E3f8D6A22019121',
  //     56: '0xF52be08D8a3ee7A7C1d8591D3E3f8D6A22019121',
  //   },
  //   tokenSymbol: 'CANDY',
  //   tokenAddresses: {
  //     97: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
  //     56: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  
]

export default farms
