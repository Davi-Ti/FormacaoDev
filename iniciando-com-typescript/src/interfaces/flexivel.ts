interface Flexivel {
	nome: string
	[atrib: string]: number | string
}

const f1: Flexivel = {
	nome: "teste",
	idade: 53,
	salario: 12345,
	email: "email@123",
	// deps: [{}],
}

console.log(f1.nome)

export {}
