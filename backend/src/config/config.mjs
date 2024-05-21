import 'dotenv/config'
import mysql from 'mysql';


const connectionLimit = process.env.CONNECTION_LIMIT;
const hostDb = process.env.HOST_DB;
const dbUsername = process.env.USERNAME_DB;
const dbPassword = process.env.PASSWORD_DB;
const databaseName = process.env.DB_NAME;

const config = {

    sqlOptions: {
        connectionLimit: connectionLimit,
        hostDb: hostDb,
        dbUsername: dbUsername,
        dbPassword: dbPassword,
        databaseName: databaseName
    }
    ,
    port: process.env.PORT || 3000
};

export default config;