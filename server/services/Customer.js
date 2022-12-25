const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUsers(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT *
    FROM users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function getStatus(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, status
    FROM users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function addUser(user){
  const result = await db.query(
    `INSERT INTO users (name, domain, status) VALUES ( "${user.name}","${user.domain}" ,${user.status})`
  );

  return {
    result
  };
}
async function updateUser(id,user){
  const result = await db.query(
    `UPDATE users SET name="${user.name}", domain="${user.domain}" , status="${user.status}" WHERE id=${id}`
  );

  return {
    result
  };
}
async function deleteUser(id){
  const result = await db.query(
    `DELETE FROM users WHERE id=${id}`
  );

  return {
    result
  };
}

module.exports = {
  getUsers,
  getStatus,
  addUser,
  updateUser,
  deleteUser
}