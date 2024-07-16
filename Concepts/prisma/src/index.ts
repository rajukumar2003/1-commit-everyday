import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, firstName: string, lastName: string, password: string) {
    const res = await prisma.users.create({
        data: {
            email: username,
            firstName,
            lastName,
            password
        },
        select: {
            id: true,
            email:true
        }
    });
    console.log(res);
};
// insertUser('abc@gmail.com', 'dan', 'koe', '0000');


// --------------------------- Updating Users Table ----------------------------
interface UpdateParams {
    firstName: string,
    lastName: string
};
async function updateUser(email:string,{firstName,lastName}:UpdateParams) {
    const res = await prisma.users.update({
        where: {
            email
        },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res)
};
// updateUser('abc@gmail.com', {
//     firstName: 'kaju',
//     lastName: 'rumar'
// });


// --------------------------- Getting Users Table ----------------------------
async function getUsers(email:string) {
    const res = await prisma.users.findFirst({
        where: {
            email
        }
    });
    console.log(res)
};
getUsers('abc@gmail.com');
