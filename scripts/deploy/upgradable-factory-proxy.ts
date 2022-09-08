async function deployUpgradableFactoryProxy() {
  const beaconAddress = process.env.CREATOR_BEACON_ADDRESS

  // then pass creator beacon address into creator factory
  const CreatorFactory = await ethers.getContractFactory('CreatorFactory')
  const instance = await upgrades.deployProxy(CreatorFactory, [beaconAddress])
  await instance.deployed()
  console.log('Creator Factory deployed to: ', instance.address)
}

deployUpgradableFactoryProxy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
