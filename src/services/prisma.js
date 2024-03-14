import{PrismaClient} from "@prisma/client" ;
//a gente precisa dele para fazer a comunicaçao 
// fazer a counicacao com o banco e fazer as operaçoes

export const prisma =new PrismaClient();

//eu criei esse arquivo para que toda vez que eu precisar  eu expotalo em outro arquivo para 
// realizar comunicacao com o banco 



