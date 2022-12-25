//For Register Page
// const dashboardView = (req, res) => {

const { getAllIdeaQuery } = require("../queries/ideaQuery");

//     res.status(200).json({true});

//     res.render("dashboard", {
//       user: req.user
//     });
//   };


const getAllIdea = async(req, res) => {
    try {
        // let { group_name, group_type, group_member_id } = req.body
        const response = await getAllIdeaQuery()
        .then((resp) => {
            res.status(200).json(resp.data);
        });
        
    } catch (error) {
        console.log(error);
    }
};

  
// updateGroupQuery(_id) {
//     try {
//         const response: any = await GroupModel.findByIdAndUpdate(_id, {
//             $push: {
//                 group_member_id: group_member_id
//             }
//         }, { new: true })
//         return Promise.resolve({ status: true, message: `${response.group_name} Updated Successfully` });
//     } catch (error: any) {
//         Logger.log(erro)
// return Promise.reject([500, 'Internal Server Error'])
//     }
// }

module.exports = {
    getAllIdea
};