import * as url from 'url'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
import * as dotenv from "dotenv"
dotenv.config()

const SERVER_HOST = (process.env.SERVER_HOST)
const SERVER_PORT = parseInt(process.env.PORT || process.env.SERVER_PORT || '3000')
const DB_HOST = process.env['DB_HOST']
const DB_PORT = parseInt(process.env.DB_PORT || '3306')
const DB_USER = process.env['DB_USER']
const DB_PASSWORD = process.env['DB_PASSWORD']
const DB_NAME = process.env['DB_NAME']
const CLOUD_SQL_CONNECTION_NAME = process.env['CLOUD_SQL_CONNECTION_NAME']
const USE_SWAGGER = (process.env['USE_SWAGGER'] === 'true' ? true : false)
const ACCESS_TOKEN_SECRET = process.env['ACCESS_TOKEN_SECRET']
const REFRESH_TOKEN_SECRET = process.env['REFRESH_TOKEN_SECRET']
const NODE_ENV = process.env['NODE_ENV'] || 'development'

export {
    NODE_ENV,
    SERVER_HOST,
    SERVER_PORT,
    __filename,
    __dirname,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    CLOUD_SQL_CONNECTION_NAME,
    USE_SWAGGER,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
}