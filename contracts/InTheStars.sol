pragma solidity 0.4.24;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import 'zeppelin-solidity/contracts/lifecycle/Pausable.sol';

/** @title InTheStars contract */
contract InTheStars is Ownable, Pausable {

	/** @dev mapping bytes to address and assigned to private variable texts */
	mapping (bytes32 => address) private texts;

	/** @dev nothing in constructor, owner is setting with Ownable */
	constructor() public {
	}

	/** @dev checks a bytes32 array and assigns the text's owner 
     *  @param text bytes32 to be set	
	 */
	function storeText(bytes32 text) private {
		texts[text] = msg.sender;
	}

	/** @dev checks a bytes32 array and return the owner's address of a item, if exists
     *  @param text bytes32 to be searched	
	 *  @return texts[text] as address
	 */
	function hasText(bytes32 text) private view returns (address) {
		return texts[text];
	}

	/** @dev turns a string into sha256 encoded byte array
     *  @param text string to be hashed
	 *  @return sha256 encoded byte array
	 */
	function textToHash(string text) private pure returns (bytes32) {
		return sha256(abi.encodePacked(text));
	}

	/** @dev transform text in hash and save it
	 *	Is not possible to save a text if it was saved before.
     *  @param text string to save
	 *  @return true it success
	 */
	function saveText(string text) public whenNotPaused returns (bool) {
		bytes32 textHash = textToHash(text);
		require (hasText(textHash) == 0x0);
		storeText(textHash);
		return true;
	}

	/** @dev checks the text of a string and if it has been hashes returns owner's address 
     *  @param text bytes32 to be searched	
	 *  @return texts[text] as address
	 */	 
	function checkText(string text) public view returns (address) {
		bytes32 textHash = textToHash(text);
		return hasText(textHash);
	}

    /** @dev only owner can destruct this contract */
    function kill() public onlyOwner {
	     selfdestruct(owner);
    }

}
