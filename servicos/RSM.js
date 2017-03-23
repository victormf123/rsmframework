/**
 * Created by matheus on 16/01/17.
 */
var restify = require('restify');


function RSM() {
    this._cliente = restify.createJsonClient({
        url: 'http://5-dot-rsm-net-hom.appspot.com',
            options:{
                headers: 'Content-Type: application/json'
            }
    });
}
RSM.prototype.enviarDados = function (dados, callback) {
    //statusCFA
    this._cliente.post('/conta/statusCFAList/', dados , callback);
}


module.exports = function () {
    return RSM;
}



