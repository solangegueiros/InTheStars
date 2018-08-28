# Written in the stars - Design pattern desicions


## Design patterns implemented

### Use of audited libraries
One of the most important design patterns I used in this project is using audited libraries.
I used the Ownable zeppelin library to allow for methods so that those methods can not be called by anyone but the owner of the contract.


### Restricting Access
These funcions are internal to restrict other contracts’ access.
* ***storeText(text)*** - Stores text.

* ***hasText(text)*** - Inputs a byte array and outputs a address who published the text.

* ***textToHash(text)*** - Hashes a string using the sha256 algorithm.

Only owner (who published this contract) can use This funcion:
* ***kill()*** - Self destructs the contract if something goes wrong.


### Circuit breaker: pausable
I added the ability to pause the contract in the event it is acting incorrectly or compromised in some way. 

All of the public-non-view methods have a `whenNotPaused` modifier on them.


### Mortal design pattern
Implementing the mortal design pattern is the ability to destroy the contract and disable your calls at blockchain.
* ***kill()*** - Self destructs the contract if something goes wrong.


### Lock pragma version
I locked pragma version to prevent future compiler changes from affecting my contract


## Reasons
The design patterns were chosen for two reasons:
  * Ease of use for actual design and creation of the contract.
  
  * The importance of learning how make a smart contract interact with a front end interface. It would be easy to get lost with a very complicated contract. The simplicity was chosen to better understand how those interactions work.
  

