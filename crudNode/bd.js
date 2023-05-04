async function connect(){
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/crud_node");
    console.log("Conectou no MYSQL !");
    global.connection = connection;
    return connection;       
}

connect();

// colocar livros
async function inserirLivros(livro){
    const conn = await connect()
    const sql = "INSERT INTO livros(tituloLivro, autorLivro, editoraLivro, estoqueLivro, precoLivro) VALUES(?, ?, ?, ?, ?)"
    const values = [livro.titulo, livro.autor, livro.editora, livro.estoque, livro.preco]
    return await conn.query(sql, values)
}

// ver os livro
async function listarLivros(){
    const conn = await connect()
    const [rows] = await conn.query("SELECT * FROM livros")
    return rows
}

async function alterarLivro(id, livro){
    const conn = await connect()
    const sql = "UPDATE livros SET tituloLivro=?, autorLivro=?, editoraLivro=?, estoqueLivro=?, precoLivro=? WHERE idLivro=?"
    const values = [livro.titulo, livro.autor, livro.editora, livro.estoque, livro.preco, id]
    return await conn.query(sql, values)
}


async function deletarLivro(id){
    const conn = await connect()
    const sql = "DELETE FROM livros WHERE idLivro = ?"
    const values = [id]
    return await conn.query(sql, values)
}

module.exports = {inserirLivros, listarLivros, alterarLivro, deletarLivro }
