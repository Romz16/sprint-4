import { dbQuery } from "../services/db"


export type User = {
    id :number;
    email : string;
    nome : string;
}

export const insertUser = async(user: User) =>{
    await dbQuery(`INSERT INTO user (email,nome) VALUES(?,?)`,[user.email,user.nome])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'user'`);
    return retorno[0].Id as number | undefined;
}

export const userModel = {
    insertUser
}