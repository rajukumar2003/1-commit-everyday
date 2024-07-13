"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database
const pg_1 = require("pg");
// Connecting-----
const client = new pg_1.Client({
    connectionString: "postgresql://dev.rajukumarsingh:krfKPhwBo16p@ep-lingering-firefly-a5tmvx5z.us-east-2.aws.neon.tech/test?sslmode=require"
});
// Querying-----
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
;
// createUsersTable();
// --------------------- Create a function that let’s you insert data into a table --------------------
function insertData(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            // SQL INJECTION
            // Use parameterized query to prevent SQL injection
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.log('Error during insertion', err);
        }
        finally {
            yield client.end();
        }
    });
}
;
// insertData('raju', '0000', 'raju@gmail').catch(console.error);
// --------------- Write a function getUser that lets you fetch data from the database given a username as input. --------------
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = 'SELECT * FROM users WHERE username = $1';
        const result = yield client.query(query, [username]);
        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        }
        else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
        }
    });
}
;
// getUser('raju').catch(console.error);
// ------------- You are asked to fetch a users details and  their address - JOINS --------------------
function getUserDetailsWithAddress(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = `SELECT u.id, u.username, a.city, a.country, a.street, a.created_at
                    FROM users u
                    JOIN addresses a ON u.id = a.user_id
                    WHERE u.id = $1`;
            const result = yield client.query(query, [userId]);
            if (result.rows.length > 0) {
                console.log('User and address found:', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log('No user or address found with the given ID.');
                return null;
            }
            ;
        }
        catch (err) {
            console.error('Error during fetching user and address:', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
;
getUserDetailsWithAddress('3');
