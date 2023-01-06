
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

const postCommentQuery = async(body)=>{
    try{
        let doc ={
            idea_no:body.idea_no,
            user_email:body.user_email,
            comment:body.comment
        } 
        const response = await CommentModel.create(doc);
        return Promise.resolve({status:200,data:response})
    }
    catch(error){
        return Promise.reject([500,"internal server"])
    }
}

module.exports = {
    getCommentQuery,
    postCommentQuery
}