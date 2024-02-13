import express from "express";
import controller from '../controller/friends.js'
const router = express.Router()

router
    .route('/')
        //got all friends
        .get(controller.getFriends)
        //added friends
        .post(async (req,res)=>{
                    const {name,age} = req.body
                    const post = await addFriend(name,age)
                    res.send(await getFriends())
        })

router
    .route('/:id')
        //get individual
        .get(async(req,res)=>{
                    res.send(await getFriend(+req.params.id))
        })

        //delete
        .delete(async (req,res)=>{
                    await deleteFriend(+req.params.id)
                    res.json(await getFriends())
        })

        // update
        .patch( async(req,res)=>{
                    let {name,age} = req.body 
                    const [friend] = await getFriend(+req.params.id)
                    name ? name=name : {name}=friend
                    age ? age=age: {age}=friend
                    console.log(friend);
                    await updateFriend(name,age,+req.params.id)
                    res.json(await getFriends())
        })



export default router