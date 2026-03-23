// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Lending {

    // Store balances of users
    mapping(address => uint256) public balances;

    // Deposit ETH into contract
    function deposit() public payable {
        require(msg.value > 0, "Deposit must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    // Withdraw ETH from contract
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    // View balance
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}