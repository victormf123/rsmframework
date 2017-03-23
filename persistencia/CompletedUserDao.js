/**
 * Created by matheus on 16/01/17.
 */
function CompletedUserDao(connection) {
    this._connection = connection;
}

CompletedUserDao.prototype.BuscarAlunosMdl_Modules_completion = function (callback) {
    this._connection.query('Select * from mdl_course_modules_completion where coursemoduleid = 123', callback);
    // ,\"completed\" as status,\"Enviando dados ao VO\" as resposta
}

var existeAluno;
// Select  from completed left join mdl_user on userid = mdl_user.id where coursemoduleid = 123
CompletedUserDao.prototype.BuscarAlunosCompleted = function (id, callback) {
    this._connection.query('Select * from completed where userid = ?', id, callback);
}

CompletedUserDao.prototype.InserirAlunoCompleted = function (dados, callback) {
    this._connection.query('INSERT INTO completed SET ?', dados, callback);
}

CompletedUserDao.prototype.BuscarAlunoPorId = function (id, callback) {
    this._connection.query('select username, email,\"A\" as status from mdl_user where id = ?', id, callback);

}


module.exports = function () {
    return CompletedUserDao;
}