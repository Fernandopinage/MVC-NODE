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

    select(){
      const selectUsuario =  ModalUser.select();
      console.log(selectUsuario);

    }
}

module.exports = new User();
