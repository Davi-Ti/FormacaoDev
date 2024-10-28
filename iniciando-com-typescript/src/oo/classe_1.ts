class Curso {
	private _id: number | undefined
	nome: string | undefined

	get id() {
		return this._id
	}

	set id(id: number | undefined) {
		if ((id ?? 0) > 0) {
			this._id = id
		}
	}
}

const c1 = new Curso()
c1.id = 4156
c1.nome = "Iniciando com Typescript"
console.log(c1.nome)
console.log(c1.id)
