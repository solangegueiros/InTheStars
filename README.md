# In the stars - Consensys Academy Final Project

## AUTHOR: Solange Gueiros


In the stars is a proof of existence DApp to "write in the stars" any text, saving at Ethereum blockchain testnet Rinkeby.

The frontend is an implementation of a simple React app that interacts with the blockchain. 


The user enters text into a form, clicks the `send transaction` button, uses `Metamask to submit` the transaction and then sends the text to the Ethereum blockchain and IPFS. 
Once that is complete, the app will output transaction hash, text's owner and IPFS hash. 


## Technical Specifications

- Texts are stored on **IPFS**. 
- User interface built with **React**.
- **Imports [Ownable](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ownership/Ownable.sol) library** from OpenZeppelin.


### Deployed Contracts: Rinkeby Testnet
The author of this repo has deployed a test version of the protocol on Rinkeby Testnet.
Please see [deployed_address.md](https://github.com/solangegueiros/proof-of-existence-dapp/blob/master/README.deployed_address) for more details.


## Running the app successfully

* __To run this app locally__

    Clone the repo to your machine and follow the installation instructions below. The application is incredibly simple to use and should be very straight forward.

### Installation

1. Install Truffle and Ganache globally.
    ```javascript
    $ npm install -g truffle
    $ npm install -g ganache-cli
    ```

2. Clone the repo, cd into the directory, and install node modules.
    ```javascript
    clone this repo
    $ cd Consensys-Academy-Final-Project/
    $ npm install
    ```

3. Open another terminal and run the Ganache blockchain.
    ```javascript
    $ ganache-cli
    ```

4. Compile and migrate the smart contracts.
    ```javascript
    $ truffle compile
    $ truffle migrate
    ```

5. Run the tests to make sure the contract is working correctly.
    ```javascript
    $ truffle test
    ```
6. Set up your seed phase in Metamask.
    ```javascript
    The seed is the same in ganache-cli
    ```

7. Serve a local instance of the application on your machine.
    ```javascript
    $ npm start
    The server will launch the app at http://localhost:3000
    ```
8. Make sure Metamask is set to a private network pointing to localhost 8545 and use the app. 


## Docs 

- [Deployed addresses](https://github.com/solangegueiros/writteninthestars/blob/master/src/ethereum/deployed_addresses.txt)
- [Design pattern decisions](https://github.com/solangegueiros/writteninthestars/blob/master/src/ethereum/design_pattern_decisions.md)
- [Avoiding common attacks](https://github.com/solangegueiros/writteninthestars/blob/master/src/ethereum/avoiding_common_attacks.md)

### Coding Guides
- [http://solidity.readthedocs.io/en/develop/style-guide.html](http://solidity.readthedocs.io/en/develop/style-guide.html)




## Contact

**solangegueiros@gmail.com**


Enjoy Ethereum and the Blockchain!
