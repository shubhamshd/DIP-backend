
const {getCommentQuery, postCommentQuery } = require('../queries/commentQuery')


const getCommentController = async(req,res) => {
    try{
        const response = await getCommentQuery();
        return res.status(200).json(response.data);
    }
    catch(error){
        console.log(error);
    }
}

const postCommentController = async(req,res)=>{
    try{
        const response = await postCommentQuery(req.body);
        return res.status(200).json(response.data);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getCommentController,
    postCommentController
}
