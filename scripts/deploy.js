
const hre = require("hardhat");

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
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
