var InTheStars = artifacts.require('InTheStars.sol');

contract('InTheStars', (accounts) => {
  const [firstAccount, secondAccount] = accounts;

  it("Sets and checks an owner of the contract", async () => {
    const inTheStars = await InTheStars.new();
    assert.equal(await inTheStars.owner.call(), firstAccount);
  });

  it("Checks if a text is not written in the stars (no copyright)", async () => {
    const inTheStars = await InTheStars.new();
    assert.equal(await inTheStars.checkText.call("mytext"), 0x0);
  });

  it("Checks if a text is written in the stars (it has copyright)", async () => {
    const inTheStars = await InTheStars.new();
    inTheStars.saveText("mytext");
    assert.equal(await inTheStars.checkText.call("mytext"), firstAccount);
  });

  it("Checks if another account read contract", async () => {
    const inTheStars = await InTheStars.new();
    inTheStars.saveText("mytext",{from: firstAccount});
    let newAcccount = await inTheStars.checkText("mytext", {from: secondAccount});
    assert.equal(newAcccount, firstAccount);
  });
 
  it("Check if owner can transfer contract ownership", async () => {
    const inTheStars = await InTheStars.new();
    inTheStars.transferOwnership(secondAccount);
    assert.equal(await inTheStars.owner.call(), secondAccount);
  });  


/* To do: tests with require
  it("Check if only owner can transfer contract ownership", async () => {
    const inTheStars = await InTheStars.new();
    inTheStars.transferOwnership(secondAccount,{from: secondAccount});
    assert.equal(await inTheStars.owner.call(), secondAccount);
  });

  it("Checks if another account can not overwrite a text", async () => {
    const inTheStars = await InTheStars.new();
    inTheStars.saveText("mytext",{from: firstAccount});
    assert.equal(inTheStars.saveText("mytext",{from: secondAccount}), false);
  });
*/

});
