const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

contract ('ApprovalContract', function (accounts) {

    it ('initiates contract', async function() {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, 
            0x88c574F304b138BB08f0Ef02974879f1339b547A, "approvers don't match")
    });

    it('takes a deposit', async function() {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], { value: 1e+18, from: accounts[1]});
        assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amount did not match");
    })
})