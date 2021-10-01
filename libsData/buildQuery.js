const express = require('express');
const oracledb = require('oracledb');
const dbconfig = require('../config/dbconfig');

const buildQuery = async(query) => {
    let connection
    let result = [];

    try {
        connection = await oracledb.getConnection(dbconfig);
        const response = await connection.execute(query, {}, {outFormat: oracledb.OUT_FORMAT_OBJECT});
        result = response;
    } catch (error){
        console.log(error);
        result = null;
    }finally{
        if(connection){
            connection.close();
        }
        return result;
    }
}

module.exports = { buildQuery }

