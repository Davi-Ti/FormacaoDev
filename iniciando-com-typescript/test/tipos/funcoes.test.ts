import { multiplicar, saudacao } from "../../src/tipos/funcoes"

test("deve retornar uma saudacao baseada na hora atual", () => {
	const s = saudacao("Davi")
	expect(s).toBe("Olá Davi! Passar bem!")
})

test("deve retorna a multiplicacao de n1 com n2", () => {
	const m = multiplicar(2, 3)
	expect(m).toBe(6)
})
