const moment = require('moment')
const db = require('../Configs/db');
const today = moment().format('DD/M/YYYY');
const userMock = 1;

class Point{
    
    async all(req){
        
        const cypher = `MATCH (p:Point) return p`;

        return await db.neo4j.execute(cypher);
    }

    async create(req){
        const {user_id = userMock, period} = req;
        
        const cypher = `CREATE ( p:Point {
            user_id: "${user_id}", 
            period: "${period}", 
            date: "${moment().format('DD/M/YYYY HH:MM:SS')}"
        }) return p`;
        
        return await db.neo4j.execute(cypher);
    }
    
    async find(req){
        const { user_id = userMock, date} = req;
        let cypher = ''

        if(date){
            cypher = `MATCH (p:Point {user_id: "${user_id}"}) WHERE p.date=~".*${date}.*" return p`;
        }else{
            cypher = `MATCH (p:Point {user_id: "${user_id}" }) return p`;
        }
        
        return  await db.neo4j.execute(cypher);
    }

    async update(req){
        const {user_id = userMock, id, date = today} = req; 

        const cypher = `MATCH (p:Point)
        WHERE ID(p)="${id}"
        SET p.date = ${date}
        RETURN p`;

        return  await db.neo4j.execute(cypher);
    }

    async delete(req){        
        const {user_id = userMock, date } = req;
        let cypher = '';
        
        if(date){
            cypher = `MATCH (p:Point {user_id: "${user_id}"}) WHERE p.date=~".*${date}.*" DELETE p`;
        }else{
            cypher = `MATCH (p:Point {user_id: "${user_id}"}) DELETE p`;
        }

        return  await db.neo4j.execute(cypher);
    }
}

module.exports = new Point;