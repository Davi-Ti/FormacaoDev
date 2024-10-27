export function saudacao(nome: string): string {
	return `Olá ${nome}! Passar bem!`
}

export const multiplicar = (n1: number, n2: number): number => n1 * n2

function imprimirNoConsole(): void {
	console.log("Exemplo de Função")
}

imprimirNoConsole()
