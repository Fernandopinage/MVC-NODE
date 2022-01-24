const app = require('../Router/index');
const ModalLeads = require('../Modal/Leads');


class Leads{

    index(req,res){

        res.render('../View/addleads');
    }

    async create(req,res){

       const dados = req.body;

       const result = await ModalLeads.create(dados);
       res.redirect('/add/leads');


    }



}

module.exports = new Leads();