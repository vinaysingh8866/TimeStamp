import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { injected } from "../../connectors";
import useContract from "../../hooks/useContract";
import useENSName from "../../hooks/useENSName";
import useMetaMaskOnboarding from "../../hooks/useMetaMaskOnboarding";
import React from "react";
const abi = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "stampHash",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "nameHash",
				"type": "bytes32"
			}
		],
		"name": "insertTimeStamp",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "data",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalStamps",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "fileNameHashes",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "fileOwners",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getNewStamps",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "hash",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct TimeStampHash.Hash[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "stampHash",
				"type": "bytes32"
			}
		],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "nameHash",
				"type": "bytes32"
			}
		],
		"name": "getTimeStampByNameHash",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "hash",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct TimeStampHash.Hash",
				"name": "stampHash",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

type AccountProps = {
  triedToEagerConnect: boolean;
};

type TransactionData = {
    fileNameHash:string,
    dataHash:String
};

const PutHash = ({ triedToEagerConnect, data }:any) => {

  const { active, error, activate, chainId, account, setError } = useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();
  

  async function SendData(){
    console.log(data)
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner();
    
    const contract = new ethers.Contract(
        "0xBfE9f09743aE9476Fee480cA9dDd6f9e34b58bB2",
        abi,
        signer
    );
    const tx = await contract.insertTimeStamp(data.dataHash,data.fileNameHash, {value: ethers.utils.parseEther("0.01")});
    await tx.wait();
    console.log(data.dataHash,data.fileNameHash)
    const check = await contract.getTimeStamp(data.fileNameHash);
    console.log(tx, check)
    //
  }

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account as string);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <button
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
          </button>
        ) : (
          <button onClick={startOnboarding}>Install Metamask</button>
        )}
      </div>
    );
  }

  return (
    <button onClick={SendData}>
        Insert Hash
    </button>
  );
};

export default PutHash;



