// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.28;

contract ContributeDAO {
    uint public projectCount;

    struct Project {
        uint id;
        string title;
        string description;
        string githubRepo;
        address owner;
        bool isOpen;
    }

    mapping(uint => Project) public projects;

    function createProject(
        string memory _title,
        string memory _description,
        string memory _githubRepo
    ) public {
        require(bytes(_title).length > 0, "Title is required");
        require(bytes(_description).length > 0, "Description is required");
        require(bytes(_githubRepo).length > 0, "Github repo is required");

        projectCount++;
        projects[projectCount] = Project({
            id: projectCount,
            title: _title,
            description: _description,
            githubRepo: _githubRepo,
            owner: msg.sender,
            isOpen: true
        });
    }
}
