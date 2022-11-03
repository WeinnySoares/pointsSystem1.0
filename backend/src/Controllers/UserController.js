class UserController{
    index(req,res){
        res.send({menssage:'Acessando o end point Index'});
      }
    
      store(req,res){
        res.send({menssage:'Acessando o end point Store'});
      }
    
      alter(req,res){
        res.send({menssage:'Acessando o end point Alter'});
      }
    
      delete(req,res){
        res.send({menssage:'Acessando o end point Delete'});
      }
}

module.exports = new UserController;