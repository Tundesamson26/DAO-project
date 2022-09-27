import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xBf3544144D14D195f85588ba9A77013728ccc7C5"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Hashnode",
        description: "This NFT will give you access to Web3WriterDAO!",
        image: readFileSync("scripts/assets/hashnodep.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
