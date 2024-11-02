interface Usuario {
	id: number
	nome: string
	email: string
}

const usuarioLogado: Usuario = {
	id: 123,
	nome: "Joao",
	email: "joao@email",
}

console.log(usuarioLogado.email)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.id)

export {}
