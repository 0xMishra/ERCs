const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const NFTContract = await hre.ethers.getContractFactory("GoodMorning");
  const nftContract = await NFTContract.deploy();

  await nftContract.deployed();

  console.log("NFTContract deployed to:", nftContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
