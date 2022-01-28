const app = require('../Router/index');
const ModalUser = require('../Modal/User');
const ModalLeads = require('../Modal/Leads');
const bcrypt = require('bcrypt');


class User {

   index(req, res) {

      //res.render('ok')
      res.render('../View/index')

   }

   async home(req, res) {

      const valores = await ModalLeads.home();

      res.render('../View/home',{ lista: valores });

   }

   async validarLogin(req, res) {

      let dados = req.body;

      try {
         const [validar] = await ModalUser.validarUsuario(dados);

         if (Object.keys(validar).length > 0) {

            const hash = await bcrypt.compare(dados.password, validar.user_senha, (err, result) => {
               if (result == true) {

                     res.redirect('/home');

               } else {
                  res.status(404).send({ mensage: 'erro ao logar' })
               }
            });


         } else {
            res.redirect('/');
         }

      } catch (error) {

         console.log(error)

      }
   }


   create(req, res) {

      res.render('../View/create')
   }

   async insert(req, res) {

      let dados = req.body.password;
      let senha = await bcrypt.hash(dados, 10);
      const insertUsuario = await ModalUser.create(req, senha);
      //console.log(senha);

   }

   async select(req, res) {

      try {
         var [selectUsuario] = await ModalUser.select();
         console.log(selectUsuario);

         res.send(selectUsuario);

      } catch (error) {

         console.log(error);
      }


   }
}

module.exports = new User();
