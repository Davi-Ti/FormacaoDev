class DesafioEstatico {
	nota: number = 1000 // atributo de instancia

	// metodo de class (estatico)
	static executar() {
		const instancia = new DesafioEstatico()
		console.log(instancia.nota)
	}
}

DesafioEstatico.executar()
