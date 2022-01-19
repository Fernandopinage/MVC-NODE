const app = require('../Router/index')
class User{

    index(req,res){

       //res.render('ok')
       res.render('../View/index')

    }

    sobre(req,res){

        res.render('../View/sobre')


    }

    create(req,res){

       res.render('../View/create')
    }

    insert(req,res){

       console.log(req.body);

    }
}

module.exports = new User();
