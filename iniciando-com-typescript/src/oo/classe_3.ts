class Produto {
	constructor(
		readonly id: number,
		readonly nome: string,
		readonly preco: number,
		readonly desc: number = 0
	) {
		if (id < 0) throw new Error("Id Inválido")
		if (nome.length < 3) throw new Error("Nome pequeno")
		if (nome.length > 180) throw new Error("Nome muito grande")
		if (preco <= 0) throw new Error("Preco Invalido")
		if (desc < 0 || desc > 0.8) throw new Error("Desconto invalido")
	}

	get precoFinal() {
		return this.preco * (1 - this.desc)
	}
}

const p1 = new Produto(1, "Caneta", 12.5)
console.log(p1.nome, p1.precoFinal)
const p2 = new Produto(2, "Notebook", 7890.65, 0.5)
console.log(p2.nome, p2.precoFinal)
export {}
