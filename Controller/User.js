const app = require('../Router/index')
class User{

    index(req,res){

       //res.render('ok')
       res.render('../views/index')

    }

    sobre(req,res){

        res.render('../views/sobre')


    }

    create(req,res){

       res.render('../views/create')
    }

    insert(req,res){

       console.log(req.body);

    }
}

module.exports = new User();
