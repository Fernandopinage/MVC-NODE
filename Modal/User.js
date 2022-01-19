const con = require("../DataBase/conection");
const app = require('../Router/index')


class ModalUser {

     insert(req, res) {

        let dados = req.body;
        let sql = "INSERT INTO `usuario`(`user_id`, `user_nome`, `user_email`, `user_telefone`, `user_senha`, `user_cep`, `user_uf`, `user_endereco`, `user_cidade`, `user_bairro`)  VALUES (null, '" + dados.nome + "', '" + dados.email + "', '" + dados.telefone + "', '" + dados.password + "', '" + dados.cep + "', '" + dados.uf + "', '" + dados.endereco + "', '" + dados.cidae + "', '" + dados.bairro + "')";

         con.query(sql, (err) => {

            if (!err) {
                res.status(200).json(success)
            }

        })
    }


}


module.exports = new ModalUser();