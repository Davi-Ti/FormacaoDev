interface Usuario {
	id: number
	nome: string
	email: string
	senha?: string
}

const usuarioLogado: Usuario = {
	id: 123,
	nome: "Joao",
	email: "joao@email",
	senha: "123",
}

console.log(usuarioLogado.email)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.id)

const usuarioOpcional: Partial<Usuario> = {
	id: 12345,
	nome: "Joaozin",
	senha: "123",
}

console.log(usuarioOpcional.email)
console.log(usuarioOpcional.nome)
console.log(usuarioOpcional.id)
console.log(usuarioOpcional.senha)

const usuarioCompleto: Required<Usuario> = {
	id: 123445,
	nome: "Ana",
	senha: "1243",
	email: "ana@email",
}

usuarioCompleto.id = 3145

console.log(usuarioCompleto.email)
console.log(usuarioCompleto.nome)
console.log(usuarioCompleto.id)
console.log(usuarioCompleto.senha)

const usuarioInalteravel: Readonly<Usuario> = {
	id: 1445,
	nome: "Davi",
	senha: "12343",
	email: "davi@email",
}

// usuarioInalteravel.nome = 'Fabio'

console.log(usuarioInalteravel.email)
console.log(usuarioInalteravel.nome)
console.log(usuarioInalteravel.id)
console.log(usuarioInalteravel.senha)

export {}
