type User = { nome: string; email: string }

const usuarios: User[] = [
	{ nome: "joao", email: "joao@email" },
	{ nome: "Maria", email: "Maria@email" },
	{ nome: "Pedro", email: "Pedro@email" },
	{ nome: "Felipe", email: "Felipe@email" },
]

function buscarPorEmail(email: string): User | null {
	return usuarios.find((u) => u.email === email) ?? null
}
