// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Portfolio {

    string public name = "Prashanth Buraa";
    string public role = "Blockchain Developer";
    string public skills = "Solidity, Web3.js, Python";

    function getPortfolio()
    public view
    returns(string memory, string memory, string memory){

        return (name, role, skills);
    }
}