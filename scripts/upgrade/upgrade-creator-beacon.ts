const { ethers, upgrades } = require('hardhat')

async function upgradeCreatorBeacon() {
  // first deploy Creator upgradable beacon
  const CreatorV2 = await ethers.getContractFactory('CreatorV2')

  const beacon = await upgrades.deployBeacon(CreatorV2)
  await beacon.deployed()
  console.log('Creator Beacon deployed to:', beacon.address)
}

upgradeCreatorBeacon()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
