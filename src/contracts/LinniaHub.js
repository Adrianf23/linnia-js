module.exports = {
  "contractName": "LinniaHub",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "usersContract",
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
      "constant": true,
      "inputs": [],
      "name": "permissionsContract",
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
      "constant": true,
      "inputs": [],
      "name": "recordsContract",
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
      "inputs": [],
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
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LogUsersContractSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LogRecordsContractSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        }
      ],
      "name": "LogPermissionsContractSet",
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
          "name": "_usersContract",
          "type": "address"
        }
      ],
      "name": "setUsersContract",
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
          "name": "_recordsContract",
          "type": "address"
        }
      ],
      "name": "setRecordsContract",
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
          "name": "_permissionsContract",
          "type": "address"
        }
      ],
      "name": "setPermissionsContract",
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
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610c3d806100606000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063142ebf3c146100be578063715018a61461011557806383197ef01461012c5780638da5cb5b14610143578063c60bdc7f1461019a578063cccb7c75146101f5578063d183ce741461024c578063e5e1e62d146102a7578063f2fde38b14610302578063f5074f4114610345578063fc0d561e14610388575b3480156100bb57600080fd5b50005b3480156100ca57600080fd5b506100d36103df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012157600080fd5b5061012a610405565b005b34801561013857600080fd5b50610141610507565b005b34801561014f57600080fd5b5061015861059c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101a657600080fd5b506101db600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105c1565b604051808215151515815260200191505060405180910390f35b34801561020157600080fd5b5061020a610726565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025857600080fd5b5061028d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061074c565b604051808215151515815260200191505060405180910390f35b3480156102b357600080fd5b506102e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108b1565b604051808215151515815260200191505060405180910390f35b34801561030e57600080fd5b50610343600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a16565b005b34801561035157600080fd5b50610386600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7d565b005b34801561039457600080fd5b5061039d610af1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056257600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561061f57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc3834b6a6bc9b4a5538ab1ee44dfee2fb113517bee43239c8a74dda600a2d0488184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107aa57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f1ff0355b14b79d86f4f21bb793eb52594d7042eceb82300fafcf98ac866b53728184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561090f57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f84e234a166a8b8da8cfe867be159e3d188f9c528fc0aca6a2d02edbaed8fcde98184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a7157600080fd5b610a7a81610b17565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ad857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b5357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820671041663bf890c482985d0c4d2c16df9df3c59ff6d16e68bb7bda1a6d93b8340029",
  "deployedBytecode": "0x6080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063142ebf3c146100be578063715018a61461011557806383197ef01461012c5780638da5cb5b14610143578063c60bdc7f1461019a578063cccb7c75146101f5578063d183ce741461024c578063e5e1e62d146102a7578063f2fde38b14610302578063f5074f4114610345578063fc0d561e14610388575b3480156100bb57600080fd5b50005b3480156100ca57600080fd5b506100d36103df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012157600080fd5b5061012a610405565b005b34801561013857600080fd5b50610141610507565b005b34801561014f57600080fd5b5061015861059c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101a657600080fd5b506101db600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105c1565b604051808215151515815260200191505060405180910390f35b34801561020157600080fd5b5061020a610726565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025857600080fd5b5061028d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061074c565b604051808215151515815260200191505060405180910390f35b3480156102b357600080fd5b506102e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108b1565b604051808215151515815260200191505060405180910390f35b34801561030e57600080fd5b50610343600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a16565b005b34801561035157600080fd5b50610386600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7d565b005b34801561039457600080fd5b5061039d610af1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056257600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561061f57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc3834b6a6bc9b4a5538ab1ee44dfee2fb113517bee43239c8a74dda600a2d0488184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107aa57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f1ff0355b14b79d86f4f21bb793eb52594d7042eceb82300fafcf98ac866b53728184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561090f57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f84e234a166a8b8da8cfe867be159e3d188f9c528fc0aca6a2d02edbaed8fcde98184604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a7157600080fd5b610a7a81610b17565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ad857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b5357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820671041663bf890c482985d0c4d2c16df9df3c59ff6d16e68bb7bda1a6d93b8340029",
  "sourceMap": "253:1358:0:-;;;614:24;8:9:-1;5:2;;;30:1;27;20:12;5:2;614:24:0;575:10:8;567:5;;:18;;;;;;;;;;;;;;;;;;253:1358:0;;;;;;",
  "deployedSourceMap": "253:1358:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;253:1358:0;;303:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;303:32:0;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:8;;;;;;366:66:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;366:66:5;;;;;;238:20:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;672:287:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;672:287:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;383:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;383:44:0;;;;;;;;;;;;;;;;;;;;;;;;;;;1274:335;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1274:335:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:303;;8:9:-1;5:2;;;30:1;27;20:12;5:2;965:303:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1100:103:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;436:96:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;436:96:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;341:36:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;341:36:0;;;;;;;;;;;;;;;;;;;;;;;;;;;303:32;;;;;;;;;;;;;:::o;827:111:8:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;366:66:5:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;421:5:5;;;;;;;;;;;408:19;;;238:20:8;;;;;;;;;;;;;:::o;672:287:0:-;778:4;798:12;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;821:13:0;;;;;;;;;;;798:37;;861:14;845:13;;:30;;;;;;;;;;;;;;;;;;890:41;910:4;916:14;890:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;948:4;941:11;;672:287;;;;:::o;383:44::-;;;;;;;;;;;;;:::o;1274:335::-;1398:4;1418:12;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1441:19:0;;;;;;;;;;;1418:43;;1493:20;1471:19;;:42;;;;;;;;;;;;;;;;;;1528:53;1554:4;1560:20;1528:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1598:4;1591:11;;1274:335;;;;:::o;965:303::-;1077:4;1097:12;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1120:15:0;;;;;;;;;;;1097:39;;1164:16;1146:15;;:34;;;;;;;;;;;;;;;;;;1195:45;1217:4;1223:16;1195:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1257:4;1250:11;;965:303;;;;:::o;1100:103:8:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;436:96:5:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;516:10:5;503:24;;;341:36:0;;;;;;;;;;;;;:::o;1338:171:8:-;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o",
  "source": "pragma solidity 0.4.24;\n\n\nimport \"openzeppelin-solidity/contracts/lifecycle/Destructible.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./LinniaUsers.sol\";\nimport \"./LinniaRecords.sol\";\nimport \"./LinniaPermissions.sol\";\n\n\ncontract LinniaHub is Ownable, Destructible {\n    LinniaUsers public usersContract;\n    LinniaRecords public recordsContract;\n    LinniaPermissions public permissionsContract;\n\n    event LogUsersContractSet(address from, address to);\n    event LogRecordsContractSet(address from, address to);\n    event LogPermissionsContractSet(address from, address to);\n\n    constructor() public { }\n\n    function () public { }\n\n    function setUsersContract(LinniaUsers _usersContract)\n        onlyOwner\n        external\n        returns (bool)\n    {\n        address prev = address(usersContract);\n        usersContract = _usersContract;\n        emit LogUsersContractSet(prev, _usersContract);\n        return true;\n    }\n\n    function setRecordsContract(LinniaRecords _recordsContract)\n        onlyOwner\n        external\n        returns (bool)\n    {\n        address prev = address(recordsContract);\n        recordsContract = _recordsContract;\n        emit LogRecordsContractSet(prev, _recordsContract);\n        return true;\n    }\n\n    function setPermissionsContract(LinniaPermissions _permissionsContract)\n        onlyOwner\n        external\n        returns (bool)\n    {\n        address prev = address(permissionsContract);\n        permissionsContract = _permissionsContract;\n        emit LogPermissionsContractSet(prev, _permissionsContract);\n        return true;\n    }\n}\n",
  "sourcePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
  "ast": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
    "exportedSymbols": {
      "LinniaHub": [
        124
      ]
    },
    "id": 125,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 1100,
        "src": "26:68:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 1340,
        "src": "95:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 1009,
        "src": "159:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 857,
        "src": "187:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
        "file": "./LinniaPermissions.sol",
        "id": 6,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 327,
        "src": "217:33:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1339,
              "src": "275:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1339",
                "typeString": "contract Ownable"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "275:7:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "Destructible",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1099,
              "src": "284:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Destructible_$1099",
                "typeString": "contract Destructible"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "284:12:0"
          }
        ],
        "contractDependencies": [
          1099,
          1339
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 124,
        "linearizedBaseContracts": [
          124,
          1099,
          1339
        ],
        "name": "LinniaHub",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 12,
            "name": "usersContract",
            "nodeType": "VariableDeclaration",
            "scope": 124,
            "src": "303:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaUsers_$1008",
              "typeString": "contract LinniaUsers"
            },
            "typeName": {
              "contractScope": null,
              "id": 11,
              "name": "LinniaUsers",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1008,
              "src": "303:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                "typeString": "contract LinniaUsers"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 14,
            "name": "recordsContract",
            "nodeType": "VariableDeclaration",
            "scope": 124,
            "src": "341:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaRecords_$856",
              "typeString": "contract LinniaRecords"
            },
            "typeName": {
              "contractScope": null,
              "id": 13,
              "name": "LinniaRecords",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 856,
              "src": "341:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaRecords_$856",
                "typeString": "contract LinniaRecords"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16,
            "name": "permissionsContract",
            "nodeType": "VariableDeclaration",
            "scope": 124,
            "src": "383:44:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaPermissions_$326",
              "typeString": "contract LinniaPermissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 15,
              "name": "LinniaPermissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 326,
              "src": "383:17:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                "typeString": "contract LinniaPermissions"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 22,
            "name": "LogUsersContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 21,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "460:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "460:7:0",
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
                  "id": 20,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "474:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "474:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "459:26:0"
            },
            "src": "434:52:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 28,
            "name": "LogRecordsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 28,
                  "src": "519:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "519:7:0",
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
                  "id": 26,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 28,
                  "src": "533:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "518:26:0"
            },
            "src": "491:54:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34,
            "name": "LogPermissionsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "582:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:0",
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
                  "id": 32,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "596:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "596:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "581:26:0"
            },
            "src": "550:58:0"
          },
          {
            "body": {
              "id": 37,
              "nodeType": "Block",
              "src": "635:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 38,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "625:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "635:0:0"
            },
            "scope": 124,
            "src": "614:24:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "663:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "653:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "663:0:0"
            },
            "scope": 124,
            "src": "644:22:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 68,
              "nodeType": "Block",
              "src": "788:171:0",
              "statements": [
                {
                  "assignments": [
                    52
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 69,
                      "src": "798:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 51,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "798:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 56,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "821:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "813:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "813:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "798:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 57,
                      "name": "usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "845:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 58,
                      "name": "_usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44,
                      "src": "861:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "src": "845:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "845:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "910:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "_usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "916:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 61,
                      "name": "LogUsersContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "890:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "890:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 65,
                  "nodeType": "EmitStatement",
                  "src": "885:46:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 66,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "948:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 50,
                  "id": 67,
                  "nodeType": "Return",
                  "src": "941:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 69,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 47,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 46,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "734:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "734:9:0"
              }
            ],
            "name": "setUsersContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "name": "_usersContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "698:26:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                    "typeString": "contract LinniaUsers"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 43,
                    "name": "LinniaUsers",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1008,
                    "src": "698:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:28:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "778:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "778:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "777:6:0"
            },
            "scope": 124,
            "src": "672:287:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 95,
              "nodeType": "Block",
              "src": "1087:181:0",
              "statements": [
                {
                  "assignments": [
                    79
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 96,
                      "src": "1097:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 78,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1097:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 83,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1120:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 80,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1112:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 82,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1112:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1097:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 84,
                      "name": "recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1146:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$856",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 85,
                      "name": "_recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71,
                      "src": "1164:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$856",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "src": "1146:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$856",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "1146:34:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 89,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "1217:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "_recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "1223:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 88,
                      "name": "LogRecordsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "1195:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1195:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92,
                  "nodeType": "EmitStatement",
                  "src": "1190:50:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1257:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 77,
                  "id": 94,
                  "nodeType": "Return",
                  "src": "1250:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 96,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 74,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 73,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "1033:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1033:9:0"
              }
            ],
            "name": "setRecordsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 72,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71,
                  "name": "_recordsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "993:30:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaRecords_$856",
                    "typeString": "contract LinniaRecords"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 70,
                    "name": "LinniaRecords",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 856,
                    "src": "993:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$856",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "992:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "1077:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1077:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1076:6:0"
            },
            "scope": 124,
            "src": "965:303:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 122,
              "nodeType": "Block",
              "src": "1408:201:0",
              "statements": [
                {
                  "assignments": [
                    106
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 106,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 123,
                      "src": "1418:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 105,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1418:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 110,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 108,
                        "name": "permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1441:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1433:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1433:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1418:43:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 111,
                      "name": "permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "1471:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 112,
                      "name": "_permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "1493:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "src": "1471:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "id": 114,
                  "nodeType": "ExpressionStatement",
                  "src": "1471:42:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1554:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 117,
                        "name": "_permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 98,
                        "src": "1560:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 115,
                      "name": "LogPermissionsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "1528:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1528:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 119,
                  "nodeType": "EmitStatement",
                  "src": "1523:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1598:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 104,
                  "id": 121,
                  "nodeType": "Return",
                  "src": "1591:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 123,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 101,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 100,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "1354:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1354:9:0"
              }
            ],
            "name": "setPermissionsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 98,
                  "name": "_permissionsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1306:38:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                    "typeString": "contract LinniaPermissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 97,
                    "name": "LinniaPermissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 326,
                    "src": "1306:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1305:40:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 103,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1398:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1398:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1397:6:0"
            },
            "scope": 124,
            "src": "1274:335:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 125,
        "src": "253:1358:0"
      }
    ],
    "src": "0:1612:0"
  },
  "legacyAST": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
    "exportedSymbols": {
      "LinniaHub": [
        124
      ]
    },
    "id": 125,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 1100,
        "src": "26:68:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 1340,
        "src": "95:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
        "file": "./LinniaUsers.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 1009,
        "src": "159:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaRecords.sol",
        "file": "./LinniaRecords.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 857,
        "src": "187:29:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaPermissions.sol",
        "file": "./LinniaPermissions.sol",
        "id": 6,
        "nodeType": "ImportDirective",
        "scope": 125,
        "sourceUnit": 327,
        "src": "217:33:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1339,
              "src": "275:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1339",
                "typeString": "contract Ownable"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "275:7:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "Destructible",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1099,
              "src": "284:12:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Destructible_$1099",
                "typeString": "contract Destructible"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "284:12:0"
          }
        ],
        "contractDependencies": [
          1099,
          1339
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 124,
        "linearizedBaseContracts": [
          124,
          1099,
          1339
        ],
        "name": "LinniaHub",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 12,
            "name": "usersContract",
            "nodeType": "VariableDeclaration",
            "scope": 124,
            "src": "303:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaUsers_$1008",
              "typeString": "contract LinniaUsers"
            },
            "typeName": {
              "contractScope": null,
              "id": 11,
              "name": "LinniaUsers",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1008,
              "src": "303:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                "typeString": "contract LinniaUsers"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 14,
            "name": "recordsContract",
            "nodeType": "VariableDeclaration",
            "scope": 124,
            "src": "341:36:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaRecords_$856",
              "typeString": "contract LinniaRecords"
            },
            "typeName": {
              "contractScope": null,
              "id": 13,
              "name": "LinniaRecords",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 856,
              "src": "341:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaRecords_$856",
                "typeString": "contract LinniaRecords"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16,
            "name": "permissionsContract",
            "nodeType": "VariableDeclaration",
            "scope": 124,
            "src": "383:44:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaPermissions_$326",
              "typeString": "contract LinniaPermissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 15,
              "name": "LinniaPermissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 326,
              "src": "383:17:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                "typeString": "contract LinniaPermissions"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 22,
            "name": "LogUsersContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 21,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "460:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "460:7:0",
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
                  "id": 20,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 22,
                  "src": "474:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "474:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "459:26:0"
            },
            "src": "434:52:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 28,
            "name": "LogRecordsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 28,
                  "src": "519:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "519:7:0",
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
                  "id": 26,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 28,
                  "src": "533:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "518:26:0"
            },
            "src": "491:54:0"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34,
            "name": "LogPermissionsContractSet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "indexed": false,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "582:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:0",
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
                  "id": 32,
                  "indexed": false,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34,
                  "src": "596:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "596:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "581:26:0"
            },
            "src": "550:58:0"
          },
          {
            "body": {
              "id": 37,
              "nodeType": "Block",
              "src": "635:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 38,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "625:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "635:0:0"
            },
            "scope": 124,
            "src": "614:24:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "663:3:0",
              "statements": []
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "653:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "663:0:0"
            },
            "scope": 124,
            "src": "644:22:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 68,
              "nodeType": "Block",
              "src": "788:171:0",
              "statements": [
                {
                  "assignments": [
                    52
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 52,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 69,
                      "src": "798:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 51,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "798:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 56,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "821:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "813:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "813:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "798:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 57,
                      "name": "usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "845:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 58,
                      "name": "_usersContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44,
                      "src": "861:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                        "typeString": "contract LinniaUsers"
                      }
                    },
                    "src": "845:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "845:30:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "910:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "_usersContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "916:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                          "typeString": "contract LinniaUsers"
                        }
                      ],
                      "id": 61,
                      "name": "LogUsersContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "890:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "890:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 65,
                  "nodeType": "EmitStatement",
                  "src": "885:46:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 66,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "948:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 50,
                  "id": 67,
                  "nodeType": "Return",
                  "src": "941:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 69,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 47,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 46,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "734:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "734:9:0"
              }
            ],
            "name": "setUsersContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "name": "_usersContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "698:26:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                    "typeString": "contract LinniaUsers"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 43,
                    "name": "LinniaUsers",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1008,
                    "src": "698:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaUsers_$1008",
                      "typeString": "contract LinniaUsers"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:28:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "778:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "778:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "777:6:0"
            },
            "scope": 124,
            "src": "672:287:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 95,
              "nodeType": "Block",
              "src": "1087:181:0",
              "statements": [
                {
                  "assignments": [
                    79
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 79,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 96,
                      "src": "1097:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 78,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1097:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 83,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1120:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 80,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1112:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 82,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1112:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1097:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 84,
                      "name": "recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1146:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$856",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 85,
                      "name": "_recordsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 71,
                      "src": "1164:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaRecords_$856",
                        "typeString": "contract LinniaRecords"
                      }
                    },
                    "src": "1146:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$856",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "1146:34:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 89,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "1217:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "_recordsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "1223:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaRecords_$856",
                          "typeString": "contract LinniaRecords"
                        }
                      ],
                      "id": 88,
                      "name": "LogRecordsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "1195:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1195:45:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92,
                  "nodeType": "EmitStatement",
                  "src": "1190:50:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1257:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 77,
                  "id": 94,
                  "nodeType": "Return",
                  "src": "1250:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 96,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 74,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 73,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "1033:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1033:9:0"
              }
            ],
            "name": "setRecordsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 72,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71,
                  "name": "_recordsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "993:30:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaRecords_$856",
                    "typeString": "contract LinniaRecords"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 70,
                    "name": "LinniaRecords",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 856,
                    "src": "993:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaRecords_$856",
                      "typeString": "contract LinniaRecords"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "992:32:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "1077:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1077:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1076:6:0"
            },
            "scope": 124,
            "src": "965:303:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 122,
              "nodeType": "Block",
              "src": "1408:201:0",
              "statements": [
                {
                  "assignments": [
                    106
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 106,
                      "name": "prev",
                      "nodeType": "VariableDeclaration",
                      "scope": 123,
                      "src": "1418:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 105,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1418:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 110,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 108,
                        "name": "permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1441:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1433:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1433:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1418:43:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 111,
                      "name": "permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "1471:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 112,
                      "name": "_permissionsContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "1493:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                        "typeString": "contract LinniaPermissions"
                      }
                    },
                    "src": "1471:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "id": 114,
                  "nodeType": "ExpressionStatement",
                  "src": "1471:42:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "prev",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1554:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 117,
                        "name": "_permissionsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 98,
                        "src": "1560:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                          "typeString": "contract LinniaPermissions"
                        }
                      ],
                      "id": 115,
                      "name": "LogPermissionsContractSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "1528:25:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1528:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 119,
                  "nodeType": "EmitStatement",
                  "src": "1523:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1598:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 104,
                  "id": 121,
                  "nodeType": "Return",
                  "src": "1591:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 123,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 101,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 100,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "1354:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1354:9:0"
              }
            ],
            "name": "setPermissionsContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 98,
                  "name": "_permissionsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1306:38:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                    "typeString": "contract LinniaPermissions"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 97,
                    "name": "LinniaPermissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 326,
                    "src": "1306:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaPermissions_$326",
                      "typeString": "contract LinniaPermissions"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1305:40:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 103,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 123,
                  "src": "1398:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1398:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1397:6:0"
            },
            "scope": 124,
            "src": "1274:335:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 125,
        "src": "253:1358:0"
      }
    ],
    "src": "0:1612:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {
        "0xc3834b6a6bc9b4a5538ab1ee44dfee2fb113517bee43239c8a74dda600a2d048": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            }
          ],
          "name": "LogUsersContractSet",
          "type": "event"
        },
        "0x84e234a166a8b8da8cfe867be159e3d188f9c528fc0aca6a2d02edbaed8fcde9": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            }
          ],
          "name": "LogRecordsContractSet",
          "type": "event"
        },
        "0x1ff0355b14b79d86f4f21bb793eb52594d7042eceb82300fafcf98ac866b5372": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            }
          ],
          "name": "LogPermissionsContractSet",
          "type": "event"
        },
        "0xf8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c64820": {
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
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        }
      },
      "links": {},
      "address": "0xc39f2e4645de2550ee3b64e6dc47f927e8a98934",
      "transactionHash": "0xe05842a198afc3c28c241e92845b3407c4d2430ccf8413a73f276def1a66198a"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-25T22:30:05.683Z"
}
