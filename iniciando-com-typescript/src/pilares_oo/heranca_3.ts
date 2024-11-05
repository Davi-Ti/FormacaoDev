interface Usuario {
	id: number
	nome: string
	email: string
	senha?: string
}

interface CasoDeUso {
	executar(entrada: any): any
}

// interface RegistrarUsuarioEntrada {
// 	usuario: Usuario
// 	professores: [Usuario]
// }

class RegistrarUsuario implements CasoDeUso {
	executar(usuario: Usuario) {
		console.log("Executando Registrar Usuario")
		console.log(usuario)
	}
}

const u1: Usuario = {
	id: 123,
	nome: "Maria",
	email: "mari@email",
	senha: "123",
}

const casoDeUsu: CasoDeUso = new RegistrarUsuario()
casoDeUsu.executar(u1)

export {}
