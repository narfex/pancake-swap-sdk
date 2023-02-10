import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETH = 1,
  MAINNET = 56,
  TESTNET = 97,
  POLYGON = 137,
  ARBITRUM = 42161,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.ETH]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.POLYGON]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.ARBITRUM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
}

export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

export const INIT_CODE_HASH_MAP = {
  [ChainId.ETH]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.POLYGON]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ARBITRUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
