const db = require('./database');
const accountModel = require('./models/account');


// create new record

const createAccount = async (_account) => {
    let ret;
    try {
        const result = await db.transaction(async (t) => {
            ret = await accountModel.create({
                id: _account.id,
                userid: _account.userid,
                balance: _account.balance
            });
        });
    } catch (e) {
        console.log(e);
    } finally {

    }

    return ret;
}

const getAccount = async (_id) => {
    let ret;
    try {
        const result = await db.transaction(async (t) => {
            ret = await accountModel.findOne({
                where: {
                    id: _id
                }
            }, { transaction: t });

            console.log("record found");

        });
    } catch (error) {
        console.log(error);
    }

    return ret;
}

const updateBalance = async (_account) => {
    let ret;
    try {
        const result = await db.transaction(async (t) => {
            // get current balance
            acc = await accountModel.findOne({
                where: { id: _account.id },
                transaction: t
            });
            // add new balance
            ret = await accountModel.update({
                id: _account.id,
                balance: acc.balance + _account.balance
            }, {
                where: { id: _account.id }
            },
                {
                    transaction: t
                });
            // refresh updated balance
            ret = await accountModel.findOne({
                where: { id: _account.id },
                transaction: t
            });

        });

    } catch (error) {
        console.log('updateAccount error');
    } finally {
        console.log('updateAccount finally');
    }

    return ret;
}

const deleteAccount = async (_id) => {
    await accountModel.destroy({
        where: {
            id: _id
        }
    });
}

module.exports = { createAccount, getAccount, updateBalance, deleteAccount };