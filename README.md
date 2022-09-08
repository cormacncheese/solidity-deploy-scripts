Deploy scripts for Solidity contracts on Ethereum using hardhat.

# Upgrade Types

This repo contains X types of deployments:

- [Non-upgradable Deploy](https://hardhat.org/hardhat-runner/docs/guides/deploying)
- [Upgradable Proxy](https://docs.openzeppelin.com/upgrades-plugins/1.x/#proxy-patterns)
- [Upgradable Beacon](https://docs.openzeppelin.com/upgrades-plugins/1.x/#proxy-patterns)

# Installation

Package.json contains everything you need so you just need to run `yarn` but if you want to install everything manually use the following command:

```
yarn add @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle @openzeppelin/contracts @openzeppelin/hardhat-upgrades @types/chai @types/mocha chai ethereum-waffle ethereumjs-tx ethers hardhat ts-node web3 openzeppelin/contracts-upgradeable dotenv typescript
```

# Deploy Scripts

Start local evm environment using hardat:

```
npx hardhat node
```

```
npx hardhat compile
```

## Deploy Non-upgradable Creator

```
npx hardhat run scripts/deploy/non-upgradable-creator.ts --network localhost
```

## Deploy Upgradable Beacon

To use our CreatorFactory.sol and Creator together we'll first deploy Creator.sol as an upgradable beacon. Make sure to substitute `CREATOR_BEACON_ADDRESS` in your env file for your creator beacon address.

```
npx hardhat run scripts/deploy/upgradable-creator-beacon.ts --network localhost
```

## Deploy Upgradable Proxy

Now that we have our upgradable creator beacon we can deploy our on-chain factory

```
npx hardhat run scripts/deploy/upgradable-factory-proxy.ts --network localhost
```

## Deploy Creator Proxy

Now we can deploy a creator proxy using our Factory. Make sure you add the Factory address to your env

```
npx hardhat run scripts/deploy/deploy-creator-beacon-proxy.ts --network localhost
```

## Fetching Creator Id

Let's fetch the creator id from our creator proxy to make sure everything deployed ok.

```
npx hardhat run scripts/deploy/deploy-info.ts --network localhost
```

# Upgrade Scripts

## Upgrading Creator Beacon

```
npx hardhat run scripts/upgrade/upgrade-creator-beacon.ts
```

## Upgradin Creator Beacon

```
npx hardhat run scripts/upgrade/upgrade-factory-proxy.ts
```
