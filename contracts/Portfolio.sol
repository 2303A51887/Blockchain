// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Portfolio {

    struct Profile {
        string name;
        string email;
        string skills;
        string bio;
    }

    Profile private userProfile;

    function setProfile(
        string memory _name,
        string memory _email,
        string memory _skills,
        string memory _bio
    ) public {
        userProfile = Profile(_name, _email, _skills, _bio);
    }

    function getProfile()
        public
        view
        returns (string memory, string memory, string memory, string memory)
    {
        return (
            userProfile.name,
            userProfile.email,
            userProfile.skills,
            userProfile.bio
        );
    }
}

