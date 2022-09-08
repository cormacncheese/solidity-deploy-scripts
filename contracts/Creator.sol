//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
  
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


contract Creator is Initializable, ReentrancyGuardUpgradeable, OwnableUpgradeable {

    uint256 public creatorId;

    // ============ Constructor ============ 
    function initialize(uint256 creatorId_) public initializer nonReentrant {
        __ReentrancyGuard_init();
        __Ownable_init();

        creatorId = creatorId_;
    }

    
    // ============ Public read methods ============ 
    function getCreatorId() public view returns (uint256) {
        return creatorId;
    }

    function getNumber() public pure returns (uint256) {
        return 77;
    }

}