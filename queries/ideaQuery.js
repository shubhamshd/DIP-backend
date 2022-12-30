const { uploadToIpfs } = require("../helpers/ipfs");
const IdeaModel = require("../models/ideaModel");
const { createIdeaOnBlockchain, getNumOfIdeas } = require("../helpers/web3")
const storeFiles = require("../helpers/web3Storage-test")

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
        const ideaList = [];
        for (i=0; i<numOfIdeas; i++){
            let idea = await getIdeaFromBlockchain(i);
            ideaList.push(idea);
        }
        return Promise.resolve({ status: true, data:ideaList, message: `All Idea response` });
        // await getIdeaFromBlockchain()
    } catch (error) {
        // Logger.log(error)
        return Promise.reject([500, 'Internal Server Error'])
    }
}

const createIdeaQuery = async(body) => {
    try {
        console.log(body)
        const cid = await storeFiles();
        const imageUrl = "https://ipfs.io/ipfs/" + cid + "/" + "1.png";
        let doc = { 
            name: body.name,
            description: body.description,
            imageUrl: imageUrl,
            author: body.author, 
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