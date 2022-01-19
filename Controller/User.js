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

     const usuario =  ModalUser.create(req);


    }
}

module.exports = new User();
