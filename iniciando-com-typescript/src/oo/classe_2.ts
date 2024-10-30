class Curso {
	constructor(readonly id: number, public nome?: string) {
		this.id = id
		if (id < 1) throw new Error("Id Inválido")
	}
}

const c1 = new Curso(4156)
// c1.id =345
c1.nome = "Iniciando com Typescript"
console.log(c1.nome)
console.log(c1.id)

const c2 = new Curso(832, "Typescript Avancado")
console.log(c2)

export {}
