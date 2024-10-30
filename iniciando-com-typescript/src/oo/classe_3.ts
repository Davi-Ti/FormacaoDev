import Validador from "./Validador"

class Produto {
	constructor(
		readonly id: number,
		readonly nome: string,
		readonly preco: number,
		readonly desc: number = 0
	) {
		Validador.maiorQueZero(id, "Id Inválido")
		Validador.tamanhoEntre(nome, 2, 180, "Nome inválido")
		Validador.maiorQueZero(preco, "Preco Invalido")
		Validador.entre(desc, 0, 0.8, "desconto inválido")

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
