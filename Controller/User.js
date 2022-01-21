const app = require('../Router/index')
const ModalUser = require('../Modal/User')
class User{

    index(req,res){

       //res.render('ok')
       res.render('../View/index')

    }


    create(req,res){

       res.render('../View/create')
    }

    insert(req,res){
     const insertUsuario =  ModalUser.create(req);
    }

    async select(req,res){

      try {
         var [selectUsuario] = await  ModalUser.select();
         console.log(selectUsuario); 

         res.send(selectUsuario);

      } catch (error) {
         
         console.log(error);
      }


    }
}

module.exports = new User();
