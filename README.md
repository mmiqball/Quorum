# DeFi on Polygon

## About This Project

This project is a decentralized finance (DeFi) application built on the Polygon network. It demonstrates various DeFi concepts and integrates with Polygon's infrastructure.

## Disclosure

This project was based on blockchain-development guides and tutorials on pointer.gg, which has since shut down.

## Features

- Integration with Polygon network
- Smart contract development using Solidity
- Front-end built with Next.js and Chakra UI
- Web3 connectivity using ethers.js and wagmi
- Automated Market Maker (AMM) functionality
- ERC20 token implementation

## Project Structure

- `Front-end/`: Next.js application for the user interface
- `Hardhat/`: Smart contract development and testing environment

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   cd Front-end && npm install
   cd ../Hardhat && npm install
   ```
3. Start the development server:
   ```
   cd Front-end && npm run dev
   ```
4. Compile and deploy smart contracts:
   ```
   cd Hardhat && npx hardhat compile
   npx hardhat run scripts/deploy.ts
   ```

## Testing

Run the test suite for smart contracts:
```
cd Hardhat && npx hardhat test
```

