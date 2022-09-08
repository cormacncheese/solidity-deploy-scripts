async function deployCreator() {
  const CreatorNonupgradable = await ethers.getContractFactory(
    'CreatorNonupgradable',
  )

  const creator = await CreatorNonupgradable.deploy(1)

  await creator.deployed()

  console.log(`Creator deployed to ${creator.address}`)
}

deployCreator()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
