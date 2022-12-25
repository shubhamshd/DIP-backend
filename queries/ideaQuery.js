const IdeaModel = require("../models/ideaModel");

const getAllIdeaQuery = async() => {
    try {
        // const response = await IdeaModel.find().project({ name: 1 });
        // await IdeaModel.find().project({ name: 1 });
        const resp = await IdeaModel.find({});
        return Promise.resolve({ status: true, data:resp, message: `All Idea response` });
    } catch (error) {
        // Logger.log(error)
        return Promise.reject([500, 'Internal Server Error'])
    }
}

module.exports={
    getAllIdeaQuery
}