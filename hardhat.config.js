/** @type import('hardhat/config').HardhatUserConfig */

// All the key value pairs are being made available due to this lib
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

// Environment variables are being loaded here.
const {
  ETHEREUM_API_URL_KEY,
  POLYGON_API_URL_KEY,
  PRIVATE_KEY
} = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    matic: {
      url: POLYGON_API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
