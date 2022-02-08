const con = require("../DataBase/conection");
const app = require('../Router/index');



class ModalUser {

    async create(req, senha) {

        let dados = req.body;
        let sql = "INSERT INTO `usuario`(`user_id`, `user_nome`, `user_email`, `user_telefone`, `user_senha`, `user_cep`, `user_uf`, `user_endereco`, `user_cidade`, `user_bairro`, `user_funcao`)  VALUES (null, '" + dados.nome + "', '" + dados.email + "', '" + dados.telefone + "', '" + senha + "', '" + dados.cep + "', '" + dados.uf + "', '" + dados.endereco + "', '" + dados.cidade + "', '" + dados.bairro + "', '" + dados.funcao + "')";

        const [result] = await con.promise().query(sql);
        return result;
    }

    async validarUsuario(dados){ 


        let sql = "SELECT * FROM `usuario` WHERE user_email = "+ con.escape(dados.email)+"";

        const [result] = await con.promise().query(sql);
        return result;
    
    }

    
    async validarEmailUsuario(req){ 


        let sql = "SELECT * FROM `usuario` WHERE user_email = "+ con.escape(req.body.email)+"";

        const [result] = await con.promise().query(sql);
        return result;
    
    }

    async select(count){
        let sql ="SELECT * FROM `usuario` ORDER BY `usuario`.`user_id` DESC LIMIT 10 OFFSET "+count;
        const [result] = await con.promise().query(sql)
        return result;
    }


    async paginacao(){

        let sql = "SELECT count(user_id) as total FROM `usuario` WHERE 1"
        const [paginacao] = await con.promise().query(sql)
        return paginacao;

        console.log(paginacao);
    }


}

module.exports = new ModalUser();