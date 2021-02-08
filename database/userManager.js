const userModel = require('./models/user');

const createUser = async (_user) => {
    let ret = await userModel.create({
        id: _user.id,
        uuid: _user.uuid,
        username: _user.username,
        password: _user.password
    })

    return ret;
}

const getUser = async (_id) => {
    let user = await userModel.findOne({
        where: { id: _id }
    });

    return user;
}

const deleteUser = async (_id) => {
    await userModel.destroy({
        where : {
            id: _id
        }
    });
}

module.exports = { createUser, getUser, deleteUser };