const db = require('./database');
const Sequelize = require('sequelize');
const accountModel = require('./models/account');
const datetime_tool = require('../utils/datetime_tool')

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
      // add new balance
      let literalStr = 'balance + ' + +_account.balance;
      await accountModel.update({ 
        balance: Sequelize.literal(literalStr) ,
        modify_datetime: datetime_tool.getTimestamp(Date.now())
      }, { 
        where: { 
          id: _account.id 
        }, transaction: t 
      });
      // refresh  data
      acc = await accountModel.findOne({
        where: { id: _account.id },
        transaction: t
      });

      // refresh updated balance
      ret = acc.toJSON();

    });

  } catch (error) {
    console.log('updateAccount error');
  } finally {
    console.log('updateAccount finally');
  }

  return ret;
}

const updateBalanceInstance = async (_account) => {
  let ret;
  try {
    const result = await db.transaction(async (t) => {
      // select account
      acc = await accountModel.findOne({
        where: { id: _account.id },
        transaction: t
      });
      // add new balance
      acc.balance += _account.balance;
      acc.modify_datetime = datetime_tool.getTimestamp(Date.now());
      await acc.save();

      // refresh updated balance
      ret = acc.toJSON();

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

module.exports = { createAccount, getAccount, updateBalance, updateBalanceInstance, deleteAccount };
