// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract ApprovalContract {

    address public sender;
    address public receiver;
    address public constant approver  =  
0x88c574F304b138BB08f0Ef02974879f1339b547A;

    function deposit(address _receiver) external payable {
        require(msg.value > 0);
        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns(address) {
        return(approver);
    }

    function  approve() external  {
        require(msg.sender == approver);
        payable (receiver).transfer(address(this).balance);
    }

}