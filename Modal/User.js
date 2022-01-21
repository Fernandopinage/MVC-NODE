const con = require("../DataBase/conection");
const app = require('../Router/index');


class ModalUser {

    create(req, res) {

        let dados = req.body;
        let sql = "INSERT INTO `usuario`(`user_id`, `user_nome`, `user_email`, `user_telefone`, `user_senha`, `user_cep`, `user_uf`, `user_endereco`, `user_cidade`, `user_bairro`)  VALUES (null, '" + dados.nome + "', '" + dados.email + "', '" + dados.telefone + "', '" + dados.password + "', '" + dados.cep + "', '" + dados.uf + "', '" + dados.endereco + "', '" + dados.cidade + "', '" + dados.bairro + "')";

        con.query(sql, (err,result) => {

            if (!err) {

                return res.status(200);
            }

        })
    }

    async validarUsuario(dados){

       // console.log(dados);
        let sql = "SELECT * FROM `usuario` WHERE user_email = '"+dados.email+"' and user_senha = '"+dados.password+"'";
        const result = await con.promise().query(sql);
        return result;
    
    }

    async select(req,res){
        let sql ='SELECT * FROM `usuario`';
        const result = await con.promise().query(sql)
        return result;
    }


}

module.exports = new ModalUser();