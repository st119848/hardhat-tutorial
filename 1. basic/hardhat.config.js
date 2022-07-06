require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_API_KEY = "LBhCTZL8hKcHR6s9eXa2CWbcv4Qas5zd";

const GOERLI_PRIVATE_KEY = "dcbd576c521a9d9e22d96e1177c399c173828a8de8f3e28d1f60a199a6fb39ac";

module.exports = {
  solidity: "0.7.3",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};