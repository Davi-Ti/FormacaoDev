export default class Validador {
	static readonly ERRO_DESCONHECIDO: string = "Erro desconhecido"

	static maiorQueZero(n: number, msgErro: string) {
		if (n <= 0) throw new Error(msgErro)
	}

	static tamanhoEntre(n: string, min: number, max: number, msgErro: string) {
		if (n.length < min || n.length > max) throw new Error(msgErro)
	}

	static entre(n: number, min: number, max: number, msgErro: string) {
		if (n < min || n > max) throw new Error(msgErro)
	}
}
