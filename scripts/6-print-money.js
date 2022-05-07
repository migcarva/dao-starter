import sdk from "./1-initialize-sdk.js";

if (!process.env.TOKEN || process.env.TOKEN === "") {
  console.log("🛑 TOKEN not found.");
}
const token = sdk.getToken(process.env.TOKEN);

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1000000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "AMZG in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();