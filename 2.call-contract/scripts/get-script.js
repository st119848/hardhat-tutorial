const hre = require("hardhat");

async function main() {
    // get Greeting smart contract instance
    const address = '0x23ABed36B9952d849c08A3ba84208bc91B47FE5d';
    const contract = await ethers.getContractAt("Greeter", address);

    // run function greet()
    await contract.setGreeting('Hello, Hardhat!')
    greeting = await contract.greet()
    console.log( "First Greet " + greeting);
    //Output: 'Hello, Hardhat!'

    // set greeting and run greet() again:
    await contract.setGreeting('Hello, World')
    greeting = await contract.greet()
    console.log("Second Greet " + greeting);
    
    //Output: 'Hello, World!'
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
