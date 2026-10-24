---
title: Solidity
year: 2014
era: 2010s
designers: [Gavin Wood, Christian Reitwiessner, Ethereum Foundation]
paradigms: [object-oriented, contract-oriented, imperative]
typing: static, strong
summary: The contract-oriented language for programming the Ethereum Virtual Machine and most other smart-contract blockchains.
links:
  - label: Soliditylang.org
    url: https://soliditylang.org/
  - label: Solidity documentation
    url: https://docs.soliditylang.org/
  - label: Solidity compiler on GitHub
    url: https://github.com/ethereum/solidity
  - label: Ethereum developer documentation
    url: https://ethereum.org/en/developers/docs/
---

## Hello, World!

A contract that exposes a greeting stored on the blockchain:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greeting = "Hello, World!";
}
```

Deploying it creates an automatic `greeting()` getter that returns the string.

## About

Solidity is a curly-brace language, influenced by C++, Python and JavaScript, for writing smart contracts: programs that live at an address on a blockchain and execute deterministically when transactions call them. Contracts resemble classes with state variables, functions, modifiers, events and inheritance, plus blockchain-specific concepts such as `payable` functions, gas costs, `msg.sender` and address types. Because deployed code is immutable and controls real assets, the language and its tooling (Hardhat, Foundry, OpenZeppelin libraries, formal verification) place heavy emphasis on security.

## History

Gavin Wood proposed Solidity in August 2014, and development was led by Christian Reitwiessner's team at the Ethereum Foundation, with the first release coming shortly before the Ethereum network launched in July 2015. The 2016 DAO hack, which exploited a re-entrancy bug, profoundly shaped the language's safety features and best practices. Solidity 0.5 (2018) and 0.8 (2020), the latter adding checked arithmetic by default, introduced breaking changes to improve safety. It remains the dominant smart-contract language across Ethereum and compatible chains such as Polygon, Arbitrum, BNB Chain and Avalanche.
