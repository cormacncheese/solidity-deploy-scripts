async function deployUpgradableCreatorBeacon() {
  const Creator = await ethers.getContractFactory('Creator')

  const beacon = await upgrades.deployBeacon(Creator)
  await beacon.deployed()
  console.log('Creator Beacon deployed to:', beacon.address)
}

deployUpgradableCreatorBeacon()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
