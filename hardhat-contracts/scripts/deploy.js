const { ethers } = require("hardhat");
require("dotenv").config({path: ".env"});

async function main() {
    //URL from where we can extract the metadata for a LW3Punks
    const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";
    /** 
     * A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
     * so lw3PunksContract here is a factory for instances for our LW3Punks contract
    */
   const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

   // deploy the contract
   const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

   await deployedLW3PunksContract.deployed();
   console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address);
}
// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });