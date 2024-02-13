import mysql from 'mysql2'
import {config} from 'dotenv'
config()

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise()

const getFriends = async()=>{
    const [result] = await pool.query(`
        SELECT *
        FROM mates
    `)
    return result
}

const getFriend =async(id)=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM mates
        WHERE id = ?
    `,[id])
    return result
}

const addFriend = async(name,age)=>{
    const [friend] = await pool.query(`
        INSERT INTO mates (name,age) VALUES (?,?)
    `,[name,age])
    return getFriend(friend.insertId)
}
// console.log(await getFriends())

const deleteFriend = async(id)=>{
    const [friend] = await pool.query(`
    DELETE FROM mates where id =?
    `,[id])
    return getFriends()
}

const updateFriend = async (name,age,id)=>{
    const [friend] = await pool.query(`
    UPDATE mates set name= ?, age=? 
    WHERE (id=?)
    `,[name,age,id])
    return friend
}
export {getFriends, getFriend, addFriend, deleteFriend, updateFriend}