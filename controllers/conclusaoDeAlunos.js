/**
 * Created by matheus on 16/01/17.
 */

const request = require('request');

module.exports = function (app) {

    app.get('/', function (req, res) {
       res.send('ok');
    });

    app.get('/enviarDadosRSM', function (req, res) {

        var connection = app.persistencia.connectionFactory();
        var completedUserDao = new app.persistencia.CompletedUserDao(connection);

        completedUserDao.BuscarAlunosMdl_Modules_completion(function (errorMdlModulesCompletion, resultados) {
            if(errorMdlModulesCompletion) {
                console.log(errorMdlModulesCompletion);
                res.status(400).json();
                return;
            }
                //
                resultados.forEach(function (obj){
                    completedUserDao.BuscarAlunosCompleted(obj.userid, function (error, resultadosCompleted) {

                        if (error){
                            console.log(error);
                            res.status(400).json();
                            return;
                        }

                        if(resultadosCompleted.length == 0 || resultadosCompleted == null){
                            completedUserDao.BuscarAlunoPorId(obj.userid, function (erroBuscaAluno, resultadoBuscaAluno) {
                                if (erroBuscaAluno) {
                                    console.log('erro Busca aluno');
                                    res.status(400).json();
                                    return;
                                }

                                console.log('parte de busca de aluno');
                                var rsm = new app.servicos.RSM();
                                rsm.enviarDados(resultadoBuscaAluno, function (reqRsm , resRsm) {
                                   console.log(resRsm);
                                    completedUserDao.InserirAlunoCompleted(obj, function (erroInsersao, resultadoInsercao) {
                                       if (erroInsersao){
                                           console.log('erro ao inserir aluno!');
                                           res.status(400).json();
                                       }

                                       console.log(resultadoInsercao);
                                       res.status(200).json(resultadoInsercao);
                                    });
                                });
                            });
                        }else{
                            console.log('esta caindo aqui');
                            console.log(resultadosCompleted);
                        }
                    });
                });
            //todo: lembrar do else
        });
    });

};