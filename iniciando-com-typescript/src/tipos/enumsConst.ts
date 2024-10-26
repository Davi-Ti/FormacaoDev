import { stat } from "fs"

const VendaStatus = {
	INICIADO: "iniciada",
	CONCLUIDA: "concluida",
	CANCELADA: "cancelada",
} as const

// VendaStatus.CONCLUIDA = '3124'
let statusVenda: String
statusVenda = VendaStatus.CANCELADA
statusVenda = "em andamento"

console.log(statusVenda)
