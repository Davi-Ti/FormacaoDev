class Curso {
	private _id: number | undefined
	nome: string | undefined

	constructor(id: number) {
		this._id = id
		if (id < 1) throw new Error("Id Inválido")
	}

	get id() {
		return this._id
	}
}

const c1 = new Curso(4156)
// c1.id =345
c1.nome = "Iniciando com Typescript"
console.log(c1.nome)
console.log(c1.id)

export {}
