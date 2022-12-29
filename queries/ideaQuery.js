const { uploadToIpfs } = require("../helpers/ipfs");
const IdeaModel = require("../models/ideaModel");
const { createIdeaOnBlockchain, getNumOfIdeas } = require("../helpers/web3")

const getAllIdeaQuery = async() => {
    try {
        // const response = await IdeaModel.find().project({ name: 1 });
        // await IdeaModel.find().project({ name: 1 });
        // const resp = await IdeaModel.find({});
        // return Promise.resolve({ status: true, data:resp, message: `All Idea response` });

        //get data from Blockchain
        console.log("about to query num of ideas from getAllIdeaQuery function")
        const numOfIdeas = await getNumOfIdeas();
        console.log(numOfIdeas);
        return numOfIdeas;
        // await getIdeaFromBlockchain()
    } catch (error) {
        // Logger.log(error)
        return Promise.reject([500, 'Internal Server Error'])
    }
}

const createIdeaQuery = async(body) => {
    try {
        console.log(body)
        const ipfsresult = await uploadToIpfs(body.image);
        let doc = { 
            name: body.name,
            imageCid: ipfsresult.path,
            author: body.author,
            description: body.description
        }  
        console.log("before resp")
        const resp = await createIdeaOnBlockchain(doc ,function (err, small) {
            if (err) {console.log(err);}
            else{
                console.log(small);
            }

          });
        console.log("after resp")
        return Promise.resolve({ status: true, data:resp, message: `All Idea response` });
    }
        catch (error) {
        return Promise.reject([500, 'Internal Server Error'])
    }
}



module.exports={
    getAllIdeaQuery,
    createIdeaQuery
}