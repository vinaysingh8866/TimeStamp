
# Media TimeStamp

Blockchain can help resolve copyright by saving a timestamp of file through a smart contract.
This repo contains smart contract for storing hash data on evm based blockchain.

## Setup

Install modules with yarn/npm

```bash
  cd MediaTimeStamp
  yarn install
```
Create new .env file based on .env.example

Add private key and rpc url of the networks
## Running Tests

To run tests, run the following command

```bash
  yarn hardhat test
```

To test coverage of test, run the following command

```bash
  yarn hardhat coverage
```

## Deployment

To deploy this smart contract run

```bash
  yarn hardhat run scripts/deploy.ts --network <network name>
```

The config just supports ropsten and rinkeby. If you need more networks add them to hardhat config.




