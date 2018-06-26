module.exports = {
  "contractName": "LinniaUsers",
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "name": "exists",
          "type": "bool"
        },
        {
          "name": "registerBlocktime",
          "type": "uint256"
        },
        {
          "name": "provenance",
          "type": "uint256"
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
          "name": "user",
          "type": "address"
        }
      ],
      "name": "LogUserRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "provenance",
          "type": "uint256"
        }
      ],
      "name": "LogProvenanceChanged",
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
      "inputs": [],
      "name": "register",
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
          "name": "user",
          "type": "address"
        },
        {
          "name": "provenance",
          "type": "uint256"
        }
      ],
      "name": "setProvenance",
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
      "constant": true,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        }
      ],
      "name": "isUser",
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
      "constant": true,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        }
      ],
      "name": "provenanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260008060146101000a81548160ff02191690831515021790555034801561002a57600080fd5b50604051602080610dfc83398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610d1e806100de6000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631aa3a008146100df578063365a86fc1461010e5780633f4ba83a146101655780634209fff11461017c5780635c975abb146101d75780636245eb0714610206578063715018a61461026b57806383197ef0146102825780638456cb59146102995780638da5cb5b146102b0578063a87430ba14610307578063dbe3e92f14610370578063f2fde38b146103c7578063f5074f411461040a575b3480156100dc57600080fd5b50005b3480156100eb57600080fd5b506100f461044d565b604051808215151515815260200191505060405180910390f35b34801561011a57600080fd5b5061012361055f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017157600080fd5b5061017a610585565b005b34801561018857600080fd5b506101bd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610643565b604051808215151515815260200191505060405180910390f35b3480156101e357600080fd5b506101ec61069c565b604051808215151515815260200191505060405180910390f35b34801561021257600080fd5b50610251600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106af565b604051808215151515815260200191505060405180910390f35b34801561027757600080fd5b506102806107bf565b005b34801561028e57600080fd5b506102976108c1565b005b3480156102a557600080fd5b506102ae610956565b005b3480156102bc57600080fd5b506102c5610a16565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031357600080fd5b50610348600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a3b565b6040518084151515158152602001838152602001828152602001935050505060405180910390f35b34801561037c57600080fd5b506103b1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a72565b6040518082815260200191505060405180910390f35b3480156103d357600080fd5b50610408600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b1d565b005b34801561041657600080fd5b5061044b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b84565b005b60008060149054906101000a900460ff1615151561046a57600080fd5b61047333610643565b15151561047f57600080fd5b6060604051908101604052806001151581526020014381526020016000815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff167fa28576aa71409e890d90a3b4642d4d95b7f26dc5b969e9b915067e531b73938d60405160405180910390a26001905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105e057600080fd5b600060149054906101000a900460ff1615156105fb57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b600060149054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561070c57600080fd5b61071583610643565b151561072057600080fd5b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055508273ffffffffffffffffffffffffffffffffffffffff167f15ec838ecd3ec76b628a80f7595d162531520204b63c00267d4295ccc6de5e5c836040518082815260200191505060405180910390a26001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561081a57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561091c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109b157600080fd5b600060149054906101000a900460ff161515156109cd57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615610b1357600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549050610b18565b600090505b919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b7857600080fd5b610b8181610bf8565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bdf57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c3457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058208c1782c83a0bc600a96d7964869ab8d56a150b4cb0c4c761f05d055bc4c00b600029",
  "deployedBytecode": "0x6080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631aa3a008146100df578063365a86fc1461010e5780633f4ba83a146101655780634209fff11461017c5780635c975abb146101d75780636245eb0714610206578063715018a61461026b57806383197ef0146102825780638456cb59146102995780638da5cb5b146102b0578063a87430ba14610307578063dbe3e92f14610370578063f2fde38b146103c7578063f5074f411461040a575b3480156100dc57600080fd5b50005b3480156100eb57600080fd5b506100f461044d565b604051808215151515815260200191505060405180910390f35b34801561011a57600080fd5b5061012361055f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017157600080fd5b5061017a610585565b005b34801561018857600080fd5b506101bd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610643565b604051808215151515815260200191505060405180910390f35b3480156101e357600080fd5b506101ec61069c565b604051808215151515815260200191505060405180910390f35b34801561021257600080fd5b50610251600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106af565b604051808215151515815260200191505060405180910390f35b34801561027757600080fd5b506102806107bf565b005b34801561028e57600080fd5b506102976108c1565b005b3480156102a557600080fd5b506102ae610956565b005b3480156102bc57600080fd5b506102c5610a16565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031357600080fd5b50610348600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a3b565b6040518084151515158152602001838152602001828152602001935050505060405180910390f35b34801561037c57600080fd5b506103b1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a72565b6040518082815260200191505060405180910390f35b3480156103d357600080fd5b50610408600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b1d565b005b34801561041657600080fd5b5061044b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b84565b005b60008060149054906101000a900460ff1615151561046a57600080fd5b61047333610643565b15151561047f57600080fd5b6060604051908101604052806001151581526020014381526020016000815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff167fa28576aa71409e890d90a3b4642d4d95b7f26dc5b969e9b915067e531b73938d60405160405180910390a26001905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105e057600080fd5b600060149054906101000a900460ff1615156105fb57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b600060149054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561070c57600080fd5b61071583610643565b151561072057600080fd5b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055508273ffffffffffffffffffffffffffffffffffffffff167f15ec838ecd3ec76b628a80f7595d162531520204b63c00267d4295ccc6de5e5c836040518082815260200191505060405180910390a26001905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561081a57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561091c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109b157600080fd5b600060149054906101000a900460ff161515156109cd57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615610b1357600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201549050610b18565b600090505b919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b7857600080fd5b610b8181610bf8565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bdf57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c3457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058208c1782c83a0bc600a96d7964869ab8d56a150b4cb0c4c761f05d055bc4c00b600029",
  "sourceMap": "251:1649:3:-;;;268:5:6;247:26;;;;;;;;;;;;;;;;;;;;609:62:3;8:9:-1;5:2;;;30:1;27;20:12;5:2;609:62:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;575:10:8;567:5;;:18;;;;;;;;;;;;;;;;;;660:4:3;654:3;;:10;;;;;;;;;;;;;;;;;;609:62;251:1649;;;;;;",
  "deployedSourceMap": "251:1649:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;251:1649:3;;822:340;;8:9:-1;5:2;;;30:1;27;20:12;5:2;822:340:3;;;;;;;;;;;;;;;;;;;;;;;;;;;539:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;539:20:3;;;;;;;;;;;;;;;;;;;;;;;;;;;838:92:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;838:92:6;;;;;;1541:127:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1541:127:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:26:6;;;;;;;;;;;;;;;;;;;;;;;;;;;1234:273:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1234:273:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:8;;;;;;366:66:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;366:66:5;;;;;;666:90:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;666:90:6;;;;;;238:20:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;565:37:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;565:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1674:224;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1674:224:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1100:103:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;436:96:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;436:96:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;822:340:3;898:4;416:6:6;;;;;;;;;;;415:7;407:16;;;;;;;;927:18:3;934:10;927:6;:18::i;:::-;926:19;918:28;;;;;;;;976:114;;;;;;;;;1003:4;976:114;;;;;;1040:12;976:114;;;;1078:1;976:114;;;956:5;:17;962:10;956:17;;;;;;;;;;;;;;;:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1123:10;1105:29;;;;;;;;;;;;1151:4;1144:11;;822:340;:::o;539:20::-;;;;;;;;;;;;;:::o;838:92:6:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;568:6:6;;;;;;;;;;;560:15;;;;;;;;900:5;891:6;;:14;;;;;;;;;;;;;;;;;;916:9;;;;;;;;;;838:92::o;1541:127:3:-;1616:4;1643:5;:11;1649:4;1643:11;;;;;;;;;;;;;;;:18;;;;;;;;;;;;1636:25;;1541:127;;;:::o;247:26:6:-;;;;;;;;;;;;;:::o;1234:273:3:-;1340:4;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1368:12:3;1375:4;1368:6;:12::i;:::-;1360:21;;;;;;;;1416:10;1391:5;:11;1397:4;1391:11;;;;;;;;;;;;;;;:22;;:35;;;;1462:4;1441:38;;;1468:10;1441:38;;;;;;;;;;;;;;;;;;1496:4;1489:11;;1234:273;;;;:::o;827:111:8:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;366:66:5:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;421:5:5;;;;;;;;;;;408:19;;;666:90:6;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;416:6:6;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;744:7;;;;;;;;;;666:90::o;238:20:8:-;;;;;;;;;;;;;:::o;565:37:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1674:224::-;1755:4;1779:5;:11;1785:4;1779:11;;;;;;;;;;;;;;;:18;;;;;;;;;;;;1775:117;;;1820:5;:11;1826:4;1820:11;;;;;;;;;;;;;;;:22;;;1813:29;;;;1775:117;1880:1;1873:8;;1674:224;;;;:::o;1100:103:8:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;436:96:5:-;719:5:8;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;516:10:5;503:24;;;1338:171:8;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"openzeppelin-solidity/contracts/lifecycle/Destructible.sol\";\nimport \"openzeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./LinniaHub.sol\";\n\n\ncontract LinniaUsers is Ownable, Pausable, Destructible {\n    struct User {\n        bool exists;\n        uint registerBlocktime;\n        uint provenance;\n    }\n\n    event LogUserRegistered(address indexed user);\n    event LogProvenanceChanged(address indexed user, uint provenance);\n\n    LinniaHub public hub;\n    mapping(address => User) public users;\n\n    constructor(LinniaHub _hub) public {\n        hub = _hub;\n    }\n\n    /* Fallback function */\n    function () public { }\n\n    /* External functions */\n\n    // register allows any user to self register on Linnia\n    function register()\n        whenNotPaused\n        external\n        returns (bool)\n    {\n        require(!isUser(msg.sender));\n        users[msg.sender] = User({\n            exists: true,\n            registerBlocktime: block.number,\n            provenance: 0\n        });\n        emit LogUserRegistered(msg.sender);\n        return true;\n    }\n\n    // setProvenance allows admin to set the provenance of a user\n    function setProvenance(address user, uint provenance)\n        onlyOwner\n        external\n        returns (bool)\n    {\n        require(isUser(user));\n        users[user].provenance = provenance;\n        emit LogProvenanceChanged(user, provenance);\n        return true;\n    }\n\n    /* Public functions */\n\n    function isUser(address user)\n        public\n        view\n        returns (bool)\n    {\n        return users[user].exists;\n    }\n\n    function provenanceOf(address user)\n        public\n        view\n        returns (uint)\n    {\n        if (users[user].exists) {\n            return users[user].provenance;\n        } else {\n            return 0;\n        }\n    }\n}\n",
  "sourcePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
  "ast": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
    "exportedSymbols": {
      "LinniaUsers": [
        1008
      ]
    },
    "id": 1009,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 858,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:3"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "id": 859,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 1100,
        "src": "25:68:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 860,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 1160,
        "src": "94:64:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 861,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 1340,
        "src": "159:63:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 862,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 125,
        "src": "223:25:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 863,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1339,
              "src": "275:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1339",
                "typeString": "contract Ownable"
              }
            },
            "id": 864,
            "nodeType": "InheritanceSpecifier",
            "src": "275:7:3"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 865,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1159,
              "src": "284:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1159",
                "typeString": "contract Pausable"
              }
            },
            "id": 866,
            "nodeType": "InheritanceSpecifier",
            "src": "284:8:3"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 867,
              "name": "Destructible",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1099,
              "src": "294:12:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Destructible_$1099",
                "typeString": "contract Destructible"
              }
            },
            "id": 868,
            "nodeType": "InheritanceSpecifier",
            "src": "294:12:3"
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
        "id": 1008,
        "linearizedBaseContracts": [
          1008,
          1099,
          1159,
          1339
        ],
        "name": "LinniaUsers",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaUsers.User",
            "id": 875,
            "members": [
              {
                "constant": false,
                "id": 870,
                "name": "exists",
                "nodeType": "VariableDeclaration",
                "scope": 875,
                "src": "335:11:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 869,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "335:4:3",
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
                "id": 872,
                "name": "registerBlocktime",
                "nodeType": "VariableDeclaration",
                "scope": 875,
                "src": "356:22:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 871,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "356:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 874,
                "name": "provenance",
                "nodeType": "VariableDeclaration",
                "scope": 875,
                "src": "388:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 873,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "388:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "User",
            "nodeType": "StructDefinition",
            "scope": 1008,
            "src": "313:97:3",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 879,
            "name": "LogUserRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 877,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 879,
                  "src": "440:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:22:3"
            },
            "src": "416:46:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 885,
            "name": "LogProvenanceChanged",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 881,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 885,
                  "src": "494:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 880,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "494:7:3",
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
                  "id": 883,
                  "indexed": false,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 885,
                  "src": "516:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 882,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "516:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "493:39:3"
            },
            "src": "467:66:3"
          },
          {
            "constant": false,
            "id": 887,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 1008,
            "src": "539:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$124",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 886,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 124,
              "src": "539:9:3",
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
            "id": 891,
            "name": "users",
            "nodeType": "VariableDeclaration",
            "scope": 1008,
            "src": "565:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
              "typeString": "mapping(address => struct LinniaUsers.User)"
            },
            "typeName": {
              "id": 890,
              "keyType": {
                "id": 888,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "573:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "565:24:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                "typeString": "mapping(address => struct LinniaUsers.User)"
              },
              "valueType": {
                "contractScope": null,
                "id": 889,
                "name": "User",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 875,
                "src": "584:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_User_$875_storage_ptr",
                  "typeString": "struct LinniaUsers.User"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 900,
              "nodeType": "Block",
              "src": "644:27:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 896,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 887,
                      "src": "654:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 897,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 893,
                      "src": "660:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "654:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 899,
                  "nodeType": "ExpressionStatement",
                  "src": "654:10:3"
                }
              ]
            },
            "documentation": null,
            "id": 901,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 893,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 901,
                  "src": "621:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 892,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 124,
                    "src": "621:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "620:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 895,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "644:0:3"
            },
            "scope": 1008,
            "src": "609:62:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 904,
              "nodeType": "Block",
              "src": "724:3:3",
              "statements": []
            },
            "documentation": null,
            "id": 905,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 902,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "724:0:3"
            },
            "scope": 1008,
            "src": "705:22:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 939,
              "nodeType": "Block",
              "src": "908:254:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 917,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "926:19:3",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 914,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1354,
                                "src": "934:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 915,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "934:10:3",
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
                            "id": 913,
                            "name": "isUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 985,
                            "src": "927:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 916,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "927:18:3",
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
                      "id": 912,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "918:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "918:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 919,
                  "nodeType": "ExpressionStatement",
                  "src": "918:28:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 920,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "956:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 923,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 921,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "962:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "962:10:3",
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
                      "src": "956:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
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
                          "id": 925,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1003:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 926,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1344,
                            "src": "1040:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 927,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "number",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1040:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1078:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 924,
                        "name": "User",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 875,
                        "src": "976:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_User_$875_storage_ptr_$",
                          "typeString": "type(struct LinniaUsers.User storage pointer)"
                        }
                      },
                      "id": 929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "exists",
                        "registerBlocktime",
                        "provenance"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "976:114:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_memory",
                        "typeString": "struct LinniaUsers.User memory"
                      }
                    },
                    "src": "956:134:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_User_$875_storage",
                      "typeString": "struct LinniaUsers.User storage ref"
                    }
                  },
                  "id": 931,
                  "nodeType": "ExpressionStatement",
                  "src": "956:134:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 933,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "1123:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 934,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1123:10:3",
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
                      "id": 932,
                      "name": "LogUserRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 879,
                      "src": "1105:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1105:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 936,
                  "nodeType": "EmitStatement",
                  "src": "1100:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1151:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 911,
                  "id": 938,
                  "nodeType": "Return",
                  "src": "1144:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 940,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 908,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 907,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1120,
                  "src": "850:13:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "850:13:3"
              }
            ],
            "name": "register",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "839:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 940,
                  "src": "898:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 909,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "898:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "897:6:3"
            },
            "scope": 1008,
            "src": "822:340:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 971,
              "nodeType": "Block",
              "src": "1350:157:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 953,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 942,
                            "src": "1375:4:3",
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
                          "id": 952,
                          "name": "isUser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 985,
                          "src": "1368:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1368:12:3",
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
                      "id": 951,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1360:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1360:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 956,
                  "nodeType": "ExpressionStatement",
                  "src": "1360:21:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 957,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 891,
                          "src": "1391:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                            "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                          }
                        },
                        "id": 959,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 958,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 942,
                          "src": "1397:4:3",
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
                        "src": "1391:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$875_storage",
                          "typeString": "struct LinniaUsers.User storage ref"
                        }
                      },
                      "id": 960,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "provenance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 874,
                      "src": "1391:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 961,
                      "name": "provenance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 944,
                      "src": "1416:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1391:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 963,
                  "nodeType": "ExpressionStatement",
                  "src": "1391:35:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 965,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 942,
                        "src": "1462:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 966,
                        "name": "provenance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 944,
                        "src": "1468:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 964,
                      "name": "LogProvenanceChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 885,
                      "src": "1441:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1441:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 968,
                  "nodeType": "EmitStatement",
                  "src": "1436:43:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1496:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 950,
                  "id": 970,
                  "nodeType": "Return",
                  "src": "1489:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 972,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 947,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 946,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "1296:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1296:9:3"
              }
            ],
            "name": "setProvenance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 942,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 972,
                  "src": "1257:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 941,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1257:7:3",
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
                  "id": 944,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 972,
                  "src": "1271:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 943,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1271:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1256:31:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 949,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 972,
                  "src": "1340:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 948,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1340:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1339:6:3"
            },
            "scope": 1008,
            "src": "1234:273:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 984,
              "nodeType": "Block",
              "src": "1626:42:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 979,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "1643:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 981,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 980,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 974,
                        "src": "1649:4:3",
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
                      "src": "1643:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 982,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 870,
                    "src": "1643:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 978,
                  "id": 983,
                  "nodeType": "Return",
                  "src": "1636:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 985,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 974,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 985,
                  "src": "1557:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1557:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1556:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 977,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 985,
                  "src": "1616:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 976,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1616:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1615:6:3"
            },
            "scope": 1008,
            "src": "1541:127:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1006,
              "nodeType": "Block",
              "src": "1765:133:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 992,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "1779:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 994,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 993,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 987,
                        "src": "1785:4:3",
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
                      "src": "1779:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 995,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 870,
                    "src": "1779:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1004,
                    "nodeType": "Block",
                    "src": "1859:33:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1880:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 991,
                        "id": 1003,
                        "nodeType": "Return",
                        "src": "1873:8:3"
                      }
                    ]
                  },
                  "id": 1005,
                  "nodeType": "IfStatement",
                  "src": "1775:117:3",
                  "trueBody": {
                    "id": 1001,
                    "nodeType": "Block",
                    "src": "1799:54:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 996,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 891,
                              "src": "1820:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                                "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                              }
                            },
                            "id": 998,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 997,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 987,
                              "src": "1826:4:3",
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
                            "src": "1820:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$875_storage",
                              "typeString": "struct LinniaUsers.User storage ref"
                            }
                          },
                          "id": 999,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "provenance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 874,
                          "src": "1820:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 991,
                        "id": 1000,
                        "nodeType": "Return",
                        "src": "1813:29:3"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1007,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "provenanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 987,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 1007,
                  "src": "1696:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 986,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1695:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 990,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1007,
                  "src": "1755:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 989,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1755:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1754:6:3"
            },
            "scope": 1008,
            "src": "1674:224:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1009,
        "src": "251:1649:3"
      }
    ],
    "src": "0:1901:3"
  },
  "legacyAST": {
    "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaUsers.sol",
    "exportedSymbols": {
      "LinniaUsers": [
        1008
      ]
    },
    "id": 1009,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 858,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:3"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Destructible.sol",
        "id": 859,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 1100,
        "src": "25:68:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "openzeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 860,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 1160,
        "src": "94:64:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 861,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 1340,
        "src": "159:63:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/liberty/workspace/linnia/Linnia-Smart-Contracts/contracts/LinniaHub.sol",
        "file": "./LinniaHub.sol",
        "id": 862,
        "nodeType": "ImportDirective",
        "scope": 1009,
        "sourceUnit": 125,
        "src": "223:25:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 863,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1339,
              "src": "275:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1339",
                "typeString": "contract Ownable"
              }
            },
            "id": 864,
            "nodeType": "InheritanceSpecifier",
            "src": "275:7:3"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 865,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1159,
              "src": "284:8:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$1159",
                "typeString": "contract Pausable"
              }
            },
            "id": 866,
            "nodeType": "InheritanceSpecifier",
            "src": "284:8:3"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 867,
              "name": "Destructible",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1099,
              "src": "294:12:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Destructible_$1099",
                "typeString": "contract Destructible"
              }
            },
            "id": 868,
            "nodeType": "InheritanceSpecifier",
            "src": "294:12:3"
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
        "id": 1008,
        "linearizedBaseContracts": [
          1008,
          1099,
          1159,
          1339
        ],
        "name": "LinniaUsers",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "LinniaUsers.User",
            "id": 875,
            "members": [
              {
                "constant": false,
                "id": 870,
                "name": "exists",
                "nodeType": "VariableDeclaration",
                "scope": 875,
                "src": "335:11:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 869,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "335:4:3",
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
                "id": 872,
                "name": "registerBlocktime",
                "nodeType": "VariableDeclaration",
                "scope": 875,
                "src": "356:22:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 871,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "356:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 874,
                "name": "provenance",
                "nodeType": "VariableDeclaration",
                "scope": 875,
                "src": "388:15:3",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 873,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "388:4:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "User",
            "nodeType": "StructDefinition",
            "scope": 1008,
            "src": "313:97:3",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 879,
            "name": "LogUserRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 877,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 879,
                  "src": "440:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:22:3"
            },
            "src": "416:46:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 885,
            "name": "LogProvenanceChanged",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 881,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 885,
                  "src": "494:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 880,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "494:7:3",
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
                  "id": 883,
                  "indexed": false,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 885,
                  "src": "516:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 882,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "516:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "493:39:3"
            },
            "src": "467:66:3"
          },
          {
            "constant": false,
            "id": 887,
            "name": "hub",
            "nodeType": "VariableDeclaration",
            "scope": 1008,
            "src": "539:20:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LinniaHub_$124",
              "typeString": "contract LinniaHub"
            },
            "typeName": {
              "contractScope": null,
              "id": 886,
              "name": "LinniaHub",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 124,
              "src": "539:9:3",
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
            "id": 891,
            "name": "users",
            "nodeType": "VariableDeclaration",
            "scope": 1008,
            "src": "565:37:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
              "typeString": "mapping(address => struct LinniaUsers.User)"
            },
            "typeName": {
              "id": 890,
              "keyType": {
                "id": 888,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "573:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "565:24:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                "typeString": "mapping(address => struct LinniaUsers.User)"
              },
              "valueType": {
                "contractScope": null,
                "id": 889,
                "name": "User",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 875,
                "src": "584:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_User_$875_storage_ptr",
                  "typeString": "struct LinniaUsers.User"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 900,
              "nodeType": "Block",
              "src": "644:27:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 896,
                      "name": "hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 887,
                      "src": "654:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 897,
                      "name": "_hub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 893,
                      "src": "660:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LinniaHub_$124",
                        "typeString": "contract LinniaHub"
                      }
                    },
                    "src": "654:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "id": 899,
                  "nodeType": "ExpressionStatement",
                  "src": "654:10:3"
                }
              ]
            },
            "documentation": null,
            "id": 901,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 893,
                  "name": "_hub",
                  "nodeType": "VariableDeclaration",
                  "scope": 901,
                  "src": "621:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LinniaHub_$124",
                    "typeString": "contract LinniaHub"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 892,
                    "name": "LinniaHub",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 124,
                    "src": "621:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LinniaHub_$124",
                      "typeString": "contract LinniaHub"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "620:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 895,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "644:0:3"
            },
            "scope": 1008,
            "src": "609:62:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 904,
              "nodeType": "Block",
              "src": "724:3:3",
              "statements": []
            },
            "documentation": null,
            "id": 905,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 902,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "714:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "724:0:3"
            },
            "scope": 1008,
            "src": "705:22:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 939,
              "nodeType": "Block",
              "src": "908:254:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 917,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "926:19:3",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 914,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1354,
                                "src": "934:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 915,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "934:10:3",
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
                            "id": 913,
                            "name": "isUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 985,
                            "src": "927:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 916,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "927:18:3",
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
                      "id": 912,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "918:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "918:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 919,
                  "nodeType": "ExpressionStatement",
                  "src": "918:28:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 920,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "956:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 923,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 921,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "962:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "962:10:3",
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
                      "src": "956:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
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
                          "id": 925,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1003:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 926,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1344,
                            "src": "1040:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 927,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "number",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1040:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1078:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 924,
                        "name": "User",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 875,
                        "src": "976:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_User_$875_storage_ptr_$",
                          "typeString": "type(struct LinniaUsers.User storage pointer)"
                        }
                      },
                      "id": 929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "exists",
                        "registerBlocktime",
                        "provenance"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "976:114:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_memory",
                        "typeString": "struct LinniaUsers.User memory"
                      }
                    },
                    "src": "956:134:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_User_$875_storage",
                      "typeString": "struct LinniaUsers.User storage ref"
                    }
                  },
                  "id": 931,
                  "nodeType": "ExpressionStatement",
                  "src": "956:134:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 933,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "1123:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 934,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1123:10:3",
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
                      "id": 932,
                      "name": "LogUserRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 879,
                      "src": "1105:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1105:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 936,
                  "nodeType": "EmitStatement",
                  "src": "1100:34:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1151:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 911,
                  "id": 938,
                  "nodeType": "Return",
                  "src": "1144:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 940,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 908,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 907,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1120,
                  "src": "850:13:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "850:13:3"
              }
            ],
            "name": "register",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "839:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 940,
                  "src": "898:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 909,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "898:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "897:6:3"
            },
            "scope": 1008,
            "src": "822:340:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 971,
              "nodeType": "Block",
              "src": "1350:157:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 953,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 942,
                            "src": "1375:4:3",
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
                          "id": 952,
                          "name": "isUser",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 985,
                          "src": "1368:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 954,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1368:12:3",
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
                      "id": 951,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1357,
                        1358
                      ],
                      "referencedDeclaration": 1357,
                      "src": "1360:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1360:21:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 956,
                  "nodeType": "ExpressionStatement",
                  "src": "1360:21:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 957,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 891,
                          "src": "1391:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                            "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                          }
                        },
                        "id": 959,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 958,
                          "name": "user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 942,
                          "src": "1397:4:3",
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
                        "src": "1391:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$875_storage",
                          "typeString": "struct LinniaUsers.User storage ref"
                        }
                      },
                      "id": 960,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "provenance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 874,
                      "src": "1391:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 961,
                      "name": "provenance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 944,
                      "src": "1416:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1391:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 963,
                  "nodeType": "ExpressionStatement",
                  "src": "1391:35:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 965,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 942,
                        "src": "1462:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 966,
                        "name": "provenance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 944,
                        "src": "1468:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 964,
                      "name": "LogProvenanceChanged",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 885,
                      "src": "1441:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1441:38:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 968,
                  "nodeType": "EmitStatement",
                  "src": "1436:43:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1496:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 950,
                  "id": 970,
                  "nodeType": "Return",
                  "src": "1489:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 972,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 947,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 946,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1287,
                  "src": "1296:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1296:9:3"
              }
            ],
            "name": "setProvenance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 942,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 972,
                  "src": "1257:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 941,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1257:7:3",
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
                  "id": 944,
                  "name": "provenance",
                  "nodeType": "VariableDeclaration",
                  "scope": 972,
                  "src": "1271:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 943,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1271:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1256:31:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 949,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 972,
                  "src": "1340:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 948,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1340:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1339:6:3"
            },
            "scope": 1008,
            "src": "1234:273:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 984,
              "nodeType": "Block",
              "src": "1626:42:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 979,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "1643:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 981,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 980,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 974,
                        "src": "1649:4:3",
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
                      "src": "1643:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 982,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 870,
                    "src": "1643:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 978,
                  "id": 983,
                  "nodeType": "Return",
                  "src": "1636:25:3"
                }
              ]
            },
            "documentation": null,
            "id": 985,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 974,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 985,
                  "src": "1557:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1557:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1556:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 977,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 985,
                  "src": "1616:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 976,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1616:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1615:6:3"
            },
            "scope": 1008,
            "src": "1541:127:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1006,
              "nodeType": "Block",
              "src": "1765:133:3",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 992,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "1779:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                          "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                        }
                      },
                      "id": 994,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 993,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 987,
                        "src": "1785:4:3",
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
                      "src": "1779:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$875_storage",
                        "typeString": "struct LinniaUsers.User storage ref"
                      }
                    },
                    "id": 995,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "exists",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 870,
                    "src": "1779:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1004,
                    "nodeType": "Block",
                    "src": "1859:33:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1880:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 991,
                        "id": 1003,
                        "nodeType": "Return",
                        "src": "1873:8:3"
                      }
                    ]
                  },
                  "id": 1005,
                  "nodeType": "IfStatement",
                  "src": "1775:117:3",
                  "trueBody": {
                    "id": 1001,
                    "nodeType": "Block",
                    "src": "1799:54:3",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 996,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 891,
                              "src": "1820:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_User_$875_storage_$",
                                "typeString": "mapping(address => struct LinniaUsers.User storage ref)"
                              }
                            },
                            "id": 998,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 997,
                              "name": "user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 987,
                              "src": "1826:4:3",
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
                            "src": "1820:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_User_$875_storage",
                              "typeString": "struct LinniaUsers.User storage ref"
                            }
                          },
                          "id": 999,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "provenance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 874,
                          "src": "1820:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 991,
                        "id": 1000,
                        "nodeType": "Return",
                        "src": "1813:29:3"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1007,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "provenanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 987,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 1007,
                  "src": "1696:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 986,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1695:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 990,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1007,
                  "src": "1755:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 989,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1755:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1754:6:3"
            },
            "scope": 1008,
            "src": "1674:224:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1009,
        "src": "251:1649:3"
      }
    ],
    "src": "0:1901:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x487936edaae2d31730928866b49a4cc5daece572",
      "transactionHash": "0xa7792f6e6c883e27dfb56f4219750d1bc7eb7c2d24245338743177b6263421ae"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-06-25T22:30:05.689Z"
}
