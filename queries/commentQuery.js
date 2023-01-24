
const CommentModel = require('../models/commentModel');

const getCommentQuery = async() => {
    try{
        const response = await CommentModel.find({});
        return Promise.resolve({status:true,data:response});
    }
    catch(error){
        return Promise.reject([500, 'Internal Server Error'])
    }
}

const getCommentsOfSingleIdeaQuery = async(query) => {
    try{
        const response = await CommentModel.find({idea_no:query.idea_no});
        return Promise.resolve({status:true,data:response});
    }
    catch(error){
        return Promise.reject([500, 'Internal Server Error'])
    }
}

const postCommentQuery = async(body)=>{

    console.log(body)
    const response = await CommentModel.find({idea_no:body.idea_no});
    console.log(response)
    if(response.length==1){
        try{
            let comment = [{
                username:body.username,
                comment:body.comment
            }]
            const response = await CommentModel.updateOne({ idea_no: body.idea_no }, { $push: { comments: comment } })
            console.log(response,"comment is pushed")
            return Promise.resolve({status:true,data:"comment is pushed"})
        }
        catch(error){
            return Promise.reject([500,"internal server"])
        }
    }
    else{
        try{
            let doc ={
                idea_no:body.idea_no,
                comments:[{
                    username:body.username,
                    comment:body.comment
                }]
            } 
            const response = await CommentModel.create(doc);
            return Promise.resolve({status:true,data:response,msg:"comment is created"})
        }
        catch(error){
            return Promise.reject([500,"internal server"])
        }
    }
}

module.exports = {
    getCommentQuery,
    postCommentQuery,
    getCommentsOfSingleIdeaQuery
}