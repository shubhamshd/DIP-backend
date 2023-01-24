
const {getCommentQuery, postCommentQuery, getCommentsOfSingleIdeaQuery} = require('../queries/commentQuery')


const getAllCommentController = async(req,res) => {
    try{
        const response = await getCommentQuery();
        return res.status(200).json(response.data);
    }
    catch(error){
        console.log(error);
    }
}

const getCommentOnIdeaController = async(req,res) => {
    try{
        console.log(req.query)
        const response = await getCommentsOfSingleIdeaQuery(req.query);
        return res.status(200).json(response.data);
    }
    catch(error){
        console.log(error);
    }
}

const postCommentController = async(req,res)=>{
    try{
        const response = await postCommentQuery(req.body.body);
        return res.status(200).json({status:response.status,msg:response.data});
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getAllCommentController,
    getCommentOnIdeaController,
    postCommentController
}
