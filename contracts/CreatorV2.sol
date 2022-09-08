//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
  
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


contract CreatorV2 is Initializable, ReentrancyGuardUpgradeable, OwnableUpgradeable {
    
    uint256 creatorId;
    address beaconAddress;
    // new state variable
    string creatorName;


    // ============ Events ============ 
    event NameEvent (
        string indexed creatorName
    );


    // ============ Constructor ============ 
    function initialize(uint256 creatorId_) public initializer nonReentrant {
        __ReentrancyGuard_init();
        __Ownable_init();

        creatorId = creatorId_;
    }

    
    function updateCreatorName(string memory name) public onlyOwner returns(string memory) {
        creatorName = name;
        return name;
    }

    // ============ Public read methods ============ 
    function getCreatorId() public view returns(uint256) {
        return creatorId;
    }

    function getCreatorName() public view returns(string memory) {
        return creatorName;
    }

}