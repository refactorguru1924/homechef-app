import mysql from "mysql2"
import { NODE_ENV, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, CLOUD_SQL_CONNECTION_NAME } from "../config.js"

interface DbConfig {
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
    host?: string;
    port?: number;
    socketPath?: string;
}

const dbConfig: DbConfig = {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
};

if (NODE_ENV === 'production') {
    dbConfig.socketPath = `/cloudsql/${CLOUD_SQL_CONNECTION_NAME}`;
} else {
    dbConfig.host = DB_HOST;
    dbConfig.port = 3306;
}

const database = mysql.createPool(dbConfig).promise()

export default database