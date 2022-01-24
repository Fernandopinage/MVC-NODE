const app = require('../Router/index');


class Leads{

    adicionar(req,res){

        res.render('../View/addleads');
    }


}

module.exports = new Leads();