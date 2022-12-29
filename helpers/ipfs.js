const ipfsAPI = require('ipfs-api');
const fs = require('fs');

//Connceting to the ipfs network via infura gateway
const ipfs = new ipfsAPI({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

//Addfile router for adding file a local file to the IPFS network without any local node

const uploadToIpfs = async() => {
    
    //Reading file from computer
    let testFile = fs.readFileSync("./helpers/1.png");
    
    let testBuffer = await Buffer.from(testFile);

    console.log(testBuffer);
   
    const result = await ipfs.files.add(testBuffer, (error, result) => {
        if (error) {
          console.error("error inside ipfs.add function", error);
        } else {
          // The image data has been successfully added to IPFS
          console.log(result[0].hash); // Print the IPFS hash of the image
        }
      });
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