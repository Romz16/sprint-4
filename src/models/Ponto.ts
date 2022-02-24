import { dbQuery } from "../services/db"


export type Ponto = {
    latitude :string;
    longitude:string;
    email : string;
}

export const insertPonto = async(ponto: Ponto) =>{
    await dbQuery(`INSERT INTO user (email,nome) VALUES(?,?,?)`,[ponto.latitude,ponto.longitude,ponto.email])
    let retorno = await dbQuery(`SELECT seq AS Email FROM sqlite_sequence WHERE name = 'ponto'`);
    return retorno[0].email 
}

export const pontoModel = {
    insertPonto
}