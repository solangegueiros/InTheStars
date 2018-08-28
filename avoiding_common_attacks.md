# Written in the stars - Security Implementations

Since the Solidity contract was designed to be as simple as possible, the security that was used was simple as well. 
It can be easy to make mistakes when programming a smart contract and these mistakes can go unnoticed. 
There are several ways I went about avoiding common attacks.

* One way, which I discussed in the design pattern decisions doc, was by employing fully-audited code, like Ownable from OpenZeppelin.

* I followed strict Solidity coding standards.

* I'm avoiding complex rules and that guide the contract and using a complicated implementation.

* I added require statements at the top of each function to validate the input, and checked that these preconditions are met in each unit spec.

* I limited the accessibility of the functions by making things private when no external caller needs to use it and made all owner-specific transactions only callable by the owner.

* I'm running unit tests to make sure the code does what it is supposed to be doing.


