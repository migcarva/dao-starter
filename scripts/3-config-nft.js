import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

if (!process.env.DROP || process.env.DROP === "") {
  console.log("🛑 DROP not found.");
}
const editionDrop = sdk.getEditionDrop(process.env.DROP);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Amazing People",
        description: "This NFT will give you access to AmazingDAO!",
        image: readFileSync("scripts/assets/amazing-people.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();