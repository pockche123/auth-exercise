const db = require('../database/connect'); 

class User {
    
    constructor({ id, username, password, is_admin }) {
        this.id = id; 
        this.username = username; 
        this.password = password; 
        this.is_admin = is_admin; 
    }

    static getAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const usersData = await db.query("SELECT * FROM user_account");
                const users = usersData.rows.map(user => new User(user));
                resolve(users)
            } catch (error) {
                reject('error retrieving users')
            }
        })
    }
    static async getOneById(id) {
        const response = await db.query("SELECT  * FROM user_account Where id = $1", [id])
        if (!response.rows.length) {
            throw new Error("Unable to locate user")
        }
        return new User(response.rows[0])
    }

    static async getByUsername(username) {
        const response = await db.query("SELECT * FROM user_account Where username = $1", [username])
        if (!response.rows.length) { 
        throw new Error("Unable to locate user")
        }
        return new User(response.rows[0])
    }

    static async create({ username, password, isAdmin }) {
        let response = await db.query("INSERT INTO user_account (username, password) VALUES ($1, $2) RETURNING id;", [username, password]); 
        const newId = response.rows[0].id; 
        const newUser = await User.getOneById(newId); 
        return newUser; 
    }


}

module.exports = User