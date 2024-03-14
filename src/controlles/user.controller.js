import bcrypt from "bcrypt";
import {userValidation} from "../validation/user.validation" // eu chamo esse arquivo para validar os campos , caso alguee nao coloque os dados que sao necessario para fazer um post vai retorna um erro 
import { createUser ,getAll,getid,updateUser,deleteUser } from "../repositorys/use.repositor";



export const create=async (req,res)=>{
    try{

        await userValidation.validate(req.body) // basiamente aqui eu estou validando  se todos os campos estao preenchidos 

        const cripografiasenha= await bcrypt.hash(req.body.password,10);
        req.body.password=cripografiasenha //isso é para criptografar 
        const user =await createUser(req.body) ;
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)
    }
}

export const get = async(req,res)=>{
   try{
    const users = await getAll()
    res.status(200).send(users)
    }
    catch(e){
        res.status(400).res(e)
    }
}

export const get1 = async(req,res)=>{
    try{
     const user = await getid(Number(req.params.id)) // quando eu pego a string dos meus parametros ela em formato de string ,eu preciso trnaforma em number 
     res.status(200).send(user)
     }
     catch(e){
         res.status(400).res(e)
     }
 }

 export const update =async (req,res) =>{
    try{
        const user =await updateUser(Number(req.params.id),req.body)
        res.status(200).send(user)



    }catch(e){
        res.status(400).send(e)

    }
 }
 export const remove =async(req,res)=>{
   try{
    await deleteUser(Number(req.params.id))
    res.status(200).send()
   }
   catch(e){
        res.status(200).send()
   }
 }