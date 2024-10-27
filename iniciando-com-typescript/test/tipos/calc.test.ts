import { somar } from "../../src/tipos/calc"

test("deve somar corretamente", () => {
	const result: number = somar(12, 20)
	expect(result).toBe(32)
})
