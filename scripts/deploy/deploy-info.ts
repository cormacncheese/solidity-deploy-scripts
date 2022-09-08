// deploys Beacon proxies using Creatory Factory

async function deployInfo() {
  const creatorProxyAddress = process.env.CREATOR_PROXY_ADDRESS

  const Creator = await ethers.getContractFactory('Creator')
  const creatorProxyContract = await Creator.attach(creatorProxyAddress)

  const creatorId = await creatorProxyContract.getNumber()

  console.log('creatorId: ', creatorId)
}

deployInfo()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
