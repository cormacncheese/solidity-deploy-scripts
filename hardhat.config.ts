require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')

module.exports = {
  solidity: '0.8.6',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // georli: {
    //   url: process.env.NODE_ENDOINT,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    //   gas: 2100000,
    //   gasPrice: 35000000000,
    // },
  },
}
