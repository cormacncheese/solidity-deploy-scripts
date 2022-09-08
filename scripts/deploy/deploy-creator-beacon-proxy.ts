// deploys Beacon proxies using Creatory Factory

async function deployCreatorProxy() {
  const creatorFactoryAddress = process.env.CREATOR_FACTORY_ADDRESS

  const CreatorFactory = await ethers.getContractFactory('CreatorFactory')
  const creatorFactoryContract = await CreatorFactory.attach(
    creatorFactoryAddress,
  )

  const creatorProxyTx = await creatorFactoryContract.createCreator()
  const receipt = await creatorProxyTx.wait()

  const creatorProxyEvent = receipt.events?.filter((x) => {
    return x.event == 'CreatedCreator'
  })
  const creatorProxyData = creatorProxyEvent[0].args

  console.log(`new Creator: \n
    id: ${creatorProxyData.creatorId.toString()}
    proxy address: ${creatorProxyData.creatorAddress} 
`)
}

deployCreatorProxy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
