async function getInfo() {
  // first deploy Creator upgradable beacon
  const creatorFactoryAddress = process.env.CREATOR_FACTORY_TESTNET

  // get Creator Factory instance
  const CreatorFactory = await ethers.getContractFactory('CreatorFactory')
  const creatorFactoryContract = await CreatorFactory.attach(
    creatorFactoryAddress,
  )

  // try to get contract info
  const [creatorBeacon, creatorCount] = await Promise.all([
    creatorFactoryContract.getCreatorBeaconAddress(),
    creatorFactoryContract.getCreatorCount(),
  ])
  console.log('creatorBeacon: ', creatorBeacon)
  console.log('creatorCount: ', creatorCount)
}

getInfo()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
