type ContaCorrente = {
	numero: number
	saldo: number
	movimentar: (valor: number) => void
}

type Cliente = {
	nome: string
	email: string
	contas: ContaCorrente[]
}

function movimentar(this: ContaCorrente, valor: number) {
	this.saldo += valor
}

const clientes: Cliente[] = [
	{
		nome: "Ana",
		email: "ana@email",
		contas: [
			{
				numero: 1234,
				saldo: 0,
				movimentar,
			},
			{
				numero: 6345,
				saldo: 25.33,
				movimentar,
			},
		],
	},
	{
		nome: "jao",
		email: "jao@email",
		contas: [
			{
				numero: 3463,
				saldo: 0,
				movimentar,
			},
			{
				numero: 5233,
				saldo: 532,
				movimentar,
			},
			{
				numero: 6431,
				saldo: 2,
				movimentar,
			},
		],
	},
]

function movimentarConta(numConta: number, valor: number) {
	const conta = clientes
		.map((cli) => {
			return cli.contas.find((cc) => cc.numero === numConta)
		})
		.filter((c) => c)[0]
	conta?.movimentar(valor)
}

function consultarSaldo(numConta: number): number | null {
	const conta = clientes
		.map((cli) => {
			return cli.contas.find((cc) => cc.numero === numConta)
		})
		.filter((c) => c)[0]
	return conta?.saldo ?? null
}

movimentarConta(5233, 539)
console.log(consultarSaldo(5233))

movimentarConta(6431, -3)
console.log(consultarSaldo(6431))
