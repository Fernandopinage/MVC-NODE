const app = require('../Router/index');
const ModalLeads = require('../Modal/Leads');




class Leads{

    index(req,res){

        res.render('../View/addleads');
    }

    async create(req,res){

       const dados = req.body;
       var data = new Date();
       var dia = String(data.getDate()).padStart(2,'0');
       var mes = String(data.getMonth()+1).padStart(2,'0');
       var ano = data.getFullYear();
       var dataAtual = dia+"/"+mes+"/"+ano;


       const result = await ModalLeads.create(dados,dataAtual);
        res.render('../View/addleads',{success:'Registro salvo com sucesso!'});
        

    }



}

module.exports = new Leads();