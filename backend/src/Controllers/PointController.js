//const queries = require('../query');
const Point = require('../Models/point');

class PointController{
    async index(req,res){
        try {
            const {user_id, date} = req.query

            const response = await Point.find({user_id,date});
    
            res.send(200, {response, message: '' })

        } catch (error) {
            res.send(500, { error, message: 'Não foi possível listar os pontos.' })
        }
    }

    async create(req,res){
        try{
            const {user_id} = req.body;

            const period = {
              0 : 'start',
              1 : 'break',
              2 : 'end-break',
              3 : 'end'
            };

            let current = Object.keys(await Point.find({user_id})).length;

            if(current > 3){
              res.send(200, {response: {} , menssage:'Registro do dia já preenchido.'})
              return
            }
            
            const response = await Point.create({user_id, period: period[current] });
        
            res.send(200, {response, message: '' })
        }catch(error){
            res.send(500, { error, message: 'Não foi possível criar o ponto.' })
        }
    }

    async alter(req,res){
        try {
            const {id, date} = req.params;

            const response = await Point.update({user_id:id, date});

            res.send(200,{response, menssage: 'Ponto aterado com sucesso !'});
        } catch (error) {
            res.send(500, { error, message: 'Não foi possível alterar o ponto.' })
        }
    }

    async delete(req,res){
        try {
            const {id} = req.params;

            const response = await Point.delete({user_id:id});
            
            res.send(200,{response, menssage: 'Ponto removido com sucesso !'});
        } catch (error) {
            res.send(500, { error, message: 'Não foi possível deletar o ponto.' })
        }
    }
}

module.exports = new PointController;