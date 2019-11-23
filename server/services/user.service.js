const userModel = require('../models/user.model');
const contractModel = require('../models/contract.model');

async function getAllContractForUser(userId) {
    const contracts = await contractModel
        .find({ owner: userId })
        .populate({
            path: 'partner',
            select: 'fullname email'
        })
        .exec();
    return contracts;
}
const UserService = {
    getAllContractForUser
}
module.exports = UserService;