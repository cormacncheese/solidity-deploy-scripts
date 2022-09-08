//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
  
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


contract CreatorNonupgradable {

    uint256 creatorId;
    address beaconAddress;


    // ============ Constructor ============ 
    // use for non-upgradable
    constructor(uint creatorId_) payable {
        creatorId = creatorId_;
    }

    
    // ============ Public read methods ============ 
    function getCreatorId() public view  returns(uint256) {
        return creatorId;
    }

}