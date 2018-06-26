module.exports = {
  "contractName": "LinniaPermissions",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "hub",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "permissions",
      "outputs": [
        {
          "name": "canAccess",
          "type": "bool"
        },
        {
          "name": "dataUri",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "destroyAndSend",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_hub",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "viewer",
          "type": "address"
        }
      ],
      "name": "LogAccessGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "viewer",
          "type": "address"
        }
      ],
      "name": "LogAccessRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "name": "viewer",
          "type": "address"
        },
        {
          "name": "dataUri",
          "type": "string"
        }
      ],
      "name": "grantAccess",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "name": "viewer",
          "type": "address"
        }
      ],
      "name": "revokeAccess",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260008060146101000a81548160ff02191690831515021790555034801561002a57600080fd5b5060405160208061169283398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506115b4806100de6000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630e169119146100c9578063365a86fc1461014a5780633ec50c6c146101a15780633f4ba83a146102765780635c975abb1461028d578063715018a6146102bc57806383197ef0146102d35780638456cb59146102ea5780638d53b208146103015780638da5cb5b1461036a578063f2fde38b146103c1578063f5074f4114610404575b3480156100c657600080fd5b50005b3480156100d557600080fd5b506101306004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001919091929391929390505050610447565b604051808215151515815260200191505060405180910390f35b34801561015657600080fd5b5061015f6109b5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ad57600080fd5b506101f06004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109db565b604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561023a57808201518184015260208101905061021f565b50505050905090810190601f1680156102675780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561028257600080fd5b5061028b610ab1565b005b34801561029957600080fd5b506102a2610b6f565b604051808215151515815260200191505060405180910390f35b3480156102c857600080fd5b506102d1610b82565b005b3480156102df57600080fd5b506102e8610c84565b005b3480156102f657600080fd5b506102ff610d19565b005b34801561030d57600080fd5b506103506004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dd9565b604051808215151515815260200191505060405180910390f35b34801561037657600080fd5b5061037f6112e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103cd57600080fd5b50610402600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061130e565b005b34801561041057600080fd5b50610445600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611375565b005b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156104d357600080fd5b505af11580156104e7573d6000803e3d6000fd5b505050506040513d60208110156104fd57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156105a857600080fd5b505af11580156105bc573d6000803e3d6000fd5b505050506040513d60208110156105d257600080fd5b810190808051906020019092919050505015151415156105f157600080fd5b843373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561068f57600080fd5b505af11580156106a3573d6000803e3d6000fd5b505050506040513d60208110156106b957600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561074057600080fd5b505af1158015610754573d6000803e3d6000fd5b505050506040513d602081101561076a57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561079d57600080fd5b600060149054906101000a900460ff161515156107b957600080fd5b60008573ffffffffffffffffffffffffffffffffffffffff16141515156107df57600080fd5b600084849050141515156107f257600080fd5b60026000876000191660001916815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615151561086757600080fd5b604080519081016040528060011515815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505081525060026000886000191660001916815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160010190805190602001906109459291906114e3565b509050508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f40960a1518de48ffd63acad2cfab21213a0d1ebe9ba174d1634bb707bc83f36160405160405180910390a46001915050949350505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900460ff1690806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610aa75780601f10610a7c57610100808354040283529160200191610aa7565b820191906000526020600020905b815481529060010190602001808311610a8a57829003601f168201915b5050505050905082565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b0c57600080fd5b600060149054906101000a900460ff161515610b2757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bdd57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cdf57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7457600080fd5b600060149054906101000a900460ff16151515610d9057600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610e6557600080fd5b505af1158015610e79573d6000803e3d6000fd5b505050506040513d6020811015610e8f57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610f3a57600080fd5b505af1158015610f4e573d6000803e3d6000fd5b505050506040513d6020811015610f6457600080fd5b81019080805190602001909291905050501515141515610f8357600080fd5b823373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561102157600080fd5b505af1158015611035573d6000803e3d6000fd5b505050506040513d602081101561104b57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156110d257600080fd5b505af11580156110e6573d6000803e3d6000fd5b505050506040513d60208110156110fc57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561112f57600080fd5b600060149054906101000a900460ff1615151561114b57600080fd5b60026000856000191660001916815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615156111bf57600080fd5b6040805190810160405280600015158152602001602060405190810160405280600081525081525060026000866000191660001916815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101908051906020019061127b9291906114e3565b509050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1685600019167f165bd0f65a8350ab50ef57539ea72ed108cc257c066b2589df2d96c10e957b4f60405160405180910390a4600191505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561136957600080fd5b611372816113e9565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561142557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061152457805160ff1916838001178555611552565b82800160010185558215611552579182015b82811115611551578251825591602001919060010190611536565b5b50905061155f9190611563565b5090565b61158591905b80821115611581576000816000905550600101611569565b5090565b905600a165627a7a723058201f37fae917949a83503bd26bca51b99ecaddb1946c3158e6686529a58088c2480029",
  "deployedBytecode": "0x6080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630e169119146100c9578063365a86fc1461014a5780633ec50c6c146101a15780633f4ba83a146102765780635c975abb1461028d578063715018a6146102bc57806383197ef0146102d35780638456cb59146102ea5780638d53b208146103015780638da5cb5b1461036a578063f2fde38b146103c1578063f5074f4114610404575b3480156100c657600080fd5b50005b3480156100d557600080fd5b506101306004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001919091929391929390505050610447565b604051808215151515815260200191505060405180910390f35b34801561015657600080fd5b5061015f6109b5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ad57600080fd5b506101f06004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109db565b604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561023a57808201518184015260208101905061021f565b50505050905090810190601f1680156102675780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561028257600080fd5b5061028b610ab1565b005b34801561029957600080fd5b506102a2610b6f565b604051808215151515815260200191505060405180910390f35b3480156102c857600080fd5b506102d1610b82565b005b3480156102df57600080fd5b506102e8610c84565b005b3480156102f657600080fd5b506102ff610d19565b005b34801561030d57600080fd5b506103506004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dd9565b604051808215151515815260200191505060405180910390f35b34801561037657600080fd5b5061037f6112e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103cd57600080fd5b50610402600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061130e565b005b34801561041057600080fd5b50610445600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611375565b005b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156104d357600080fd5b505af11580156104e7573d6000803e3d6000fd5b505050506040513d60208110156104fd57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156105a857600080fd5b505af11580156105bc573d6000803e3d6000fd5b505050506040513d60208110156105d257600080fd5b810190808051906020019092919050505015151415156105f157600080fd5b843373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561068f57600080fd5b505af11580156106a3573d6000803e3d6000fd5b505050506040513d60208110156106b957600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561074057600080fd5b505af1158015610754573d6000803e3d6000fd5b505050506040513d602081101561076a57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561079d57600080fd5b600060149054906101000a900460ff161515156107b957600080fd5b60008573ffffffffffffffffffffffffffffffffffffffff16141515156107df57600080fd5b600084849050141515156107f257600080fd5b60026000876000191660001916815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615151561086757600080fd5b604080519081016040528060011515815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505081525060026000886000191660001916815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160010190805190602001906109459291906114e3565b509050508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f40960a1518de48ffd63acad2cfab21213a0d1ebe9ba174d1634bb707bc83f36160405160405180910390a46001915050949350505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900460ff1690806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610aa75780601f10610a7c57610100808354040283529160200191610aa7565b820191906000526020600020905b815481529060010190602001808311610a8a57829003601f168201915b5050505050905082565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b0c57600080fd5b600060149054906101000a900460ff161515610b2757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bdd57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cdf57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7457600080fd5b600060149054906101000a900460ff16151515610d9057600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600060011515600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663142ebf3c6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015610e6557600080fd5b505af1158015610e79573d6000803e3d6000fd5b505050506040513d6020811015610e8f57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16634209fff1336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610f3a57600080fd5b505af1158015610f4e573d6000803e3d6000fd5b505050506040513d6020811015610f6457600080fd5b81019080805190602001909291905050501515141515610f8357600080fd5b823373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc0d561e6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561102157600080fd5b505af1158015611035573d6000803e3d6000fd5b505050506040513d602081101561104b57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff166336880b82836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156110d257600080fd5b505af11580156110e6573d6000803e3d6000fd5b505050506040513d60208110156110fc57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561112f57600080fd5b600060149054906101000a900460ff1615151561114b57600080fd5b60026000856000191660001916815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615156111bf57600080fd5b6040805190810160405280600015158152602001602060405190810160405280600081525081525060026000866000191660001916815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101908051906020019061127b9291906114e3565b509050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1685600019167f165bd0f65a8350ab50ef57539ea72ed108cc257c066b2589df2d96c10e957b4f60405160405180910390a4600191505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561136957600080fd5b611372816113e9565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113d057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561142557600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061152457805160ff1916838001178555611552565b82800160010185558215611552579182015b82811115611551578251825591602001919060010190611536565b5b50905061155f9190611563565b5090565b61158591905b80821115611581576000816000905550600101611569565b5090565b905600a165627a7a723058201f37fae917949a83503bd26bca51b99ecaddb1946c3158e6686529a58088c2480029",
  "sourceMap": "310:2674:1:-;;;268:5:6;247:26;;;;;;;;;;;;;;;;;;;;1192:62:1;8:9:-1;5:2;;;30:1;27;20:12;5:2;1192:62:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;575:10:8;567:5;;:18;;;;;;;;;;;;;;;;;;1243:4:1;1237:3;;:10;;;;;;;;;;;;;;;;;;1192:62;310:2674;;;;;;",
  "deployedSourceMap": "310:2674:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;310:2674:1;;1621:616;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1621:616:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;744:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;744:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;818:69;;8:9:-1;5:2;;;30:1;27;20:12;5:2;818:69:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;818:69:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;838:92:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;838:92:6;;;;;;247:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:26:6;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:8;;;;;;366:66:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;366:66:5;;;;;;666:90:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;666:90:6;;;;;;2493:489:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2493:489:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;1100:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;436:96:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;436:96:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;1621:616:1;1801:4;994;952:46;;:3;;;;;;;;;;;:17;;;:19;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;952:19:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;952:19:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;952:19:1;;;;;;;;;;;;;;;;:26;;;979:10;952:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;952:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;952:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;952:38:1;;;;;;;;;;;;;;;;:46;;;944:55;;;;;;;;1735:8;1135:10;1086:59;;:3;;;;;;;;;;;:19;;;:21;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1086:21:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1086:21:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1086:21:1;;;;;;;;;;;;;;;;:35;;;1122:8;1086:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1086:45:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1086:45:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1086:45:1;;;;;;;;;;;;;;;;:59;;;1078:68;;;;;;;;416:6:6;;;;;;;;;;;415:7;407:16;;;;;;;;1865:1:1;1855:6;:11;;;;1847:20;;;;;;;;1910:1;1891:7;;1885:21;;:26;;1877:35;;;;;;;;1985:11;:21;1997:8;1985:21;;;;;;;;;;;;;;;;;:29;2007:6;1985:29;;;;;;;;;;;;;;;:39;;;;;;;;;;;;1984:40;1976:49;;;;;;;;2067:81;;;;;;;;;2103:4;2067:81;;;;;;2130:7;;2067:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2035:11;:21;2047:8;2035:21;;;;;;;;;;;;;;;;;:29;2057:6;2035:29;;;;;;;;;;;;;;;:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;2202:6;2163:46;;2190:10;2163:46;;2180:8;2163:46;;;;;;;;;;;;;2226:4;2219:11;;1009:1;1621:616;;;;;;:::o;744:20::-;;;;;;;;;;;;;:::o;818:69::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;838:92:6:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;568:6:6;;;;;;;;;;;560:15;;;;;;;;900:5;891:6;;:14;;;;;;;;;;;;;;;;;;916:9;;;;;;;;;;838:92::o;247:26::-;;;;;;;;;;;;;:::o;827:111:8:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;366:66:5:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;421:5:5;;;;;;;;;;;408:19;;;666:90:6;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;416:6:6;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;744:7;;;;;;;;;;666:90::o;2493:489:1:-;2658:4;994;952:46;;:3;;;;;;;;;;;:17;;;:19;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;952:19:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;952:19:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;952:19:1;;;;;;;;;;;;;;;;:26;;;979:10;952:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;952:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;952:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;952:38:1;;;;;;;;;;;;;;;;:46;;;944:55;;;;;;;;2592:8;1135:10;1086:59;;:3;;;;;;;;;;;:19;;;:21;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1086:21:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1086:21:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1086:21:1;;;;;;;;;;;;;;;;:35;;;1122:8;1086:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1086:45:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1086:45:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1086:45:1;;;;;;;;;;;;;;;;:59;;;1078:68;;;;;;;;416:6:6;;;;;;;;;;;415:7;407:16;;;;;;;;2734:11:1;:21;2746:8;2734:21;;;;;;;;;;;;;;;;;:29;2756:6;2734:29;;;;;;;;;;;;;;;:39;;;;;;;;;;;;2726:48;;;;;;;;2816:77;;;;;;;;;2852:5;2816:77;;;;;;;;;;;;;;;;;;;;;;2784:11;:21;2796:8;2784:21;;;;;;;;;;;;;;;;;:29;2806:6;2784:29;;;;;;;;;;;;;;;:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;2947:6;2908:46;;2935:10;2908:46;;2925:8;2908:46;;;;;;;;;;;;;2971:4;2964:11;;1009:1;2493:489;;;;:::o;238:20:8:-;;;;;;;;;;;;;:::o;1100:103::-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;436:96:5:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;516:10:5;503:24;;;1338:171:8;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o;310:2674:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"openzeppelin-solidity/contracts/lifecycle/Destructible.sol\";\nimport \"openzeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\nimport \"./LinniaHub.sol\";\nimport \"./LinniaRecords.sol\";\nimport \"./LinniaUsers.sol\";\n\n\ncontract LinniaPermissions is Ownable, Pausable, Destructible {\n    struct Permission {\n        bool canAccess;\n        // ipfs path of the data, encrypted to the viewer\n        string dataUri;\n    }\n\n    event LogAccessGranted(bytes32 indexed dataHash, address indexed owner,\n        address indexed viewer\n    );\n    event LogAccessRevoked(bytes32 indexed dataHash, address indexed owner,\n        address indexed viewer\n    );\n\n    LinniaHub public hub;\n    // dataHash => viewer => permission mapping\n    mapping(bytes32 => mapping(address => Permission)) public permissions;\n\n    /* Modifiers */\n    modifier onlyUser() {\n        require(hub.usersContract().isUser(msg.sender) == true);\n        _;\n    }\n\n    modifier onlyRecordOwnerOf(bytes32 dataHash) {\n        require(hub.recordsContract().recordOwnerOf(dataHash) == msg.sender);\n        _;\n    }\n\n    /* Constructor */\n    constructor(LinniaHub _hub) public {\n        hub = _hub;\n    }\n\n    /* Fallback function */\n    function () public { }\n\n    /* External functions */\n\n    /// Give a viewer access to a linnia record\n    /// Called by owner of the record.\n    /// @param dataHash the data hash of the linnia record\n    /// @param viewer the user being permissioned to view the data\n    /// @param dataUri the ipfs path of the re-encrypted data\n    function grantAccess(bytes32 dataHash, address viewer, string dataUri)\n        onlyUser\n        onlyRecordOwnerOf(dataHash)\n        whenNotPaused\n        external\n        returns (bool)\n    {\n        // validate input\n        require(viewer != 0);\n        require(bytes(dataUri).length != 0);\n\n        // access must not have already been granted\n        require(!permissions[dataHash][viewer].canAccess);\n        permissions[dataHash][viewer] = Permission({\n            canAccess: true,\n            dataUri: dataUri\n        });\n        emit LogAccessGranted(dataHash, msg.sender, viewer);\n        return true;\n    }\n\n    /// Revoke a viewer access to a linnia record\n    /// Note that this does not necessarily remove the file from storage\n    /// @param dataHash the data hash of the linnia record\n    /// @param viewer the user that has permission to view the data\n    function revokeAccess(bytes32 dataHash, address viewer)\n        onlyUser\n        onlyRecordOwnerOf(dataHash)\n        whenNotPaused\n        external\n        returns (bool)\n    {\n        // access must have already been grated\n        require(permissions[dataHash][viewer].canAccess);\n        permissions[dataHash][viewer] = Permission({\n            canAccess: false,\n            dataUri: \"\"\n        });\n        emit LogAccessRevoked(dataHash, msg.sender, viewer);\n        return true;\n    }\n}\n",
  "sourcePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
  "ast": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
    "exportedSymbols": {
      "LinniaPermissions": [
        326
      ]
    },
    "id": 327,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 126,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "id": 127,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1100,
        "src": "25:68:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 128,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1160,
        "src": "94:64:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 129,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1340,
        "src": "159:63:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 130,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 125,
        "src": "224:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 131,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 857,
        "src": "250:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 132,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1009,
        "src": "280:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 133,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1339,
              "src": "340:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1339",
                "typeString": "contract Ownable"
              }
            },
            "id": 134,
            "nodeType": "InheritanceSpecifier",
            "src": "340:7:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 135,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1159,
              "src": "349:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1159",
                "typeString": "contract Pausable"
              }
            },
            "id": 136,
            "nodeType": "InheritanceSpecifier",
            "src": "349:8:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 137,
              "name": "Destructible",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1099,
              "src": "359:12:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Destructible_$1099",
                "typeString": "contract Destructible"
              }
            },
            "id": 138,
            "nodeType": "InheritanceSpecifier",
            "src": "359:12:1"
          }
        ],
        "contractDependencies": [
          1099,
          1159,
          1339
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 326,
        "linearizedBaseContracts": [
          326,
          1099,
          1159,
          1339
        ],
        "name": "LinniaPermissions",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaPermissions.Permission",
            "id": 143,
            "members": [
              {
                "constant": false,
                "id": 140,
                "name": "canAccess",
                "nodeType": "VariableDeclaration",
                "scope": 143,
                "src": "406:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 139,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "406:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 142,
                "name": "dataUri",
                "nodeType": "VariableDeclaration",
                "scope": 143,
                "src": "488:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 141,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "488:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permission",
            "nodeType": "StructDefinition",
            "scope": 326,
            "src": "378:131:1",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 151,
            "name": "LogAccessGranted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "538:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 144,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "538:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 147,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "564:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 146,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 149,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "595:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "595:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "537:86:1"
            },
            "src": "515:109:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 159,
            "name": "LogAccessRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 153,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "652:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 152,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "652:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 155,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "678:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "678:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 157,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "709:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "651:86:1"
            },
            "src": "629:109:1"
          },
          {
            "constant": false,
            "id": 161,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 326,
            "src": "744:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$124",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 160,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 124,
              "src": "744:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaHub_$124",
                "typeString": "contract LinniaHub"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 167,
            "name": "permissions",
            "nodeType": "VariableDeclaration",
            "scope": 326,
            "src": "818:69:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
              "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
            },
            "typeName": {
              "id": 166,
              "keyType": {
                "id": 162,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "826:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "818:50:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
              },
              "valueType": {
                "id": 165,
                "keyType": {
                  "id": 163,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "845:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "837:30:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                  "typeString": "mapping(address => struct LinniaPermissions.Permission)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 164,
                  "name": "Permission",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 143,
                  "src": "856:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permission_$143_storage_ptr",
                    "typeString": "struct LinniaPermissions.Permission"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 182,
              "nodeType": "Block",
              "src": "934:83:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 174,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1354,
                                "src": "979:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 175,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "979:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 170,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 161,
                                  "src": "952:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 171,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "usersContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 12,
                                "src": "952:17:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaUsers_$1008_$",
                                  "typeString": "function () view external returns (contract LinniaUsers)"
                                }
                              },
                              "id": 172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "952:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                                "typeString": "contract LinniaUsers"
                              }
                            },
                            "id": 173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isUser",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 985,
                            "src": "952:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "952:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "994:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "952:46:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 169,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "944:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "944:55:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 180,
                  "nodeType": "ExpressionStatement",
                  "src": "944:55:1"
                },
                {
                  "id": 181,
                  "nodeType": "PlaceholderStatement",
                  "src": "1009:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 183,
            "name": "onlyUser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "931:2:1"
            },
            "src": "914:103:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 200,
              "nodeType": "Block",
              "src": "1068:96:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 192,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1122:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 188,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 161,
                                  "src": "1086:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 189,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "recordsContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14,
                                "src": "1086:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaRecords_$856_$",
                                  "typeString": "function () view external returns (contract LinniaRecords)"
                                }
                              },
                              "id": 190,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1086:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaRecords_$856",
                                "typeString": "contract LinniaRecords"
                              }
                            },
                            "id": 191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "recordOwnerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 659,
                            "src": "1086:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1086:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 194,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1354,
                            "src": "1135:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1135:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1086:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 187,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1078:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 198,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:68:1"
                },
                {
                  "id": 199,
                  "nodeType": "PlaceholderStatement",
                  "src": "1156:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 201,
            "name": "onlyRecordOwnerOf",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 185,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 201,
                  "src": "1050:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 184,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1050:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1049:18:1"
            },
            "src": "1023:141:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 210,
              "nodeType": "Block",
              "src": "1227:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 206,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 161,
                      "src": "1237:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 207,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 203,
                      "src": "1243:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "1237:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 209,
                  "nodeType": "ExpressionStatement",
                  "src": "1237:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 211,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 203,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 211,
                  "src": "1204:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 202,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 124,
                    "src": "1204:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1203:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1227:0:1"
            },
            "scope": 326,
            "src": "1192:62:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 214,
              "nodeType": "Block",
              "src": "1307:3:1",
              "statements": []
            },
            "documentation": null,
            "id": 215,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 212,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1297:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1307:0:1"
            },
            "scope": 326,
            "src": "1288:22:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 278,
              "nodeType": "Block",
              "src": "1811:426:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "viewer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 219,
                          "src": "1855:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1865:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1855:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 233,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1847:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1847:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 238,
                  "nodeType": "ExpressionStatement",
                  "src": "1847:20:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 241,
                                "name": "dataUri",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 221,
                                "src": "1891:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "id": 240,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1885:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": "bytes"
                            },
                            "id": 242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1885:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata",
                              "typeString": "bytes calldata"
                            }
                          },
                          "id": 243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1885:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1910:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1885:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 239,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1877:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1877:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 247,
                  "nodeType": "ExpressionStatement",
                  "src": "1877:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 255,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1984:40:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 249,
                                "name": "permissions",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 167,
                                "src": "1985:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                                  "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                                }
                              },
                              "id": 251,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 250,
                                "name": "dataHash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 217,
                                "src": "1997:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1985:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                                "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                              }
                            },
                            "id": 253,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 252,
                              "name": "viewer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 219,
                              "src": "2007:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1985:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permission_$143_storage",
                              "typeString": "struct LinniaPermissions.Permission storage ref"
                            }
                          },
                          "id": 254,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "canAccess",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 140,
                          "src": "1985:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 248,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1976:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1976:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 257,
                  "nodeType": "ExpressionStatement",
                  "src": "1976:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 258,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "2035:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 261,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 259,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 217,
                          "src": "2047:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2035:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 262,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 260,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "2057:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2035:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 264,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2103:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "dataUri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 221,
                          "src": "2130:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 263,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 143,
                        "src": "2067:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$143_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2067:81:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "2035:113:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$143_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 268,
                  "nodeType": "ExpressionStatement",
                  "src": "2035:113:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 270,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 217,
                        "src": "2180:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 271,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "2190:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2190:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 273,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "2202:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 269,
                      "name": "LogAccessGranted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 151,
                      "src": "2163:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2163:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 275,
                  "nodeType": "EmitStatement",
                  "src": "2158:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2226:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 232,
                  "id": 277,
                  "nodeType": "Return",
                  "src": "2219:11:1"
                }
              ]
            },
            "documentation": "Give a viewer access to a linnia record\n Called by owner of the record.\n @param dataHash the data hash of the linnia record\n @param viewer the user being permissioned to view the data\n @param dataUri the ipfs path of the re-encrypted data",
            "id": 279,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 224,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 223,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 183,
                  "src": "1700:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1700:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 226,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 217,
                    "src": "1735:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 227,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 225,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 201,
                  "src": "1717:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1717:27:1"
              },
              {
                "arguments": null,
                "id": 229,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 228,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1120,
                  "src": "1753:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1753:13:1"
              }
            ],
            "name": "grantAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 217,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1642:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 216,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1642:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 219,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1660:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 218,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1660:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 221,
                  "name": "dataUri",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1676:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1676:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1641:50:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 231,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1801:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 230,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1801:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1800:6:1"
            },
            "scope": 326,
            "src": "1621:616:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 324,
              "nodeType": "Block",
              "src": "2668:314:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 296,
                              "name": "permissions",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 167,
                              "src": "2734:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                              }
                            },
                            "id": 298,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 297,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 281,
                              "src": "2746:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2734:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                              "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                            }
                          },
                          "id": 300,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 299,
                            "name": "viewer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 283,
                            "src": "2756:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2734:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permission_$143_storage",
                            "typeString": "struct LinniaPermissions.Permission storage ref"
                          }
                        },
                        "id": 301,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "canAccess",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 140,
                        "src": "2734:39:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 295,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "2726:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2726:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 303,
                  "nodeType": "ExpressionStatement",
                  "src": "2726:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 304,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "2784:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 307,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 305,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 281,
                          "src": "2796:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2784:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 308,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 306,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "2806:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2784:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2852:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 311,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2880:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 309,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 143,
                        "src": "2816:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$143_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2816:77:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "2784:109:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$143_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 314,
                  "nodeType": "ExpressionStatement",
                  "src": "2784:109:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 316,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 281,
                        "src": "2925:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 317,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "2935:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2935:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 319,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "2947:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 315,
                      "name": "LogAccessRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 159,
                      "src": "2908:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2908:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 321,
                  "nodeType": "EmitStatement",
                  "src": "2903:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2971:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 294,
                  "id": 323,
                  "nodeType": "Return",
                  "src": "2964:11:1"
                }
              ]
            },
            "documentation": "Revoke a viewer access to a linnia record\n Note that this does not necessarily remove the file from storage\n @param dataHash the data hash of the linnia record\n @param viewer the user that has permission to view the data",
            "id": 325,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 286,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 285,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 183,
                  "src": "2557:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2557:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 288,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 281,
                    "src": "2592:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 289,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 287,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 201,
                  "src": "2574:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2574:27:1"
              },
              {
                "arguments": null,
                "id": 291,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 290,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1120,
                  "src": "2610:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2610:13:1"
              }
            ],
            "name": "revokeAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 281,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2515:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 280,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2515:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 283,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2533:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 282,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2533:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2514:34:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 293,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2658:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 292,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2658:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2657:6:1"
            },
            "scope": 326,
            "src": "2493:489:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 327,
        "src": "310:2674:1"
      }
    ],
    "src": "0:2985:1"
  },
  "legacyAST": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
    "exportedSymbols": {
      "LinniaPermissions": [
        326
      ]
    },
    "id": 327,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 126,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "id": 127,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1100,
        "src": "25:68:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 128,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1160,
        "src": "94:64:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 129,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1340,
        "src": "159:63:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 130,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 125,
        "src": "224:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 131,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 857,
        "src": "250:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 132,
        "nodeType": "ImportDirective",
        "scope": 327,
        "sourceUnit": 1009,
        "src": "280:27:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 133,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1339,
              "src": "340:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1339",
                "typeString": "contract Ownable"
              }
            },
            "id": 134,
            "nodeType": "InheritanceSpecifier",
            "src": "340:7:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 135,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1159,
              "src": "349:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1159",
                "typeString": "contract Pausable"
              }
            },
            "id": 136,
            "nodeType": "InheritanceSpecifier",
            "src": "349:8:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 137,
              "name": "Destructible",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1099,
              "src": "359:12:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Destructible_$1099",
                "typeString": "contract Destructible"
              }
            },
            "id": 138,
            "nodeType": "InheritanceSpecifier",
            "src": "359:12:1"
          }
        ],
        "contractDependencies": [
          1099,
          1159,
          1339
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 326,
        "linearizedBaseContracts": [
          326,
          1099,
          1159,
          1339
        ],
        "name": "LinniaPermissions",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaPermissions.Permission",
            "id": 143,
            "members": [
              {
                "constant": false,
                "id": 140,
                "name": "canAccess",
                "nodeType": "VariableDeclaration",
                "scope": 143,
                "src": "406:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 139,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "406:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 142,
                "name": "dataUri",
                "nodeType": "VariableDeclaration",
                "scope": 143,
                "src": "488:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 141,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "488:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permission",
            "nodeType": "StructDefinition",
            "scope": 326,
            "src": "378:131:1",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 151,
            "name": "LogAccessGranted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 145,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "538:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 144,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "538:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 147,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "564:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 146,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 149,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 151,
                  "src": "595:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "595:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "537:86:1"
            },
            "src": "515:109:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 159,
            "name": "LogAccessRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 153,
                  "indexed": true,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "652:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 152,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "652:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 155,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "678:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "678:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 157,
                  "indexed": true,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 159,
                  "src": "709:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "651:86:1"
            },
            "src": "629:109:1"
          },
          {
            "constant": false,
            "id": 161,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 326,
            "src": "744:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$124",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 160,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 124,
              "src": "744:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaHub_$124",
                "typeString": "contract LinniaHub"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 167,
            "name": "permissions",
            "nodeType": "VariableDeclaration",
            "scope": 326,
            "src": "818:69:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
              "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
            },
            "typeName": {
              "id": 166,
              "keyType": {
                "id": 162,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "826:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "818:50:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission))"
              },
              "valueType": {
                "id": 165,
                "keyType": {
                  "id": 163,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "845:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "837:30:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                  "typeString": "mapping(address => struct LinniaPermissions.Permission)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 164,
                  "name": "Permission",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 143,
                  "src": "856:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permission_$143_storage_ptr",
                    "typeString": "struct LinniaPermissions.Permission"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 182,
              "nodeType": "Block",
              "src": "934:83:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 174,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1354,
                                "src": "979:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 175,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "979:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 170,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 161,
                                  "src": "952:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 171,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "usersContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 12,
                                "src": "952:17:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaUsers_$1008_$",
                                  "typeString": "function () view external returns (contract LinniaUsers)"
                                }
                              },
                              "id": 172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "952:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                                "typeString": "contract LinniaUsers"
                              }
                            },
                            "id": 173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "isUser",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 985,
                            "src": "952:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view external returns (bool)"
                            }
                          },
                          "id": 176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "952:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "994:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "952:46:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 169,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "944:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "944:55:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 180,
                  "nodeType": "ExpressionStatement",
                  "src": "944:55:1"
                },
                {
                  "id": 181,
                  "nodeType": "PlaceholderStatement",
                  "src": "1009:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 183,
            "name": "onlyUser",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "931:2:1"
            },
            "src": "914:103:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 200,
              "nodeType": "Block",
              "src": "1068:96:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 196,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 192,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1122:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 188,
                                  "name": "hub",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 161,
                                  "src": "1086:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                                    "typeString": "contract LinniaHub"
                                  }
                                },
                                "id": 189,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "recordsContract",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14,
                                "src": "1086:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$__$returns$_t_contract$_LinniaRecords_$856_$",
                                  "typeString": "function () view external returns (contract LinniaRecords)"
                                }
                              },
                              "id": 190,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1086:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LinniaRecords_$856",
                                "typeString": "contract LinniaRecords"
                              }
                            },
                            "id": 191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "recordOwnerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 659,
                            "src": "1086:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1086:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 194,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1354,
                            "src": "1135:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1135:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1086:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 187,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1078:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 198,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:68:1"
                },
                {
                  "id": 199,
                  "nodeType": "PlaceholderStatement",
                  "src": "1156:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 201,
            "name": "onlyRecordOwnerOf",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 185,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 201,
                  "src": "1050:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 184,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1050:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1049:18:1"
            },
            "src": "1023:141:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 210,
              "nodeType": "Block",
              "src": "1227:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 206,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 161,
                      "src": "1237:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 207,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 203,
                      "src": "1243:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "1237:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 209,
                  "nodeType": "ExpressionStatement",
                  "src": "1237:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 211,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 203,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 211,
                  "src": "1204:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 202,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 124,
                    "src": "1204:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1203:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1227:0:1"
            },
            "scope": 326,
            "src": "1192:62:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 214,
              "nodeType": "Block",
              "src": "1307:3:1",
              "statements": []
            },
            "documentation": null,
            "id": 215,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 212,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1297:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1307:0:1"
            },
            "scope": 326,
            "src": "1288:22:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 278,
              "nodeType": "Block",
              "src": "1811:426:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "viewer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 219,
                          "src": "1855:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1865:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1855:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 233,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1847:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1847:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 238,
                  "nodeType": "ExpressionStatement",
                  "src": "1847:20:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 241,
                                "name": "dataUri",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 221,
                                "src": "1891:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "id": 240,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1885:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": "bytes"
                            },
                            "id": 242,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1885:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata",
                              "typeString": "bytes calldata"
                            }
                          },
                          "id": 243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1885:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1910:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1885:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 239,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1877:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1877:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 247,
                  "nodeType": "ExpressionStatement",
                  "src": "1877:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 255,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1984:40:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 249,
                                "name": "permissions",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 167,
                                "src": "1985:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                                  "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                                }
                              },
                              "id": 251,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 250,
                                "name": "dataHash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 217,
                                "src": "1997:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1985:21:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                                "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                              }
                            },
                            "id": 253,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 252,
                              "name": "viewer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 219,
                              "src": "2007:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1985:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permission_$143_storage",
                              "typeString": "struct LinniaPermissions.Permission storage ref"
                            }
                          },
                          "id": 254,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "canAccess",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 140,
                          "src": "1985:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 248,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1976:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1976:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 257,
                  "nodeType": "ExpressionStatement",
                  "src": "1976:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 258,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "2035:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 261,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 259,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 217,
                          "src": "2047:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2035:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 262,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 260,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "2057:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2035:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 264,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2103:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "id": 265,
                          "name": "dataUri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 221,
                          "src": "2130:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_calldata_ptr",
                            "typeString": "string calldata"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 263,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 143,
                        "src": "2067:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$143_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2067:81:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "2035:113:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$143_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 268,
                  "nodeType": "ExpressionStatement",
                  "src": "2035:113:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 270,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 217,
                        "src": "2180:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 271,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "2190:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2190:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 273,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "2202:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 269,
                      "name": "LogAccessGranted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 151,
                      "src": "2163:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2163:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 275,
                  "nodeType": "EmitStatement",
                  "src": "2158:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2226:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 232,
                  "id": 277,
                  "nodeType": "Return",
                  "src": "2219:11:1"
                }
              ]
            },
            "documentation": "Give a viewer access to a linnia record\n Called by owner of the record.\n @param dataHash the data hash of the linnia record\n @param viewer the user being permissioned to view the data\n @param dataUri the ipfs path of the re-encrypted data",
            "id": 279,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 224,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 223,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 183,
                  "src": "1700:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1700:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 226,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 217,
                    "src": "1735:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 227,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 225,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 201,
                  "src": "1717:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1717:27:1"
              },
              {
                "arguments": null,
                "id": 229,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 228,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1120,
                  "src": "1753:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1753:13:1"
              }
            ],
            "name": "grantAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 217,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1642:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 216,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1642:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 219,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1660:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 218,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1660:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 221,
                  "name": "dataUri",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1676:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1676:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1641:50:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 231,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "1801:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 230,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1801:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1800:6:1"
            },
            "scope": 326,
            "src": "1621:616:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 324,
              "nodeType": "Block",
              "src": "2668:314:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 296,
                              "name": "permissions",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 167,
                              "src": "2734:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                                "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                              }
                            },
                            "id": 298,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 297,
                              "name": "dataHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 281,
                              "src": "2746:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2734:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                              "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                            }
                          },
                          "id": 300,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 299,
                            "name": "viewer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 283,
                            "src": "2756:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2734:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permission_$143_storage",
                            "typeString": "struct LinniaPermissions.Permission storage ref"
                          }
                        },
                        "id": 301,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "canAccess",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 140,
                        "src": "2734:39:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 295,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "2726:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2726:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 303,
                  "nodeType": "ExpressionStatement",
                  "src": "2726:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 304,
                          "name": "permissions",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 167,
                          "src": "2784:11:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$_$",
                            "typeString": "mapping(bytes32 => mapping(address => struct LinniaPermissions.Permission storage ref))"
                          }
                        },
                        "id": 307,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 305,
                          "name": "dataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 281,
                          "src": "2796:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2784:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Permission_$143_storage_$",
                          "typeString": "mapping(address => struct LinniaPermissions.Permission storage ref)"
                        }
                      },
                      "id": 308,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 306,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "2806:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2784:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_storage",
                        "typeString": "struct LinniaPermissions.Permission storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2852:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 311,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2880:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 309,
                        "name": "Permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 143,
                        "src": "2816:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Permission_$143_storage_ptr_$",
                          "typeString": "type(struct LinniaPermissions.Permission storage pointer)"
                        }
                      },
                      "id": 312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "canAccess",
                        "dataUri"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2816:77:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permission_$143_memory",
                        "typeString": "struct LinniaPermissions.Permission memory"
                      }
                    },
                    "src": "2784:109:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permission_$143_storage",
                      "typeString": "struct LinniaPermissions.Permission storage ref"
                    }
                  },
                  "id": 314,
                  "nodeType": "ExpressionStatement",
                  "src": "2784:109:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 316,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 281,
                        "src": "2925:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 317,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "2935:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2935:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 319,
                        "name": "viewer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "2947:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 315,
                      "name": "LogAccessRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 159,
                      "src": "2908:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address)"
                      }
                    },
                    "id": 320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2908:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 321,
                  "nodeType": "EmitStatement",
                  "src": "2903:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2971:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 294,
                  "id": 323,
                  "nodeType": "Return",
                  "src": "2964:11:1"
                }
              ]
            },
            "documentation": "Revoke a viewer access to a linnia record\n Note that this does not necessarily remove the file from storage\n @param dataHash the data hash of the linnia record\n @param viewer the user that has permission to view the data",
            "id": 325,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 286,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 285,
                  "name": "onlyUser",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 183,
                  "src": "2557:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2557:8:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 288,
                    "name": "dataHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 281,
                    "src": "2592:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  }
                ],
                "id": 289,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 287,
                  "name": "onlyRecordOwnerOf",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 201,
                  "src": "2574:17:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_bytes32_$",
                    "typeString": "modifier (bytes32)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2574:27:1"
              },
              {
                "arguments": null,
                "id": 291,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 290,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1120,
                  "src": "2610:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2610:13:1"
              }
            ],
            "name": "revokeAccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 281,
                  "name": "dataHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2515:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 280,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2515:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 283,
                  "name": "viewer",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2533:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 282,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2533:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2514:34:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 293,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2658:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 292,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2658:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2657:6:1"
            },
            "scope": 326,
            "src": "2493:489:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 327,
        "src": "310:2674:1"
      }
    ],
    "src": "0:2985:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x7117ad50414ee65371674dcf0697da7d64dc5740",
      "transactionHash": "0x2927cc28f83eb229793cca5c41d645f77c99ef17da41822c181cdf17acd82586"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-25T22:30:05.712Z"
}
