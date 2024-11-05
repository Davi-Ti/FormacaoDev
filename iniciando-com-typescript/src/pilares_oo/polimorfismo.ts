abstract class Animal {
	abstract emitirSom(): string
}

class Gato extends Animal {
	emitirSom(): string {
		return "miauu"
	}
}
class Cachorro extends Animal {
	emitirSom(): string {
		return "Auauau"
	}
}

function exibirAnimal(animal: Animal) {
	console.log(animal.emitirSom())
}

let a: Animal = new Gato()
exibirAnimal(a)

a = new Cachorro()
exibirAnimal(a)

export {}
