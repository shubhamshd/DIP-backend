const ipfsAPI = require('ipfs-api');
const fs = require('fs');


//Connceting to the ipfs network via infura gateway
const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})

//Addfile router for adding file a local file to the IPFS network without any local node

const uploadToIpfs = async(imageData) => {
    
    //Reading file from computer
    let testFile = fs.readFileSync(imageData);
    //Creating buffer for ipfs function to add file to the system
    // let testBuffer = new Buffer(testFile);

    const result = ipfs.add(testFile);
    return result;
}

//Getting the uploaded file via hash code.
const getFromIpfs = async(cid) => {

    ipfs.files.get(cid, function (err, files) {
        files.forEach((file) => {
          console.log(file.path)
          console.log(file.content.toString('utf8'))
        })
    })
}

module.exports = {
    uploadToIpfs,
    getFromIpfs
}