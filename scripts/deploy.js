
const hre = require("hardhat");

async function main() {


  const DreamFund = await hre.ethers.getContractFactory("DreamFund");
  const dreamFund = await DreamFund.deploy();

  await dreamFund.deployed();

  console.log(
    `DreamFund deployed to ${dreamFund.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
