import {getFriends, getFriend, addFriend, deleteFriend, updateFriend} from '../models/database.js'

export default{
    getFriends: async (req,res)=>{
        res.send(await getFriends())
    }
}