import config from "./config.mjs";
import mysql from 'mysql';

export let pool = mysql.createPool({
    host: config.sqlOptions.hostDb,
    user: config.sqlOptions.dbUsername,
    password: config.sqlOptions.dbPassword,
    database: config.sqlOptions.dbUsername,
})

