type Usuario = { nome: string; email: string }

let usuario: Usuario = {
	nome: "João Pedro",
	email: "jp@email.com",
}

// usuario.senha = '123'

console.log(usuario.nome)
console.log(usuario.email)

usuario = {
	nome: "Maria",
	email: "maria@email.com",
}

console.log(usuario.nome)
console.log(usuario.email)
