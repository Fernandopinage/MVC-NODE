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

      let pagina = req.params;

      const [paginacao] = await ModalLeads.paginacao();  /* buscando total de registro */
      let page = pagina.id;                              /* pegando valor da URL*/
      let row = paginacao.total;                         /* exemplo 37 */
      let calc = Math.ceil(row / 10);                      /* calc variavel com menor tamanho no js*/

      let count = (page * 10) - 10;                          /* total de linhas*/

      const valores = await ModalLeads.home(count);      /* totos os usuarios */

      res.render('../View/home', { lista: valores, paginacao: page, total: calc });
   }

   async validarLogin(req, res) {

      let dados = req.body;

      try {
         const [validar] = await ModalUser.validarUsuario(dados);

         if (Object.keys(validar).length > 0) {

            const hash = await bcrypt.compare(dados.password, validar.user_senha, (err, result) => {
               if (result == true) {

                  res.redirect('/home/1');

               } else {
                  req.flash('err_msg',"E-mail ou senha invalido!");
                  res.redirect('/');
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

   adicionar(req, res) {

      res.render('../View/usuario')
   }

   async insert(req, res) {


      if (req.body.password === req.body.confirme) {


         const [validarEmailUsuario] = await ModalUser.validarEmailUsuario(req);

         if (validarEmailUsuario) {
            req.flash('err_msg',"Erro o e-mail já existe!");
            res.redirect('/add/usuario') // msg
      
         } else {
            let dados = req.body.password;
            let senha = await bcrypt.hash(dados, 10);
            const insertUsuario = await ModalUser.create(req, senha);

            if (insertUsuario.affectedRows > 0) {
               req.flash('success_msg',"Usúarios cadastrado com sucesso!");
               res.redirect('/add/usuario') // msg
            }

         }

      } else {
         req.flash('err_msg',"Senha não confere!");
         res.redirect('/add/usuario') // msg
      }

   }

   async select(req, res) {

      let pagina = req.params;


      try {

         var [paginacao] = await ModalUser.paginacao();     /* buscando total de registro */
         let page = pagina.id;                              /* pegando valor da URL*/
         let row = paginacao.total;                         /* exemplo 37 */
         let calc = Math.ceil(row / 10);
         let count = (page * 10) - 10;                          /* total de linhas*/

         var valores = await ModalUser.select(count);
         console.log(valores);
         res.render('../View/lista_usuario',{ lista: valores, paginacao: page, total: calc });

      } catch (error) {

         console.log(error);
      }


   }
}

module.exports = new User();
