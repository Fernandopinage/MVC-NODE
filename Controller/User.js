const app = require('../Router/index')
const ModalUser = require('../Modal/User')
const bcrypt = require('bcrypt');
class User{

    index(req,res){

       //res.render('ok')
       res.render('../View/index')

    }

    home(req,res){

      res.render('../View/home');

    }

    async validarLogin(req,res){

      let dados = req.body;
   

      try {
         const [validar] = await ModalUser.validarUsuario(dados);


         if(Object.keys(validar).length > 0){
            //res.send('logado com sucesso');
            res.redirect('/home');
         }else{
            res.status(404).send({mensage:'erro ao logar'})
         }

      } catch (error) {

         console.log(error)
         
      }
    }


    create(req,res){

       res.render('../View/create')
    }

    async insert(req,res){

      let dados = req.body.password;
      let senha = await  bcrypt.hash(dados,10);
      const insertUsuario =  await ModalUser.create(req,senha);
      //console.log(senha);

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
