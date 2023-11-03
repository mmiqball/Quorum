import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon: {
      url: 'https://convincing-quiet-glitter.matic-testnet.quiknode.pro/b121ba873d86cc10141645a1be0e6360be1cbca0/',
      accounts: process.env.ACCOUNT_KEY ? [process.env.ACCOUNT_KEY] : [],
    },
  },
};

export default config;
