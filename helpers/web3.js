const Web3 = require("web3");
// const fs = require("fs");
const contractJson = require("./contractAbi.json")

// Connect to the Ethereum network
const dotenv = require("dotenv");


dotenv.config();
const infura_api_key = process.env.INFURA_API_KEY;

const web3 = new Web3("https://polygon-mumbai.infura.io/v3/" + infura_api_key);

// Read the contract ABI from a JSON file
// const abi = JSON.parse(fs.readFileSync("contractAbi.json", "utf8"));

// Get the contract instance
const Ideacontract = new web3.eth.Contract(contractJson.abi, "0xD2344f3054D363Aa2715ba83B29F58aCcfeb9186");

// Call the contract function
const createIdea = async(_name, _description, _imageCId, _author) => {
  Ideacontract.methods.createIdea(_name, _description, _imageCId, _author).call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
}

module.exports = {
  createIdea
}
