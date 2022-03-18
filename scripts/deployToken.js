const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const CoderCoin = await hre.ethers.getContractFactory("CoderCoin");
  const coderCoin = await CoderCoin.deploy("Coder Coin", "CC");

  await coderCoin.deployed();

  console.log("CoderCoin deployed to:", coderCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
