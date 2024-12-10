import React from "react"

export default function Page() {
	const nome = "João"
	const idade = 30
	return (
		<>
			<div>
				{nome} tem {idade} anos
			</div>
			<div>{idade * 3 + 3 + 7}</div>
			<div>{Math.round(Math.random() * 100)}</div>
		</>
	)
}
