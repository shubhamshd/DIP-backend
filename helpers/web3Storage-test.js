const Web3Storage = require("web3.storage");
// import { Web3Storage } from "web3.storage";

const dotenv = require("dotenv");
dotenv.config();

function makeStorageClient() {
    // console.log(Web3Storage);
    return new Web3Storage.Web3Storage({
      token: process.env.WEB3STORAGE_API_KEY,
    });
}
  
const storeFiles = async () => {

    const file = await Web3Storage.getFilesFromPath('./helpers/1.png');
    console.log(file);

    // const file = req.files.file.data;
    // console.log(file);
    const client = makeStorageClient();
    // console.log(client)
    const cid = await client.put(file)
    return cid;
    // console.log(cid);
    // // return cid;
    // res.status(200).json(resp.data);
};

module.exports = storeFiles