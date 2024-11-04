interface Entidade {
	id: string
}
interface Vendavel {
	preco: number
	desconto: number
}

interface EntidadeComDatas extends Entidade {
	criadoEm?: Date // createdAt
	atualizadoEm: Date //updatedAt
	excluidoEm?: Date // deletedAt
}

interface Usuario extends EntidadeComDatas {
	nome: string
	email: string
	senha?: string
}

const u1: Usuario = {
	id: "31245",
	nome: "Joao",
	email: "joao@email",
	criadoEm: new Date(),
	atualizadoEm: new Date(),
}

console.log(u1)

interface Produto extends EntidadeComDatas, Vendavel {
	nome: string
}

const p1: Produto = {
	nome: "tablet",
	id: "ckf-24",
	preco: 1000,
	desconto: 0.05,
	criadoEm: new Date(),
	atualizadoEm: new Date(),
}

console.log(p1)

export {}
