class Curso {
	readonly id: number | undefined
	nome: string | undefined

	constructor(id: number) {
		this.id = id
		if (id < 1) throw new Error("Id Inválido")
	}
}

const c1 = new Curso(4156)
// c1.id =345
c1.nome = "Iniciando com Typescript"
console.log(c1.nome)
console.log(c1.id)

export {}
