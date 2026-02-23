// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/*
    Personal Portfolio Smart Contract
    Stores user's name, role and description
*/

contract Portfolio {

    // State variables
    string private name;
    string private role;
    string private description;

    // Constructor runs once during deployment
    constructor(string memory _name, string memory _role, string memory _description) {
        name = _name;
        role = _role;
        description = _description;
    }

    // Update portfolio details
    function updatePortfolio(
        string memory _name,
        string memory _role,
        string memory _description
    ) public {
        name = _name;
        role = _role;
        description = _description;
    }

    // Get portfolio details
    function getPortfolio() public view returns (string memory, string memory, string memory) {
        return (name, role, description);
    }
}