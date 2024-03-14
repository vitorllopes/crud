import { Prisma, prisma } from "../services/prisma";

export const createUser= async(data)=> {
    const user =await prisma.user.create({
        data,
        select:{ //basicamente eu criei  escolher oque eu quero que retorne apos  criar um usuario , eu coloquei false na senha para que ela n seja retornada
            id:true,
            name:true,
            email:true,
            phone:true,
            password:false,
            createAt:true,
            updateAtt:true
        }
    })
    return user;

};

export const getAll = async()=>{
    const users =await prisma.user.findMany({// faz as buscas no banco atraves do prisma 
        select:{ //basicamente eu criei  escolher oque eu quero que retorne apos  criar um usuario , eu coloquei false na senha para que ela n seja retornada
            id:true,
            name:true,
            email:true,
            phone:true,
            password:false,
            createAt:true,
            updateAtt:true
        }
    })  
    return users
}

export const getid = async(id)=>{
    const user =await prisma.user.findUnique({
        where:{
            id,
        },
        select:{ //basicamente eu criei  escolher oque eu quero que retorne apos  criar um usuario , eu coloquei false na senha para que ela n seja retornada
            id:true,
            name:true,
            email:true,
            phone:true,
            password:false,
            createAt:true,
            updateAtt:true
        }
    });
    return user;
};

export const updateUser= async(id,data) => {
    const user =await prisma.user.update({ // esse user é o nome da tabela usuarios criado no memu banco 
        where:{
            id
        },
        data,
        select:{ //basicamente eu criei  escolher oque eu quero que retorne apos  criar um usuario , eu coloquei false na senha para que ela n seja retornada
            id:true,
            name:true,
            email:true,
            phone:true,
            password:false,
            createAt:true,
            updateAtt:true
        } 
    })
    return user;
}

export const deleteUser =async(id)=>{
    await prisma.user.delete({
        where:{
            id
        }
    })
    return;
    
}



