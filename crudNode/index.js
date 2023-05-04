(async () => {
    const db = require("./bd")
    console.log("Conexao criada")

    console.log("Cadastrando Livros")
    await db.inserirLivros(
        {
            titulo: "titulo livro1",
            autor: "autor1",
            editora: "editora vip",
            estoque: 80,
            preco: 98.50
        }
    )

    await db.inserirLivros(
        {
            titulo: "titulo livro2",
            autor: "autor2",
            editora: "editora vip",
            estoque: 100,
            preco: 88.60
        }
    )

    await db.inserirLivros(
        {
            titulo: "titulo livro3",
            autor: "autor3",
            editora: "editora vip",
            estoque: 200,
            preco: 102.00
        }
    )





     // para ver os livros
    console.log("Lista de Livros")
    const livros = await db.listarLivros()
    console.log(livros)





    

     //para mudar 
    console.log("Alterando um Livro")
    const result = await db.alterarLivro(1,
        {
            titulo: "titulo novo1",
            autor: "autor Paulo1",
            editora: "editora souza",
            estoque: 150,
            preco: 100.00
        }
        
        
        )



    // deletar 
    console.log("Deletar livro")
    const livro3 = await db.deletarLivro(3)
    console.log(livro3)

})()
