const { uploadToIpfs } = require("../helpers/ipfs");
const IdeaModel = require("../models/ideaModel");
const { createIdeaOnBlockchain, getNumOfIdeas, getIdeaFromBlockchain } = require("../helpers/web3")
const storeFiles = require("../helpers/web3Storage-test")

const getAllIdeaQuery = async() => {
    try {
        // const response = await IdeaModel.find().project({ name: 1 });
        // await IdeaModel.find().project({ name: 1 });
        // const resp = await IdeaModel.find({});
        // return Promise.resolve({ status: true, data:resp, message: `All Idea response` });

        //get data from Blockchain
        const numOfIdeas = await getNumOfIdeas();
        const ideaList = [];
        for (let i=1; i<=numOfIdeas; i++){
            let idea = await getIdeaFromBlockchain(i);
            console.log(idea);
            // let idea = JSON.stringify(tempIdea);
            ideaList.push(idea);
        }
        // console.log(JSON.stringify(ideaList));
        console.log(ideaList);
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
        console.log(cid)
        const imageUrl = "https://ipfs.io/ipfs/" + cid + "/" + "1.png";
        console.log(imageUrl)
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