const hre = require("hardhat");

async function main() {
  try{
    console.log("Starting deployment process...");
    // Check network connection
    const network = await hre.ethers.provider.getNetwork();
    console.log(`Connected to network: ${network.name} (Chain ID: ${network.chainId})`);

    // Check account balance
    const [deployer] = await hre.ethers.getSigners();
    const balance = await hre.ethers.provider.getBalance(deployer.address);
    console.log(`Deployer address: ${deployer.address}`);
    console.log(`Deployer balance: ${hre.ethers.formatEther(balance)} ETH`);

    // if you changed the name of the contract, be sure to update this here!
    const MyToken = await hre.ethers.getContractFactory("MyToken");
  
    const nft = await MyToken.deploy();
    console.log("Deployment transaction sent. Waiting for confirmation...");
    //console.log("Deploying contract...");
  
    await nft.waitForDeployment();
    const contractAddress = await nft.getAddress();
    console.log("NFT deployed to:", contractAddress);
   
    // mint one to yourself!
    console.log("Minting NFT...");
    const signer0 = await ethers.provider.getSigner(0);
    // update the IPFS CID to be your metadata CID
    await nft.safeMint(await signer0.getAddress(), "ipfs://bafkreifg3bqcskebirxw3mxurwsaxzkaav73pubh67xhzpsuqiml3npl3y");
  
    console.log("NFT Minted!");
  }  
  catch (error) {
    console.error("Deployment failed with error:", error);
    throw error;
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });