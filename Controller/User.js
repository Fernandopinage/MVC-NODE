const app = require('../Router/index')
class User{

    index(req,res){

       res.render('ok')
       //res.render('../views/index')

    }

    sobre(req,res){

        res.render('../views/sobre')


    }
}

module.exports = new User();
