// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol';
import '@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol';
import '@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol';
import "./Creator.sol";

contract CreatorFactory is Initializable, OwnableUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    // ============ State ============
    CountersUpgradeable.Counter private creatorId;

    // address for implementating Creator proxies
    address public creatorBeaconAddress;

    // ============ Events ============
    /// Emitted when a Creator is created
    event CreatedCreator(uint256 creatorId, address indexed creatorAddress);

    // ============ Functions ============
    /// Initializes factory
    function initialize(address creatorBeacon) public initializer {
        __Ownable_init_unchained();

        creatorBeaconAddress = creatorBeacon;
    }


    function createCreator(
    ) public returns (address) {

        // deploy new Creator proxy
        BeaconProxy creatorProxy = new BeaconProxy(
            creatorBeaconAddress,
            abi.encodeWithSelector(
                 Creator(address(0)).initialize.selector,
                 creatorId.current()
            )
        );


        creatorId.increment();

        emit CreatedCreator(creatorId.current(), address(creatorProxy));

        return address(creatorProxy);
    }

    function getCreatorBeaconAddress() public view returns (address) {
        return creatorBeaconAddress;
    }
}
